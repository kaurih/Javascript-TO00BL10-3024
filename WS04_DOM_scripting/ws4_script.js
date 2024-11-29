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



function addLoremIpsum() {
    const body = document.body
    body.style.background="lightgrey";

    const paragraphs = document.getElementsByTagName("p");
    if (paragraphs.length >= 4){
        const fourthP = paragraphs[3];
        const appendedText = document.createElement("div")
        
        
        const logo = document.createElement("img");
        logo.src = "images/logo.PNG";
        
        appendedText.textContent = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Sed posuere interdum sem. Quisque ligula eros ullamcorper quis, lacinia quis facilisis sed sapien. Mauris varius diam vitae arcu. Sed arcu lectus auctor vitae, consectetuer et venenatis eget velit. "
        appendedText.style.fontStyle = "italic";
        appendedText.appendChild(logo);
        fourthP.parentNode.insertBefore(appendedText, fourthP.nextSibling);
    }

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

function changePosition() {

}

function fadeOut(){

}

function remove(){
    const carImage = document.getElementById("carImage");
    carImage.parentNode.removeChild(carImage);
}




// Excercise 5

function createTable(){
    const headers = ["Name", "Position", "Salary"];
    const data = [
        ["Nixon", "ARchitect", "3200"],
        ["Winters", "Accountant", "28000"],
        ["Cox", "Junior Dev", "9000"],
        ["Kelly", "Senior Dev", "25000"],
        ["Satou", "Accountant", "9999999"]
    ];

    const table = document.createElement("table");
    const headerRow = document.createElement("tr");
    headers.forEach(headerText => {
        const th = document.createElement("th");
        th.textContent = headerText;
        headerRow.appendChild(th);
    });


    table.appendChild(headerRow);

    data.forEach(rowData => {
        const row = document.createElement("tr");
        rowData.forEach(cellData => {
            const td = document.createElement("td");
            td.textContent = cellData;
            row.appendChild(td);
        });
        table.appendChild(row);
    });

    document.getElementById("table-container").appendChild(table);
}
