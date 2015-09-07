// The below line is the whole bookmarklet but on one line for easier testing/copying/pasting.
// To regenerate it after making changes, use BookMarkletBuilder.pl
// javascript:(function()%20{var%20imgs%20=%20document.images;for(var%20i=0;%20i<imgs.length;%20i++)%20{var%20img%20=%20imgs[i];var%20altP%20=%20document.createElement(%27p%27);altP.innerHTML%20=%20img.alt;altP.id%20=%20img.id;altP.style.cssText%20=%20document.defaultView.getComputedStyle(img,%20%22%22).cssText;img.parentNode.insertBefore(altP,%20img);img.parentNode.removeChild(img);}})();

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
