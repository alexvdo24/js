 class options {

	constructor(height, width, bg, fontSize, textAlign) {
		this.height = '100px',
		this.width = '300px',
		this.bg = 'red',
		this.fontSize = '12px',
		this.textAlign = 'left'
	}

createDiv() {
let div = document.createElement('div');
div.innerHTML = "test";
div.style.cssText = `height:${this.height}; width:${this.width}; background-color:${this.bg}; font-size: ${this.fontSize}; text-aling:${this.textAlign};`;

document.body.appendChild(div);

}
}

let task = new options;
task.createDiv();