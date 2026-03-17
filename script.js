function skipIntro() {
    document.getElementById("intro").style.display = "none";
    document.getElementById("content").style.display = "block";
}

setTimeout(() => {
    skipIntro();
}, 3500);
