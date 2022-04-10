import * as THREE from 'three';

import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { BloomPass } from "three/examples/jsm/postprocessing/BloomPass";
import { GlitchPass } from "three/examples/jsm/postprocessing/GlitchPass";

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import gsap from 'gsap';

// init

// if this creates a conflic further in the project, we should declare constants outside and then
// call them inside function -export- function ini() before function -DONTEXPORT- animation();

let camera, scene, renderer;

const loader = new GLTFLoader();

export function init() {
    
    camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 );
    // in camera...
    // z dictates position relative to the camera (like a straight line between the model and your eyes)
    camera.position.z = 2;
    // x is the horizontal axis
    camera.position.x = .7;
    // y is the vertical
    camera.position.y = -.1;
    camera.rotation.z = 3;
    
    scene = new THREE.Scene();
    
    const light = new THREE.AmbientLight( 0xffffff, 1.2 );
    scene.add(light);
    
    // here we are loading the gltf model
    loader.load(
        // resource URL
        'models/pikachu_free_pokemon/scene.gltf',
        // called when the resource is loaded
        function ( gltf ) {
            
            let model = gltf.scene

            model.scale.set(2, 2, 2);

            // model positioning
            model.position.z = -.1;
            // y dictates the vertical position, being 0+ from mid screen to top.
            model.position.y = .2;
            // x dictates the horizontal position
            model.position.x = .5;
            
            gsap.to(camera.position, {
                z: .6,
                x: .5,
                y: .2,
                duration: 3,
                ease: "expo.out"
             } )
            gsap.to(camera.rotation, {
                z: 0,
                duration: 1,
            } )
            gsap.to(model.rotation, {
                x: 0.1,
                y:-0.5,
                duration: 1,
                delay: 1
            } )
            gsap.to(model.scale, {
                delay: 2,
                duration: 1,
                x: 1.55,
                y: 1.55,
                z: 1.55
            } )
            
            
            
            scene.add( model );
            
        },
        // called while loading is progressing
        function ( xhr ) {
    
            console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
    
        },
        // called when loading has errors
        function ( error ) {
    
            console.log( 'An error happened' );
            
        }
    );

    renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.setAnimationLoop( animation );
    renderer.setClearColor( 0xE9DCF5, 0);
    document.body.appendChild( renderer.domElement );

    // window.addEventListener( 'resize', () => {
    //     camera.aspect = window.innerWidth / window.innerHeight;
    //     camera.updateProjectMatrix();
    //     renderer.setSize(window.innerHeight, window.innerWidth);
    // })
    
}
// animation

function animation() {
    
    renderer.render( scene, camera );
    
}

// const composer = new EffectComposer( renderer );