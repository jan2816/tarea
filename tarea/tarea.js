// Función para duplicar cada elemento de un arreglo
function duplicarElementos(arr) {
    return arr.map(elemento => elemento * 2);
}

let numeros = [1, 2, 3, 4, 5];
let duplicados = duplicarElementos(numeros);
console.log(duplicados);

// Función para filtrar números pares de un arreglo
function filtrarNumerosPares(arr) {
    return arr.filter(numero => numero % 2 === 0);
}

let numerosPares = filtrarNumerosPares(numeros);
console.log(numerosPares);

// Función para sumar todos los elementos de un arreglo
function sumarElementos(arr) {
    return arr.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
}

let sumaTotal = sumarElementos(numeros);
console.log(sumaTotal);

// Función para saludar a los países que comienzan con una letra específica
function saludarPaisesQueEmpiezanCon(arr, letra) {
    return arr.filter(pais => pais.startsWith(letra)).map(pais => `Hola, bienvenido a ${pais}`);
}

let paisesSaludados = saludarPaisesQueEmpiezanCon(paises, 'B');
console.log(paisesSaludados);