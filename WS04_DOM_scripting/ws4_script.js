// Excercise 1

function changeHeading() {
    document.title ="Modified Heading!"
}

function modifyStyle() {
    document.getElementById("secondHeading").style.background = "red";
    document.getElementById("secondHeading").style.fontSize = "50px";
    document.getElementById("secondHeading").style.fontFamily = "Arial";
    document.getElementById("secondHeading").style.color = "white";
}

// tämä jäi valitettavasti kesken

function addLoremIpsum() {
    const body = document.body
    const div = document.createElement("div")
    div.innerHTML = "&quot;Lorem ipsum&quot;"

    body.append(div)

}



// Excercise 2

// ???? pitikö tuolla redboxissa ("me-id") olla jotain? :D

function hide() {
    document.getElementById("me").style.display = "none";
}

function show() {
    document.getElementById("me").style.display = "block";
}

function surprise() {
    const surpriseElements = document.getElementsByClassName("surprise");

    if (surpriseElements.length > 0) {
        surpriseElements[0].style.fontSize = "20px";
    }
}



// Excercise 3

function selectAlert() {
    const selectedElement = document.getElementById("mySelect");
    const selectedValue = selectedElement.value;
    alert(selectedValue);

}

function addImageBorder() {
    const image = document.getElementById("carImage");
    image.style.border = "3px solid red";

}

function removeImageBorder() {
    const image = document.getElementById("carImage");
    image.style.border = "none";
}

const imageElement = document.getElementById(carImage);
imageElement.addEventListener("mouseover", addImageBorder);
imageElement.addEventListener("mouseout", removeImageBorder);

function changeCarImage() {
    const selectedCar = document.getElementById("mySelect").value;
    const carImage = document.getElementById("carImage");

    switch (selectedCar) {
        case "BMW":
            carImage.src = "images/bmw.JPG";
            break
        case "Audi":
            carImage.src = "images/audi.JPG";
            break;
        case "Mercedes":
            carImage.src = "images/mercedes.JPG";
            break;
        case "Volvo":
            carImage.src = "images/volvo.JPG";
            break;
        default:
            carImage.src = "images/audi.JPG";
    }
}

// Excercise 4

