function verificar(){
  var data = new Date() 
  var ano = data.getFullYear()
  var fano = document.getElementById('txtano')
  var res = document.querySelector('div#res')
  if (fano.value.length == 0 || Number(fano.value) > ano){
      window.alert('[ERRO] Verifique os dados e tente novamente!')
  }else{
     
      var fsex = document.getElementsByName('radsex') // por ter [0] e [1] e é necessário utilizar um ou outro, deixo sem nada apos o parenreses. 
      var idade = ano - Number(fano.value) // ano variavel com função data.getFullYear e fano.txtano o valor adicionando no input
    //  res.innerHTML = `Idade calculada ${idade}`
      var genero = ''
      var img = document.createElement('img') // cria o elemento img
      img.setAttribute('id','foto')// atribui ao elemento img o id com nome foto. <img src="" alt="" id="foto">.
      img.style.width = '200px'
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src','img/criancamenino.png') // atribui o caminho da imagem
            //else if (idade >= 10 && idade < 21){
            } else if (idade < 21){
                    //jovem
                    img.setAttribute('src','img/jovemhomem.png')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src','img/homem.png')
            } else {
                //idoso
                img.setAttribute('src','img/idosohomem.png')
            }
        } if (fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src','img/criancamenina.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src','jovemmenina.png')
            } else if (idade < 50) {
                   //adulto
                img.setAttribute('src','img/mulher.png')
            }else{
            //idoso
            img.setAttribute('src','img/idosomulher.png')
            }
           
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)  // adicionar o elemento
  }
}