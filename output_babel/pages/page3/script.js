"use strict";

require("./styles3.css");

const story = document.createElement('story');
story.innerHTML = "\n<div class=\"container\">\n    <h2>Secretos</h2>\n        <article class=\"text-white\">\n             <p>\n                En un pequenio pueblo en Alemania en el anio 2020, en la noche se juntan unos amigos en un bosque.\n                Caminan hacia lo mas profundo del bosque, parando a descansar cerca de una cueva.\n                De repente, se escucha un ruido extranio y fuerte, por lo que todos salen corriendo,\n                separandose. Cuando vuelven a juntarse, se percatan que uno de ellos falta. \xA1Desaparece un ninio sin dejar rastro alguno!\n            </p>\n        </article>\n        <img src=\"../../../images/cave.jpg\" alt=\"Cueva\" width=\"350\" height=\"300\">\n</div>";
document.body.appendChild(story);