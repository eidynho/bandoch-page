import * as THREE from "three"
import Figure from "./Figure"

const perspective = 840

export default class Scene {
	constructor() {
		this.container = document.getElementById("stage")
		this.scene = new THREE.Scene()
		this.figure = new Figure(this.scene, () => this.update())

		this.renderer = new THREE.WebGLRenderer({
			canvas: this.container,
			alpha: true
		})

		this.renderer.setSize(window.innerWidth / 1.08, window.innerHeight / 1.08)
		this.renderer.setPixelRatio(window.devicePixelRatio)

		this.initLights()
		this.initCamera()
	}

	initCamera() {
		const fov = (180 * (2 * Math.atan(window.innerHeight / 2 / perspective))) / Math.PI
		this.camera = new THREE.PerspectiveCamera(fov, window.innerWidth / window.innerHeight, 1, 10000)
		this.camera.position.set(0, 0, perspective)
	}

	initLights() {
		const ambientLight = new THREE.AmbientLight("#fff", 2)
		this.scene.add(ambientLight)
	}



	onResize() {
		this.W = window.innerWidth
		this.H = window.innerHeight

		this.camera.aspect = this.W / this.H

		this.camera.updateProjectionMatrix()
		this.renderer.setSize(this.W, this.H)
	}

	onToggleView({ target, open }) {
		this.activeTile = target // !== undefined ? target : this.activeTile

		ev('lockScroll', { lock: open })
		ev('tile:zoom', { tile: this.activeTile, open })
	}



	update() {
		if (this.renderer === undefined) return
		requestAnimationFrame(this.update.bind(this))

		this.figure.update()

		this.renderer.render(this.scene, this.camera)
	}
}
