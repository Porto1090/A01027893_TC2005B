//Escribe dos funciones: la primera que invierta un arreglo de números y regrese un nuevo arreglo con el resultado; la segunda que modifique el mismo arreglo que se pasa como argumento. No se permite usar la función integrada 'reverse'.

function ReverseArray(array){
	let reversed= []
	let contador=0
	for(let i=array.length-1; i>=0; i--){
	reversed[contador]= array[i]
		contador++;  
	}
	console.log(reversed)
}

const array= [1, 2, 3, 4, 5]
const array2= [5, 3, 5, 3]
const array3= [10,5,5,10]
ReverseArray(array)
ReverseArray(array2)
ReverseArray(array3)
