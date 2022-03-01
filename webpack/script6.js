const story = document.createElement('story');
story.innerHTML = `
<div class="container">
        <article>
            <h2>Todo es ahora</h2>
            <p class="text-white">
                Ulrich corre lo más que puede hasta llegar al hospital, en donde entra y se esconde.
                Al ir caminando por los pasillos, se percata desde afuera de una ventana que su hijo
                Mike está acostado en una camilla. 
            </p>
        </article>
        <img src="../images/hospital.jpg" alt="" width="350" height="300">
            
        <article>
            <h2>Correr</h2>
            <p class="text-white">
                Ulrich y Mike se abrazan y deciden irse corriendo hacia la cueva. Para poder pasar por la
                puerta y así llegar al <span style="color:black">"presente".</span>
                <br>
                    Cuando estaban a punto de entrar a la cueva, la policía aparece, y junto con ellos,
                    el oficial mayor. Señala que encarcelen a Ulrich por asesinato de su hijo, además po
                    raptado a un niño (Mike). Ulrich dice que poder explicar todo, para que
                    no lo separan nuevamente de su hijo. Pero la policía no le escucha y se lo llevan,
                    dejando nuevamente a Mike barado en la nada.
                <br>
            </p>
        </article>

        <ul>
            <li>
                <a href="12.html">Tiempo después</a>
            </li>
        </ul>
</div>
`

document.body.appendChild(story);