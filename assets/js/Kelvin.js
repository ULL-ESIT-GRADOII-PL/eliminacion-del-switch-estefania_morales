(function(exports){
  //Clase Kelvin que hereda de Temperatura y sus métodos
  function Kelvin(numero){
    Temperatura.call(this,numero,'K');
  }

  Kelvin.prototype = Object.create(Temperatura.prototype);

  Kelvin.prototype.toFahrenheit = function(){
    var result;
    result = ((this.getNumero()-273.15) * 9/5)+32;
    result = result.toFixed(1)+" Farenheit";
    return result;
  };

  Kelvin.prototype.toCelsius = function(){
    var result;
    result = this.getNumero() -  273.15;
    result = result.toFixed(1)+" Celsius";
    return result;
  };

})(this);
