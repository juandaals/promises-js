import {buscarHeroe as buscarHeroeCallback} from './js/callbacks';
import {buscarHeroe} from './js/promesas';
import "./styles.css";

const heroeId1 = "capi";
const heroeId2 = "iron";

/* buscarHeroe(heroeId1, (err, heroe1) => {
  if (err) { return console.log(err); }

  buscarHeroe(heroeId2, (err, heroe2) => {

    if (err) { return console.log(err); }
    console.log(`Enviando a  ${heroe1.nombre} y ${heroe2.nombre} a la mision`);

  } );


}); */



//promises
//buscarHeroe(heroeId1).then(heroe1 => {
//   console.log(`Enviando a  ${heroe.nombre} a la mision`);
// buscarHeroe(heroeId2).then(heroe2 => {
//     console.log(`Enviando a  ${heroe1.nombre} y ${heroe2.nombre} a la mision`); 
//    });
//});


//
Promise.all([buscarHeroe(heroeId1), buscarHeroe(heroeId2)])
.then(([heroes1,heroes2]) => {

console.log(`Enviando a  ${heroes1.nombre} y ${heroes2.nombre} a la mision`);
}).catch(err => {
alert(err);

}).finally(() => {
    console.log('se ha terminado el promises.all');
});


console.log('fin del programa');