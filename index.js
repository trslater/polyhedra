import { GUI } from "dat.gui"
import { makeWorld } from "/world.js"

const gui = new GUI()
const world = makeWorld(document.body, gui)

window.onresize = () => world.resize(window.innerWidth, window.innerHeight)

world.start(window.innerWidth, window.innerHeight)
