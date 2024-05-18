
// Adiciona um símbolo de "marcado" ao clicar em um item da lista
let list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Cria um novo item da lista ao clicar no botão "Adicionar"
function newElement() {
  let li = document.createElement("LI");
  let inputValue = document.getElementById("myInput").value;
  let t = document.createTextNode(inputValue);

  li.appendChild(t);
  if (inputValue === '') {
    Toastify({
      text: "Você precisa escrever algo!",
      duration: 1500,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "right", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "#ef4444",
        
      },
      
    }).showToast();
    return;

  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7"); // Cria um nó de texto para o botão de fechar
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  let close = document.getElementsByClassName("close"); // Atualiza a lista de botões de fechar
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      let div = this.parentElement;
      div.style.display = "none";
    }
  }
}

 // adiciona o dark mode
function myFunction() {
    chanceClasses();

    if (body.className === "") {
      btnImgMoon.src = "./assets/img/dark.png";
    } else {
      btnImgMoon.src = "./assets/img/moon.png";
    }
}

function chanceClasses(){
  body.classList.toggle('dark-mode');
  headElement.classList.toggle("header-dark");
  lisElement.classList.toggle("ul-dark")
}

const body = document.getElementsByTagName('body')[0];
const btnImgMoon = document.getElementById('myImage');
const headElement = document.getElementById("header-light");
const lisElement = document.getElementById("myUL");
const button = document.getElementById('btn-change');

button.addEventListener('click', myFunction)