// var a =1;
// console.log(a);

// function x(){
//     console.log(a);
//     a=5;
//     console.log(a);
//     console.log(window.a);
//     }
//     x();
//     console.log(a);

/**Opción1: Bucle con let */

console.log("Antes:",p); //Antes underfined
for (let p= 0; p<3; p++) {
    console.log("-",p); // Durante: 0,1,2
}
console.log("Despues p :",p); // Despues:underfined


/**Opcion 2: Bucle con var */
console.log("Antes:",p);   //Antes underfined
for (var p = 0; p<3; p++) {
    console.log("-",p);      // Durante: 0,1,2
}
console.log("Despues p:",p);  // Despues:3(WTF!)