const table=[
    {option: 1, traditional: "90-100",rango: "12-14",letter:"A", rating:"4",message:"Excelente"},
    {option: 2, traditional: "80-89",rango: "9-11",letter:"B", rating:"3",message:"Sobresaliente"},
    {option: 3, traditional: "70-79",rango: "6-8",letter:"C", rating:"2",message:"Aceptable"},
    {option: 4, traditional: "60-69",rango: "3-5",letter:"D", rating:"1",message:"Insuficiente"},
    {option: 5, traditional: "<60",rango: "1-2",letter:"E", rating:"0",message:"Deficiente"},
    {option: 6, traditional: "0",rango: "0",letter:"Z", rating:"0",message:"Pesimo"},
]

console.table(table)
let selc= prompt("Ingrese un tipo de calificacion(A(tradiciona), B(rango) o C(rating)):");
if (selc=="A"){
    let nota= prompt("Ingrese una nota:");

if (nota >= 90 && nota <= 100){
    alert(`Su calificacion es ${table[0].letter}` + `Exceeds proficiency`);
} else if (nota >= 80 && nota <= 89){
    alert(`Su calificacion es ${table[1].letter}` + `Demostrates proficiency`);
} else if (nota >= 70 && nota <= 79){
    alert(`Su calificacion es ${table[2].letter}` + `Approveches proficiency`);
}else if (nota >= 60 && nota <= 69){
    alert(`Su calificacion es ${table[3].letter}` + `Falls well velow proficiency`);
}else if (nota < 60){
    alert(`Su calificacion es ${table[4].letter}` + `Lacks all proficiency`);
} else if ( nota == 0){
    alert(`Su calificacion es ${table[5].letter}` + `No attempt made`);
} else {
    alert("valor no permitido")
}
}else if (selc=="B"){
    let rang= prompt("Ingrese un rango:");

if (rang >= 12 && rang <= 14){
    alert(`Su calificacion es ${table[0].letter}` + `Exceeds proficiency`);
} else if (rang >= 9 && rang <= 11){
    alert(`Su calificacion es ${table[1].letter}` + `Demostrates proficiency`);
} else if (rang >= 6 && rang <= 8){
    alert(`Su calificacion es ${table[2].letter}` + `Approveches proficiency`);
}else if (rang >= 3 && rang <= 5){
    alert(`Su calificacion es ${table[3].letter}` + `Falls well velow proficiency`);
}else if (rang >= 1 && rang <= 2){
    alert(`Su calificacion es ${table[4].letter}` + `Lacks all proficiency`);
} else if ( rang == 0){
    alert(`Su calificacion es ${table[5].letter}` + `No attempt made`);
} else {
    alert("valor no permitido")
}
}else if (selc=="C"){
    let rant= prompt("Ingrese un rating:");

if (rant =4){
    alert(`Su calificacion es ${table[0].letter}` + `Exceeds proficiency`);
} else if (rant=3){
    alert(`Su calificacion es ${table[1].letter}` + `Demostrates proficiency`);
} else if (rant = 2){
    alert(`Su calificacion es ${table[2].letter}` + `Approveches proficiency`);
}else if (rant =1){
    alert(`Su calificacion es ${table[3].letter}` + `Falls well velow proficiency`);
}else if (rant == 0){
    alert(`Su calificacion es ${table[4].letter}` + `Lacks all proficiency`);
} else if ( rant == 0){
    alert(`Su calificacion es ${table[5].letter}` + `No attempt made`);
} else {
    alert(`valor no permitido`)
}
}else{
    alert(`Opcion no valida`)
}


// const result = table.filter(e => e.option == opcion);
// console.log(result);

