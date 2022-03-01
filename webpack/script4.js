const story = document.createElement('story');
story.innerHTML = `
<div class="container">
        <article>
            <h2>Dobles vidas</h2>
            <p class="text-white">
                Ulrich sigue avanzando hasta encontrar una puerta secreta.
            </p>
        </article>

        <figure>
            <img src="../images/door.jpg" alt="Door" style="width:40%">
            <figcaption>Puerta Secreta.</figcaption>
        </figure>

        <article>
            <h2>Pasar por la puerta</h2>
            <p class="text-white">
                Al lograr entrar por la puerta, un aire desciende por donde pasa.
                Y finalmente sale por donde entró, la misma cueva.
            </p>
        </article>
        <img src="../images/cave.jpg" alt="Door" width="350" height="300">

        <ul>
            <li>
                <a href="9.html">Entrar a la cueva nuevamente</a>
            </li>
            <li>
                <a href="10.html">Seguir avanzando</a>
            </li>
        </ul>
</div>
`

document.body.appendChild(story);