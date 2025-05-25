##  **Ejercicio práctico: Sistema de Gestión de Biblioteca con POO en JavaScript**

###  **Objetivo**

Aplicar los conceptos de **Programación Orientada a Objetos (POO)** en JavaScript utilizando:

* Clases (`class`)
* Encapsulamiento (uso de propiedades privadas por convención)
* Métodos (acciones de los objetos)
* Composición de clases (una clase usando otra)

Construir un pequeño sistema de biblioteca, similar a cómo funcionan sistemas reales para controlar préstamos de libros.

---

###  **Contexto**
Crea una clase Libro y una clase Biblioteca que permita añadir libros, prestarlos y mostrarlos. Usa encapsulamiento con convención _privado y getters/setters.

* Registrar libros
* Saber si un libro está disponible o prestado
* Permitir prestar y devolver libros
* Consultar todos los libros disponibles y sus estados

---

###  **Parte 1: Clase `Libro`**

Debes crear una clase `Libro` que represente un libro dentro de la biblioteca.

####  Esta clase debe tener:

* Propiedades:

  * `titulo`: nombre del libro
  * `autor`: autor del libro
  * `isbn`: identificador único del libro
  * `_prestado`: estado del libro (encapsulado con `_` para indicar que es privado)

* Métodos:

  * `prestar()`: cambia el estado del libro a prestado
  * `devolver()`: cambia el estado del libro a disponible
  * `getEstado()`: retorna si el libro está prestado o disponible

 *Ejemplo de uso:*

```js
const libro = new Libro("Cien años de soledad", "Gabriel García Márquez", "11111");
libro.getEstado(); // "Disponible"
libro.prestar();
libro.getEstado(); // "Prestado"
```

---

###  **Parte 2: Clase `Biblioteca`**

Esta clase debe representar a la **colección de libros** y permitir gestionarlos.

####  Esta clase debe tener:

* Propiedades:

  * `nombre`: nombre de la biblioteca
  * `libros`: un array para guardar los libros (instancias de `Libro`)

* Métodos:

  * `agregarLibro(libro)`: añade un libro a la colección
  * `buscarPorISBN(isbn)`: busca un libro específico en la colección
  * `prestarLibro(isbn)`: presta un libro según su ISBN
  * `devolverLibro(isbn)`: devuelve un libro según su ISBN
  * `mostrarLibros()`: muestra todos los libros con su estado

 *Ejemplo de uso:*

```js
const biblio = new Biblioteca("Biblioteca Central");
const libro1 = new Libro("1984", "George Orwell", "12345");

biblio.agregarLibro(libro1);
biblio.prestarLibro("12345");
biblio.mostrarLibros(); // muestra el libro como "Prestado"
```

---

###  **Puntos clave**

* Cómo usar clases y métodos en JavaScript
* Cómo aplicar el encapsulamiento con `_propiedadesPrivadas`
* Cómo dividir el sistema en partes reutilizables (separar `Libro` de `Biblioteca`)
* Cómo manejar una colección de objetos (array de libros)
* Cómo modelar problemas reales usando objetos

---

###  Requisitos técnicos

* Usar **ES6** (`class`, `constructor`, `this`)
* Usar **encapsulamiento por convención** (con `_propiedad`)
* No se permite modificar directamente el estado de un libro fuera de su clase

  * Por ejemplo: `libro._prestado = true;` → ❌ No permitido