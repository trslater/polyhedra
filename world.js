import { Scene, PerspectiveCamera, BoxGeometry, MeshNormalMaterial, Mesh, WebGLRenderer } from 'three'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"

export const makeWorld = (root, gui) => {
    const scene = new Scene()
    const camera = new PerspectiveCamera(75)
    const renderer = new WebGLRenderer()
    const controls = new OrbitControls(camera, renderer.domElement)
    const geometry = new BoxGeometry(2, 2, 2, 2)
    const material = new MeshNormalMaterial()
    const cube = new Mesh(geometry, material)
    
    camera.position.z = 5
    
    scene.add(cube)

    gui.add(cube.scale, "x", 0, 2).name("x Scale")
    gui.add(cube.scale, "y", 0, 2).name("y Scale")
    gui.add(cube.scale, "z", 0, 2).name("z Scale")

    const resize = (width, height) => {
        camera.aspect = width/height
        camera.updateProjectionMatrix()
        renderer.setSize(width, height)
    }
    
    const animate = () => {
        controls.update()
        requestAnimationFrame(animate)
        renderer.render(scene, camera)
    }

    const start = (width, height) => {
        resize(width, height)
        root.appendChild(renderer.domElement)
        animate()
    }

    return { start, resize }
}
