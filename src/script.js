import './style.css'
import * as THREE from 'three'

console.log(THREE)

//Scene
const scene = new THREE.Scene()

//Object
const geometry = new THREE.BoxGeometry(1,1,1)
const material = new THREE.MeshBasicMaterial({
    color: 'red'
})
const mesh = new THREE.Mesh(geometry, material)

scene.add(mesh)

const size = {
    width:800,
    height:600
}


//Camera
const camera = new THREE.PerspectiveCamera(65, size.width / size.height)
camera.position.z = 5
camera.position.y = 0
camera.position.x = -2

scene.add(camera)

//Renderer

const canvas = document.querySelector('.webgl')
const renderer = new THREE.WebGLRenderer({
canvas:canvas
})

//Excute
renderer.setSize(size.width, size.height)
renderer.render(scene, camera)