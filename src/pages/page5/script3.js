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