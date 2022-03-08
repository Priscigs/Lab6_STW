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
</div>`

document.body.appendChild(story);