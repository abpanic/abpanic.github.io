
(()=> {	modeSwitcher()})();

function modeSwitcher() {


var toggle = document.getElementById("theme-toggle");

var storedTheme = localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
if (storedTheme)
    document.documentElement.setAttribute('data-theme', storedTheme)


toggle.onclick = function () {
    var currentTheme = document.documentElement.getAttribute("data-theme");
    var targetTheme = "light";

    if (currentTheme === "light") {
        targetTheme = "dark";
    }

    document.documentElement.setAttribute('data-theme', targetTheme)
    localStorage.setItem('theme', targetTheme);
};
// 	if (currentTheme === "dark") {
// 		document.documentElement.setAttribute('data-theme', 'light');
// 		sessionStorage.setItem('theme', 'light');
// 	}	else if (currentTheme === "light") {
// 		document.documentElement.setAttribute('data-theme', 'dark');
// 		sessionStorage.setItem('theme', 'dark');
// 	}else{
// 		document.documentElement.setAttribute('data-theme', 'dark');
// 		sessionStorage.setItem('theme', 'dark');
// 	}
// }
}