import './styles2.css'
const story = document.createElement('story');
story.innerHTML = `
        <div class="container">
            <div class="row">
                <p>Cargando Comentario <progress></progress></p>
            </div>
            <div class="row">
                <div class="col">
                    <div class="myDiv">
                        <p>
                            En mi opinion pienso que fue una lectura bastante entretenida. Me gusta la idea de poner
                            al usuario en primer lugar para poder llegar a lograr un objetivo. Esto me recuerda
                            mucho a Design Thinking, ya que tambien es necesario poder aprender a trabajar en
                            equipo, a tener empatia hacia el usuario y demas. Ademas, creo que es bastante acertado 
                            lo que se menciona de UI. Que es mucho mejor empezar por esta area y luego a UX. Finalmente
                            me gusta la idea de que este sea un trabajo bastante solicitado y que al mismo tiempo se
                            pueda llegara tener bastante libertad al momento de trabajar.
                        </p>
                    </div>
                </div>
            </div>
            <div class="row"></div>
            <div class="row">
                <ol>
                    <li>
                        <a href="index.html">Regresar a pagina principal</a>
                    </li>
                </ol>
            </div>
            <div class="row">
                <footer>
                    <p>Autora: Priscilla González - 20689</p>
                </footer>
            </div>
        </div>          
`

document.body.appendChild(story);