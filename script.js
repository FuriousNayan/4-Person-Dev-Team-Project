// Selecting all the drop boxes where the images will be located at. 
const dropAreas = document.querySelectorAll(".dropBox")

// Creating an array of fun facts where it is randomly displayed every 1 minute. 
const funFacts = [
    "Did you know that Chiikawa is Non-binary?", 
    "Did you know the full title of Chiikawa(Nanka Chiisakute Kawaii Yatsu) means 'Something Small and Cute'?",
    "Did you know Chiikawa is seen as a timid and weak but brave character?",
    "Did you know Chiikawa is the weakest out of the Usagi and Hachiware trio?",
    "Did you know Chiikawa is not a hamster but a cute little thing?",
    "Did you know Chiikawa once won a house in a yogurt contest?",
    "Did you know Chiikawa hates broccoli?",
    "Did you know Chiikawa has 4 toes?",
    "Did you know Chiikawa's birthday is May 1st 2017?",
    "Did you know Chiikawa is a cry baby. T-T",
    "Did you know Usagi is a fatty?",
    "Did you know Hachiware is inspired by a Cat!?",
    "Did you know Usagi is inspired by a yellow rabbit!?",
    "Did you know Marcus is?",
    "Did you know Marcus drew everything in this website?",
    "Did you know Chiikawa is a Japanese show?",
    "Did you know the show Chiikawa is called ちいかわ in Japanese?",
    "Did you know Chiikawa can't talk properly?",
    "Did you know Kuri-Manjū is an alcoholic?",
    "Did you know Hachiware, Usagi, and Chiikawa are the main characters of the show?",
]

// Using the setInterval function to alert the user of a joke every 1 minute. 
setInterval(() => {
    const randomIndex = Math.floor(Math.random() * funFacts.length);
    alert(funFacts[randomIndex]);
  }, 600000); 

