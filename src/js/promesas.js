const heroes = {
    capi: {
      nombre: "Capitán América",
      poder: "Aguantar inyecciones sin morir",
    },
    iron: {
      nombre: "Ironman",
      poder: "Absurda cantidad de dinero",
    },
    spider: {
      nombre: "spiderman",
      poder: "La mejor reacción alergica a las picaduras de araña",
    },
  };

  export const buscarHeroe = ( id ) => {
    
    const heroe = heroes[id];


    return new Promise( (resolve, reject ) => { 
       
        if(heroe){
            resolve(heroe);
        }else{
            reject(`No existe un heroe con el id ${id}`);
        }
    });

  }
  //async mucho mas facil que la promesa y lejible 
  export const buscarHeroeAsync = async ( id ) => {
    
    const heroe = heroes[id];

        if(heroe){
           return heroe;
        }else{
            throw `No existe un heroe con el id ${id}`;
        }
    

  }

  const promesaLenta = new Promise((resolve, reject) => {
      setTimeout(() => resolve('Promesa Lenta') ,2000);
    });
  const promesaMedia = new Promise((resolve, reject) => {
      setTimeout(() => resolve('Promesa Media') ,1500);
    });
  const promesaRapida = new Promise((resolve, reject) => {
      setTimeout(() => resolve('Promesa Rapida') ,1000);
    });
    export {
        promesaLenta,
        promesaMedia,
        promesaRapida
    }