let num = [5, 8, 4]

/*console.log(`Nosso vetor é o ${num}`) */
//num.push(7) // método interno para acrescentar o valor 7 na última posição / vai criar mais um elemento
//num.sort() // método interno ele vai pegar os elementos e colocar em ordem crescente.
//console.log(num)
//num[3] = 6 /* criar mais um elemento no indice 6 */

//num.length // saber o comprimento / length é um atributo e não um método
//num.push(1)
//num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições`) // moostra as posições
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(4) // procura posição
if (pos ==- 1) {
    console.log(" O valor não foi encontrado!")
} else {
    console.log(`O valor está na posição ${pos}`)

}
