// Rearmando un objeto en forma genérica
// Definir una función que, dado un objeto cuyos valores son todos numéricos, devuelve un objeto con las mismas keys, y cada value el doble del value original. P.ej.

// > doubledObject({x:4,y:0,z:1,w:9,f:0})
// {x:8,y:0,z:2,w:18,f:0}
// Otra vez, más desafío si sale con una expresión. A mí me salió usando Object.values más estas dos cosas:

// si tengo p.ej. someKey = 'a' , entonces {[someKey]: 4} es el objeto {a: 4} .
// ver qué devuelve Object.assign({}, ...[{a:5},{b:8}])

function doubledObject(obj){
  let entriesObj = Object.entries(obj);
  let objTwo = {}
  
  for (let a of entriesObj){ //cuales eran las diferencias entre for in o for of??
    let key = a[0]
    let value = a[1] * 2
    
    ObjTwo = Object.assign(objTwo,{key: value})
  }
  console.log(objTwo)
  
  return objTwo
} 

doubledObject({x:4,y:0,z:1,w:9,f:0}) // ->  {x:8,y:0,z:2,w:18,f:0}