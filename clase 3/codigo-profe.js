const produccion = [43,18,49,62,33,39]

const algunDiaSeProducto = (cantidad) => produccion.includes(cantidad)
console.log('algunDiaSeProducto')
console.log(algunDiaSeProducto(49))
console.log(algunDiaSeProducto(52))
console.log('-------------------')

const maximoValorDeProduccion = () =>produccion.reduce( (a, b) => a>b ? a :b )
console.log('maximoValorDeProduccion')
console.log(maximoValorDeProduccion())
console.log('-------------------')

const maximoValorDeProduccionAragana = () => Math.max(...produccion)
console.log('maximoValorDeProduccionAragana')
console.log(maximoValorDeProduccionAragana())
console.log('-------------------')


const valoresDeProduccionPares = () => produccion.filter( e => e % 2 == 0 )
console.log('valoresDeProduccionPares')
console.log(valoresDeProduccionPares())
console.log('-------------------')

const produccionEsAcotada= (n1, n2) => produccion.every( e=> e >= n1 && e <= n2) 
console.log('produccionEsAcotada')
console.log(produccionEsAcotada(10,100))
console.log(produccionEsAcotada(20.100))
console.log('-------------------')

const produccionesSuperioresA = (cuanto) => produccion.filter( e => e > cuanto)
console.log('produccionesSuperioresA')
console.log(produccionesSuperioresA(35))
console.log('-------------------')

const produccionesSumando = (n) => produccion.map ( x => x + n)
console.log('produccionesSumando')
console.log(produccionesSumando(5))
console.log('-------------------')


const produccionesSumandoObjeto = (n) => produccion.map ( e=>{return { valor: e + n}})
console.log('produccionesSumandoObjeto')
console.log(produccionesSumandoObjeto(5))
console.log('-------------------')


const totalProducido = () => produccion.reduce( (a, b)=> a + b , 0)
console.log('totalProducido')
console.log(totalProducido())
console.log('-------------------')


const ultimoValorDeProduccion = () => produccion[produccion.length -1]
console.log('ultimoValorDeProduccion')
console.log(ultimoValorDeProduccion())
console.log('-------------------')

const cantidadProduccionesMayorALaPrimera = produccionesSuperioresA
console.log('cantidadProduccionesMayorALaPrimera')
console.log(cantidadProduccionesMayorALaPrimera(produccion[0]))
console.log('-------------------')