import './styles10.css'
const story = document.createElement('story');
story.innerHTML = `
<div class="container">
        <article>
            <h2>Otra epoca?</h2>
            <p class="text-white">
                Ulrich desconcertado, vuelve a la estacion de policias, en donde se da cuenta que
                los policias no son a los que el conoce. De igual forma, dice que su hijo esta desaparecido
                y pide ayuda a los oficiales. Ninguno le presta mucha atencion, ya que estan entretenidos
                con otro caso <i>(Ninio dice venir del futuro y no encuentra a sus padres).</i>
            </p>
        </article>
</div>
`

document.body.appendChild(story);