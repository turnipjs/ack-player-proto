let hashChangeListener = window.addEventListener("hashchange", () => {
    location.hash = "";
    console.log("this is a reminder to not use hashes for anything else");
}, false);

function togglePlayer() {
    //osu
} 