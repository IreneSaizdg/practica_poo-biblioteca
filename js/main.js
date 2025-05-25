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
