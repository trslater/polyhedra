import { Scene, PerspectiveCamera, BoxGeometry, MeshNormalMaterial, Mesh, WebGLRenderer } from 'three'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"
import { GUI } from "dat.gui"

// 3D World
// ----------------------------------------------------------------------------

const scene = new Scene()
const camera = new PerspectiveCamera(75, viewportAspect(), 0.1, 1000)
const renderer = new WebGLRenderer()
const controls = new OrbitControls(camera, renderer.domElement)
const geometry = new BoxGeometry(2, 2, 2, 2)
const material = new MeshNormalMaterial()
const cube = new Mesh(geometry, material)

renderer.setSize(...viewportDimensions())

document.body.appendChild(renderer.domElement)

scene.add(cube)

camera.position.z = 5

function animate() {
    controls.update()
	requestAnimationFrame(animate)
	renderer.render(scene, camera)
}

function resizeViewport() {
    camera.aspect = viewportAspect()
    camera.updateProjectionMatrix()
    renderer.setSize(...viewportDimensions())
}

function viewportAspect() {
    return window.innerWidth/window.innerHeight
}

function viewportDimensions() {
    return [window.innerWidth, window.innerHeight]
}

window.onresize = resizeViewport

// GUI
// ----------------------------------------------------------------------------

const gui = new GUI()

gui.add(cube.scale, "x", 0, 2).name("x Scale")
gui.add(cube.scale, "y", 0, 2).name("y Scale")
gui.add(cube.scale, "z", 0, 2).name("z Scale")

// Entrypoint
// ----------------------------------------------------------------------------

animate()
