export interface Nota {
  id: number;
  texto: string;
  cancion: {
    titulo: string;
    url: string;
  };
  rotacion?: number;
}

export const NOTAS: Nota[] = [
  {
    id: 1,
    texto:
      "Aun mi mente sigue esperando tu regreso aunque se que ya no va a pasar, no entiendo porque sigo esperando a que seas tu cuando yo jamas dejaria entrar a alguien que ya se fue.",
    cancion: {
      titulo: "Tristella",
      url: "https://open.spotify.com/track/68jzcOer781H6plrKH2ERE?si=e218479237244da7",
    },
    rotacion: -1.5,
  },
  {
    id: 2,
    texto:
      "Si hubiera sabido que aquel dia en la noche seria la ultima ves que te veria, me hubiera quedado mas tiempo de lo habitual.",
    cancion: {
      titulo: "Solare",
      url: "https://open.spotify.com/track/6TaJZRQRgvjOtRb31BlPLd?si=83adf7c26106477f",
    },
    rotacion: -1.5,
  },
  {
    id: 3,
    texto:
      "Me gustaria creer que algun dia volveremos a estar juntos, algo que suena bastante absurdo porque yo mismo se que no va a pasar.",
    cancion: {
      titulo: "Arcoloria",
      url: "https://open.spotify.com/track/0Z3l6V9yEstXhGrMcUxYlJ?si=441b4ddd663a4998",
    },
    rotacion: -1.5,
  },
  {
    id: 4,
    texto:
      "El primer dia de un adios definitivo realmente fue un mal sabor de boca y lo peor es que no me encontraba ni bien como para recibir eso.",
    cancion: {
      titulo: "Volver a vernos",
      url: "https://open.spotify.com/track/2N4235nicbix0057NZ2sXs?si=d0c560940aec4763",
    },
    rotacion: -1.5,
  },
  {
    id: 5,
    texto:
      "No lo voy a negar a veces quisiera ir de hostigoso y mandarte mensaje para volver pero se que no puedo cambiar nada con palabras.",
    cancion: {
      titulo: "Nada",
      url: "https://open.spotify.com/track/1lpGX4TZPVgEKGGBDc3n9j?si=cc23b8a24c944cd3",
    },
    rotacion: -1.5,
  },
  {
    id: 6,
    texto:
      "Recuerdo tu risa más que tus palabras. Eso es lo que más extraño: el sonido de que estabas bien, de que éramos felices.",
    cancion: {
      titulo: "Mi Hogar",
      url: "https://open.spotify.com/track/08Rmhvz1YR6plJpM2xMkXX?si=0a88619b5ba2405e",
    },
    rotacion: -1.5,
  },
  {
    id: 7,
    texto:
      "Cada dia es mas largo de lo normal siento que todo esto es una eternidad que nunca se va a cabar.",
    cancion: {
      titulo: "Un verano sin ti",
      url: "https://open.spotify.com/track/18HOjcvTVV7W8YzBuOsAPS?si=570e1e680c774dea",
    },
    rotacion: -1.5,
  },
  {
    id: 8,
    texto:
      "Quizas no fue falta de amor, si no el mundo poniendose en contra de nosotros.",
    cancion: {
      titulo: "Love",
      url: "https://open.spotify.com/track/5tyznRXlcIx0XlQ7S8iCMW?si=5e45c555879f4e85",
    },
    rotacion: -1.5,
  },
  {
    id: 9,
    texto:
      "Sigo escribiendo cosas que nunca te voy a mandar. Tal vez esta sea la forma de expresar todo lo que calle antes de que te fueras.",
    cancion: {
      titulo: "Beso",
      url: "https://open.spotify.com/track/4PpuZIMmeng6qPicveSI22?si=1271e6c899114593",
    },
    rotacion: -1.5,
  },
  {
    id: 10,
    texto:
      "No lo niego aveces soy feliz con lo que tengo pero se que me haces falta tu.",
    cancion: {
      titulo: "Doma",
      url: "https://open.spotify.com/track/58cLm4PaHNt8DDr9ayZnNz?si=97c8d7a291b345f3",
    },
    rotacion: -1.5,
  },
  {
    id: 11,
    texto:
      "Muchas ocasiones me pregunto si realmente pensaras en mi? o solo soy yo quien quedo obsesionado con alguien que no podre tener.",
    cancion: {
      titulo: "La luna",
      url: "https://open.spotify.com/track/3ZbbcpcCcgsWjTNVRzVZ5c?si=9eb627c3d5af483d",
    },
    rotacion: -1.5,
  },
  {
    id: 12,
    texto:
      "Las noches son lo peor, porque es cuando todo vuelve a mi cabeza y duele.",
    cancion: {
      titulo: "Azul",
      url: "https://open.spotify.com/track/1HM9uVbB4DVQh0QlwY7W6v?si=ebfb2aaf59ea4084",
    },
    rotacion: -1.5,
  },
  {
    id: 13,
    texto:
      "Hay tantas cosas en mi contenido que es para ti pero de que sirve tenerlo si no lo ves :(.",
    cancion: {
      titulo: "Luna",
      url: "https://open.spotify.com/track/7b3k8I1fncAzbk9PHnLkbX?si=e87e6f046aae4942",
    },
    rotacion: -1.5,
  },
  {
    id: 14,
    texto:
      "Si llegaras a ver esto, es una nota por cada dia que no estoy a tu lado, lo se voy tarde.",
    cancion: {
      titulo: "Labios rotos",
      url: "https://open.spotify.com/track/1nULBrlzWatdcjA2ZctIMv?si=35415868a4c34581",
    },
    rotacion: -1.5,
  },
  {
    id: 15,
    texto:
      "Si llegaras a ver esto, es una nota por cada dia que no estoy a tu lado, lo se voy tarde.",
    cancion: {
      titulo: "Labios Rotos",
      url: "https://open.spotify.com/track/1nULBrlzWatdcjA2ZctIMv?si=35415868a4c34581",
    },
    rotacion: -1.5,
  },
  {
    id: 16,
    texto: `Sigo pensando en todas las versiones de "nosotros" que nunca llegamos a vivir.`,
    cancion: {
      titulo: "Si Tu Me Quisieras",
      url: "https://open.spotify.com/track/7EySX8ldJHoeWjJhJyZ8Tq?si=9ea10a26ac60454e",
    },
    rotacion: -1.5,
  },
  {
    id: 17,
    texto:
      "Jamas me habia arrepentido de las cosas que hice porque se que me han llevado a este punto de mi vida, pero si me arrepiento de lo sucedido porque si no hubiera pasado estaria hoy aqui contigo.",
    cancion: {
      titulo: "Chachachá",
      url: "https://open.spotify.com/track/6aommJFM8i3iT4inKuDSXh?si=ade426a520654db0",
    },
    rotacion: -1.5,
  },
  {
    id: 18,
    texto:
      "Jamas habia envidiado a mi hermana como hasta ahora, ella es feliz y yo perdi mi felicidad.",
    cancion: {
      titulo: "Pa' Donde Se Fue",
      url: "https://open.spotify.com/track/2TPZomzhdB7toV3cx0hj08?si=da66e28743d048c6",
    },
    rotacion: -1.5,
  },
  {
    id: 19,
    texto:
      "Volvi a pasar otro 14 de febrero sin nadie y esta tan entusiasmado en poder pasarlo contigo.",
    cancion: {
      titulo: "Amor Completo",
      url: "https://open.spotify.com/track/00kIWJu9IHiQ6i0qJAU0Z9?si=2d9c1d4099994793",
    },
    rotacion: -1.5,
  },
  {
    id: 20,
    texto:
      "Las canciones que te dejo son mas mi estilo de musica y que cuando las escucho me hace pensar en ti pero las cosas malas no son para ti, solo siento amor por ti.",
    cancion: {
      titulo: "Rosa Pastel",
      url: "https://open.spotify.com/track/3mU0DbuWtUX5KCaovOQZVK?si=d5531567791b4b10",
    },
    rotacion: -1.5,
  },
  {
    id: 21,
    texto:
      "No todos los dias te pienso pero hay momentos que me hacen recordar tu falta de prensencia.",
    cancion: {
      titulo: "Lo Que Construimos",
      url: "https://open.spotify.com/track/5wWxUdgn2OugIOvLJOdreH?si=d831c6c333814f45",
    },
    rotacion: -1.5,
  },
  {
    id: 22,
    texto: `No lo voy a negar pero me llevo algo muy preciado y es tu frase famosa "Que trabajen los... jodidos jajaja".`,
    cancion: {
      titulo: "Fantasmas",
      url: "https://open.spotify.com/track/3iTVjevexCuVrBwmkR4qJc?si=84766a037f77484e",
    },
    rotacion: -1.5,
  },
  {
    id: 23,
    texto:
      "No se porque pero realmente extraño ir por ti y llevarte un ramo de flores, jamas habia sentido la necesidad de dar tantas flores alguien.",
    cancion: {
      titulo: "Que Bonito Fue",
      url: "https://open.spotify.com/track/3ppzEzYnSKIBZ2tndbmOLp?si=b69c751a16224a9b",
    },
    rotacion: -1.5,
  },
  {
    id: 24,
    texto:
      "Aunque quisiera volver contigo con todas mis ganas tambien siento miedo porque no quisiera volver a pasar por tu indiferencia.",
    cancion: {
      titulo: "No Me Culpes Por Sentir",
      url: "https://open.spotify.com/track/4VPJBpBt4BO8NTgVXSLHk4?si=d3ae78e933ca44e0",
    },
    rotacion: -1.5,
  },
  {
    id: 25,
    texto:
      "Quizas en el fondo de mi mente espera que lo veas, pero que hare al respecto? no lo se, aun no lo eh pensado.",
    cancion: {
      titulo: "Fuente De Ortiz",
      url: "https://open.spotify.com/track/0akyEssGRVHstqCSWXusJL?si=3b449f435a644f72",
    },
    rotacion: -1.5,
  },
];
