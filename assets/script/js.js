
function artikel() {
    document.getElementById("dropdown1").classList.toggle("tampil");
}


window.onclick = function (e) {
    if (!e.target.matches('.btn-drop')) {

        var dropdowns = document.getElementsByClassName("konten-dropdown");
        for (var a = 0; a < dropdowns.length; a++) {
            var openDropdown = dropdowns[a];
            if (openDropdown.classList.contains('tampil')) {
                openDropdown.classList.remove('tampil');
            }
        }
    }
}
