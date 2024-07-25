class Student {
    constructor({
        name,
        email,
        username,
        twtter = undefined,
        instagram= undefined,
        facebook = undefined,
        approvedCourses= [],
        learingPaths=[],
    }){
        this.name = name;
        this.email =  email;
        this.username =  username;
        this.socialMedia= {
            twtter,
            instagram,
            facebook,
        }
        this.approvedCourses= [] = approvedCourses;
        this.learingPaths=[] = learingPaths;
    };
}

const juan2 = new Student({
    name: 'Lulupachon',
    username: 'lulopach',
    email:'pachoncito98@outlook.com',
    twtter: 'tpachon'
})
const juan5 = new Student({
    name: 'Lulupaz',
    username: 'lulopaz',
    email:'lupaz98@outlook.com',
    instagram: 'tpachon88'
})


class Courses {
    constructor({
        name , 
        clases =[],
    }){
        this.name = name;
        this.clases = clases;

    }
}

const cursoBienvenida = new Courses({
    name : 'Courso Gratis de Bienvenida',
});
const cursoDefinitivoIdiomas = new Courses({
    name : 'Curso Definitivo de Fundamentos de Negocios',
});
const cursoPracticoCpcina = new Courses({
    name : 'Curso Definitivo de Fundamentos de Negocios',
});


class LearningPaths {
    constructor({
        name , 
        courses =[],
    }){
        this.name = name;
        this.courses = courses;

    }
}
const escuelaNegocios = new LearningPaths ({
    name: 'Escuela de  Negocios',
    courses:[
        'Curso Bienvenida',
        'Curso de Fundamentos de Negocios',
        'Curso de Fundamentos en Finanzas',
        'Curso Ofimatica'
    ]
});
const escuelaCocina= new LearningPaths ({
    name: 'Escuela de Cocina',
    courses:[
        'Curso Bienvenida',
        'Curso de Reposteria Avanzado',
        'Curso Pato a la Naranja',
        'Curso Chef Basico'
    ]
});
const escuelaIdiomas = new LearningPaths ({
    name: 'Escula de Idiomas',
    courses:[
        'Curso Bienvenida',
        'Curso Aleman Basico',
        'Curso Mandarin Basico',
        'Curso de ChinoMandarin'
    ]
});
