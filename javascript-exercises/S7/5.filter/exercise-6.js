/* Dado el siguiente array, utiliza .filter() para generar un nuevo array con los streamers que incluyan el caracter 'Legends' en su propiedad .gameMorePlayed. Recomendamos usar la funcion .includes() para la comprobación.

Además, pon el valor de la propiedad .gameMorePlayed a MAYUSCULAS cuando .age sea mayor que 35. */


const streamers = [{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}, {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}];

const streamersLegend = streamers.filter( streamer =>  streamer.gameMorePlayed.includes('Legends'));
const oldLegend = streamersLegend.filter( legend => {
    if( legend.age > 35){
        legend.gameMorePlayed = legend.gameMorePlayed.toUpperCase();
    }
})
console.log(streamersLegend);