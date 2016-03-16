(function(exports){
  "use strict"
  var unidad = {
          medida: 'celsius',

  }

  var Medida = function (numero, unidadM) {

          unidad.medida = unidadM;

          this.celsius = function () {
          		alert("Entro");
              var ce = new Celsius(numero);
              return ce;

          };

          this.fahrenheit = function () {
          		alert("En fahrenheit");
              var ce = new Celsius(numero);
              return ce;

          };

          this.default = function () {
              alert('error: no existe esa medida en el programa');

          };
  };
  Medida.prototype.getNumero=function(){
      return this.numero;
  };

  Medida.prototype.setNumero=function(valor){
      this.numero = valor;
  };

  Medida.prototype.getUnidad=function(){
      return this.unidad;
  };

  Medida.prototype.setUnidad=function(valor){
      this.unidad = valor;
  };


//     var medidaGeneral = new Medida(32,'fahrenheit');
// //check that the role is has a strategy
// if (medidaGeneral[unidad.medida]) {
//
//     var m = medidaGeneral[unidad.medida]();
//     alert("Estoy aqui");
//     alert(m.getTipo());
// } else { //otherwise call the default strategy
//     medidaGeneral['default']();
// }
  //Getters y Setters


  exports.unidad = unidad;
  exports.Medida = Medida;

})(this);
