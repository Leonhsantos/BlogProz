

let div = document.createElement("div")
div.innerHTML=`
<div class="meme">
<img
  class="img-meme"
  src="img/ww.jpg"
  alt="Breaking bad"
/>

<!-- Inicio perfil criador -->
<div class="descricao">
  <div class="perfil" style="display: flex">
    <div class="criador">
      <img class="img-perfil" src="img/perfil2.png" />
      <div class="criador-info">
        <a class="criador-nome">Pedrinho_Informatica</a>
        <a>1 nov 2023</a>
      </div>
    </div>

    <div class="reacoes">
      <div class="joia">
        <i class="fa-regular fa-thumbs-up joinha"></i>
        <a>25.3k</a>
      </div>
      <div class="comentario">
        <i class="fa-regular fa-comment comentarios "></i>
        <a> 853</a>
      </div>
    </div>
  </div>
</div>
<!-- fim perfil criador -->
</div>






<div class="meme">
<img
  class="img-meme"
  src="img/uieux.jpg"
  alt="Definição de UX e UI"
/>

<!-- Inicio perfil criador -->
<div class="descricao">
  <div class="perfil" style="display: flex">
    <div class="criador">
      <img class="img-perfil" src="img/perfil2.png" />
      <div class="criador-info">
        <a class="criador-nome">Pedrinho_Informatica</a>
        <a>1 nov 2023</a>
      </div>
    </div>

    <div class="reacoes">
      <div class="joia">
        <i class="fa-regular fa-thumbs-up joinha"></i>
        <a>25.3k</a>
      </div>
      <div class="comentario">
        <i class="fa-regular fa-comment comentarios "></i>
        <a> 853</a>
      </div>
    </div>
  </div>
</div>
<!-- fim perfil criador -->
</div>




`



let main = document.querySelector("main")
main.appendChild(div)

