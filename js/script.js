const drop = document.querySelector(".dropzone");
const input = document.querySelector(".dropzone input");
const text = document.querySelector(".dropzone-h3-text");
const progress = document.querySelector(".progress");

let files = [];

input.addEventListener("change", () => {
    drop.style.display = "none";
    upload();
});

drop.addEventListener("dragover", (e) => {
    e.preventDefault();
    text.innerHTML = "Release your mouse to drop";
    drop.classList.add("active");
});

drop.addEventListener("dragleave", (e) => {
    e.preventDefault();
    text.innerHTML = "Drag and drop your files here";
    drop.classList.remove("active");
});

drop.addEventListener("drop", (e) => {
    e.preventDefault();
    files = e.dataTransfer.files;
    drop.style.display = "none";
    upload();
});

function upload(){
    let intervalCount = 0.25;
    progress.style.display = "block";
    progress.style.width = `${20 * intervalCount}%`;
    //text.innerHTML = "Uploaded";
    const interval = setInterval(() => {
        intervalCount += 0.25;
        progress.style.width = `${20 * intervalCount}%`;
            if(intervalCount == 5){
                clearInterval(interval);
            }
    }, 100);
}