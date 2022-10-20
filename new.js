class Usuario {
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = [];
        this.mascotas = ["pato", "perro"];
    }

    getFullName = () => {
        console.log(`${this.nombre} ${this.apellido}`);
    }

    addMascota = () => {
        this.mascotas.push("gato");
        console.log(this.mascotas)
    }

    countMascotas = () => {
        console.log(this.mascotas.length)
    }

    addBook = (nombre, autor) => {
        this.libros.push({
            nombre: nombre,
            autor: autor
        })
    }

    getBookNames = () => {
        return this.libros.map(libro=>libro.nombre);
    }
}

const user = new Usuario("Susana", "Gimenez");
user.getFullName();
user.addMascota();
user.countMascotas();
user.addBook("13 reazons why", "Jay Asher");
user.addBook("The summer I turned love", "Jenny Han");
console.log(`${user.nombre} ${user.getBookNames()}`)