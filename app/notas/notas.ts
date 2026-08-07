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
      "Jamas habia deseado tener algo, algo como tu.",
    cancion: {
      titulo: "1 AM",
      url: "https://open.spotify.com/intl-es/track/3jpkwuGCYK04265C1M11W6?si=4000aae207644070",
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
      "Volvi a pasar otro 14 de febrero sin nadie y estaba tan entusiasmado en poder pasarlo contigo.",
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
      "Hoy te pense mucho mas que otro dias, por todo lo que a sucedio en vallarta, que sera de ti?.",
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
      "Hablando de la primera vez, solo fuimos a las nieves por que tu querias porque no es que caiga muy bien los lacteos pero al final de eso no importo.",
    cancion: {
      titulo: "Melón Vino",
      url: "https://open.spotify.com/track/5uHAzGa4d9j35DEbhUwGhi?si=69456bcf702049c1",
    },
    rotacion: -1.5,
  },
  {
    id: 43,
    texto:
      "Me quede con ganas de ir a la playa contigo apesar de que no me gusta para nada ir.",
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
    texto: "Tu vas a ser mi mujer.",
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
      "Queria pasar año nuevo contigo, queria terminar y empezar el año contigo.",
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
    texto: "Pase por tu trabajo aprosito pero me dio miedo voltear.",
    cancion: {
      titulo: "Lo Que Hay X Aquí",
      url: "https://open.spotify.com/track/5IlLm20JXhKbMtsH20NblC?si=5bbe6ddac9bc4b2b",
    },
    rotacion: -1.5,
  },
  {
    id: 56,
    texto:
      "Tambien recuerdo tomar la foto de la nieve para que supieras que fui y asi fue.",
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
    texto: "Que paso con nuestro amor enterno.",
    cancion: {
      titulo: "Entre Nosotros",
      url: "https://open.spotify.com/intl-es/track/5LazbgCsa2IskJbPMnI8Qd?si=5435653c4b3543f2",
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
    texto: "Fui a la playa yo solo, quizas fui porque era algo que tenia planeado contigo y aunque detesto ir lo disfrute como si estuvieras conmigo.",
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
  {
    id: 91,
    texto: "Desde que te fuiste, no puedo dormir bien, no puedo hacer nada bien, no puedo pensar en nada bien.",
    cancion: {
      titulo: "Desde Que Te Fuiste",
      url: "https://open.spotify.com/intl-es/track/1C3kTwvBsskFSdL95gXHej?si=1e50b73f38304572",
    },
    rotacion: -1.5,
  },
  {
    id: 92,
    texto: "Ojala un dia mi nombre apareciera en tus pensamientos con la misma facilidad con la que aparecen los mios.",
    cancion: {
      titulo: "Bajo De La Piel",
      url: "https://open.spotify.com/intl-es/track/3sc0Wv64rOuIRVkQO7rrer?si=a5e83418bd3f44bb",
    },
    rotacion: -1.5,
  },
  {
    id: 93,
    texto: "Despues de pensarlo llegue a sentir que todo era culpa mia.",
    cancion: {
      titulo: "No Digas Nada",
      url: "https://open.spotify.com/intl-es/track/4wtWL0UV8tCPv9VbUMLXYP?si=5d94d3c33527406d",
    },
    rotacion: -1.5,
  },
  {
    id: 94,
    texto: "Solo imagina que esta vez el miedo que sientes, este completamente equivocado.",
    cancion: {
      titulo: "Me Tiene Mal",
      url: "https://open.spotify.com/intl-es/track/1lI3pfm02Fw6zajcGyxJsg?si=1c6c2b4f984645ef",
    },
    rotacion: -1.5,
  },
  {
    id: 95,
    texto: "Hay personas por las que siempre merece la pena volver y no eres cualquier persona como para dejarte ir.",
    cancion: {
      titulo: "Chica Paranormal",
      url: "https://open.spotify.com/intl-es/track/3krzcyMKlRXjVkJFZqMN4t?si=9fd004c1491f4232",
    },
    rotacion: -1.5,
  },
  {
    id: 96,
    texto: "Como me recordaras tu? Como algo pasajero? Como una casualidad? Como algo bonito? Como un recuerdo? Como algo que paso? Como algo que nunca sucedio?",
    cancion: {
      titulo: "A Mí",
      url: "https://open.spotify.com/intl-es/track/7MmrcXVA7A5zZ2CbDuGHNa?si=6d72748a2f2b4cb9",
    },
    rotacion: -1.5,
  },
  {
    id: 97,
    texto: "Cada dia olvido tu cara, tanto tiempo lejos hace divagar mi mente en los recuerdos que solo quedan.",
    cancion: {
      titulo: "Cicuta",
      url: "https://open.spotify.com/intl-es/track/5ynCoWipwAVsS5ObUJSb8W?si=25323e78bc1f4965",
    },
    rotacion: -1.5,
  },
  {
    id: 98,
    texto: "Muchos me dicen que debo superarlo y tambien quisiera poder hacerlo pero en el fondo mi corazon no quiere hacerlo, quiere creer que aun hay alguna esperanza.",
    cancion: {
      titulo: "Flechazo En El Centro",
      url: "https://open.spotify.com/intl-es/track/4jn3R3KF5hx2fCiXlj89yE?si=957a8c7d939746c0",
    },
    rotacion: -1.5,
  },
  {
    id: 99,
    texto: "Aunque cada dia lo asimilo mas, recordar duele porque siento que perdi una parte de mi.",
    cancion: {
      titulo: "La Vida Sin Ti",
      url: "https://open.spotify.com/intl-es/track/1O1VvCshhDw3XIOOcfLziL?si=96d1da5aa2374615",
    },
    rotacion: -1.5,
  },
  {
    id: 100,
    texto: "Siento que no puedo conocer a alguien mas, porque siento que te traiciono. Puedo ser feliz sin ti?",
    cancion: {
      titulo: "Dime Cuantas Veces",
      url: "https://open.spotify.com/intl-es/track/4t8YQE2FIpTIq9SxeuOuuP?si=516d82a961834b57",
    },
    rotacion: -1.5,
  },
  {
    id: 101,
    texto: "Es triste volver al inicio de todo, sin ser nada y sin saber de nosotros.",
    cancion: {
      titulo: "Vámonos A Marte",
      url: "https://open.spotify.com/intl-es/track/1qBdJHxR2qY0dFad0ZI8sj?si=b40245b905154668",
    },
    rotacion: -1.5,
  },
  {
    id: 102,
    texto: "Me pregunto si tu crees que podemos ser amigos? o porque se te hace tan facil mandarme un mensaje para no responder? Yo no vine a tu vida para ser tu amigo vine para ser algo mas.",
    cancion: {
      titulo: "MOJABI GHOST",
      url: "https://open.spotify.com/intl-es/track/46YjJXVXWHlQ21odKktg5e?si=a6ec6c19cee244e7",
    },
    rotacion: -1.5,
  },
  {
    id: 103,
    texto: "Cuando te amo, no te puedo amar mas de lo que te amo, y cuando te odio, no te puedo odiar mas de lo que te odio.",
    cancion: {
      titulo: "Nena Maldicion",
      url: "https://open.spotify.com/intl-es/track/77dMSg2VHi2wwXjXNrmcrZ?si=50a05f3fe37e4c9e",
    },
    rotacion: -1.5,
  },
  {
    id: 104,
    texto: "Porque te quiero y me siento culpable por quererte, por quererte y no poder tenerte, por quererte y no poder estar contigo.",
    cancion: {
      titulo: "Volando",
      url: "https://open.spotify.com/intl-es/track/0G2zPzWqVjR68iNPmx2TBe?si=318a4aa1160d4e87",
    },
    rotacion: -1.5,
  },
  {
    id: 105,
    texto: "Puedo parecer algo cobarde por escribir todo esto y no poder mandarte un mensaje de lo mucho que me haces falta.",
    cancion: {
      titulo: "Vuelve",
      url: "https://open.spotify.com/intl-es/track/30zRVzH3FUvbtqYwLvd5fc?si=df8809bdce894c1a",
    },
    rotacion: -1.5,
  },
  {
    id: 106,
    texto: "Porque no podemos volver a intentarlo sin miedo a nada?.",
    cancion: {
      titulo: "Un Desperdicio",
      url: "https://open.spotify.com/intl-es/track/75qepWUT3FEyPyXQMMMVZm?si=7e6c2a6ea95d420a",
    },
    rotacion: -1.5,
  },
  {
    id: 107,
    texto: "Eh olvidado tu voz, no tengo nada para recordarla.",
    cancion: {
      titulo: "El Bolero",
      url: "https://open.spotify.com/intl-es/track/7FwSZyO5ynlN0OJGVOjE6k?si=ca06b7f20b1e410c",
    },
    rotacion: -1.5,
  },
  {
    id: 108,
    texto: "Hoy fue mi cumpleaños, no estuviste aqui, me senti algo vacio y recibir tus felicitaciones solo porque subi fotos me dolio un poco, realmente era mejor no recibir nada a eso porque se sintio la distancia entre nosotros dos.",
    cancion: {
      titulo: "Tiroteo",
      url: "https://open.spotify.com/intl-es/track/05HpBFLrHBjWpgV0DSPUAv?si=e942a8d1e827467c",
    },
    rotacion: -1.5,
  },
  {
    id: 109,
    texto: "Sobre pienso siempre demasiado las cosas, quizas por ello no puedo dejar ir cualquier cosa como si nada. Me amas?",
    cancion: {
      titulo: "Mejor No Nos Vemos",
      url: "https://open.spotify.com/intl-es/track/6NT4RZ6CF6qFJqslGdqaRM?si=1e68baecf3cb4c42",
    },
    rotacion: -1.5,
  },
  {
    id: 110,
    texto: "Fui el hombre mas feliz, tenia a la mujer mas bonita e inteligente.",
    cancion: {
      titulo: "Un Coco",
      url: "https://open.spotify.com/intl-es/track/6VrQTLzzuyGIYjUDe4kAZk?si=00385e92a2144a30",
    },
    rotacion: -1.5,
  },
  {
    id: 111,
    texto: "Eh querido dejar de escribir, pero esto me ayuda a sobre llevarlo, porque facil no es.",
    cancion: {
      titulo: "Solo Pienso En Ti",
      url: "https://open.spotify.com/intl-es/track/3H9GDhVVTlmFQSmpt51qiP?si=630578f88974471c",
    },
    rotacion: -1.5,
  },
  {
    id: 112,
    texto: "Queria que me presentaras como tu novio y que tu abuelito me sacara la espada para espantarme....",
    cancion: {
      titulo: "Corazón Puro",
      url: "https://open.spotify.com/intl-es/track/072uRZ2a6okV4m0fyjY4sb?si=7b82ae3b073847f6",
    },
    rotacion: -1.5,
  },
  {
    id: 113,
    texto: "Hay dias que no se que escribir, mi mente divaga entre todo lo vivido. Te amo.",
    cancion: {
      titulo: "Sal Rosa",
      url: "https://open.spotify.com/intl-es/track/1TWAUx1pXxA5XxJmHMGT0b?si=770a71d2f0dd46dd",
    },
    rotacion: -1.5,
  },
  {
    id: 114,
    texto: "Me acabo de dar cuenta que entre todas las notas no eh expresado lo que siento por ti, eh dicho lo que pasa, lo que siento y como vivo pero creo yo que no te eh dicho el amor que siento.",
    cancion: {
      titulo: "Agosto",
      url: "https://open.spotify.com/intl-es/track/0wihfILRNOwE2156Shezc8?si=5c8c01f0e04442ed",
    },
    rotacion: -1.5,
  },
  {
    id: 115,
    texto: "Eres el amor de mi vida, te quiero, te amo, te extraño, no cabe duda que eres lo que mas quiero.",
    cancion: {
      titulo: "La Bachata",
      url: "https://open.spotify.com/intl-es/track/3tt9i3Hhzq84dPS8H7iSiJ?si=814edd7dcc124056",
    },
    rotacion: -1.5,
  },
  {
    id: 116,
    texto: "Me gustastes por muchos sentidos, pero el mas importante fue la forma en que conectamos, nuestra vibra era ten genuina que encajamos el uno con el otro.",
    cancion: {
      titulo: "Me Olvide De Los 2",
      url: "https://open.spotify.com/intl-es/track/02qcrVQ61nS94wWvLaiXGf?si=92a221c8e88d41d5",
    },
    rotacion: -1.5,
  },
  {
    id: 117,
    texto: "Quiero ser a quien buscas cuando tengas un problema, estoy para ti cuando mas lo necesites.",
    cancion: {
      titulo: "Olimpo",
      url: "https://open.spotify.com/intl-es/track/6tt6JnKerLnOL0oez9QPqS?si=d6e2211a423d4fcf",
    },
    rotacion: -1.5,
  },
  {
    id: 118,
    texto: "No se si este me hace menos hombre o no, pero este soy yo, alguien que realmente siente pero no sabe como expresarlo.",
    cancion: {
      titulo: "La Canción",
      url: "https://open.spotify.com/intl-es/track/0fea68AdmYNygeTGI4RC18?si=3e91c529119e4ff5",
    },
    rotacion: -1.5,
  },
  {
    id: 119,
    texto: "Me gustaria odiarte pero no hay forma de que esto pase, simplemente no puedo pero tampoco puede verte como una persona mas y hablarte como si nada, porque aun te quiero demasiado.",
    cancion: {
      titulo: "Pa' Olvidarme De Ella",
      url: "https://open.spotify.com/intl-es/track/3lR4O0vtkhCAvVEUEWUL0S?si=1a516ca24bf747a0",
    },
    rotacion: -1.5,
  },
  {
    id: 120,
    texto: "4 meses pasan volando 2 meses mas y pasara medio año sin ti, aun no puedo creerlo que eh vivido tanto si ti.",
    cancion: {
      titulo: "Cosas Que No Te Dije",
      url: "https://open.spotify.com/intl-es/track/5xSt1wxZobFcLzHrFakv6z?si=74795ea5c1144b62",
    },
    rotacion: -1.5,
  },
  {
    id: 121,
    texto: "Dejame amarte una vez mas, te juro que te hare la mujer mas feliz.",
    cancion: {
      titulo: "Pa' Ti",
      url: "https://open.spotify.com/intl-es/track/3kAHfdMoCnZ3JKV2dqsGPL?si=9429760d28294ee4",
    },
    rotacion: -1.5,
  },
  {
    id: 122,
    texto: "Quiero volver contigo, no porque espero ver a tu ser de antes si no porque espero ver al ser de ahora, porque estoy seguro que me enamoraria de ti una vez mas.",
    cancion: {
      titulo: "Luna",
      url: "https://open.spotify.com/intl-es/track/3RA55zrRkyPK8Fd86hrMy8?si=24178244804c4dee",
    },
    rotacion: -1.5,
  },
  {
    id: 123,
    texto: "Eh estado preparando tu regalo de cumpleaños, la verdad no se si dartelo o no, no se que pasara y eso me da ansiedad.",
    cancion: {
      titulo: "Volando",
      url: "https://open.spotify.com/intl-es/track/0G2zPzWqVjR68iNPmx2TBe?si=4819ae074e3143ec",
    },
    rotacion: -1.5,
  },
  {
    id: 124,
    texto: "Estoy demasiado ansioso, ya quiero que sean las 12 para mandarlo al instante, eh estado pendiente a la hora para ser el primero.",
    cancion: {
      titulo: "Oye Mi Amor",
      url: "https://open.spotify.com/intl-es/track/5EJ2THuhAapEIeQOtXUQ0x?si=3322ea46acdf4ca9",
    },
    rotacion: -1.5,
  },
  {
    id: 125,
    texto: "Por fin lo hice, pero me dolio ver lo que pusiste, segun yo hice esto para terminar esta etapa, pero es imposible, tu jamas fuiste una etapa, viniste para quedarte en mi vida.",
    cancion: {
      titulo: "Ojalá",
      url: "https://open.spotify.com/intl-es/track/1IpzwwhCo2eoCyecfhDqt2?si=90d68bc7cbb04c82",
    },
    rotacion: -1.5,
  },
  {
    id: 126,
    texto: "Realmente me puse mal, no esperaba que dijeras nada, solo era algo que yo queria hacer pero perdi mi estabilidad jajaja que ironico.",
    cancion: {
      titulo: "Estoy Bien",
      url: "https://open.spotify.com/intl-es/track/6szg6z5MWZKiojwcu5hRNX?si=643c745a803d420f",
    },
    rotacion: -1.5,
  },
  {
    id: 127,
    texto: "Aun debo seguir en pie ya sea contigo o si ti.",
    cancion: {
      titulo: "Mi Jardín",
      url: "https://open.spotify.com/intl-es/track/4MvzIgkHrsYCein80Dmtrw?si=517fcc5ca2964447",
    },
    rotacion: -1.5,
  },
  {
    id: 128,
    texto: "Los dias que vengan seran mas duros porque el golpe de antes fue duro.",
    cancion: {
      titulo: "Gustarme Tanto",
      url: "https://open.spotify.com/intl-es/track/4fUuE0PAqk8WlVZBBbRUw3?si=3970cd265b904800",
    },
    rotacion: -1.5,
  },
  {
    id: 129,
    texto: "No sabes las ganas que tengo de abrazarte, quiero estar junto a ti, pegado a ti.",
    cancion: {
      titulo: "Lento",
      url: "https://open.spotify.com/intl-es/track/4uBtsdMMC7toM7DFV08uie?si=f46b5c80e61249ae",
    },
    rotacion: -1.5,
  },
  {
    id: 130,
    texto: "Extraño tus manos, tu cara, tus labios, tu cintura, tus ojos, tu risa, extraño todo de ti amor.",
    cancion: {
      titulo: "12x3",
      url: "https://open.spotify.com/intl-es/track/1k94CNfVliqDs0qYhkG8iV?si=a5bfddfea91641a6",
    },
    rotacion: -1.5,
  },
  {
    id: 131,
    texto: "Han pasado tantas cosas que me hubiera gustado compartir contigo.",
    cancion: {
      titulo: "San Lucas",
      url: "https://open.spotify.com/intl-es/track/3aZxnqYFM8UI2jLgUD3B2a?si=c228909a01a945b5",
    },
    rotacion: -1.5,
  },
  {
    id: 132,
    texto: "Quiero tener una hija con tus genes, eres la mujer mas hermosa que han visto mis ojos y que es mejor que tenerte a ti que en mini.",
    cancion: {
      titulo: "Suficiente",
      url: "https://open.spotify.com/intl-es/track/4Q1jDNoMRYdF9JLhRvuRUZ?si=21fcdc4508724fd4",
    },
    rotacion: -1.5,
  },
  {
    id: 133,
    texto: "Como quisiera estar en la uni y verte de casualidad, la verdad eh buscado una forma de que eso pase.",
    cancion: {
      titulo: "Sin Medias Tintas",
      url: "https://open.spotify.com/intl-es/track/0xM0fCKQsuOuvehwLgMdVx?si=a21718d51a3a4489",
    },
    rotacion: -1.5,
  },
  {
    id: 134,
    texto: "Que ironia pormete triste con recuerdos felices.",
    cancion: {
      titulo: "Stop The World",
      url: "https://open.spotify.com/intl-es/track/2QUlMbvD9bL8wHqfsoqoet?si=687b0b865b614700",
    },
    rotacion: -1.5,
  },
  {
    id: 135,
    texto: `Como dice Mario Benedetti "El peor error del ser humano es intentar sacar de la cabeza lo que no sale del corazón". `,
    cancion: {
      titulo: "Locos",
      url: "https://open.spotify.com/intl-es/track/3GSMdtJphymHEsR8K9jT5Q?si=28945dd831574495",
    },
    rotacion: -1.5,
  },
  {
    id: 136,
    texto: "Es simple, aun te amo, aun te quiero, aun te necesito porque al final de cuentas, eras mi felicidad.",
    cancion: {
      titulo: "Brillas",
      url: "https://open.spotify.com/intl-es/track/0SRddBTphQwQcfqw4Br1uX?si=e08b06d3f17344e9",
    },
    rotacion: -1.5,
  },
  {
    id: 137,
    texto: "Podre querer a muchas personas, pero amar? solo puedo amarte a ti y a nadie mas.",
    cancion: {
      titulo: "Solo Por Vos",
      url: "https://open.spotify.com/intl-es/track/0qhynIDQPUYENhtIQ3TUyE?si=1788d50e1b5e4886",
    },
    rotacion: -1.5,
  },
  {
    id: 138,
    texto: "Solo busco una pequeña señal de tu parte para volver a ser felices.",
    cancion: {
      titulo: "Mamichula",
      url: "https://open.spotify.com/intl-es/track/0TUW9faHNaBmi89wsYGp9y?si=7d8fac86f72e4105",
    },
    rotacion: -1.5,
  },
  {
    id: 139,
    texto: "Que nos detiene para estar juntos nuevamente.",
    cancion: {
      titulo: "Cicuta",
      url: "https://open.spotify.com/intl-es/track/5ynCoWipwAVsS5ObUJSb8W?si=e5c8f21bb1ec441d",
    },
    rotacion: -1.5,
  },
  {
    id: 140,
    texto: "Jamas pense que tendria tantas cosas que decir, estoy mas cerca de pensar en ti medio año.",
    cancion: {
      titulo: "Perfecta",
      url: "https://open.spotify.com/intl-es/track/09QfIIP4NUx4A3thmovb2o?si=e52c920a022f4c59",
    },
    rotacion: -1.5,
  },
  {
    id: 141,
    texto: "Puedo decirte que soy la mejor opción para ti, pero para ser sincero siempre habra alguien mejor pero lo que te ofresco es lo mas sincero y especial.",
    cancion: {
      titulo: "Es Que Yo Te Quiero A Ti",
      url: "https://open.spotify.com/intl-es/track/6noNXh0HLbx1zWPMuhiAPt?si=5f7bca854e9f4af5",
    },
    rotacion: -1.5,
  },
  {
    id: 142,
    texto: "Me burlo de un amigo que solo habla de su ex y que no puede olvidarla, si supieran lo que sufro yo en silencio.",
    cancion: {
      titulo: "Los Malaventurados No Lloran",
      url: "https://open.spotify.com/intl-es/track/0R6s0WCBfgQ2dByPFSBh63?si=09d8c685f360461e",
    },
    rotacion: -1.5,
  },
  {
    id: 143,
    texto: "Hoy vi una pareja en la calle que me recordó a nosotros, me dio mucha envidia.",
    cancion: {
      titulo: "Entre Nosotros",
      url: "https://open.spotify.com/intl-es/track/5LazbgCsa2IskJbPMnI8Qd?si=6a8a41cc5e6a4dc6",
    },
    rotacion: -1.5,
  },
  {
    id: 144,
    texto: "Se me han ocurrido tantas cosas para tener citas, lo malo? solo se quedaran en mi mente.",
    cancion: {
      titulo: "Tu Alejas Mas De Mi",
      url: "https://open.spotify.com/intl-es/track/62xokumU0wMqOSsBuefhmB?si=f979a16a914a4be1",
    },
    rotacion: -1.5,
  },
  {
    id: 145,
    texto: "Ultimamente no soporto ver a parejas felices.",
    cancion: {
      titulo: "Karmadame",
      url: "https://open.spotify.com/intl-es/track/1xO5aVaGg8ksIuH1TL9Ba3?si=3bcdd1262e4441d4",
    },
    rotacion: -1.5,
  },
  {
    id: 146,
    texto: "Aun recuerdo tu pelo sin peinar del dia de la conferencia.",
    cancion: {
      titulo: "Si Supieras",
      url: "https://open.spotify.com/intl-es/track/0bRo3KV2Ocmpa7N6HWEyiH?si=3367228b3f6148a1",
    },
    rotacion: -1.5,
  },
  {
    id: 147,
    texto: "Si supieras que mis ojos nunca se despegaron de ti, que solo queria verte a pesar de que no eramos aun nada.",
    cancion: {
      titulo: "Como Tú",
      url: "https://open.spotify.com/intl-es/track/05neYxc9nmlxJ7uTOZPlnq?si=aef46e7064ba4747",
    },
    rotacion: -1.5,
  },
  {
    id: 148,
    texto: "Creo que eh tomado una desicion, esto durara solo 1 año y el ultimo dia recibiras la notificacion de la ultima nota, a menos que te des cuenta antes.",
    cancion: {
      titulo: "Soñe",
      url: "https://open.spotify.com/intl-es/track/2VhJ4nrPorAbySEgO4V0BS?si=7a41662022684b5c",
    },
    rotacion: -1.5,
  },
  {
    id: 149,
    texto: "Aunque esto solo dure un año y aun no estemos juntos mi amor jamas desaparecera.",
    cancion: {
      titulo: "Alguien Como Tu",
      url: "https://open.spotify.com/intl-es/track/2qXwXciJwW4Qdg7KDesOCQ?si=d16d9d2f06f84ec1",
    },
    rotacion: -1.5,
  },
  {
    id: 150,
    texto: "Sigo sin poder pensar que estamos a 30 dias mas para estar medio año lejos tu y yo, si me memoria los primeros dias.",
    cancion: {
      titulo: "Amor Viejo",
      url: "https://open.spotify.com/intl-es/track/3W5h65cRwTaZ1FCvEw6Ltx?si=cc24dab2d76b4838",
    },
    rotacion: -1.5,
  },
  {
    id: 151,
    texto: "Pensaba llevar esto hasta el año pero creo que ya no sera necesario llegar a ese punto, lo de hoy fue quizas lo que necesitaba para saber que ya no existo en esta vida.",
    cancion: {
      titulo: "Meteora",
      url: "https://open.spotify.com/intl-es/track/6o46hCPUBAuEJi3G13VX8k?si=1fd4085b7f6d485d",
    },
    rotacion: -1.5,
  },
  {
    id: 152,
    texto: "Aun que aun faltan 46 notas mas para llevar las cuentas bien hoy 6 de agosto se acaba.",
    cancion: {
      titulo: "Un Poco Bien, Un Poco Mal",
      url: "https://open.spotify.com/intl-es/track/1YjHKVIAFUuWQxhLMgSI8I?si=e34e290bdfca4412",
    },
    rotacion: -1.5,
  },
  {
    id: 153,
    texto: "Jamas pense que nuestra primera cita en el cine seria el cierre de esto, verte con otro en el cine me destrozo, de todos los dias posibles ese mismo dia teniamos que ir a la misma funcion y a la misma hora, aunque tu ibas con alguien a quien ya amas y yo solo iba solo sin ti.",
    cancion: {
      titulo: "Nubia",
      url: "https://open.spotify.com/intl-es/track/47MqMH2qUwlfHXS64FEzuE?si=7d6d6a6b6bc54527",
    },
    rotacion: -1.5,
  },
  {
    id: 154,
    texto: "Aqui termina todo, todo lo que soñe, todo lo que desee y aunque pensaba hacerte saber sobre las notas creo que ya no es necesario, solo te digo una cosa mas si es que lo llegas a ver, no me hables, porque lo haces como si fueramos amigos, como si quedamos bien en las mejores condiciones cuando no es asi, no quedamos bien, ni en lo mas minimo, te detesto con toda mi alma, ahora ya dudo sobre todo lo que decian de ti y aun asi no hice caso, ya no se cual de todas es la verdad, pero aun asi TE AMO con toda mi alma, pero creo que tendre que mirar hacia otro lado para seguir con mi vida, escribo esto desde el fondo de mi corazon, desde la tristesa, llorando porque de alguna u otra forma me afecto bastante mas de lo que llegue a imaginar y aunque sigo teniendo esperanzas de algo que no va pasar.",
    cancion: {
      titulo: "Si Te Vas",
      url: "https://open.spotify.com/intl-es/track/7h2g1OWwyuqtXOphBs0maG?si=dfece8341a4b42af",
    },
    rotacion: -1.5,
  },
  {
    id: 155,
    texto: "Te Amo",
    cancion: {
      titulo: "Días Mágicos",
      url: "https://open.spotify.com/intl-es/track/677i5WdG0By0lWuWsFiu0q?si=e064fbd787544d57",
    },
    rotacion: -1.5,
  },
  
  
];
