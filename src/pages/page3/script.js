import './styles3.css'
const story = document.createElement('story');
story.innerHTML = `
<div class="container">
    <h2>Secretos</h2>
        <article class="text-white">
             <p>
                En un pequenio pueblo en Alemania en el anio 2020, en la noche se juntan unos amigos en un bosque.
                Caminan hacia lo mas profundo del bosque, parando a descansar cerca de una cueva.
                De repente, se escucha un ruido extranio y fuerte, por lo que todos salen corriendo,
                separandose. Cuando vuelven a juntarse, se percatan que uno de ellos falta. ¡Desaparece un ninio sin dejar rastro alguno!
            </p>
        </article>
        <img src="../../../images/cave.jpg" alt="Cueva" width="350" height="300">
                
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