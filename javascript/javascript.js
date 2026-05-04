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



// 1) mostrarPersonas

personas.forEach(p=>console.log(p.nombre));

// 2) agregarPersonas x DNI

personas.push(p={nombre: `Luciano Nahir Trevissan`, edad: 18, DNI: 48181723});
personas.forEach(p=>console.log(p));

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
    console.log(encontrada);
};
buscar3(44);

personas.splice(personas.DNI, 1);
console.log(personas);

// 6) modificarDatos x DNI

