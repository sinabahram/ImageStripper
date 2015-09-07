// The below line is the whole bookmarklet but on one line for easier testing/copying/pasting.
// To regenerate it after making changes, use BookMarkletBuilder.pl
// javascript:function%20replaceAll(find,%20replace,%20str)%20{return%20str.replace(new%20RegExp(find,%20%27g%27),%20replace);}(function()%20{var%20mj%20=%20document.createElement(%27script%27);mj.setAttribute(%27src%27,%20%27https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML%27);document.body.appendChild(mj);var%20imgs%20=%20document.images;for(var%20i=0;%20i<imgs.length;%20i++)%20{var%20img%20=%20imgs[i];if(!(%27mathml%27%20in%20img.dataset))%20{continue;}var%20mathml%20=%20img.dataset.mathml;mathml%20=%20replaceAll(%27\xa8%27,%20%27%22%27,%20mathml);mathml%20=%20replaceAll(%27\xa7%27,%20%27&%27,%20mathml);mathml%20=%20replaceAll(%27\xab%27,%20%27<%27,%20mathml);mathml%20=%20replaceAll(%27\xbb%27,%20%27>%27,%20mathml);var%20tmpDiv%20=%20document.createElement(%27div%27);tmpDiv.innerHTML%20=%20mathml;var%20mathMLNode%20=%20tmpDiv.firstChild;mathMLNode.setAttribute(%27display%27%20,%27block%27);img.parentNode.insertBefore(mathMLNode,%20img.nextSibling);}})();

/**
* @Author Sina Bahram (sina@sinabahram.com)
*/

(function() {
var imgs = document.images;
for(var i=0; i<imgs.length; i++) {
	var img = imgs[i];
var altP = document.createElement('p');
altP.innerHTML = img.alt;
altP.id = img.id;
altP.style.cssText = document.defaultView.getComputedStyle(img, "").cssText;
img.parentNode.insertBefore(altP, img);
img.parentNode.removeChild(img);
            }
})();
