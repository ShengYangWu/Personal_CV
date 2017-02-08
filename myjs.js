function clickMenuButton() {	
	var nav = document.getElementById("nav-section");
	var menuButton = document.getElementById("menu-button");
	// Menu
	if (nav.classList.contains('menu-show'))
	{
		nav.classList.remove('menu-show');
		nav.classList.add('menu-hide');
		menuButton.classList.remove('menu-show');
		menuButton.classList.add('menu-hide');
	}else{
		nav.classList.remove('menu-hide');
		nav.classList.add('menu-show');
		menuButton.classList.remove('menu-hide');
		menuButton.classList.add('menu-show');
	}
}
function switchPathname(langTo){
	var pathname = window.location.pathname;
	var langFrom = document.documentElement.lang;
	var pathnameSlice = pathname.split("/");
	var docName = pathnameSlice[pathnameSlice.length-1];
	var docNameSwitch;
	if (!(docName.match("index.html") || docName=="")){
		docNameSwitch = docName.replace("-" + langFrom + ".html", "-" + langTo + ".html");
	}
	else{
		docNameSwitch = "index-" + langTo + ".html";
	}
	pathnameSlice[pathnameSlice.length-1] = docNameSwitch;
	var pathnameSwitch = pathnameSlice.join("/");
	return pathnameSwitch;
}
function generateLangHref(langTo){
	document.getElementById("lang-button").href = switchPathname(langTo);
}
var clickContactMe= function f1() {
  $('#main-container').toggleClass('disappear');
  $('#contact-container').toggleClass('disappear');
  if ($('#contact-me-li').text() === '聯絡我') {
    $('#contact-me-li').text('返回');
  } else {
    $('#contact-me-li').text('聯絡我');
  }
  var nav = document.getElementById("nav-section");
	var menuButton = document.getElementById("menu-button");
	// Menu
	if (nav.classList.contains('menu-show'))
	{
		nav.classList.remove('menu-show');
		nav.classList.add('menu-hide');
		menuButton.classList.remove('menu-show');
		menuButton.classList.add('menu-hide');
	}
}
$('#contact-me-li').click(clickContactMe);
$('#contact-me-p').click(clickContactMe)