//Escribe una función que implemente el algoritmo 'bubble-sort' para ordenar una lista de números.

function BubbleSort(array){
	for(let i=0; i<array.length; i++){
	for(let j=0; j<(array.length-i-1); j++){
		if(array[j]>array[j+1]){
			let temp= array[j]
			array[j]= array[j+1]
			array[j+1]= temp
		}
	}
	}
	console.log(array);
}

const array= [1, 3, 8, 2, 5];
const array2= [7, 4, 8, 6 , 4];
const array3= [5, 7, 7, 2, 0]; 
BubbleSort(array);
BubbleSort(array2);
BubbleSort(array3);
