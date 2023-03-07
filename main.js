const table=[
    {option: 1, traditional: "90-100",rango: "12-14",letter:"A", rating:"4",message:"Excelente"},
    {option: 2, traditional: "80-89",rango: "9-11",letter:"B", rating:"3",message:"Sobresaliente"},
    {option: 3, traditional: "70-79",rango: "6-8",letter:"C", rating:"2",message:"Aceptable"},
    {option: 4, traditional: "60-69",rango: "3-5",letter:"D", rating:"1",message:"Insuficiente"},
    {option: 5, traditional: "<60",rango: "1-2",letter:"E", rating:"0",message:"Deficiente"},
    {option: 6, traditional: "0",rango: "0",letter:"Z", rating:"0",message:"Pesimo"},
]

console.table(table)
let selc= prompt("Ingrese un tipo de calificacion(A, B o C):");
if (selc="A"){
    let nota= prompt("Ingrese una nota:");

if (nota >= 90 && nota <= 100){
    console.log(`Su calificacion es ${table[0].letter}`);
    console.log(`Exceeds proficiency`);
} else if (nota >= 80 && nota <= 89){
    console.log(`Su calificacion es ${table[1].letter}`);
    console.log(`Demostrates proficiency`);
} else if (nota >= 70 && nota <= 79){
    console.log(`Su calificacion es ${table[2].letter}`);
    console.log(`Approveches proficiency`);
}else if (nota >= 60 && nota <= 69){
    console.log(`Su calificacion es ${table[3].letter}`);
    console.log(`Falls well velow proficiency`);
}else if (nota < 60){
    console.log(`Su calificacion es ${table[4].letter}`);
    console.log(`Lacks all proficiency`);
} else if ( nota == 0){
    console.log(`Su calificacion es ${table[5].letter}`);
    console.log(`No attempt made`);
} else {
    console.log("valor no permitido")
}
}else if (selc="B"){
    let rang= prompt("Ingrese un rango:");

if (rang >= 12 && rang <= 14){
    console.log(`Su calificacion es ${table[0].letter}`);
    console.log(`Exceeds proficiency`);
} else if (rang >= 9 && rang <= 11){
    console.log(`Su calificacion es ${table[1].letter}`);
    console.log(`Demostrates proficiency`);
} else if (rang >= 6 && rang <= 8){
    console.log(`Su calificacion es ${table[2].letter}`);
    console.log(`Approveches proficiency`);
}else if (rang >= 3 && rang <= 5){
    console.log(`Su calificacion es ${table[3].letter}`);
    console.log(`Falls well velow proficiency`);
}else if (rang >= 1 && rang <= 2){
    console.log(`Su calificacion es ${table[4].letter}`);
    console.log(`Lacks all proficiency`);
} else if ( rang == 0){
    console.log(`Su calificacion es ${table[5].letter}`);
    console.log(`No attempt made`);
} else {
    console.log("valor no permitido")
}
}else if (selc="C"){
    let rant= prompt("Ingrese un rating:");

if (rant =4){
    console.log(`Su calificacion es ${table[0].letter}`);
    console.log(`Exceeds proficiency`);
} else if (rant=3){
    console.log(`Su calificacion es ${table[1].letter}`);
    console.log(`Demostrates proficiency`);
} else if (rant = 2){
    console.log(`Su calificacion es ${table[2].letter}`);
    console.log(`Approveches proficiency`);
}else if (rant =1){
    console.log(`Su calificacion es ${table[3].letter}`);
    console.log(`Falls well velow proficiency`);
}else if (rant == 0){
    console.log(`Su calificacion es ${table[4].letter}`);
    console.log(`Lacks all proficiency`);
} else if ( rant == 0){
    console.log(`Su calificacion es ${table[5].letter}`);
    console.log(`No attempt made`);
} else {
    console.log(`valor no permitido`)
}
}else{
    console.log(`Opcion no valida`)
}




// const result = table.filter(e => e.option == opcion);
// console.log(result);

