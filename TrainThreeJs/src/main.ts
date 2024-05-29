import { MainScene } from "./scene/MainScene";

const dom = document.getElementById("threejs");
const scene = new MainScene(dom as HTMLElement);

scene.onStart();
