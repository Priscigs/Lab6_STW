import './styles3.css'
const story = document.createElement('story');
story.innerHTML = `
<div class="container">
    <article>
    <h2>Busqueda</h2>
        <p class="text-white">
            A la maniana siguiente, tanto su familia, amigos y policia (papa del ninio desaparecido
            es policia del pequenio pueblo) salen a buscar al ninio desaparecido. Los policias 
            encuentran una extrania entrada hacia una planta nuclear, por lo que deciden hacer una 
            orden de allanamiento, con la esperanza de encontrar mas de alguna pista.
        </p>  
        
    <ul>
        <li>
            <a href="4.html">Entrar a la planta nuclear</a>
        </li>
        <li>
            <a href="5.html">Ver desde la perspectiva del ninio perdido</a>
        </li>
    </ul>

    <audio controls>
        <source src="../../../images/viento.mp3" type="audio/mpeg">
            Your browser does not support the audio tag.
    </audio>
</div>`

document.body.appendChild(story);