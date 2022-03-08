"use strict";

require("./styles6.css");

const story = document.createElement('story');
story.innerHTML = "\n        <div class=\"container\">\n            <article>\n                <h2>Into the woods</h2>\n                <p class=\"text-white\">\n                    Ulrich se dirige al bosque y encuentra la cueva. Entonces decide adentrarse a ella.\n                    En lo profundo encuentra <span style=\"color:black\">dos caminos.</span>\n                </p>\n            </article>\n            <img src=\"../../../images/cave.jpg\" alt=\"Bosque\" width=\"350\" height=\"300\">\n\n            <ul>\n                <li>\n                    <a href=\"7.html\">Derecha</a>\n                </li>\n                <li>\n                    <a href=\"8.html\">Izquierda</a>\n                </li>\n            </ul>\n        </div>\n";
document.body.appendChild(story);