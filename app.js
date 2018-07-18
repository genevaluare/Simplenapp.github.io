function newData() {
	var ta = gtE('t');
	location.hash = strEncD(ta.value);
}

var letterpairs = ["TH", "HE", "AN", "RE", "ER", "IN", "ON", "AT", "ND", "ST", "ES", "EN", "OF", "TE", "ED", "OR", "TI", "HI", "AS", "TO", "LL", "EE", "SS", "OO", "TT", "FF", "RR", "NN", "PP", "CC", "th", "he", "an", "re", "er", "in", "on", "at", "nd", "st", "es", "en", "of", "te", "ed", "or", "ti", "hi", "as", "to", "ll", "ee", "ss", "oo", "tt", "ff", "rr", "nn", "pp", "cc", "I ", "i ", "li", "LI", "tr", "TR"];
var toBeExcluded = [" ", "\n", "\t", "\r", ".", ",", "!", "?", "(", ")", "[", "]", "{", "}", "@", "#", "$", "%", "^", "&", "*", "-", "_", "=", "+", ":", ";"];

var shortHandMin = 5000;

var ads = ["Random posts, random anything on <a href='http://gazu.ga' target='_blank'>gazu.ga</a>!", "Social networking without tracking - <a href='http://flownet.cf' target='_blank'>Try Flow</a>!", "Your product, here. FREE. <a href='http://simplenapp.github.io#PGgzPlNpbXBsZW4gQURTITwvaDM+PGJyPjxwPkRvIHlvdSBoYXZlIGEgcHJvZHVjdD8gUHJvbW90ZSBpdCBoZXJlLCBmb3IgPGI+RlJFRTwvYj4uIEp1c3QgZW50ZXIgdGhlIEhUTUwgY29kZSBvZiB5b3VyIGFkLjwvcD48YnI+PHA+PGI+Tk9URTwvYj46IEV2ZXJ5IHNpbmdsZSBhZCBpcyBjaGVja2VkIGJ5IGEgaHVtYW4gYmVmb3JlIGRpc3BsYXkhIEltYWdlcyBhcmUgbm90IGFsbG93ZWQuPC9wPjxicj48Zm9ybSBhY3Rpb249J2h0dHBzOi8vZ2lmbGUuMDAwd2ViaG9zdGFwcC5jb20vdC9hZHNvbnNpbXBsZW4ucGhwJyBtZXRob2Q9J3Bvc3QnPjxpbnB1dCBuYW1lPSdzJyBwbGFjZWhvbGRlcj0nRW50ZXIgSFRNTC4uLic+PGlucHV0IHR5cGU9J3N1Ym1pdCcgc3R5bGU9ImNvbG9yOiAjZmZmOyBiYWNrZ3JvdW5kOiAjNmJhM2ZmOyBib3JkZXItcmFkaXVzOiAxMDBweDsgcGFkZGluZzogOHB4IDE2cHg7IGJvcmRlcjogbm9uZTsgY3Vyc29yOiBwb2ludGVyOyIgdmFsdWU9J1Byb21vdGUgeW91cnNlbGYhJz4=' target='_blank'>Try today</a>.", "<twitter>Twitter</twitter> Check us out <a href='https://twitter.com/simplenapp' target='_blank'>here</a>!"];

var pageUrl = "http://simplenapp.github.io";
pageUrl = "http://simplenapp.github.io";

