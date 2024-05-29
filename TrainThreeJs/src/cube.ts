import * as THREE from 'three';

export class cube{

    cubeMesh: THREE.Mesh | null = null;

    constructor (scene: THREE.Scene, posX: number, posY: number, posZ: number, colorHex: THREE.ColorRepresentation) {
        const geometry = new THREE.BoxGeometry(20, 20, 20);
        const material = new THREE.MeshBasicMaterial({color: colorHex});

        this.cubeMesh = new THREE.Mesh(geometry, material);
        this.cubeMesh.position.set(posX, posY, posZ);

        scene.add(this.cubeMesh);
    }
}