function Adicionar() {
  let numero = document.querySelector('input#txtn')
  let list = document.querySelector('select#listNumber')
 
  if (numero.value.length == 0) {
    window.alert("Digite um valor!!")
  }else{
    let n = Number(numero.value)
    
    let c = 1
    while( c <= 100) {
      let item = Number(list.value)
      item.value = list.value
    }
    
  }
 
}