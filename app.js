function newData(ta, inp) {
	location.hash = strEncD(ta.value);
}

var letterpairs = ["TH", "HE", "AN", "RE", "ER", "IN", "ON", "AT", "ND", "ST", "ES", "EN", "OF", "TE", "ED", "OR", "TI", "HI", "AS", "TO", "LL", "EE", "SS", "OO", "TT", "FF", "RR", "NN", "PP", "CC", "th", "he", "an", "re", "er", "in", "on", "at", "nd", "st", "es", "en", "of", "te", "ed", "or", "ti", "hi", "as", "to", "ll", "ee", "ss", "oo", "tt", "ff", "rr", "nn", "pp", "cc", "I ", "i ", "li", "LI", "tr", "TR"];

//var letterpairs = ["TH", "HE", "IN", "ER", "AN", "RE", "ES", "ON", "ST", "NT", "EN", "AT", "ED", "ND", "TO", "OR", "EA", "TI", "AR", "TE", "NG", "AL", "IT", "AS", "IS", "HA", "ET", "SE", "OU", "OF", "LE", "SA", "VE", "RO", "RA", "RI", "HI", "NE", "ME", "DE", "CO", "TA", "EC", "SI", "LL", "SO", "NA", "LI", "LA", "EL", "MA", "DI", "IC", "RT", "NS", "RS", "IO", "OM", "CH", "OT", "CA", "CE", "HO", "BE", "TT", "FO", "TS", "SS", "NO", "EE", "EM", "AC", "IL", "DA", "NI", "UR", "WA", "SH", "EI", "AM", "TR", "DT", "US", "LO", "PE", "UN", "NC", "WI", "UT", "AD", "EW", "OW", "GE", "EP", "AI", "LY", "OL", "FT", "OS", "EO", "EF", "PR", "WE", "DO", "MO", "ID", "IE", "MI", "PA", "FI", "PO", "CT", "WH", "IR", "AY", "GA", "SC", "KE", "EV", "SP", "IM", "OP", "DS", "LD", "UL", "OO", "SU", "IA", "GH", "PL", "EB", "IG", "VI", "IV", "WO", "YO", "RD", "TW", "BA", "AG", "RY", "AB", "LS", "SW", "AP", "FE", "TU", "CI", "FA", "HT", "FR", "AV", "EG", "GO", "BO", "BU", "TY", "MP", "OC", "OD", "EH", "YS", "EY", "RM", "OV", "GT", "YA", "CK", "GI", "RN", "GR", "RC", "BL", "LT", "YT", "OA", "YE", "OB", "DB", "FF", "SF", "RR", "DU", "KI", "UC", "IF", "AF", "DR", "CL", "EX", "SM", "PI", "SB", "CR", "TL", "OI", "RU", "UP", "BY", "TC", "NN", "AK", "SL", "NF", "UE", "DW", "AU", "PP", "UG", "RL", "RG", "BR", "CU", "UA", "DH", "RK", "YI", "LU", "UM", "BI", "NY", "NW", "QU", "OG", "SN", "MB", "VA", "DF", "DD", "MS", "GS", "AW", "NH", "PU", "HR", "SD", "TB", "PT", "NM", "DC", "GU", "TM", "MU", "NU", "MM", "NL", "EU", "WN", "NB", "RP", "DM", "SR", "UD", "UI", "RF", "OK", "YW", "TF", "IP", "RW", "RB", "OH", "KS", "DP", "FU", "YC", "TP", "MT", "DL", "NK", "CC", "UB", "RH", "NP", "JU", "FL", "DN", "KA", "PH", "HU", "JO", "LF", "YB", "RV", "OE", "IB", "IK", "th", "he", "in", "er", "an", "re", "es", "on", "st", "nt", "en", "at", "ed", "nd", "to", "or", "ea", "ti", "ar", "te", "ng", "al", "it", "as", "is", "ha", "et", "se", "ou", "of", "le", "sa", "ve", "ro", "ra", "ri", "hi", "ne", "me", "de", "co", "ta", "ec", "si", "ll", "so", "na", "li", "la", "el", "ma", "di", "ic", "rt", "ns", "rs", "io", "om", "ch", "ot", "ca", "ce", "ho", "be", "tt", "fo", "ts", "ss", "no", "ee", "em", "ac", "il", "da", "ni", "ur", "wa", "sh", "ei", "am", "tr", "dt", "us", "lo", "pe", "un", "nc", "wi", "ut", "ad", "ew", "ow", "ge", "ep", "ai", "ly", "ol", "ft", "os", "eo", "ef", "pr", "we", "do", "mo", "id", "ie", "mi", "pa", "fi", "po", "ct", "wh", "ir", "ay", "ga", "sc", "ke", "ev", "sp", "im", "op", "ds", "ld", "ul", "oo", "su", "ia", "gh", "pl", "eb", "ig", "vi", "iv", "wo", "yo", "rd", "tw", "ba", "ag", "ry", "ab", "ls", "sw", "ap", "fe", "tu", "ci", "fa", "ht", "fr", "av", "eg", "go", "bo", "bu", "ty", "mp", "oc", "od", "eh", "ys", "ey", "rm", "ov", "gt", "ya", "ck", "gi", "rn", "gr", "rc", "bl", "lt", "yt", "oa", "ye", "ob", "db", "ff", "sf", "rr", "du", "ki", "uc", "if", "af", "dr", "cl", "ex", "sm", "pi", "sb", "cr", "tl", "oi", "ru", "up", "by", "tc", "nn", "ak", "sl", "nf", "ue", "dw", "au", "pp", "ug", "rl", "rg", "br", "cu", "ua", "dh", "rk", "yi", "lu", "um", "bi", "ny", "nw", "qu", "og", "sn", "mb", "va", "df", "dd", "ms", "gs", "aw", "nh", "pu", "hr", "sd", "tb", "pt", "nm", "dc", "gu", "tm", "mu", "nu", "mm", "nl", "eu", "wn", "nb", "rp", "dm", "sr", "ud", "ui", "rf", "ok", "yw", "tf", "ip", "rw", "rb", "oh", "ks", "dp", "fu", "yc", "tp", "mt", "dl", "nk", "cc", "ub", "rh", "np", "ju", "fl", "dn", "ka", "ph", "hu", "jo", "lf", "yb", "rv", "oe", "ib", "ik", "Th", "He", "In", "Er", "An", "Re", "Es", "On", "St", "Nt", "En", "At", "Ed", "Nd", "To", "Or", "Ea", "Ti", "Ar", "Te", "Ng", "Al", "It", "As", "Is", "Ha", "Et", "Se", "Ou", "Of", "Le", "Sa", "Ve", "Ro", "Ra", "Ri", "Hi", "Ne", "Me", "De", "Co", "Ta", "Ec", "Si", "Ll", "So", "Na", "Li", "La", "El", "Ma", "Di", "Ic", "Rt", "Ns", "Rs", "Io", "Om", "Ch", "Ot", "Ca", "Ce", "Ho", "Be", "Tt", "Fo", "Ts", "Ss", "No", "Ee", "Em", "Ac", "Il", "Da", "Ni", "Ur", "Wa", "Sh", "Ei", "Am", "Tr", "Dt", "Us", "Lo", "Pe", "Un", "Nc", "Wi", "Ut", "Ad", "Ew", "Ow", "Ge", "Ep", "Ai", "Ly", "Ol", "Ft", "Os", "Eo", "Ef", "Pr", "We", "Do", "Mo", "Id", "Ie", "Mi", "Pa", "Fi", "Po", "Ct", "Wh", "Ir", "Ay", "Ga", "Sc", "Ke", "Ev", "Sp", "Im", "Op", "Ds", "Ld", "Ul", "Oo", "Su", "Ia", "Gh", "Pl", "Eb", "Ig", "Vi", "Iv", "Wo", "Yo", "Rd", "Tw", "Ba", "Ag", "Ry", "Ab", "Ls", "Sw", "Ap", "Fe", "Tu", "Ci", "Fa", "Ht", "Fr", "Av", "Eg", "Go", "Bo", "Bu", "Ty", "Mp", "Oc", "Od", "Eh", "Ys", "Ey", "Rm", "Ov", "Gt", "Ya", "Ck", "Gi", "Rn", "Gr", "Rc", "Bl", "Lt", "Yt", "Oa", "Ye", "Ob", "Db", "Ff", "Sf", "Rr", "Du", "Ki", "Uc", "If", "Af", "Dr", "Cl", "Ex", "Sm", "Pi", "Sb", "Cr", "Tl", "Oi", "Ru", "Up", "By", "Tc", "Nn", "Ak", "Sl", "Nf", "Ue", "Dw", "Au", "Pp", "Ug", "Rl", "Rg", "Br", "Cu", "Ua", "Dh", "Rk", "Yi", "Lu", "Um", "Bi", "Ny", "Nw", "Qu", "Og", "Sn", "Mb", "Va", "Df", "Dd", "Ms", "Gs", "Aw", "Nh", "Pu", "Hr", "Sd", "Tb", "Pt", "Nm", "Dc", "Gu", "Tm", "Mu", "Nu", "Mm", "Nl", "Eu", "Wn", "Nb", "Rp", "Dm", "Sr", "Ud", "Ui", "Rf", "Ok", "Yw", "Tf", "Ip", "Rw", "Rb", "Oh", "Ks", "Dp", "Fu", "Yc", "Tp", "Mt", "Dl", "Nk", "Cc", "Ub", "Rh", "Np", "Ju", "Fl", "Dn", "Ka", "Ph", "Hu", "Jo", "Lf", "Yb", "Rv", "Oe", "Ib", "Ik", "tH", "hE", "iN", "eR", "aN", "rE", "eS", "oN", "sT", "nT", "eN", "aT", "eD", "nD", "tO", "oR", "eA", "tI", "aR", "tE", "nG", "aL", "iT", "aS", "iS", "hA", "eT", "sE", "oU", "oF", "lE", "sA", "vE", "rO", "rA", "rI", "hI", "nE", "mE", "dE", "cO", "tA", "eC", "sI", "lL", "sO", "nA", "lI", "lA", "eL", "mA", "dI", "iC", "rT", "nS", "rS", "iO", "oM", "cH", "oT", "cA", "cE", "hO", "bE", "tT", "fO", "tS", "sS", "nO", "eE", "eM", "aC", "iL", "dA", "nI", "uR", "wA", "sH", "eI", "aM", "tR", "dT", "uS", "lO", "pE", "uN", "nC", "wI", "uT", "aD", "eW", "oW", "gE", "eP", "aI", "lY", "oL", "fT", "oS", "eO", "eF", "pR", "wE", "dO", "mO", "iD", "iE", "mI", "pA", "fI", "pO", "cT", "wH", "iR", "aY", "gA", "sC", "kE", "eV", "sP", "iM", "oP", "dS", "lD", "uL", "oO", "sU", "iA", "gH", "pL", "eB", "iG", "vI", "iV", "wO", "yO", "rD", "tW", "bA", "aG", "rY", "aB", "lS", "sW", "aP", "fE", "tU", "cI", "fA", "hT", "fR", "aV", "eG", "gO", "bO", "bU", "tY", "mP", "oC", "oD", "eH", "yS", "eY", "rM", "oV", "gT", "yA", "cK", "gI", "rN", "gR", "rC", "bL", "lT", "yT", "oA", "yE", "oB", "dB", "fF", "sF", "rR", "dU", "kI", "uC", "iF", "aF", "dR", "cL", "eX", "sM", "pI", "sB", "cR", "tL", "oI", "rU", "uP", "bY", "tC", "nN", "aK", "sL", "nF", "uE", "dW", "aU", "pP", "uG", "rL", "rG", "bR", "cU", "uA", "dH", "rK", "yI", "lU", "uM", "bI", "nY", "nW", "qU", "oG", "sN", "mB", "vA", "dF", "dD", "mS", "gS", "aW", "nH", "pU", "hR", "sD", "tB", "pT", "nM", "dC", "gU", "tM", "mU", "nU", "mM", "nL", "eU", "wN", "nB", "rP", "dM", "sR", "uD", "uI", "rF", "oK", "yW", "tF", "iP", "rW", "rB", "oH", "kS", "dP", "fU", "yC", "tP", "mT", "dL", "nK", "cC", "uB", "rH", "nP", "jU", "fL", "dN", "kA", "pH", "hU", "jO", "lF", "yB", "rV", "oE", "iB", "iK"];

