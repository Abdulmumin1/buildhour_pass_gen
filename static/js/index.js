var index = 0;
var copied = false;

function gen_random(){

	return Math.floor(Math.random()*255+1)
}

function gen_random_color(name) {
	//generates random color and change the p text	
	let red = gen_random();
	let blue = gen_random();
	let green = gen_random();

	let box = document.getElementById('box');
	let color =  `rgb(${red},${green},${blue})`
	box.style.backgroundColor = color;

	
	let p = document.getElementById('p_here');
	
	if (index == name.length-1){
		window.location.reload();
	}
	p.innerText = name[index];
	index ++;
	if (copied == true){
		let but = document.getElementById('but1');
		but.textContent = 'copy'
		but.disabled = false;
	}
}

function copy_text() {
	let but = document.getElementById('but1');
	but.innerText = 'copied';
	copied = true;
	but.disabled = true;
	let text_p = document.getElementById('p_here');
	navigator.clipboard.writeText(text_p.innerText);


}

gen_random_color(['Click Generate', null])
