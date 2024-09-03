// Testeando los límites del shallow copy
// Armar un objeto x tal que si defino y = {...x} y hago algún cambio “dentro” de x (o sea, hago x.<cosas> = <nuevoValor>), se modifica también algo en y.

let x = {
  apellido: "saucedo"
}

let y = {
  nomber: "angel",
  apellido: x
}

x.apellido = "mono"

// console.log(y)


// Revolviendo un objeto en forma genérica
// Definir una función que dado un objeto, devuelva los keys cuyo value asociado es 0. P.ej.

// > keysForZero({x:4,y:0,z:1,w:9,f:0})
// ['y', 'f']
// A mí me salió con una expresión, o sea

// function keysForZero(obj) {
//     return <expresion>
// }
// usando Object.entries y métodos de array.
// Un detalle: un array de dos posiciones se puede desarmar con un pattern de la forma [a,b].

function keysForZero(obj){
  return Object.entries(obj).filter( i => i[1] == 0)
                            .map(k => k[0])
}

console.log(keysForZero({x:4,y:0,z:1,w:9,f:0})) // -> ['y', 'f']

// Rearmando un objeto en forma genérica
// Definir una función que, dado un objeto cuyos valores son todos numéricos, devuelve un objeto con las mismas keys, y cada value el doble del value original. P.ej.

// > doubledObject({x:4,y:0,z:1,w:9,f:0})
// {x:8,y:0,z:2,w:18,f:0}
// Otra vez, más desafío si sale con una expresión. A mí me salió usando Object.values más estas dos cosas:

// si tengo p.ej. someKey = 'a' , entonces {[someKey]: 4} es el objeto {a: 4} .
// ver qué devuelve Object.assign({}, ...[{a:5},{b:8}])

function doubledObject(obj){
  return Object.assign({},...Object.entries(obj).map((k) => {
    let key = k[0];
    let value = k[1]*2;
    
    return {[key]: value};
  }))}

// console.log(doubledObject({x:4,y:0,z:1,w:9,f:0})) // ->  {x:8,y:0,z:2,w:18,f:0}

