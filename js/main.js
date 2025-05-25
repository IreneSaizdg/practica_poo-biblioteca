// Working test
    // window.alert("JS funcionando");

// VARIABLES -> EVENTOS -> FUNCIONES -> INVOCACIONES//

/*
PSEUDO-CÓDIGO

Entrada:

    Clase libro
        Propiedades:
        titulo: nombre del libro
        autor: autor del libro
        isbn: identificador único del libro
        _prestado: estado del libro (encapsulado con _ para indicar que es privado)
       
        Métodos:
        prestar(): cambia el estado del libro a prestado
        devolver(): cambia el estado del libro a disponible
        getEstado(): retorna si el libro está prestado o disponible
   
    Clase biblioteca/colección de libros
        Propiedades:
        nombre: nombre de la biblioteca
        libros: un array para guardar los libros (instancias de Libro)
       
        Métodos:
        agregarLibro(libro): añade un libro a la colección
        buscarPorISBN(isbn): busca un libro específico en la colección
        prestarLibro(isbn): presta un libro según su ISBN
        devolverLibro(isbn): devuelve un libro según su ISBN
        mostrarLibros(): muestra todos los libros con su estado


    *Encapsulamiento con convencionamiento _privado getter/setter


    ---------------------------------------------------------------------------
    Añadir/registrar libros    
    Prestar libros (saber si está disponible o prestado)
    Mostrar libros (consultar todos los libros disponibles y sus estados)
    ---------------------------------------------------------------------------


    Formulario de entrada de libros??
        - Rellenar formulario de aporte de datos sobre libro
        - EVENTO button -> INSERTAR LIBRO en lista de libros

    - 1º capturar los datos del formulario en una función
    - 2º meter esos datos en el array de una biblioteca
    - 3º desde ese array de la biblioteca coger los datos
    - 4º con esos datos imprimir la row del libro nuevo
    - 5º Que se active todo al hacer click en el botón (en el evento)


    Consulta de todos los libros disponibles??
        - Recoger los datos de la entrada de libros
        - Con esa info pintar las cards de cada libro y su disponibilidad

    Reservar libro??
        - EVENTO button -> RESERVAR LIBRO y cambia su disponibilidad a: reservado
   
    Devolver libro??
        - EVENTO button -> DEVOLVER LIBRO y cambia su disponibilidad a: disponible

Salida:
}
*/





//VARIABLES------------------------------------------------------------------------------//

//Llamadas al DOM
const bookEntryForm = document.querySelector("#bookEntryForm");
const bookListBody = document.querySelector("#bookListBody");




//Clase Libro -----
class Libro{
    constructor(titulo, autor, isbn){
        this.titulo = titulo;
        this.autor = autor;
        this.isbn = isbn;
        this._estado = "disponible"; // Estado por defecto
    }

    prestar(){
        this._estado = "prestado";
    }

    devolver(){
        this._estado = "disponible";
    }

    getEstado(){
        return this._estado; //Estado por default
    }
}

/*Comprobaciones de estado del libro
    const libro1 = new Libro("libro1", "autor1", 11111)
    console.log(libro1.getEstado())

    libro1.prestar()
    console.log(libro1._estado)

    libro1.devolver()
    console.log(libro1._estado)*/


//Clase Biblioteca -----
class Biblioteca{
    constructor (nombre){
        this.nombre = nombre
        this.libros = [] //array de libros
    }

    agregarLibro(libro){
        this.libros.push(libro);
    }

    buscarPorISBN(isbn){
        const libroEncontrado = this.libros.find((libro) => libro.isbn === isbn) //Devuelve el libro si lo encuentra, si no da undefined. 
        if (libroEncontrado){
            console.log(`El libro encontrado con ISBN ${libroEncontrado.isbn} es: "${libroEncontrado.titulo}" del autor "${libroEncontrado.autor}" y está "${libroEncontrado._estado}".`);
            return libroEncontrado;
        }else{
            console.log(`Libro con isbn "${isbn}" no encontrado.`);
            return undefined;
        }
    }

    prestarLibro(isbn){
        const libroADevolver = this.buscarPorISBN(isbn);
        
        if (!libroADevolver){
            console.log("Este libro existe en esta biblioteca.");
            return; //Para salir de la función

        }else if (libroADevolver._estado === "prestado"){
            console.log(`Este libro no está disponible.`)

        }else if (libroADevolver._estado === "disponible"){
            libroADevolver.prestar()
            console.log(`Libro prestado, ahora está: "${libroADevolver._estado}"`)
        }
    }

    devolverLibro(isbn){
        const libroADevolver = this.buscarPorISBN(isbn);

        if (!libroADevolver){
            console.log("No sepuede devolver poque este libro no pertenece a esta biblioteca.");
            return;

        }else if (libroADevolver._estado === "prestado"){
            libroADevolver.devolver();
            console.log(`Libro devuelto, ahora está: "${libroADevolver._estado}".`)
        }else{
            console.log(`Este libro ya estaba devuelto.`);
        }
    }
    
    mostrarLibros(){
        if(this.libros.length === 0){
            console.log(`No hay libros en la biblioteca "${this.nombre}."`)
        }else{
            return this.libros;
        }
    }
}
//Crear la biblioteca 
const myFirstLibrary = new Biblioteca("My first library");


/*Comprobaciones de métodos
    //agregarLibro
    console.log("AGREGAR LIBRO -----------------")
    const biblioteca1 = new Biblioteca("biblioteca1")
    const libro2 = new Libro("libro2", "autor2", 2222)
    const libro3 = new Libro("libro3", "autor3", 3333)
    biblioteca1.agregarLibro(libro2)
    biblioteca1.agregarLibro(libro3)
    //buscarLibro
    console.log("BUSCAR LIBRO -----------------")
    biblioteca1.buscarPorISBN(2222)
    biblioteca1.buscarPorISBN(3333)
    //prestarLibro
    console.log("PRESTAR LIBRO -----------------")
    biblioteca1.prestarLibro(2222)
    biblioteca1.prestarLibro(2222)
    //devolverLibro
    console.log("DEVOLVER LIBRO -----------------")
    biblioteca1.devolverLibro(2222)
    biblioteca1.devolverLibro(4444)
*/




//EVENTOS ------------------------------------------------------------------------------//

bookEntryForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Previene la acción automática

    const bookData = getFormData(); //Coge los datos de la función
    addBookToLibrary(bookData); //Pasa los datos como argumento y los añade al array libros
    printBookRow(); //Con los datos recibidos pinta la fila

    //bookEntryForm.reset(); // Limpiar formulario después de añadir
});





//FUNCIONES ------------------------------------------------------------------------------//
//Función obtener los datos del formulario
function getFormData() {
    const titulo = document.querySelector("#titulo").value;
    const autor = document.querySelector("#autor").value;
    const isbn = document.querySelector("#isbn").value;

    const libro = { //Devuelve un objeto con los datos del formulario
      titulo: titulo,
      autor: autor,
      isbn: isbn
    };

    return libro;
}



//Función añadir libro y sus datos a la biblioteca
function addBookToLibrary(bookData) {
    const newBook = new Libro(bookData.titulo, bookData.autor, bookData.isbn); //Crea una instancia de la clase libro
    myFirstLibrary.agregarLibro(newBook); //Agrega el libro al array de libros mediante el método de la clase Biblioteca
}

