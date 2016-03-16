(function(){

  function Celsius(numero){
    Temperatura.call(this,numero,'C');
  }

  Celsius.prototype = Object.create(Temperatura.prototype);

  Celsius.prototype.toFahrenheit = function(){
    var result;
    result = (this.getNumero() * 9/5)+32;
    result = result.toFixed(1)+" Farenheit";
    return result;
  };

  Celsius.prototype.toKelvin = function(){
    var result;
    result = this.getNumero() + 273.15 ;
    result = result.toFixed(1)+" Kelvin";
    return result;
  };

  exports.Celsius = Celsius;

})(this);
