let nav = document.getElementById('navegacao');
let img = nav.querySelectorAll("img");
let iframe = document.getElementsByTagName('iframe')[0];


for(var i=0; i < img.length; i++) {
	(function(val) {
		img[val].addEventListener("click", function() {
			let arq = img[val].src;
			let outro = arq.replace(/logo/g, 'tela');
			iframe.setAttribute("src", outro);
		});
	}(i));
}