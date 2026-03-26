/*
Ejercicios

Consejos:
1. Para mostrar el resultado de cada ejercicio, escribí un console.log con el formato: console.log('Ex 1.', valor o función).
2. Investigá un poco sobre el uso de reduce.
3. Creá un archivo js llamado utils.js y colocá allí todas las funciones auxiliares. (Ej. 10 y 14)

1) Importar el array songs usando módulos.

2. Usar la función map para crear un nuevo array con el título de cada canción en letras mayúsculas.

3. Usar la función filter para crear un nuevo array con todas las canciones lanzadas antes de 1975.

4. Usar destructuring para crear una variable que almacene el título de la primera canción del array.

5. Usar la función find para obtener el objeto que representa la canción "Hotel California".

6. Usar el operador rest para crear una función que reciba cualquier cantidad de argumentos y devuelva su suma. (Consejo: usar reduce)

7. Usar la función map y template literals para crear un nuevo array con strings en el formato "Título - Artista (Año)" para cada canción.

8. Usar destructuring y la función filter para crear un nuevo array con los títulos de todas las canciones de The Beatles.

9. Usar arrow functions y la función reduce para calcular la cantidad total de años entre las fechas de lanzamiento de todas las canciones. (Consejo: usar reduce)

10. Crear un módulo que exporte una función para calcular el promedio del año de lanzamiento de las canciones del array de entrada. (Consejo: usar reduce)

11. Usar la función find para obtener el objeto que representa la canción con el título más largo.

12. Usar destructuring y template literals para mostrar en consola el título, artista y año del primer elemento del array.

13. Usar el operador rest para crear un nuevo array sin el primer elemento.

14. Importar la función filter() desde un módulo utils.js y usarla para crear un nuevo array con todas las canciones que tengan "Love" en el título.

15. Usar el método every() para verificar si todas las canciones tienen títulos de 5 o más caracteres.

16. Usar el método some() para verificar si hay alguna canción de los años 80.

17. Usar un template literal para crear un string que diga "The Beatles lanzó Let It Be en 1970."

18. Usar el método map() para crear un nuevo array solo con los nombres de los artistas.

19. Crear una función llamada randomSong que devuelva una canción del array songs de forma aleatoria. Mostrar en consola la llamada a esta función 3 veces.

20. Escribir tu propia función usando al menos 3 conceptos.

21. Generar una canción tomando un artista random, un año random y un título random.

22. Mostrar el mensaje 'El clima en [ciudad] es de [temperatura] [unidad]'

const clima = {
  ciudad: "buenos Aires",
  temperatura: 30,
  unidad: "Grados Centígrados",
};

const mostrarClima = () => {}


*/
//1
import songs from "./songs.js";

console.log(songs)
//2
const arrayTitulos = songs.map(arrayTitulo => arrayTitulo.title.toUpperCase())
console.log(arrayTitulos)
//3
const filtro = songs.filter(filtrito => filtrito.year <= 1975)
console.log(filtro)
//4
const {title,artist} = songs[0]

console.log(title)

//5
console.log(songs.find(busqueda => busqueda.title === "Hotel California"))

//7

const formato = songs.map(songs => `${songs.title} - ${songs.artist} (${songs.year})`)

console.log(formato)

//8
const cancionBeatles = songs.filter(song => {
  const {artist} = song
  return artist === "The Beatles"
}).map(song => song.title)

console.log(cancionBeatles)

const sugarCancionesBeatles = songs.filter(({artist}) => artist === "The Beatles").map(artist => artist.title)

console.log(sugarCancionesBeatles)

//9
const totalAños = songs.reduce((acc, cur) => acc + cur.year,0)
console.log(totalAños)

//10
import { averageYear, filter } from "./utils.js";
console.log(averageYear(songs))

//11
const maxLength = Math.max(...songs.map(song => song.title.length));
const cancionMasLarga = songs.find(song => song.title.length === maxLength);
console.log(cancionMasLarga)

//12

const {title: primerTitulo, artist: primerArtista, year: primerAño} = songs[0]
console.log(`${primerTitulo}, ${primerArtista}, ${primerAño}`)

//13

const [, ...restoCanciones] = songs
console.log(restoCanciones)

//14

const cancionesConLove = filter(songs, song => song.title.includes("Love"))
console.log(cancionesConLove)

//15

const titulosCinco = songs.every(song => song.title.length >= 5)
console.log(titulosCinco)

//16

const canciones80 = songs.some(song => song.year >= 1980 && song.year < 1990)
console.log(canciones80)

//17

const letItBe = songs.find(song => song.title === "Let It Be")
console.log(`The Beatles lanzó ${letItBe.title} en ${letItBe.year}.`)

//18

const artistas = songs.map(song => song.artist)
console.log(artistas)

//19

const randomSong = () => {
  const canciones = Math.floor(Math.random() * songs.length);
  return songs[canciones];
}

console.log(randomSong())
console.log(randomSong())
console.log(randomSong())

//20

const cancionesPorAño = (array, año) => {
  return array.filter(song => song.year === año).map(song => song.title);
}
console.log(cancionesPorAño(songs, 1971))

//21

//22

const clima = {
  ciudad: "buenos Aires",
  temperatura: 30,
  unidad: "Grados Centígrados",
}

const mostrarClima = (ciudad, temperatura, unidad) => {
  console.log(`El clima en ${ciudad} es de ${temperatura} ${unidad}`)
}

mostrarClima(clima.ciudad, clima.temperatura, clima.unidad)


