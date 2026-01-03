//definimos un objeto literal llamado "auto"
const auto = {
    marca : "Ford",
    modelo : "Focus",
    color : "blanco",
    año : 2015,

    //método que usa this para describirmel auto
    describir: function(){
        //aqui this hace referencia al objeto auto
        return `Esste auto ess un ${this.marca} ${this.modelo} del año ${this.año} y del color ${this.color}`;
    }
};
//llamada al método "describir" del objeto "auto"
console.log(auto.this());

//accediendo directa// a las propiedades del objeto
console.log(auto.marca);
console.log(auto.modelo);
console.log(auto.año);
console.log(auto.año);