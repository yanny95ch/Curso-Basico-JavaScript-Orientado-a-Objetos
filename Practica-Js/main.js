//--------------Objeto Literal---------------------//
const natalia =  {
    name: 'Natalia',
    age: 20,
    cursosAprobados: [
        'Curso definitivo de HTML y CSS',
        'Curso Practico de HTML y CSS'
    ],

    //Metodo aprobarCurso
    aprobarcurso (nuevoCursito) {
        this.cursosAprobados.push(nuevoCursito);
    }
};
//Hacer que Natalia apruebe un curso
//natalia.cursosAprobados.push('Curso de Responsive Disign');
natalia.name = 'Lulito'

//-----------------------------------------//---------------------

function Student (name,age,cursosAprobados){
    this.name = name;
    this.age = age;
    this.cursosAprobados= cursosAprobados;
    /*
    this.aprobarcurso= function(nuevoCursito){
        this.cursosAprobados.push(nuevoCursito);
    }
        */
}
Student.prototype.aprobarcurso = function(nuevoCursito){
    this.cursosAprobados.push(nuevoCursito);
}
const juanita = new Student(
    'Lulito Valeroso', 
    3,
    [
        'Curso de Creacion de videojuegos',
        'Curso de Creacion de personajes',
        'Curso culinario 2'
    ]
)
//--------------------------

//------------Prototipos con la Sintaxis  de Clases-------- //

class Student2 {
    constructor ({
        name, 
        age, 
        cursosAprobados=[], 
        email,
        }){
        this.name = name;
        this.age = age;
        this.email = email;
        this.cursosAprobados= cursosAprobados;
    }
    aprobarcurso (nuevoCursito){
        this.cursosAprobados.push(nuevoCursito);
    }
}



const Lulito2 = new Student2({
    age: 3 ,
    email: 'lulito64@gmail.com',
    name: 'Lulito3',
}
);
