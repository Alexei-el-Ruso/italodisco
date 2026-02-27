$(document).ready(
    function(){
        $("#navbar-placeholder").load("navbar.html");
        $("#footer-placeholder").load("footing.html");

        let details = navigator.userAgent;
        let regexp = /android|iphone|kindle|ipad/i;
        let isMobileDevice = regexp.test(details);

        if (isMobileDevice) {
            console.log("Adapting to Mobile device");
            document.body.style.padding = "1vh 1vw";
            document.body.style.fontSize = "12px";
            document.getElementById("dynamic-theme").setAttribute('href', 'css/mobile.css');
        }
        else {
            console.log("Adapting to Desktop");
            document.body.style.padding = "6vh 8vw";
            document.body.style.fontSize = "16px";
            document.getElementById("dynamic-theme").setAttribute('href', 'css/desktop.css');
        }
    }
)