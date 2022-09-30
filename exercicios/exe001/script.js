

function carregar(){
    var mensagem = document.getElementById('msg') // configura o elemento dentro do javascript pelo id
    var imagem = document.getElementById('imagem') // configura o elemento dentro do javascript pelo id
    var cordial = document.getElementsByTagName('div')[0] //configura o elemento pelo nome da tag
    var data = new Date()  // função data
    var hora = data.getHours() // configura a hora do dia
  //   var hora = 16
    document.body.style.textAlign = 'center' // alinha o elemento no centro
    
    
        if (hora < 12){
            //Bom Dia
            //mensagem.innerHTML = '<strong>Bom dia!</strong>'
            cordial.innerHTML = '<strong>Bom dia!</strong>'
            mensagem.innerHTML = `Agora são ${hora} horas.`
            imagem.src = 'img/manha.png' // configura a imagem
           // document.body.style.padding = '5px'
           document.body.style.fontSize = '12px' // configura o tamanho da fonte
            document.body.style.background = 'yellow'   // configura a cor do fundo
           
        }else if (hora > 12 && hora < 18){
            //Boa Tarde
            //mensagem.innerHTML = '<strong>Boa tarde!</strong>'
            cordial.innerHTML = '<strong>Boa Tarde!</strong>'
            mensagem.innerHTML = `Agora são ${hora} horas.`
            imagem.src = 'img/tarde.png'
          //  document.body.style.padding = '5px'
            document.body.style.fontSize = '12px'
            document.body.style.background = 'rgb(109, 94, 94)'
          
           
        }else{
            //Boa Noite
            //mensagem.innerHTML = '<strong>Boa noite!</strong>'
            cordial.innerHTML = '<strong>Boa Noite!</strong>'
            mensagem.innerHTML = `Agora são ${hora} horas.`
            imagem.src = 'img/noite.png'
           // document.body.style.padding = '5px'
            document.body.style.fontSize = '12px'
            document.body.style.background = 'black'
        }
}