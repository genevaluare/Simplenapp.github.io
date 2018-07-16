function newData(ta, inp) {
	location.hash = strEncD(ta.value);
}

var letterpairs = ["TH", "HE", "AN", "RE", "ER", "IN", "ON", "AT", "ND", "ST", "ES", "EN", "OF", "TE", "ED", "OR", "TI", "HI", "AS", "TO", "LL", "EE", "SS", "OO", "TT", "FF", "RR", "NN", "PP", "CC", "th", "he", "an", "re", "er", "in", "on", "at", "nd", "st", "es", "en", "of", "te", "ed", "or", "ti", "hi", "as", "to", "ll", "ee", "ss", "oo", "tt", "ff", "rr", "nn", "pp", "cc", "I ", "i ", "li", "LI", "tr", "TR"];
var toBeExcluded = [" ", "\n", "\t", "\r", ".", ",", "!", "?", "(", ")", "[", "]", "{", "}", "@", "#", "$", "%", "^", "&", "*", "-", "_", "=", "+", ":", ";"];

var shortHandMin = 5000;

var ads = ["Random posts, random anything on <a href='http://gazu.ga' target='_blank'>gazu.ga</a>!", "Social networking without tracking - <a href='http://flownet.cf' target='_blank'>Try Flow</a>!", "Your product, here. FREE. <a href='http://simplenapp.github.io#PGgzPlNpbXBsZW4gQURTITwvaDM+PGJyPjxwPkRvIHlvdSBoYXZlIGEgcHJvZHVjdD8gUHJvbW90ZSBpdCBoZXJlLCBmb3IgPGI+RlJFRTwvYj4uIEp1c3QgZW50ZXIgdGhlIEhUTUwgY29kZSBvZiB5b3VyIGFkLjwvcD48YnI+PHA+PGI+Tk9URTwvYj46IEV2ZXJ5IHNpbmdsZSBhZCBpcyBjaGVja2VkIGJ5IGEgaHVtYW4gYmVmb3JlIGRpc3BsYXkhIEltYWdlcyBhcmUgbm90IGFsbG93ZWQuPC9wPjxicj48Zm9ybSBhY3Rpb249J2h0dHBzOi8vZ2lmbGUuMDAwd2ViaG9zdGFwcC5jb20vdC9hZHNvbnNpbXBsZW4ucGhwJyBtZXRob2Q9J3Bvc3QnPjxpbnB1dCBuYW1lPSdzJyBwbGFjZWhvbGRlcj0nRW50ZXIgSFRNTC4uLic+PGlucHV0IHR5cGU9J3N1Ym1pdCcgc3R5bGU9ImNvbG9yOiAjZmZmOyBiYWNrZ3JvdW5kOiAjNmJhM2ZmOyBib3JkZXItcmFkaXVzOiAxMDBweDsgcGFkZGluZzogOHB4IDE2cHg7IGJvcmRlcjogbm9uZTsgY3Vyc29yOiBwb2ludGVyOyIgdmFsdWU9J1Byb21vdGUgeW91cnNlbGYhJz4=' target='_blank'>Try today</a>.", "<twitter>Twitter</twitter> Check us out <a href='https://twitter.com/simplenapp' target='_blank'>here</a>!"];

var pageUrl = "http://simplenapp.github.io";
pageUrl = "http://simplenapp.github.io";

function shortenS(str) {
	var finStr = '';

	for(i = 0; str[i]; i += 2) {
		if(toBeExcluded.indexOf(str[i]) > -1) {
			i++;
			finStr += str[i];
			continue;
		}

		var c = str[i] + str[i + 1];
		c = c.replace("undefined", "");

		if(letterpairs.indexOf(c) > -1) {
			finStr = finStr + String.fromCharCode(shortHandMin + letterpairs.indexOf(c));
		} else {
			finStr = finStr + c;
		}
	}

	return finStr;
}

function backToNormalS(str) {
	var finStr = '';

	for(i = 0; str[i]; i++) {
		if(str.charCodeAt(i) >= shortHandMin) {
			finStr = finStr + letterpairs[str.charCodeAt(i) - shortHandMin];
		} else {
			finStr = finStr + str[i];
		}
	}

	return finStr;
}

