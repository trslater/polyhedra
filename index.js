import { Scene, PerspectiveCamera, BoxGeometry, MeshNormalMaterial, Mesh, WebGLRenderer } from 'three'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"

const windowAspect = window.innerWidth/window.innerHeight

// 3D Environment
// ----------------------------------------------------------------------------

const scene = new Scene()
const camera = new PerspectiveCamera(75, windowAspect, 0.1, 1000)
const renderer = new WebGLRenderer()
const controls = new OrbitControls(camera, renderer.domElement)
const geometry = new BoxGeometry(2, 2, 2, 2)
const material = new MeshNormalMaterial()
const cube = new Mesh(geometry, material)

renderer.setSize(window.innerWidth, window.innerHeight)

document.body.appendChild(renderer.domElement)

scene.add(cube)

camera.position.z = 5

function animate() {
    controls.update()
	requestAnimationFrame(animate)
	renderer.render(scene, camera)
}

// Entrypoint
// ----------------------------------------------------------------------------

animate()
