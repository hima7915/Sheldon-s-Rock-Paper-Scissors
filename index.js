var user = 0;
var comp;
document.querySelector(".stone").addEventListener("click", function() {
    user = 1;
    comp = Math.floor(((Math.random()) * 10) % 3 + 1);
    result(user, comp);
});
document.querySelector(".paper").addEventListener("click", function() {
    user = 2;
    comp = Math.floor(((Math.random()) * 10) % 3 + 1);
    result(user, comp);
});
document.querySelector(".scissors").addEventListener("click", function() {
    user = 3;
    comp = Math.floor(((Math.random()) * 10) % 3 + 1);
    result(user, comp);
});


function result(user, comp) {
    if ((user === 1 && comp === 2) || (user === 2 && comp === 3) || (user === 3 && comp === 1)) {
        document.querySelector(".userlose").style.visibility = 'visible';
        window.setTimeout(reload, 1000);
    } else if (user === comp) {
        document.querySelector(".tie").style.visibility = 'visible';
        window.setTimeout(reload, 1000);
    } else {
        document.querySelector(".userwin").style.visibility = 'visible';
        window.setTimeout(reload, 1000);
    }
}

function reload() {
    document.location.reload(true);
}