let personas=[
    {
        nombre: `Ana`,
        edad: 15,
        DNI: 44
    },
    {
        nombre: `Juan`,
        edad: 24,
        DNI: 66
    }
]



// 1) mostrarPersonas()

const mostrarPersonas = () => {
    personas.forEach(p=>console.log(p.nombre, p.edad, p.DNI));
}
mostrarPersonas();


// 2) agregarPersonas

const agregarPersonas = (nombre, edad, DNI) => {
    personas.push({nombre, edad, DNI});
    personas.forEach(p=>console.log(p));
}
agregarPersonas(`Luciano Nahir Trevissan`, 18, 48181723);


// 3) buscarPersona x DNI

const buscar1=(DNI)=>{
    const encontrada = personas.find(p=>p.DNI==DNI)
    console.log(encontrada);

    if(encontrada){
        console.log(`${encontrada.nombre} existe`);
    } else{
        console.log(`El elemento no existe`);
    }
};
buscar1(44);

// 4) buscarPersonas x nombre

const buscar2=(nombre)=>{
    const encontrada = personas.filter(p=>p.nombre==nombre)
    console.log(encontrada);
};
buscar2(`Juan`);

// 5) eliminarPersonas x DNI

const buscar3=(DNI)=>{
    const encontrada = personas.findIndex(p=>p.DNI==DNI)
    if (encontrada >= 0){
        console.log(encontrada);
        personas.splice(personas.DNI, 1);
        console.log(`${encontrada} fue eliminad@.`)
    }
    else{
        console.log(`Ese usuario no existe`);
    }
    
};
buscar3(44);
console.log(personas); //verificacion

// 6) modificarDatos x DNI

const modificarDatos = (DNI, nuevoNombre, nuevaEdad) => {
    const encontrada = personas.findIndex(p=>p.DNI==DNI);
    if(encontrada >= 0){
    console.log(encontrada);
    personas.splice(encontrada, 1, {nuevoNombre, nuevaEdad, DNI});
    console.log(personas[encontrada]);
    }
    else{
        console.log(`No se encontro el usuario`);
    }
    
}
modificarDatos(66, "Juana", 25);