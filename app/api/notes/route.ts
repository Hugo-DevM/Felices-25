const GITHUB_API = "https://api.github.com";
const OWNER = process.env.GITHUB_OWNER!;
const REPO = process.env.GITHUB_REPO!;
const BRANCH = process.env.GITHUB_BRANCH ?? "main";
const TOKEN = process.env.GITHUB_TOKEN!;
const FILE_PATH = "data/notes-status.json";

type NoteStatus = { leida: boolean; cancionEscuchada: boolean };
type StatusMap = Record<string, NoteStatus>;

async function fetchFromGitHub(): Promise<{ content: StatusMap; sha: string }> {
  const res = await fetch(
    `${GITHUB_API}/repos/${OWNER}/${REPO}/contents/${FILE_PATH}?ref=${BRANCH}`,
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        Accept: "application/vnd.github+json",
      },
      cache: "no-store",
    }
  );
  if (!res.ok) throw new Error(`GitHub GET error: ${res.status}`);
  const data = await res.json();
  const content: StatusMap = JSON.parse(
    Buffer.from(data.content, "base64").toString("utf-8")
  );
  return { content, sha: data.sha };
}

export async function GET() {
  try {
    const { content } = await fetchFromGitHub();
    return Response.json(content);
  } catch {
    return Response.json({ error: "No se pudo obtener el estado" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { id, field, value } = body as {
      id: string;
      field: "leida" | "cancionEscuchada";
      value: boolean;
    };

    const { content, sha } = await fetchFromGitHub();

    if (!content[id]) content[id] = { leida: false, cancionEscuchada: false };
    content[id][field] = value;

    const encoded = Buffer.from(JSON.stringify(content, null, 2)).toString("base64");

    const res = await fetch(
      `${GITHUB_API}/repos/${OWNER}/${REPO}/contents/${FILE_PATH}`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${TOKEN}`,
          Accept: "application/vnd.github+json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: `nota ${id}: ${field} = ${value}`,
          content: encoded,
          sha,
          branch: BRANCH,
        }),
      }
    );

    if (!res.ok) throw new Error(`GitHub PUT error: ${res.status}`);

    return Response.json({ ok: true, status: content });
  } catch {
    return Response.json({ error: "No se pudo guardar el estado" }, { status: 500 });
  }
}
