import './styles5.css'
const story = document.createElement('story');
story.innerHTML = `
<div class="container">        
        <article>
            <h2>Verdades</h2>
            <p class="text-white">
                Mike se siente horrorizado ya que el sabe que no pertenece ahi. Por lo que acude a un hospital
                que se encuentra cerca. Una enfermera lo hospitaliza y lo consuela. Por otra parte,
                el le dice a la enfermera que le contara un secreto. Se acerca a su oido y dice:
                <i>Yo no pertenezco aqui, creo que vengo del futuro.</i>
                <br>
                    La enfermera no le cree, pero poco a poco Mike le va mostrando algunos
                    objetos que llevaba en sus bolsillos, que claramente no son de la epoca de 1986.
                <br>
            </p>
        </article>
        
        <ul>
            <li>
                <a href="6.html">Ir al bosque</a>
            </li>
        </ul>
</div>
`

document.body.appendChild(story);