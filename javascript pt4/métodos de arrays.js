/*
    Array's
        - push -> adiciona mais um item ao array
        - length -> mostra o tamanho do array
        - sort -> organiza o array
        - delete -> deleta o item de uma posição do array
        - every -> esse método testa se todos os elementos do array passam em uma condição
        - some -> o .some() faz algo parecido com o .every(); a diferença é que o .every() se
        - fill -> preenche posições do array como desejarmos
        - find -> usado quando queremos encontrar algum elemento dentro do array
        - findIndex -> faz o memo que o .find() mas retorna o índice do elemento encontrado ao
        - concat() ->

        -includes -> método includes() determina se um array contém um determinado elemento
        -join -> método join() junta todos os elementos de um array

        - slice(fatiar) ->
        - splice ->
        - pop ->
        - shift ->
*/

const myArray = [1, 2, 3] // push
myArray.push(4) 
myArray.push(5)
myArray.push('texto') // sempre acrescentendo por último

console.log(myArray)




const myArray2 = [1, 2, 3] // length
console.log(myArray2.length)



const myArray3 = ['limão', 'cenoura', 'caqui'] // sort 
myArray3.sort()

console.log(myArray3)


const myArray4 = ['limão', 'cenoura', 'caqui'] // delete - espaço vazio
delete myArray4[1]

console.log(myArray4)



const myArray5 = [                              // every - retorna true se todos passarem
    {name: 'Nico', credit: 600},
	{name: 'Maria', credit: 900},
	{name: 'Joana', credit: 300},
	{name: 'Vanessa', credit: 200},
]
const isTrue = myArray5.every( user => user.credit > 100)

console.log(isTrue)



const myArray6 = [                              // some - retorna true se pelo menos um passar
    {name: 'Nico', credit: 600},
	{name: 'Maria', credit: 900},
	{name: 'Joana', credit: 300},
	{name: 'Vanessa', credit: 200},
]   
 const isTrue2 = myArray6.some(user => user.credit > 700)

 console.log(isTrue2)



 const number = [1, 2, 3, 4]                // fill
 number.fill(6, 0, 3) // o q vai ser inserido - pos inic - pos final
 console.log(number)



 const users = [
	{name: 'João', credit: 600},
	{name: 'Maria', credit: 900},
	{name: 'Carlos', credit: 300},
	{name: 'Vanessa', credit: 300},
];

const findAUser = users.find(user => user.name === 'Maria') // find
console.log(findAUser)



const users2 = [
	{name: 'João', credit: 600},
	{name: 'Maria', credit: 900},
	{name: 'Carlos', credit: 300},
	{name: 'Vanessa', credit: 300},
];

const findAUser2 = users.findIndex(user => user.name === 'Carlos') // findIndex - retorna qual posição o item está
console.log(findAUser2)






const array7 = ['a', 'b', 'c'];             // concat - concatenar 2 arrays
const array8 = ['d', 'e', 'f'];
const numbers1 = [1, 3, 5]
const numbers2 = [2, 4, 6]

const array9 = array7.concat(array8);
console.log(array9)

const array10 = numbers1.concat(numbers2)
console.log(array10)




const elements = ['fire', 'air', 'water']       // join
const myElements = elements.join(' - ')

console.log(myElements)




const elements2 = ['fire', 'air', 'water']      // pop
elements2.pop()

console.log(elements2)




const elements3 = ['fire', 'air', 'water']      // shift
elements3.shift()

console.log(elements3)



const names = ['Zé', 'Chico', 'Patrick', 'Mavi']    // slice
console.log(names.slice(2, 4))




const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai']
months.splice(0, 2, 'fim de experiência')

console.log(months)