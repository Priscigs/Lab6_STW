import './styles5.css'
const story = document.createElement('story');
story.innerHTML = `
<div class="container">
    <h2>Pasado y Presente</h2>
        <article class="text-white">
            <p>
                Mike, el ninio perdido se despierta a la maniana siguiente de su desaparicion
                y se da cuenta que está en el bosque. Camina hacia su casa, pero al llegar a ella,
                se da cuenta que otras personas viven ahi. Asustado, se dirige hacia la escuela (lugar
                donde trabaja su mama).
                <br>
                    Al llegar a la escuela, se percata que los estudiantes
                    visten y se comportan diferentes. Se acerca a una ninia a la cual le pregunta que en 
                    donde se encuentra. Ella le dice que en Alemania, a lo que el responde, ¿en que
                    anio? La ninia dice: <b>Estamos en 1986</b>
                <br> 
            </p>
        </article>
        <img src="../../../images/school.jpg" alt= "Escuela" width="350" height="300">
</div>
`

document.body.appendChild(story);