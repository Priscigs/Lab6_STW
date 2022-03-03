import { principalStory } from "./webpack/scriptIndex";

export const startApp = () => {
    document.getElementById("prueba").appendChild(principalStory());
}