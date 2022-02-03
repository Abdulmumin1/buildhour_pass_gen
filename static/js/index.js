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
	let advurr = document.getElementById('head');
	let color =  `rgb(${red},${green},${blue})`
	box.style.backgroundColor = color;
	advurr.style.color = color;

	
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

	let text_p = document.getElementById('p_here');
	let range = document.createRange();
	range.selectNode(text_p);
	window.getSelection().removeAllRanges();
	window.getSelection().addRange(range)
	document.execCommand('copy')
	window.getSelection().removeAllRanges()
	but.innerText = 'copied';
	copied = true;
	but.disabled = true;
}

gen_random_color(['Click Generate', null])
