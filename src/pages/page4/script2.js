import './styles4.css'
const story = document.createElement('story');
story.innerHTML = `
<div class="container">
    <h2>Planta Nuclear</h2>
        <article class="text-white">
            <p>
                Estando dentro de la planta nuclear, Ulrich (papa del ninio desaparecido), 
                hace preguntas al gerente del lugar. El gerente sospechosamente evade todas
                las preguntas, dejando a Ulrich con duda.
            </p>
        </article>
        <img src="../../../images/nuclearPlant.jpg" alt="Planta Nuclear" width="350" height="300">
</div>
`

document.body.appendChild(story);