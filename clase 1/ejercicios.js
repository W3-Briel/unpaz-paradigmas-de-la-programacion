// Desafíos
// Resolver estas dos funciones sin usar expresión ternaria ni if, sólo usando expresiones “booleanas”.

/*
Superficie
Definir la función area(spec), que es spec.height * spec.width si están las dos definidas, 0 en caso contrario.

Hint: recordar que 0 * x = x * 0 = 0.
*/

let testArea = [
  {
  height: 10,
  width: 11
  },{
  height: undefined,
  width: undefined
  }
]

function area(spec){
  let areaSpec = spec.height * spec.width
  return areaSpec || 0
  // let isDefined = !!(spec.height && spec.width)
  // return isDefined ? `area: ${spec.height * spec.width}` : 0 // estoy usando expreciones ternarias... no deberia usarla
}

// console.log("test 1",area(testArea[0]))
// console.log("test 2", area(testArea[1]))

/*
Importe total de factura
Definir la función importeTotal(factura), donde se define importeTotal = neto + iva - descuento, y cada uno de estos tres puede ser, o no, un atributo de factura. Si factura no tiene ninguno de los atributos, pues su importe total será 0.

Porcentaje de descuento
Tener en cuenta que si no está definido el descuento, tal vez sí esté definido el porcDescuento que se aplica sobre el neto … si el neto está definido, claro.

Iva por defecto
Si no está definido el iva, entonces calcularlo como el 20% del neto … si el neto está definido, claro.

Porcentaje de iva específico
Tener en cuenta que se puede indicar el porcIva, si está, hay que usar ese en lugar del 20.
*/
let testFactura = [
  {
    neto: 100,
    descuento: 0
  },{
    neto: 100,
    iva: 50,
    descuento: 10
  },{
    iva: 50,
    descuento: 0
  }
]

function importeTotal(factura){
  
  // si no existe el atributo igualamos a 0
  let neto = factura.neto || 0
  let descuento = factura.descuento || 0
  
  // laburar esto del default!! -> si no hay neto deberia ser iva 0, si no hay iva, deberia ser 20%
  let iva = ((factura.iva * neto) /100) || ((20 * neto) / 100)
  
  return neto + iva - descuento
}

// console.log(importeTotal(testFactura[0])) // -> 120
// console.log(importeTotal(testFactura[1])) // -> 140
// console.log(importeTotal(testFactura[2])) // -> 0

/*
Calorías
Definir la función calorias(platoDeFideos), donde el plato puede o no tener los atributos caloriasBase (default 200), tieneSalsa y tieneQueso (default de estos dos, false). La salsa agrega 20 calorías, el queso 30.
*/

/*
Nombre completo
Definir la función fullName(person) donde person puede, o no, tener los atributos name y surname. Si tiene los dos, hay que separarlos con un espacio.
*/