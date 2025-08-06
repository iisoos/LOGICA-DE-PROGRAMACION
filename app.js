// El usuario elige el límite superior del juego
let limiteSuperior = parseInt(prompt("¿Hasta qué número quieres jugar? (Ej: 10, 100, 1000):"));

// VARIABLES
let numeroSecreto = Math.floor(Math.random() * limiteSuperior) + 1;
let numeroUsuario = 0;
let intentos = 1;
let maximosIntentos = 3;

// console.log(numeroSecreto); 

while (numeroUsuario != numeroSecreto) {
  numeroUsuario = parseInt(prompt(`Ingresa un número entre 1 y ${limiteSuperior}:`));

  console.log(typeof(numeroUsuario));

  if (numeroUsuario == numeroSecreto) { 
    alert(`¡Acertaste! El número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}.`);
    break;
  } else {
    if (numeroUsuario > numeroSecreto) {
      alert('El número secreto es menor.');
    } else {
      alert('El número secreto es mayor.');
    }

    intentos++;

    if (intentos > maximosIntentos) {
      alert(`Llegaste al número máximo de ${maximosIntentos} intentos. El número era ${numeroSecreto}.`);
      break;
    }
  }
}

/*
//VARIABLES
 let numeroSecreto = Math.floor(Math.random()*10)+1;
 let numeroUsuario = 0;
 let intentos = 1;
 //let palabraVeces = 'vez';
 let maximosIntentos = 3;

// console.log(numeroSecreto);

 while(numeroUsuario != numeroSecreto){
    let numeroUsuario = parseInt(prompt("Me indicas un número entre 1 y 10 por favor: "));

    console.log(typeof(numeroUsuario));
    /*
    Este código realiza
    la comparación
    ---
    if (numeroUsuario == numeroSecreto) { 
        alert(`Acertaste, el número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1  ? 'vez' : 'veces'}`);

    } else {
        if (numeroUsuario > numeroSecreto) {
            alert('El número secreto es menor');
        } else {
            alert('El número secreto es mayor')
        }
        //intentos= intentos + 1;
        //intentos +=1;
        intentos++;
        //palabraVeces = 'veces'
        if (intentos > 3){
            alert(`Llegaste al numero máximo de ${maximosIntentos} intentos.`);
            break;
        } 
        //alert('Lo siento, no acertaste el número');
    }
} */










// alert("¡Bienvenida y bienvenido a nuestro sitio web!");
// let nombre = "Lua";
// let edad = 25;

// let numeroDeVentas = 50;

// let saldoDisponible = 1000;
// alert("¡Error! Completa todos los campos");
// let mensajeDeError = "¡Error! Completa todos los campos";
// alert(mensajeDeError);
// let nombre = prompt("¿Cuál es tu nombre?");
// let edad = prompt("¿Cuál es tu edad?");
// if (edad >= 18) {
//     alert("¡Puedes obtener tu licencia de conducir!");
// }

