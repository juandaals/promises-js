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

export const buscarHeroe = (id, callback) => {
  const heroe = heroes[id];
  if(heroe){ 
      callback(null, heroe);  
  }else{
//un error
callback(`No existe un heroe con el id ${id}`);
  }

  //mando en el heroe que encontre como un argumento
  /* callback(heroe); */
};

