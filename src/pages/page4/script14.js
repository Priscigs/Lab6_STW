import './styles4.css'
const story = document.createElement('story');
story.innerHTML = `
<div class="container">
        <details>
            <summary>HINT</summary>
            <p class="text-white">
                Ulrich vio una bodega extraña en donde no se le permitió el acceso.
            </p>
        </details>

        <ul>
            <li>
                <a href="6.html">Ir al bosque</a>
            </li>
            <li>
                <a href="5.html">Ver desde la perspectiva del niño perdido</a>
            </li>
        </ul>
</div>
`

document.body.appendChild(story);