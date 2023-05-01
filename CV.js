let i=0;
function photosBackground() {
    let photos = document.getElementById("photos");
    switch(i) {
        case 0:
            photos.style.backgroundImage = "url('yassine-removebg-preview.png')";
            i++;
            break;
        case 1:
            photos.style.backgroundImage = "url('yassEMI-removebg-preview.png')";
            i = 0;
            break;
    }
}

setInterval(photosBackground,5000);

let j=0;
function headerBackground() {
    let header = document.getElementById("header");
    switch(j) {
        case 0:
            header.style.backgroundImage = "url('EMI6.jpg')";
            j++;
            break;
        case 1:
            header.style.backgroundImage = "url('EMI3.jpg')";
            j++;
            break;
        case 2:
            header.style.backgroundImage = "url('EMI8.jpg')";
            j = 0;
            break;
    }
}

setInterval(headerBackground,5000);


