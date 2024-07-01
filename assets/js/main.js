// Adiciona um símbolo de "marcado" ao clicar em um item da lista
const list = document.querySelector('ul');
list.addEventListener('click', function(event) {
  if (event.target.tagName === 'LI') {
    event.target.classList.toggle('checked');
  }
});

// Cria um novo item da lista ao clicar no botão "Adicionar"
function newElement() {
  const li = document.createElement("LI");
  const inputValue = document.getElementById("myInput").value;
  const task = document.createTextNode(inputValue);

  li.appendChild(task);
  if (inputValue === '') {
    Toastify({
      text: "Você precisa escrever algo!",
      duration: 1500,
      close: true,
      gravity: "top", 
      position: "right", 
      stopOnFocus: true, 
      style: {
        background: "#ef4444",
      },
      
    }).showToast();
    return;

  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

// Adiciona o X de fechar e remove o item
const span = document.createElement("SPAN");
const txt = document.createTextNode("\u00D7"); 
span.className = "close";
span.appendChild(txt);
li.appendChild(span);

const close = document.getElementsByClassName("close"); // Atualiza a lista de botões de fechar
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    const div = this.parentElement;
    div.style.display = "none";
  }
}
}

 // adiciona o dark mode
const body = document.getElementsByTagName('body')[0];
const btnImgMoon = document.getElementById('myImage');
const headElement = document.getElementById("header-light");
const lisElement = document.getElementById("myUL");
const button = document.getElementById('btn-change');

function darkmode() {
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

button.addEventListener('click', darkmode)