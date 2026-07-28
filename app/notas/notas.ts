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
      "El primer dia de un adios definitivo realmente fue un mal sabor de boca y lo peor es que no me encontraba ni bien como para recibir eso.",
    cancion: {
      titulo: "Volver a vernos",
      url: "https://open.spotify.com/track/2N4235nicbix0057NZ2sXs?si=d0c560940aec4763",
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
      "Aun mi mente sigue esperando tu regreso aunque se que ya no va a pasar, no entiendo porque sigo esperando a que seas tu cuando yo jamas dejaria entrar a alguien que ya se fue.",
    cancion: {
      titulo: "Tristella",
      url: "https://open.spotify.com/track/68jzcOer781H6plrKH2ERE?si=e218479237244da7",
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
  {
    id: 26,
    texto: "No olvides regresar, veras algo nuevo lo prometo.",
    cancion: {
      titulo: "Combustión",
      url: "https://open.spotify.com/track/1zDuB9BuEt9Bm3J8OtKEvq?si=315ffed79e4545a7",
    },
    rotacion: -1.5,
  },
  {
    id: 27,
    texto: "Quizas no fui perfecto, pero me esforce por hacerte feliz.",
    cancion: {
      titulo: "Te Quiero Tanto",
      url: "https://open.spotify.com/track/6pfKQaiWcelILwxkf6adUz?si=1a8cfcf48e0c413c",
    },
    rotacion: -1.5,
  },
  {
    id: 28,
    texto:
      "Veintiocho notas y sigo encontrando cosas nuevas que decirte. Supongo que así de grande fue esto.",
    cancion: {
      titulo: "Hazta la Raíz",
      url: "https://open.spotify.com/track/3lGMtkONrZdJ8kTCg6KIFf?si=1bb553e3744643cc",
    },
    rotacion: -1.5,
  },

  {
    id: 29,
    texto:
      "Hoy soñé contigo. Al despertar no supe si sentirme bien o mal. Elegí sentirme agradecido de que al menos ahi seguimos juntos.",
    cancion: {
      titulo: "Amapolas",
      url: "https://open.spotify.com/track/0z5yLgBmAtaylDYrgwzlpH?si=c422da70fad64222",
    },
    rotacion: -1.5,
  },

  {
    id: 30,
    texto:
      "Hoy pense mucho mas que otro dias, por todo lo que sucedio en vallarta, que sera de ti?.",
    cancion: {
      titulo: "Dueles",
      url: "https://open.spotify.com/track/1iRvhKiXRElIH2Uf4gd95P?si=de5d7e8ab44d4e0f",
    },
    rotacion: -1.5,
  },
  {
    id: 31,
    texto:
      "Aveces quisiera que pasara el tiempo para volver a estar juntos, pero quizas falte demasiado para que eso suceda o jamas pasara.",
    cancion: {
      titulo: "Colapso",
      url: "https://open.spotify.com/track/23oIli6ejy1DsFAaCKSZpB?si=0d557ca8a83a44de",
    },
    rotacion: -1.5,
  },
  {
    id: 32,
    texto:
      "Empiezo a notar que ya no escribo desde la desesperación, sino desde una tristeza más tranquila, más mía.",
    cancion: {
      titulo: "Ya No Te Hago Falta",
      url: "https://open.spotify.com/track/6UaIXNg4TUkpI9QGQYlFYi?si=644eaeee591647f0",
    },
    rotacion: -1.5,
  },
  {
    id: 33,
    texto:
      "Parezco un loco obsesionado revisando tu instragram, si suben o bajas tus seguidos pero que voy a hacer con eso yo, si no puedo mandarte ni un hola.",
    cancion: {
      titulo: "Sueña Lindo Corazón",
      url: "https://open.spotify.com/track/0uq0OrFNaOhCDOlySbYTUx?si=e561f37040ce452d",
    },
    rotacion: -1.5,
  },
  {
    id: 34,
    texto:
      "Enserio este es el final de todo? Asi de simple? Tan facil es dejar ir a una persona? Yo no se porque no puedo dejarlo ir esta vez.",
    cancion: {
      titulo: "Eclipsis",
      url: "https://open.spotify.com/track/3K0OELvjok6ETSUOgf8meq?si=cfbd7d0c34e845c2",
    },
    rotacion: -1.5,
  },
  {
    id: 35,
    texto:
      "No lo voy a negar pero la mayoria de mis estados era para que los vieras tu.",
    cancion: {
      titulo: "Pa' Donde Se Fue",
      url: "https://open.spotify.com/track/2TPZomzhdB7toV3cx0hj08?si=6d2e6ddf5a8b4702",
    },
    rotacion: -1.5,
  },
  {
    id: 36,
    texto:
      "Aun recuerdo tu sonrisa que tanto me gustaba, lo ironico es que yo siempre olvido todo, mi mente no retiene las cosas como para recordarlas.",
    cancion: {
      titulo: "Luma",
      url: "https://open.spotify.com/track/6fUsEIAyQj6SGdzR3MPPja?si=ac63c39690e84b9c",
    },
    rotacion: -1.5,
  },
  {
    id: 37,
    texto:
      "No fui lo suficiente bueno? aveces me pregunto eso, no fui suficiente como para que te quedaras?",
    cancion: {
      titulo: "En El Próximo Big Bang",
      url: "https://open.spotify.com/track/6XuvR6CAfIggnWzqtL0Vez?si=1c87ec7463a04e63",
    },
    rotacion: -1.5,
  },
  {
    id: 38,
    texto:
      "No lo a negar, creo que me equivoque en algunas cosas pero jamas fue mi intencion lastimarte.",
    cancion: {
      titulo: "Si Hay Algo",
      url: "https://open.spotify.com/track/4RBCEwBRA0oHa49UwmhT98?si=4c9f545f95c042dd",
    },
    rotacion: -1.5,
  },
  {
    id: 39,
    texto:
      "Extraño hasta las cosas simples: un mensaje de buenos días, saber cómo te fue, esas pequeñeces que hacían grande el día.",
    cancion: {
      titulo: "Bonsai",
      url: "https://open.spotify.com/track/072yPZOZLx9HmR3pdEhNwn?si=1e6d226652a64c59",
    },
    rotacion: -1.5,
  },
  {
    id: 40,
    texto: `Estaras comiendo bien? O tu comida es la de siempre "Tostitos"`,
    cancion: {
      titulo: "Daño",
      url: "https://open.spotify.com/track/1ruvZEJwcjUiuV1SxSaQb6?si=22c36204f37c46a1",
    },
    rotacion: -1.5,
  },
  {
    id: 41,
    texto:
      "La primera ves que salimos en el momento en que empezaste a hablar me enamore.",
    cancion: {
      titulo: "Arrancármelo",
      url: "https://open.spotify.com/track/2GNjjWYymmIS8HEC4Xp2eu?si=417d9429e353451e",
    },
    rotacion: -1.5,
  },
  {
    id: 42,
    texto:
      "Hablando de la primera vez, solo fuimos a las nives por que tu querias porque no es que caiga muy bien los lacteos pero al final de eso importo.",
    cancion: {
      titulo: "Melón Vino",
      url: "https://open.spotify.com/track/5uHAzGa4d9j35DEbhUwGhi?si=69456bcf702049c1",
    },
    rotacion: -1.5,
  },
  {
    id: 43,
    texto:
      "Me quede con ganas de ir a la playa contigo apesar de que no me gusta para nada ir",
    cancion: {
      titulo: "Morfeo",
      url: "https://open.spotify.com/track/297Ev6aeDHc8dECDmK7SFH?si=d6651cb2f14c4532",
    },
    rotacion: -1.5,
  },
  {
    id: 44,
    texto:
      "Me hubiera gustado experimentar mas cosas contigo, creo que falto mucho por hacer.",
    cancion: {
      titulo: "Okupa",
      url: "https://open.spotify.com/track/25NPeIjHjQGvyp4D52Tji2?si=117cc21930df4796",
    },
    rotacion: -1.5,
  },
  {
    id: 45,
    texto:
      "Aunque sigo escribiendo, me doy cuenta de que lo hago por amor y no por odio.",
    cancion: {
      titulo: "Y Lloro",
      url: "https://open.spotify.com/track/6RcAHyC5sAUIbPTkhOQwd8?si=c0fc969c8a0f49b1",
    },
    rotacion: -1.5,
  },
  {
    id: 46,
    texto: "Porque duele tanto? tan feliz era? :(",
    cancion: {
      titulo: "Las Noches",
      url: "https://open.spotify.com/track/0uQhDYHyoZe5DpncrPolb6?si=d8d0ccbcadcf4313",
    },
    rotacion: -1.5,
  },

  {
    id: 47,
    texto:
      "No lo voy a negar pero empiezo a conocer personas, pero no es lo mismo no me generan ese mismo impacto.",
    cancion: {
      titulo: "Piensalo",
      url: "https://open.spotify.com/track/4ZOkfHC38nxSeSqzGE5HFr?si=630a4ca737244a49",
    },
    rotacion: -1.5,
  },
  {
    id: 48,
    texto: "Tu vas a ser mi mujer",
    cancion: {
      titulo: "Tres Botellas",
      url: "https://open.spotify.com/track/2CshODtf7iwe3pKlPmEWF5?si=e2797115e5d845fa",
    },
    rotacion: -1.5,
  },
  {
    id: 49,
    texto: "Pinche gente malvibrosa la neta y envidiosa tambien.",
    cancion: {
      titulo: "Tu Sancho",
      url: "https://open.spotify.com/track/6eLQXa6uk2EW8drsiKbABZ?si=d8cebf7a1e8a4e9b",
    },
    rotacion: -1.5,
  },

  {
    id: 50,
    texto:
      "Ya estaba preparando como pedirte ser mi novia, queria hacer algo especial y tenia en mente un dia especial.",
    cancion: {
      titulo: "IMU",
      url: "https://open.spotify.com/track/5RGqgYKLBrLMgE2zPI600I?si=d4df1a48a4864a69",
    },
    rotacion: -1.5,
  },
  {
    id: 51,
    texto: "Soñe mucho a futuro contigo y aun lo sigo soñando.",
    cancion: {
      titulo: "Letal",
      url: "https://open.spotify.com/track/0IMJsnmPXXgPyQDbhomx1B?si=37e5cc2ec8b94a70",
    },
    rotacion: -1.5,
  },
  {
    id: 52,
    texto:
      "Jamas habia contectado tan rapido con una persona como lo fue contigo.",
    cancion: {
      titulo: "Daño",
      url: "https://open.spotify.com/track/136BeIIoBGrrU9fI1jbcDR?si=93bd0a9c53b24135",
    },
    rotacion: -1.5,
  },
  {
    id: 53,
    texto:
      "Queria pasar año nuevo contigo, queria tener terminar y empezar el año contigo.",
    cancion: {
      titulo: "Una Cerveza",
      url: "https://open.spotify.com/track/0lbDzTINTToToBpkrnQT2t?si=3885ab79d8934b82",
    },
    rotacion: -1.5,
  },
  {
    id: 54,
    texto:
      "Por mi cabeza pasa tantas cosas, que aun no se como sigo de pie sin ti.",
    cancion: {
      titulo: "7 Días",
      url: "https://open.spotify.com/track/6X3h549Z7LJk881NPI5kTa?si=e264ab3e742e40eb",
    },
    rotacion: -1.5,
  },
  {
    id: 55,
    texto: "Pase por tu trabajo aprosito pero me dio miedo voltear",
    cancion: {
      titulo: "Lo Que Hay X Aquí",
      url: "https://open.spotify.com/track/5IlLm20JXhKbMtsH20NblC?si=5bbe6ddac9bc4b2b",
    },
    rotacion: -1.5,
  },
  {
    id: 56,
    texto:
      "Tambien recuerdo tomar la foto de la nieva para que supieras que fui y asi fue",
    cancion: {
      titulo: "Vamos A Mirarnos",
      url: "https://open.spotify.com/track/63Prex3xLlSgwHk3jN7Ezt?si=3823d3c21d01489a",
    },
    rotacion: -1.5,
  },
  {
    id: 57,
    texto: "Aun sigo siendo incapz de ver un futuro sin ti.",
    cancion: {
      titulo: "Sin Mirar Las Señales",
      url: "https://open.spotify.com/track/7fM24rKaYCTGf85Lj8U2pk?si=7089e982fda14e05",
    },
    rotacion: -1.5,
  },
  {
    id: 58,
    texto: "Soñaras conmigo asi como lo hago contigo?",
    cancion: {
      titulo: "Como Dormiste?",
      url: "https://open.spotify.com/track/3fjN3y5x4hN53rykAN2LHQ?si=87d22234c23f4e2f",
    },
    rotacion: -1.5,
  },

  {
    id: 59,
    texto: "Soñaras conmigo asi como lo hago contigo?",
    cancion: {
      titulo: "Como Dormiste?",
      url: "https://open.spotify.com/track/3fjN3y5x4hN53rykAN2LHQ?si=87d22234c23f4e2f",
    },
    rotacion: -1.5,
  },
  {
    id: 60,
    texto: "Aveces quiero llorar, aunque pase el tiempo, sigue doliendo",
    cancion: {
      titulo: "Mis Días A Tu Suerte",
      url: "https://open.spotify.com/track/0XRJc66Gcvq8F98KE1TXD8?si=b6e93d5c4b194b2f",
    },
    rotacion: -1.5,
  },
  {
    id: 61,
    texto:
      "Era feliz comprandote cosas, invitarte algo para mi era mi mayor felicidad.",
    cancion: {
      titulo: "Miau",
      url: "https://open.spotify.com/track/5osSgKDiyrzhLjsEABO6c9?si=8cdd2d24c1694823",
    },
    rotacion: -1.5,
  },
  {
    id: 62,
    texto:
      "Me quede con ganas de mi regalo de navidad, solo recordar que no lo tuve me hace llorar.",
    cancion: {
      titulo: "Gil",
      url: "https://open.spotify.com/track/5jgmQkVypORb3enASCxjYs?si=24c2a50b7f4b4f34",
    },
    rotacion: -1.5,
  },
  {
    id: 63,
    texto: "Podre ser feliz? Aferrarme me hara feliz? O solo me lastimo?.",
    cancion: {
      titulo: "Tuyo",
      url: "https://open.spotify.com/track/4tQofG51E0juZBBVr6pral?si=87d261688e594fdd",
    },
    rotacion: -1.5,
  },
  {
    id: 64,
    texto: "Comenze a salir solo y aunque se siente bien, no es lo mismo sin tu presencia.",
    cancion: {
      titulo: "Self Aware",
      url: "https://open.spotify.com/track/4qW3BbQAwZsrnu8a3ZRdyT?si=e7599480454241c4",
    },
    rotacion: -1.5,
  },
  {
    id: 65,
    texto: "Cada tanto regresan los flashback de nosotros juntos, extraño tanto lo que vivi contigo.",
    cancion: {
      titulo: "Turista",
      url: "https://open.spotify.com/track/7tCuCjhxzjX2XCz4JiiAsp?si=3f6a74e22fba4b10",
    },
    rotacion: -1.5,
  },
  {
    id: 66,
    texto: "Fui a la playa yo solo, quizas fui porque era que tenia planeado contigo y aunque detesto ir lo disfrute como si estuvieras conmigo.",
    cancion: {
      titulo: "DtMF",
      url: "https://open.spotify.com/track/3sK8wGT43QFpWrvNQsrQya?si=b5b81ae19f584148",
    },
    rotacion: -1.5,
  },
  {
    id: 67,
    texto: "Y fuiste tu mi baile inolvidable, aquello que no puedo olvidar y no olvidare aunque siga con mi vida.",
    cancion: {
      titulo: "Baile Inolvidable",
      url: "https://open.spotify.com/track/2lTm559tuIvatlT1u0JYG2?si=941a2fb754514116",
    },
    rotacion: -1.5,
  },
  {
    id: 68,
    texto: "Me preocupo por cosas tan tontas como si ya te gustara alguien mas o si ya eres feliz sin mi.",
    cancion: {
      titulo: "M.A.I",
      url: "https://open.spotify.com/track/35ttE4t8lQZA2vuCYDg4G7?si=98fe246907ac4aa3",
    },
    rotacion: -1.5,
  },
  {
    id: 69,
    texto: "Trato de ser feliz pero no se porque me cuesta tanto, me rió, me divierto y sonrio la mayor parte del tiempo pero porque me siento triste por las noches?.",
    cancion: {
      titulo: "Solifican12",
      url: "https://open.spotify.com/track/4fDmgQfKMY7GcAwp2nNoQ0?si=5f8104a23aad4168",
    },
    rotacion: -1.5,
  },
  {
    id: 70,
    texto: "Quizas ya no haya forma de regresar, quede como el malo ante todos tus conocimos y ante los mios, el precio a pagar por mis malas decisiones.",
    cancion: {
      titulo: "Una Bala",
      url: "https://open.spotify.com/track/6Rz80wUWSUbGGVHvkH7NpU?si=ba7cf218d9ea4f78",
    },
    rotacion: -1.5,
  },
  {
    id: 71,
    texto: "Que hubiese sido de nosotros? Tendriamos hijos? Seriamos Felices? Desperteria a tu lado el resto de mi vida?.",
    cancion: {
      titulo: "Olimpo",
      url: "https://open.spotify.com/track/6tt6JnKerLnOL0oez9QPqS?si=42042327223f46d0",
    },
    rotacion: -1.5,
  },
  {
    id: 72,
    texto: "Quisiera volver al pasado y comenzar desde ahi, pero se que no era el hombre que necesitabas.",
    cancion: {
      titulo: "Por Ti",
      url: "https://open.spotify.com/track/3lnaMCNOqHZHzUYdHP6TxA?si=22874d753f8541e0",
    },
    rotacion: -1.5,
  },
  {
    id: 73,
    texto: "Por que la vida es tan dificil? o solo me pasa a mi?.",
    cancion: {
      titulo: "Una Rosa",
      url: "https://open.spotify.com/track/6ZMmC7Sevmomx2qX8uTJqz?si=0df2f919139d4898",
    },
    rotacion: -1.5,
  },
  {
    id: 74,
    texto: "Lo unico que quiero es ser solo para ti y para nadie mas, si te tengo a ti lo tengo todo.",
    cancion: {
      titulo: "I Wanna Be Yours",
      url: "https://open.spotify.com/track/5XeFesFbtLpXzIVDNQP22n?si=5140d52da12540f8",
    },
    rotacion: -1.5,
  },
  {
    id: 75,
    texto: "Muchas veces me pregunto, ¿Que me falto hacer?.",
    cancion: {
      titulo: "Tu Me Encantas",
      url: "https://open.spotify.com/track/4otVIM59M0NRZybZAkHdf2?si=e3da88f6cb25490f",
    },
    rotacion: -1.5,
  },
  {
    id: 76,
    texto: "Ya ha pasado bastante, te ira bien? como te va en la escuela? si voy cabe la posibilidad de verte?",
    cancion: {
      titulo: "¿Donde Estas?",
      url: "https://open.spotify.com/track/27W00j4kgyRjF0Nygu6CmV?si=ebfeb869afd14a1a",
    },
    rotacion: -1.5,
  },
  {
    id: 77,
    texto: "Porque seguir con mi vida se siente como traicionarte.",
    cancion: {
      titulo: "Olvidala",
      url: "https://open.spotify.com/track/0nrQctfuJf5yEjPKHlMiBp?si=857659822c1b4993",
    },
    rotacion: -1.5,
  },
  {
    id: 78,
    texto: "Creo que esto se vuelve mas DIFICIL porque no tengo amigos para preguntarles que hacer, solo me tengo a mi.",
    cancion: {
      titulo: "Disfruto: Challenge",
      url: "https://open.spotify.com/track/445uGGM6s7NYzxF4VFqPnH?si=212b6af12ed24d01",
    },
    rotacion: -1.5,
  },
  {
    id: 79,
    texto: "Aveces solo espero a que me llames para responder e ir por ti. Pero... ¿Pasara?.",
    cancion: {
      titulo: "Como Tú",
      url: "https://open.spotify.com/track/0CvqywquA1KKut69KVSYF2?si=18023e5e1ed941d0",
    },
    rotacion: -1.5,
  },
  {
    id: 80,
    texto: "Quizas no comence esto desde el primer dia, pero cada nota es un pensamiento de cada dia, porque aun no puedo olvidarte.",
    cancion: {
      titulo: "Solo Dime",
      url: "https://open.spotify.com/track/3Hj8aLNeqHWs7q7obHKQdp?si=902d9d61f7234d30",
    },
    rotacion: -1.5,
  },
  {
    id: 81,
    texto: "No creo que nuestra conexion haya sido una sola casualidad, creo yo que fue amor verdadero.",
    cancion: {
      titulo: "Una Cancion Bonita",
      url: "https://open.spotify.com/track/3XzT5damOpGedvObdo1KGq?si=8a0b07792f5c4411",
    },
    rotacion: -1.5,
  },
  {
    id: 82,
    texto: "Siempre senti miedo por perderte y final asi fue por culpa mia y de nadie mas.",
    cancion: {
      titulo: "Si Algun Dia Te Pierdo",
      url: "https://open.spotify.com/track/56KDImTU8KoqsQIv5yKlgb?si=25c369f70dab43c5",
    },
    rotacion: -1.5,
  },
  {
    id: 83,
    texto: "¿Podemos solo caminar tu y yo y volver a ser felices?.",
    cancion: {
      titulo: "Las Flores Que Eran Para Ti",
      url: "https://open.spotify.com/track/21AsZjjxxcc0IAXjHw1v0V?si=b104dcc15da34ce8",
    },
    rotacion: -1.5,
  },
  {
    id: 84,
    texto: "Ya se acercan los 3 meses, que rapido paso el tiempo. No te imaginas lo que daria por ti.",
    cancion: {
      titulo: "Tu Me Encantas",
      url: "https://open.spotify.com/track/4QKgOso1KZ5dVb9SGVKyew?si=dfbba26e48e44bb5",
    },
    rotacion: -1.5,
  },
  {
    id: 85,
    texto: "La vida era tan bonita, tu mi werita bronceada y yo el prieto jajaja.",
    cancion: {
      titulo: "Díme",
      url: "https://open.spotify.com/track/40N1Ib95KgWnAcdVJsnUyE?si=3a5a3b66da644aff",
    },
    rotacion: -1.5,
  },
  {
    id: 86,
    texto: "Solo me pregunto. ¿Que fue lo que te gusto de mi persona? Como para quererme como la primera vez que supiste de mi.",
    cancion: {
      titulo: "LQND",
      url: "https://open.spotify.com/track/01cOYgZSgs9NH74cpIMjw4?si=e5b80832915844f2",
    },
    rotacion: -1.5,
  },
  {
    id: 87,
    texto: "Avesces quisiera despedirme, pero no puedo dejar de escribir.",
    cancion: {
      titulo: "Vuela",
      url: "https://open.spotify.com/track/2NqDHBotyUtyEtKuWDekC8?si=8c41dd2249274672",
    },
    rotacion: -1.5,
  },
  {
    id: 88,
    texto: "Extraño esos besos, aunque solo fueron unos besos sencillos lo fueron todo para mi.",
    cancion: {
      titulo: "Do I Wanna Know?",
      url: "https://open.spotify.com/track/5FVd6KXrgO9B3JPmC8OPst?si=a68fecc3a0014430",
    },
    rotacion: -1.5,
  },
  {
    id: 89,
    texto: "Yo creo que no seremos felices separados, pero quizas me equivoco y solo soy yo el que no puede ser feliz sin ti y tu si.",
    cancion: {
      titulo: "Tu Boda",
      url: "https://open.spotify.com/track/1cOboCuWYI2osTOfolMRS6?si=7cc17db330894530",
    },
    rotacion: -1.5,
  },
  {
    id: 90,
    texto: "3 meses, parece que el tiempo pasa rapido pero creo que es todo lo contrario, se siente mas lento de lo normal.",
    cancion: {
      titulo: "Porque Te Vas",
      url: "https://open.spotify.com/track/0lpxDRCONr2FJRqcM3Q74z?si=09c03fac1bf245a6",
    },
    rotacion: -1.5,
  },
];
