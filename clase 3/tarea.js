/*
algunDiaSeProdujo(cantidad): indica si el registro incluye al menos un día en el que se produjo, exactamente, la cantidad indicada de piezas.
maximoValorDeProduccion(): el valor más alto de producción diaria incluido en el registro.
valoresDeProduccionPares(): los valores pares incluidos, en el mismo orden en que aparecen en el registro.
produccionEsAcotada(n1,n2): indica si en cada día de que se tiene registro, la producción se encuentra entre los valores indicados.
produccionesSuperioresA(cuanto): los valores de producción que superan el valor indicado, en el mismo orden en que aparecen en el registro.
produccionesSumando(n): la serie que resulta de sumar el valor indicado a cada valor de producción diaria incluido en el registro.
totalProducido(): el total de piezas producidas por la máquina, de acuerdo a la información incluida en el registro.
ultimoValorDeProduccion(): el último valor registrado.
cantidadProduccionesMayorALaPrimera(): la cantidad de valores de producción diaria que superan a la producción indicada para el primer día de operación.
*/

let registroProduccion = {
  valoresDeProduccion: [43, 18, 49, 62, 33, 39],
  algunDiaSeProdujo: function (cantidad) {
    return this.valoresDeProduccion.includes(cantidad);
  },
  maximoValorDeProduccion: function () {
    return this.valoresDeProduccion.reduce((a, b) => (a > b ? a : b));
  },
  valoresDeProduccionPares: function () {
    return this.valoresDeProduccion.filter((valor) => valor % 2 == 0);
  },
  produccionEsAcotada: function (n1, n2) {
    return this.valoresDeProduccion.every(
      (valor) => valor >= n1 && valor <= n2,
    );
  },
  produccionesSuperioresA: function (cuanto) {
    return this.valoresDeProduccion.filter((v) => v > cuanto);
  },
  produccionesSumando: function (n) {
    return this.valoresDeProduccion.map((v) => v + n);
  },
  totalProducido: function () {
    return this.valoresDeProduccion.reduce((a, b) => a + b);
  },
  ultimoValorDeProduccion: function () {
    return this.valoresDeProduccion[this.valoresDeProduccion.length - 1];
  },
  cantidadProduccionesMayorALaPrimera: function () {
    let primerValor = this.valoresDeProduccion[0];
    return this.valoresDeProduccion.filter((v) => v > primerValor).length;
  },
};

let tests = (x) => {
  let valores = [
    x.algunDiaSeProdujo(49),
    x.algunDiaSeProdujo(52),
    x.maximoValorDeProduccion(),
    x.valoresDeProduccionPares(),
    x.produccionEsAcotada(10, 100),
    x.produccionEsAcotada(20, 100),
    x.produccionesSuperioresA(35),
    x.produccionesSumando(5),
    x.totalProducido(),
    x.ultimoValorDeProduccion(),
    x.cantidadProduccionesMayorALaPrimera(),
  ];
  valores.forEach((e) => console.log(e));
};

tests(registroProduccion);