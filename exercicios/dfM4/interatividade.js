let nav = document.getElementById('navegacao');
let img = nav.querySelectorAll("img");
let iframe = document.getElementsByTagName('iframe')[0];


for(var i=0; i < img.length; i++) {
	(function(val) {
		img[val].addEventListener("click", function() {
		let scrl = img[val].src;
		let dp = srcl.replace(/logo/g, 'tela');
		alert(`antes: ${srcl}, depois: ${dp}`);
	})
	}(i));
}