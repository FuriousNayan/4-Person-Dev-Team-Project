const dropAreas = document.querySelectorAll(".dropBox")
 
dropAreas.forEach((dArea) => {
    dArea.addEventListener("dragover", (event) => {
        event.preventDefault();
    })
 
    dArea.addEventListener("dragstart", (event) => {
        const elements = dArea.children;
        event.dataTransfer.setData("text/plain", elements[0].src);
    })
 
    dArea.addEventListener("dragleave", (event) => {
        event.preventDefault();
        dArea.innerHTML = "Drop Image Here"
    })
 
    dArea.addEventListener("drop", (event) => {
        event.preventDefault();
 
        const files = event.dataTransfer.files;
 
        if(files.length > 0) {
            const file = files[0];
            if (file.type.startsWith("image/")){
                const reader = new FileReader();
                reader.onload = (event) => {
                    const img = new Image();
                    img.src = event.target.result;
                    img.draggable = true;
 
                    dArea.innerHTML = "";
                    dArea.appendChild(img)
                }
                reader.readAsDataURL(file)
            }else {
                alert("Please drop an image file")
            }
        } else {
            dArea.innerHTML = "";
            const imgPath = event.dataTransfer.getData("text/plain");
            const img = new Image();
            img.src = imgPath;
            img.draggable = true;
 
            dArea.innerHTML = ""
            dArea.appendChild(img)
        }
    })
})
 
const imageSidebar = document.getElementById("image-sidebar")
const soundSidebar = document.getElementById('right-bar')
const hideButton = document.getElementById("hideButton")
const colorButton = document.getElementById("colorButton")
const container = document.querySelectorAll(".container")
 
// Button function to remove sidebar
let hidden = false;
hideButton.addEventListener("click", function() {
    if (hidden) {
        imageSidebar.style.display = "grid"
        soundSidebar.style.display = 'flex';
        hideButton.innerHTML = "Hide"
        hidden = false;
    } else {
        imageSidebar.style.display = "none"
        soundSidebar.style.display = 'none';
        hideButton.innerHTML = "Unhide"
        hidden = true;
    }
})

const Song1 = document.getElementById("Song1")
const Song2 = document.getElementById("Song2")
const Song3 = document.getElementById("Song3")
const Song4 = document.getElementById("Song4")
const Song5 = document.getElementById("Song5")
const Song6 = document.getElementById("Song6")

 
const logo = document.getElementById("Logo")
const rightBar = document.getElementById("right-bar")
let color = "blue";
colorButton.addEventListener("click", function(){
    if (color == "blue") {
        logo.src = "Images/LogoPink.png"
        rightBar.style.backgroundColor = "#fbc9f0"
        imageSidebar.style.backgroundColor = "#fbc9f0"
        Song1.src = "/Other/Song1Pink.png"
        Song2.src = "/Other/Song2Pink.png"
        Song3.src = "/Other/Song3Pink.png"
        Song4.src = "/Other/Song4Pink.png"
        Song5.src = "/Other/Song5Pink.png"
        Song6.src = "/Other/Song6Pink.png"
        color = "pink"
    } else {
        logo.src = "Images/LogoAlternative.png"
        rightBar.style.backgroundColor = "#3f6a86"
        imageSidebar.style.backgroundColor = "#3f6a86"
        Song1.src = "/Other/Song1.png"
        Song2.src = "/Other/Song2.png"
        Song3.src = "/Other/Song3.png"
        Song4.src = "/Other/Song4.png"
        Song5.src = "/Other/Song5.png"
        Song6.src = "/Other/Song6.png"
        color = "blue"
    }
})


 
 
 
// For everyones reference, the above code is the bulk of the logic for dragging and dropping,
// So try and not touch the code above.