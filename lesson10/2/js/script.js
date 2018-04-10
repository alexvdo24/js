 class options {

	constructor(height, width, bg, fontSize, textAlign) {
		this.height = height,
		this.width = width,
		this.bg = bg,
		this.fontSize = fontSize,
		this.textAlign = textAlign
	}

createDiv() {
let div = document.createElement('div');
div.innerHTML = "test";
div.style.cssText = `height:${this.height}; width:${this.width}; background-color:${this.bg}; font-size: ${this.fontSize}; text-align:${this.textAlign};`;

document.body.appendChild(div);

}
}

let task = new options('50px','800px','yellow','18px', 'center');
task.createDiv();