// Once you drag over a dropbox, it prevents the default, which is to not move the draggable item. 
dropAreas.forEach((dArea) => {
    dArea.addEventListener("dragover", (event) => {
        event.preventDefault();
    })
 
    // Once you start the drag, it takes the children of each drop area and transfers the data when you are going in between boxes. It chooses the 1st imgae using the [0]
    dArea.addEventListener("dragstart", (event) => {
        const elements = dArea.children;
        event.dataTransfer.setData("text/plain", elements[0].src);
    })
 
    // Once you leave the drag, prevents the default, and replaces the area saying "drop image here"
    dArea.addEventListener("dragleave", (event) => {
        event.preventDefault();
        dArea.innerHTML = "Drop Image Here"
    })
 
    // Once you drop the image, it prevents the default (which is to do nothing), and puts all the datatransfer files in one variable named files. 
    dArea.addEventListener("drop", (event) => {
        event.preventDefault();
 
        const files = event.dataTransfer.files;
        
        // If there are images in files, it takes the first image, then it checks if it is an image, then it creates a new file reader, the when the reader loads, it makes a new image, then makes it draggable.
        // After, it appends the image to the drop area. If something goes wrong, it alerts saying please drop an image. The top portion is to get images from your computer.
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
        // If there are no images in files, it takes it from the existing webpage, and transfers it from there. The bottom pertion of this code is to get images already displayed on the webpage. 
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

// Getting the imagesidebar, rightbar, hidebutton, colorbutton, and container. 
const imageSidebar = document.getElementById("image-sidebar")
const soundSidebar = document.getElementById('right-bar')
const hideButton = document.getElementById("hideButton")
const colorButton = document.getElementById("colorButton")
const container = document.querySelectorAll(".container")
 
// First hidden is false, if the hidebutton is clicked, the hidden variable will equal true, the sidebar is gone.
// Once you click it again, and hidden is true, it will bring it all back. 
let hidden = false;
hideButton.addEventListener("click", function() {
    if (hidden) {
        imageSidebar.style.display = "grid"
        soundSidebar.style.display = 'flex';
        hideButton.innerHTML = "Hide"
        hideButton.style.width = '50px';
        hidden = false;
    } else {
        imageSidebar.style.display = "none"
        soundSidebar.style.display = 'none';
        hideButton.innerHTML = "Unhide"
        hideButton.style.width = '75px';
        hidden = true;
    }
})

// Getting all the songs from the HTML
const Song1 = document.getElementById("Song1")
const Song2 = document.getElementById("Song2")
const Song3 = document.getElementById("Song3")
const Song4 = document.getElementById("Song4")
const Song5 = document.getElementById("Song5")
const Song6 = document.getElementById("Song6")


// Changing the color theme for the songs, blue to pink, pink to blue. 
const logo = document.getElementById("Logo")
const rightBar = document.getElementById("right-bar")
let color = "blue";
colorButton.addEventListener("click", function(){
    if (color == "blue") {
        logo.src = "Images/LogoPink.png"
        rightBar.style.backgroundColor = "#fbc9f0"
        imageSidebar.style.backgroundColor = "#fbc9f0"
        Song1.src = "Images/Song1Pink.png"
        Song2.src = "Images/Song2Pink.png"
        Song3.src = "Images/Song3Pink.png"
        Song4.src = "Images/Song4Pink.png"
        Song5.src = "Images/Song5Pink.png"
        Song6.src = "Images/Song6Pink.png"
        color = "pink"
    } else {
        logo.src = "Images/LogoAlternative.png"
        rightBar.style.backgroundColor = "#3f6a86"
        imageSidebar.style.backgroundColor = "#3f6a86"
        Song1.src = "Images/Song1.png"
        Song2.src = "Images/Song2.png"
        Song3.src = "Images/Song3.png"
        Song4.src = "Images/Song4.png"
        Song5.src = "Images/Song5.png"
        Song6.src = "Images/Song6.png"
        color = "blue"
    }
})

// Getting the biobutton, if clicked, go to bio.html
const bioButton = document.getElementById('bioButton')
bioButton.addEventListener('click', function(){
    window.location.href = 'bio.html';
})

// Getting the buttons for the audio, and creating the new audio files dynamically. 
const buttonOne = document.getElementById('button1');
const buttonTwo = document.getElementById('button2');
const buttonThree = document.getElementById('button3');
const buttonFour = document.getElementById('button4');
const buttonFive = document.getElementById('button5');
const buttonSix = document.getElementById('button6');
const buttonSeven = document.getElementById('button7');
const Bouncy = new Audio('Music/02. Bouncy.mp3');
const Daytime = new Audio('Music/04. Daytime Theme.mp3');
const Nighttime = new Audio('Music/09. Nighttime Theme.mp3');
const Timely = new Audio('Music/21. Timely.mp3');
const Beach = new Audio('Music/Kevin MacLeod - Beach Party.mp3');
const Duck = new Audio('Music/Kevin MacLeod - Fluffing a Duck.mp3');
songList = [Bouncy, Daytime, Nighttime, Timely, Beach, Duck];
imageSongList = [Song1,Song2,Song3,Song4,Song5,Song6];
isPLaying = [false, false, false, false, false, false]

// These are event listeners to listen for the click, and calles the pausing function.
buttonOne.addEventListener('click', function() {Bouncy.play(); pausing(1)});
buttonTwo.addEventListener('click', function() {Daytime.play(); pausing(2)});
buttonThree.addEventListener('click', function() {Nighttime.play(); pausing(3)});
buttonFour.addEventListener('click', function() {Timely.play(); pausing(4)});
buttonFive.addEventListener('click', function() {Beach.play(); pausing(5)});
buttonSix.addEventListener('click', function() {Duck.play(); pausing(6)});

// Once the button is clicked, it loops through the song list, if the song is the same as the one exempted, it skips through it. 
// If it is not the one that is exempted, it will reset the song. By the css side, it changes the opacity to 100%. 
// If its the one that is exempted, and it is playing, then it will be paused. 
function pausing(exempt) {
    for (let i = 0; i < songList.length+1; i++) {
        if (i+1 == exempt) {
            if (isPLaying[exempt-1]){
                songList[exempt-1].pause()
                isPLaying[exempt-1] = false;
            } else {
                imageSongList[i].style.opacity = '50%';
                isPLaying[exempt-1] = true;
            }
            continue
        } else {
            try {
                imageSongList[i].style.opacity = '100%';
                isPLaying[i] = false;
                songList[i].pause();
                songList[i].currentTime = 0;
            } catch {}
            
        }
    }
}
