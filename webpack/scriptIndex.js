export const principalStory = () => {
  const story = document.createElement('story');
    story.innerHTML = `
            <div class="container">
                <div id="d"></div>
                <div id="d1"></div>
                <div id="a"></div>
                <div id="a1"></div>
                <div id="a2"></div>
                <div id="r"></div>
                <div id="r2"></div>
                <div id="r3"></div>
                <div id="k"></div>
                <div id="k1"></div>
                <div id="k2"></div>
            </div>
            
            <div class="container">
                <p class="text-white">.</p>
            </div>
            <div class="container">
                <p class="text-white">.</p>
            </div>
            <div class="container">
                <p class="text-white">.</p>
            </div>
            <div class="container">
                <p class="text-white">.</p>
            </div>
            <div class="container">
                <p class="text-white">.</p>
            </div>
            <div class="container">
                <p class="text-white">.</p>
            </div>
            <div class="container">
                <p class="text-white">.</p>
            </div>
            <div class="container">
                <p class="text-white">.</p>
            </div>
            <div class="container">
                <p class="text-white">.</p>
            </div>
            <div class="container">
                <p class="text-white">.</p>
            </div>

            <div class="container">
                <p class="text-white">
                    Un humano vive 3 vidas. La primera termina con la perdida de la ingenuidad,
                    la segunda con la perdida de la inocencia, y la tercera con la perdida
                    de la vida misma. Es inevitable que pasemos por las 3 etapas.
                </p>
                <ol>
                    <li>
                        <a href="2.html">Comentario</a>
                    </li>
                    <li>
                        <a href="3.html">Comenzar</a>
                    </li>
                </ol>
                
                <footer>
                    <p class="text-white">Autora: Priscilla González - 20689</p>
                </footer>

                <a href="https://github.com/Priscigs/Lab6_STW">Link de Github</a>
            </div>    
    `

    document.body.appendChild(story);
}