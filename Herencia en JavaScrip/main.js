class Courses {
    constructor({
        name , 
        clases =[],
        isFree= false,
        lang = 'Spanish',
    }){
        this._name = name;
        this.clases = clases;
        this.isFree = isFree;
        this.lang = lang

    }

    get name(){
        return this._name;
    }

    //---o tambien----
    /*
    changeName(nuevoNombre){
        this._name = nuevoNombre
    }
    */

    set name(nuevoNombre){
        if (nuevoNombre === 'curso pesimo del programa') {
            console.error('Favor no realizar')
        }else{
            this._name = nuevoNombre
        }
        
    }
}


const cursoBienvenida = new Courses({
    name : 'Curso Gratis de Bienvenida',
    isFree: true,
});

cursoBienvenida.name = ''
//---Curso Gratis de Bienvenida
//cursoBienvenida.changeName('nuevonombrte') 



const cursoDefinitivoIdiomas = new Courses({
    name : 'Curso Practico en Idiomas',
    lang: 'english',
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
        cursoBienvenida,
        'Curso de Fundamentos de Negocios',
        'Curso de Fundamentos en Finanzas',
        'Curso Ofimatica'
    ]
});
const escuelaCocina= new LearningPaths ({
    name: 'Escuela de Cocina',
    courses:[
        cursoBienvenida,
        cursoPracticoCpcina,
        'Curso de Reposteria Avanzado',
        'Curso Pato a la Naranja',
        'Curso Chef Basico'
    ]
});
const escuelaIdiomas= new LearningPaths ({
    name: 'Escula de Idiomas',
    courses:[
        cursoBienvenida,
        cursoDefinitivoIdiomas ,
        'Curso Aleman Basico',
        'Curso Mandarin Basico',
        'Curso de ChinoMandarin'
    ]
});


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

class FreeStudents  extends Student{
    constructor(props){
        super(props)
    }
    approvedCourse(newCourse){
        if(newCourse.isFree){
            this.approvedCourses.push(newCourse);
        }else{
            console.log('Lo siento:'+ this.name  + 'Solo puedes tomar cursos abiertos');
        }
    }
}

class BasicStidents extends Student{
    constructor(props){
        super(props)
    }
    approvedCourse(newCourse){
        if(newCourse.lang !== 'english'){
            this.approvedCourses.push(newCourse);
        }else{
            console.log('Lo siento:'+ this.name  + 'NO puedes tomar cursos en ingles');
        }
    }

}

class ExpertStudents extends Student{
    constructor(props){
        super(props)
    }
    approvedCourse(newCourse){
        this.approvedCourses.push(newCourse);
    }
}


    







const juan2 = new FreeStudents({
    name: 'Lulupachon',
    username: 'lulopach',
    email:'pachoncito98@outlook.com',
    twtter: 'tpachon',
    learingPaths:[
        escuelaIdiomas,
        escuelaNegocios,
    ],
})
const juan5 = new BasicStidents({
    name: 'Lulupaz',
    username: 'lulopaz',
    email:'lupaz98@outlook.com',
    instagram: 'tpachon88',
    learingPaths:[
        escuelaNegocios,
        escuelaCocina
    ],
})