function strEncD(str) {
	//return btoa(unescape(encodeURIComponent(shortenS(str))));
	return btoa(unescape(encodeURIComponent(str)));
}

function strDecD(str, x = 1) {
	//return atob(escape(decodeURIComponent(backToNormalS(str))));
	if(x == 0) {
		return decodeURIComponent(escape(atob(str)));
	}

	if(x == -1) {
		return decodeURIComponent(escape(str));
	}

	return addCustomEditing(decodeURIComponent(escape(atob(str))));
}

function addCustomEditing(str) {
	str = str.replace(/#t /g, "<span style='font-size: 30px; font-weight: 600;'>");
	str = str.replace(/#\n/g, "</span><br><br>");
	str = str.replace(/\n/g, "<br>");
	return str;
}

function qrCode() {
	var data = pageUrl + location.hash.replace("#", "%23");
	window.top.location.href = "http://api.qrserver.com/v1/create-qr-code/?color=000000&bgcolor=FFFFFF&data=" + data + "&qzone=1&margin=0&size=500x500&ecc=L";
}

function copyLink() {
	var linktopage = document.getElementById('linktopage');
	var copiedLink = document.getElementById('copiedLink');
	linktopage.value = pageUrl + location.hash;
	linktopage.select();
	document.execCommand("copy");
	
	if(copiedLink.style.display == "none") {
		copiedLink.style.display = "block";
		setTimeout(function () {
			copiedLink.style.display = "none";
		}, 3000);
	}
}

function generateAd() {
	var token = Math.floor(Math.random() * ads.length);
	if(Math.floor(Math.random() * 2) == 0) {
		document.getElementById("ad").innerHTML = "<adcover><ad>AD</ad>" + ads[token] + "</adcover><br><br>";
	} else {
		document.getElementById("ad").innerHTML = "";
	}
}

if(location.hash == "#about" || (localStorage.getItem("visitedfirst") != "yes" && location.hash.replace('#', '') == '')) {
	location.hash = "PGgzPldoYXQncyBTaW1wbGVuPzwvaDM+CjxwPldpdGggPGI+U2ltcGxlbjwvYj4geW91IGNhbiBjcmVhdGUgeW91ciBvd24gd2VicGFnZSwgd2l0aCBhIHVuaXF1ZSBsaW5rLiBMYXRlciBvbiwgeW91IGNhbiDwn5SXc2hhcmUgeW91ciBjcmVhdGlvbiB3aXRoIG90aGVycywgZXZlbiB0aHJvdWdoIGEgcXIgY29kZS48L3A+CjxwPjxiPvCfkqEgSWRlYXM8L2I+Ojxicj4K8J+SrCBFeHByZXNzIHlvdXJzZWxmIHdpdGggbG9uZ2VyIGRlc2NyaXB0aW9ucyBhbmQgcG9zdHM8YnI+CvCfjqggTWFrZSBjYW52YXMgb3IgYXNjaWkgY3JlYXRpb25zPGJyPgrwn5K7IENyZWF0ZSB5b3VyIG93biBhcHAKPC9wPgo8YSBocmVmPSIjIiB0YXJnZXQ9Il9ibGFuayI+PGJ1dHRvbiBzdHlsZT0nY29sb3I6ICNmZmY7IGJhY2tncm91bmQ6ICM2YmEzZmY7IGJvcmRlci1yYWRpdXM6IDEwMHB4OyBwYWRkaW5nOiA4cHggMTZweDsgYm9yZGVyOiBub25lOyBjdXJzb3I6IHBvaW50ZXI7Jz5TdGFydCBjcmVhdGluZzwvYnV0dG9uPjwvYT4=";
	localStorage.setItem("visitedfirst", "yes");
}

if(location.hash.replace('#', '') != '') {
	document.getElementById('content').innerHTML = strDecD(location.hash.replace('#', ''));
	/*document.getElementById('content').innerHTML = "<iframe src='data:text/html;charset=utf-8;base64," + strDecD(location.hash.replace('#', ''), -1) + "'></iframe>";*/
}

generateAd();
setInterval(generateAd, 60 * 1000);