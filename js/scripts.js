
function openMenu() {

    var x = document.getElementById("navigation");

    if (x.className === "navigation") {
        x.className += " menujs";
        document.getElementById("menu-icon").innerHTML = "&Cross;";

    } else {
        x.className = "navigation";
        document.getElementById("menu-icon").innerHTML = "&#9776;";
    }


}