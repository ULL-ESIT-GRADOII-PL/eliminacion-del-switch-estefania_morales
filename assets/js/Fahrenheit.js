(function(exports){

  //Clase Fahrenheit que hereda de Temperatura y sus métodos
  function Fahrenheit(numero){
    Temperatura.call(this,numero, 'F');
  }

  Fahrenheit.prototype = Object.create(Temperatura.prototype);

  Fahrenheit.prototype.toCelsius = function(){
    var result;
    result = (this.getNumero() - 32)*5/9;
    result = result.toFixed(1)+" Celsius";
    return result;
  };

  Fahrenheit.prototype.toKelvin = function(){
    var result;
    result = ((5*(this.getNumero()-32))/9)+273.15;
    result = result.toFixed(1)+" Kelvin";
    return result;
  };

  Fahrenheit.prototype.mostrar = function(){
    console.log(this.getNumero() + " "+this.getUnidad());
  };

})(this);