var about = "PHAgc3R5bGU9J2ZvbnQtc2l6ZToyMHB4Oyc+V2hhdCdzIFNpbXBsZW4/PC9wPjxwPldpdGggPGI+U2ltcGxlbjwvYj4geW91IGNhbiBjcmVhdGUgeW91ciBvd24gd2VicGFnZSwgd2l0aCBhIHVuaXF1ZSBsaW5rLiBMYXRlciBvbiwgeW91IGNhbiDwn5SXc2hhcmUgeW91ciBjcmVhdGlvbiB3aXRoIG90aGVycywgZXZlbiB0aHJvdWdoIGEgcXIgY29kZS48L3A+PHA+PGI+8J+SoSBZb3UgY291bGQuLi48L2I+PGJyPjxicj7wn5KsIEV4cHJlc3MgeW91cnNlbGYgd2l0aCBsb25nZXIgZGVzY3JpcHRpb25zIGFuZCBwb3N0czxicj48YnI+8J+OqCBNYWtlIGNhbnZhcyBvciBhc2NpaSBjcmVhdGlvbnM8YnI+PGJyPvCfkrsgQ29kZSB5b3VyIG93biBhcHAgd2l0aCBKYXZhU2NyaXB0PC9wPjxwPlVzZWZ1bCBsaW5rczogPGFkY292ZXI+PGEgaHJlZj0naHR0cDovL3NpbXBsZW5hcHAuZ2l0aHViLmlvI1BIQWdjM1I1YkdVOUoyWnZiblF0YzJsNlpUb3lNSEI0T3ljK1YyVWdZV3hzYjNjZ1BHTnZaR1UrYzJOeWFYQjBhVzVuUEM5amIyUmxQand2Y0Q0OGNENUNaU0JqWVhKbFpuVnNJSGRvYVd4bElHVnVkR1Z5YVc1bklHUnBabVpsY21WdWRDQlRhVzF3YkdWdUlITnBkR1Z6TENCaGJHd2diMllnZEdobGJTQm9ZWFpsSUVwaGRtRlRZM0pwY0hRZ1pXNWhZbXhsWkM0Z1JtOXlJR1Y0WVcxd2JHVXNJSE5qY21sd2RITWdZMkZ1SUR4aFpHTnZkbVZ5UGp4aElHOXVZMnhwWTJzOUoyWnZjaWhwUFRFN2FUdzlNVEF3TzJrckt5bDdZV3hsY25Rb0lsTm9iM2RwYm1jZ1lXeGxjblFnWW05NElDSXJhU3NpTHpFd01DQXRMVlJvYVhNZ2FYTWdZVzRnWlhoaGJYQnNaU0VnTFMwZ1NHOXNaQ0IwYUdVZ1pXNTBaWElnYTJWNUlIVnVkR2xzSUdGc2JDQXhNREFnYjJZZ2RYTWdaR2x6WVhCd1pXRnlJaWs3ZlNjK1pteHZiMlFnZEdobElIQmhaMlU4TDJFK1BDOWhaR052ZG1WeVBpNEtDa0ZzZEdodmRXZG9JSE5qY21sd2RHbHVaeUJqWVc0Z1ltVWdaR0Z1WjJWeWIzVnpMQ0JUYVcxd2JHVnVJR1J2WlhOdUozUWdjM1J2Y21VZ1lXNTVJSFI1Y0dVZ2IyWWdaR0YwWVN3Z2MyOGdTbUYyWVZOamNtbHdkQ0JqWVc1dWIzUWdZV05qWlhOeklIUnZJRzExWTJnZ2FXNW1iM0p0WVhScGIyNGdZV0p2ZFhRZ2RHaGxJSFZ6WlhJdUNncEpaaUI1YjNVZ2FHRjJaU0JoYm5rZ2MzVm5aMlZ6ZEdsdmJuTWdZbUZ6WldRZ2IyNGdkR2hwY3lCMGIzQnBZeXdnWm1WbGJDQm1jbVZsSUhSdklHeGxZWFpsSUdGdUlEeGhaR052ZG1WeVBqeGhJR2h5WldZOUoyaDBkSEJ6T2k4dloybDBhSFZpTG1OdmJTOVRhVzF3YkdWdVlYQndMMU5wYlhCc1pXNWhjSEF1WjJsMGFIVmlMbWx2TDJsemMzVmxjeWNnZEdGeVoyVjBQU2RmWW14aGJtc25QbWx6YzNWbElHOXVJRWRwZEdoMVlqd3ZZVDQ4TDJGa1kyOTJaWEkrTGp3dmNEND0nIHRhcmdldD0nX2JsYW5rJz5TY3JpcHRpbmc8L2E+IOKWqu+4jyA8YSBocmVmPSdodHRwczovL2dpdGh1Yi5jb20vU2ltcGxlbmFwcCcgdGFyZ2V0PSdfYmxhbmsnPkdpdGh1YjwvYT4g4paq77iPIDxhIGhyZWY9JyNhYm91dCcgdGFyZ2V0PSdfYmxhbmsnPkFib3V0PC9hPjwvYWRjb3Zlcj48L3A+PGJyPjxhIGhyZWY9IiMiIHRhcmdldD0iX2JsYW5rIj48YnV0dG9uIHN0eWxlPSJjb2xvcjogI2ZmZjsgYmFja2dyb3VuZDogIzZiYTNmZjsgYm9yZGVyLXJhZGl1czogMTAwcHg7IHBhZGRpbmc6IDhweCAxNnB4OyBib3JkZXI6IG5vbmU7IGN1cnNvcjogcG9pbnRlcjsiPlN0YXJ0IGNyZWF0aW5nPC9idXR0b24+PC9hPg==";

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
	if(Math.floor(Math.random() * 20) == 0 && location.hash != about) {
		document.getElementById("ad").innerHTML = "<adcover><ad>AD</ad>" + ads[token] + "</adcover><br><br>";
	} else {
		document.getElementById("ad").innerHTML = "";
	}
}

function gtE(id) {
	return document.getElementById(id);
}

gtE('qr').addEventListner("click", qrCode);
gtE('cl').addEventListner("click", copyLink);
gtE('t').addEventListner("keyup", newData);

if(location.hash == "#about" || (localStorage.getItem("visitedfirst") != "yes" && location.hash.replace('#', '') == '')) {
	location.hash = about;
	localStorage.setItem("visitedfirst", "yes");
}

if(location.hash.replace('#', '') != '') {
	document.getElementById('content').innerHTML = strDecD(location.hash.replace('#', ''));
	/*document.getElementById('content').innerHTML = "<iframe src='data:text/html;charset=utf-8;base64," + strDecD(location.hash.replace('#', ''), -1) + "'></iframe>";*/
}

generateAd();
setInterval(generateAd, 60 * 1000);