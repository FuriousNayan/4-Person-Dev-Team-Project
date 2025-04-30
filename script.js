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
const hideButton = document.getElementById("hideButton")
const container = document.querySelectorAll(".container")
 
// Button function to remove sidebar
let hidden = false;
hideButton.addEventListener("click", function() {
    if (hidden) {
        imageSidebar.style.display = "grid"
        hideButton.innerHTML = "Hide"
        hidden = false;
    } else {
        imageSidebar.style.display = "none"
        hideButton.innerHTML = "Unhide"
        hidden = true;
    }
})



// For everyones reference, the above code is the bulk of the logic for dragging and dropping,
// So try and not touch the code above. 