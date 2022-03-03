import './styles7.css'
const story = document.createElement('story');
story.innerHTML = `
        <div class="container">
            <article>
                <h2>Into the woods</h2>
                <p class="text-white">
                    No hay absolutamente nada. Puedes regresar.
                </p>
            </article>
            <img src="../../../images/black.jpg" alt="Negro" width="450" height="450">

            <ul>
                <li>
                    <a href="6.html">Regresar</a>
                </li>
            </ul>
        </div>
`

document.body.appendChild(story);