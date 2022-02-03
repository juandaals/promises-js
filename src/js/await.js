import { buscarHeroe, buscarHeroeAsync } from "./promesas";

const heroesIds = ["capi", "iron", "spider"];
const heroesPromesas = heroesIds.map(id  => buscarHeroe(id));

export const obtenerHeroesArr = async() => {

  return await Promise.all(heroesIds.map(buscarHeroe)); 
};


export const heroeCiclo = () =>{
console.time('heroeCiclo');

console.timeEnd('heroeCiclo');

}