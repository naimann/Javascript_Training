import * as THREE from 'three';
import { cube } from '../cube';



export class MainScene {

    scene: THREE.Scene;
    renderer: THREE.WebGLRenderer;
    camera: THREE.PerspectiveCamera;
    container: HTMLElement;

    cubeClassA: cube | null = null;
    cubeClassB: cube | null = null;
    cubeClassC: cube | null = null;


    constructor(container: HTMLElement) {

        this.scene = new THREE.Scene();

        this.renderer = new THREE.WebGLRenderer();
        this.container = container;
        this.camera = new THREE.PerspectiveCamera(75, (this.container.clientWidth / this.container.clientHeight), 0.1, 1000);

        this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
        this.container.appendChild(this.renderer.domElement);
        this.container.addEventListener('click', this.onClick);

        this.renderer.setAnimationLoop(this.render);
    }
    
    onStart = () => {
        this.cubeClassA = new cube(this.scene, -50, 0, 0, 0x0000ff);
        this.cubeClassB = new cube(this.scene, 0, 0, 0, 0x00ff00);
        this.cubeClassC = new cube(this.scene, 50, 0, 0, 0xff0000);

        this.camera.position.set(0, 75, 100);
        this.camera.lookAt(0, 0, 0);
    }

    onClick = (event:any) => {
        const rectBox = this.container.getBoundingClientRect();
        const mousePositionNormalize = {
            x: (event.x / rectBox.width) * 2 - 1,
            y: (event.y / rectBox.height) * 2 - 1,
        }

        const raycaster = new THREE.Raycaster();
        raycaster.setFromCamera(new THREE.Vector2(mousePositionNormalize.x, mousePositionNormalize.y), this.camera);

        const intersects = raycaster.intersectObjects(this.scene.children);

        if (intersects.length > 0) {
            intersects[0].object.position.x = Math.random() * 50;
            intersects[0].object.position.y = Math.random() * 50;
        }
    }

    render = () => {
        this.cubeClassA?.cubeMesh?.rotateX(0.01);
        this.cubeClassB?.cubeMesh?.rotateY(0.02);
        this.cubeClassC?.cubeMesh?.rotateZ(0.03);
        
        this.renderer.render(this.scene, this.camera);
    }
}

