
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
    let element = document.body;
    let imgElement = document.getElementById('myImage');
    let headElement = document.getElementById("header-light");
    let lisElement = document.getElementById("myUL");

    if (element.className === "") {
        element.classList.add("dark-mode");
        imgElement.src = "./assets/img/moon.png";
        headElement.classList.remove("header-light");
        headElement.classList.add("header-dark");

        lisElement.classList.remove("ul-light");
        lisElement.classList.add("ul-dark");
    } else {
        element.classList.remove("dark-mode");
        imgElement.src = "./assets/img/dark.png";
        headElement.classList.remove("header-dark");
        headElement.classList.add("header-light");

        lisElement.classList.remove("ul-dark");
        lisElement.classList.add("ul-light");
    }
}

