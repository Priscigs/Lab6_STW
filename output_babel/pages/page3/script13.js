"use strict";

require("./styles3.css");

const story = document.createElement('story');
story.innerHTML = "\n<div class=\"container\">\n    <article>\n    <h2>Busqueda</h2>\n        <p class=\"text-white\">\n            A la maniana siguiente, tanto su familia, amigos y policia (papa del ninio desaparecido\n            es policia del pequenio pueblo) salen a buscar al ninio desaparecido. Los policias \n            encuentran una extrania entrada hacia una planta nuclear, por lo que deciden hacer una \n            orden de allanamiento, con la esperanza de encontrar mas de alguna pista.\n        </p>  \n        \n    <ul>\n        <li>\n            <a href=\"4.html\">Entrar a la planta nuclear</a>\n        </li>\n        <li>\n            <a href=\"5.html\">Ver desde la perspectiva del ninio perdido</a>\n        </li>\n    </ul>\n\n    <audio controls>\n        <source src=\"../../../images/viento.mp3\" type=\"audio/mpeg\">\n            Your browser does not support the audio tag.\n    </audio>\n</div>";
document.body.appendChild(story);