import './styles6.css'
const story = document.createElement('story');
story.innerHTML = `
        <div class="container">
            <article>
                <h2>Into the woods</h2>
                <p class="text-white">
                    Ulrich se dirige al bosque y encuentra la cueva. Entonces decide adentrarse a ella.
                    En lo profundo encuentra <span style="color:black">dos caminos.</span>
                </p>
            </article>
            <img src="../../../images/cave.jpg" alt="Bosque" width="350" height="300">

            <ul>
                <li>
                    <a href="7.html">Derecha</a>
                </li>
                <li>
                    <a href="8.html">Izquierda</a>
                </li>
            </ul>
        </div>
`

document.body.appendChild(story);