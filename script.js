




//#####################################################################
// inicio  do box light
var modal = document.getElementById("box");
var modal2 = document.getElementById("box2")
var modal3 = document.getElementById("box3");
var modal4 = document.getElementById("box4")
// aqui esta as imagen e texto abaixo da imagen declaraçao
var img = document.getElementById("galeria");
var img2 = document.getElementById("uncharted");
var img3 = document.getElementById("telefone");
var img4 = document.getElementById("superman");
var modalImg = document.getElementById("img01");
var modalImg2 =document.getElementById("img2");
var modalImg3 =document.getElementById("img3");
var modalImg4 =document.getElementById("img4");
var captionText = document.getElementById("caption");
var captionText2 = document.getElementById("caption2");
var captionText3 = document.getElementById("caption3");
var captionText4 = document.getElementById("caption4");

img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
img2.onclick = function(){
    modal2.style.display = "block";
    modalImg2.src = this.src;
    captionText2.innerHTML = this.alt;
  }
  img3.onclick = function(){
    modal3.style.display = "block";
    modalImg3.src = this.src;
    captionText3.innerHTML = this.alt;
  }
  img4.onclick = function(){
    modal4.style.display = "block";
    modalImg4.src = this.src;
    captionText4.innerHTML = this.alt;
  }
// aqui colocamos o ponto para fechar a janela
var span = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close2")[0]
var span3 = document.getElementsByClassName("close3")[0]
var span4 = document.getElementsByClassName("close4")[0]

// quando clicar no (x), fecha a janela
span.onclick = function() { 
    modal.style.display = "none";
  }
span2.onclick = function() { 
  modal2.style.display = "none";
}
span3.onclick = function() { 
    modal3.style.display = "none";
  }
  span4.onclick = function() { 
    modal4.style.display = "none";
  }
//final do box light
//##########################################################################

function car(){
 document.getElementById('carro').src='./img/branco.png';
}
function carBlack(){
  document.getElementById('carro').src='./img/black.png';
}
function carRed(){
  document.getElementById('carro').src='./img/red.png';
}