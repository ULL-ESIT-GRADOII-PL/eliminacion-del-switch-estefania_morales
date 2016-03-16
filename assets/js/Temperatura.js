(function(exports){
    //Clase Temperatura que hereda de Medida
    function Temperatura(numero, unidad){
            //Atributos de la clase
            Medida.call(this,numero,unidad); //Llamada al constructor de la clase padre

    }
    Temperatura.prototype = Object.create(Medida.prototype);
    exports.Temperatura = Temperatura;


})(this);
