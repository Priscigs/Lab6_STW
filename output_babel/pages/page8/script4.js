"use strict";

require("./styles8.css");

const story = document.createElement('story');
story.innerHTML = "\n<div class=\"container\">\n        <article>\n            <h2>Dobles vidas</h2>\n            <p class=\"text-white\">\n                Ulrich sigue avanzando hasta encontrar una puerta secreta.\n            </p>\n        </article>\n\n        <figure>\n            <img src=\"../../../images/door.jpg\" alt=\"Door\" style=\"width:40%\">\n            <figcaption>Puerta Secreta.</figcaption>\n        </figure>\n\n        <article>\n            <h2>Pasar por la puerta</h2>\n            <p class=\"text-white\">\n                Al lograr entrar por la puerta, un aire desciende por donde pasa.\n                Y finalmente sale por donde entr\xF3, la misma cueva.\n            </p>\n        </article>\n        <img src=\"../../../images/cave.jpg\" alt=\"Door\" width=\"350\" height=\"300\">\n\n        <ul>\n            <li>\n                <a href=\"9.html\">Entrar a la cueva nuevamente</a>\n            </li>\n            <li>\n                <a href=\"10.html\">Seguir avanzando</a>\n            </li>\n        </ul>\n</div>\n";
document.body.appendChild(story);