var toBeExcluded = [" ", "\n", "\t", "\r", ".", ",", "!", "?", "(", ")", "[", "]", "{", "}", "@", "#", "$", "%", "^", "&", "*", "-", "_", "=", "+", ":", ";"];
var shortHandMin = 5000;
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

if(location.hash == "#about" || (localStorage.getItem("visitedfirst") != "yes" && location.hash.replace('#', '') == '')) {
	location.hash = "PGgzPldoYXQncyBTaW1wbGVuPzwvaDM+CjxwPldpdGggPGI+U2ltcGxlbjwvYj4geW91IGNhbiBjcmVhdGUgeW91ciBvd24gd2VicGFnZSwgd2l0aCBhIHVuaXF1ZSBsaW5rLiBMYXRlciBvbiwgeW91IGNhbiDwn5SXc2hhcmUgeW91ciBjcmVhdGlvbiB3aXRoIG90aGVycywgZXZlbiB0aHJvdWdoIGEgcXIgY29kZS48L3A+CjxwPjxiPvCfkqEgSWRlYXM8L2I+Ojxicj4K8J+SrCBFeHByZXNzIHlvdXJzZWxmIHdpdGggbG9uZ2VyIGRlc2NyaXB0aW9ucyBhbmQgcG9zdHM8YnI+CvCfjqggTWFrZSBjYW52YXMgb3IgYXNjaWkgY3JlYXRpb25zPGJyPgrwn5K7IENyZWF0ZSB5b3VyIG93biBhcHAKPC9wPgo8YSBocmVmPSIjIiB0YXJnZXQ9Il9ibGFuayI+PGJ1dHRvbiBzdHlsZT0nY29sb3I6ICNmZmY7IGJhY2tncm91bmQ6ICM2YmEzZmY7IGJvcmRlci1yYWRpdXM6IDEwMHB4OyBwYWRkaW5nOiA4cHggMTZweDsgYm9yZGVyOiBub25lOyBjdXJzb3I6IHBvaW50ZXI7Jz5TdGFydCBjcmVhdGluZzwvYnV0dG9uPjwvYT4=";
	localStorage.setItem("visitedfirst", "yes");
}

if(location.hash.replace('#', '') != '') {
	//if(strDecD(location.hash.replace('#', ''), 0).replace("<", "") == strDecD(location.hash.replace('#', ''), 0)) {
		document.getElementById('contentm').innerHTML = strDecD(location.hash.replace('#', ''));
	/*} else {
		document.getElementById('contentm').innerHTML = "<iframe src='data:text/html;charset=utf-8;base64," + strDecD(location.hash.replace('#', ''), -1) + "'></iframe>";
	}*/
}