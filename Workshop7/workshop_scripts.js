// EXCERCISE 1

function parseData(){
    var allQuotes = document.getElementsByTagName("quotes");

    for (i = 0; i < allQuotes.length; i++){
        var quote = allQuotes[i].getElementsByTagName("quote")[0].childNodes[0].nodeValue;
        var author = allQuotes[i].getElementsByTagName("author")[0].childNodes[0].nodeValue;

        document.getElementById("quoteDiv").innerHTML += quote + " - " + author + "<br>";
    }
}

// EXCERCISE 2

function loadXMLFile(){
    //create an AJAX object
    var xmlhttp = new XMLHttpRequest();

    //specifying requested data
    xmlhttp.open("GET", "http://iceberg-cycle.codio.io/5: Asynchronous JavaScript (AJAX)/famous-quotes.xml", true);
    xmlhttp.send();

    xmlhttp.onreadystatechange = function(){
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
            document.getElementById("quotes").innerHTML = xmlhttp.responseText; // insert data to div
        }
    }
}

// EXCERCISE 3

// div id="tabledata"

function loadAndParseXML(){
    var allQuotes = document.getElementsByTagName("quotes");
    var tableBody = document.querySelector("#tabledata tbody");

    for (var i = 0; i < allQuotes.length; i++){
        var quote = allQuotes[i].getElementsByTagName("quote")[0].childNodes[0].nodeValue;
        var author = allQuotes[i].getElementsByTagName("author")[0].childNodes[0].nodeValue;

        //uusi rivi/quote
        var row = document.createElement("tr"); 
        var quoteCell = document.createElement("td");
        quoteCell.textContent = quote;
        row.appendChild(quoteCell);

        // author
        var authorCell = document.createElement("td");
        authorCell.textContent = author;
        row.appendChild(authorCell);

        // rivit taulukkoon
        tableBody.appendChild(row);
    }

    styleTable()
}

function styleTable(){
    var table = document.querySelector("#tabledata table");
    table.style.width ="100%";

    var cells = table.querySelectorAll("td, th");

    cells.forEach(function(cell){
        cell.style.border = "1px solid black";
        cell.style.padding = "10px";
    });
}


// EXCERCISE 4

//input #Fetch3c
//ul id feed-list
/*
function loadAndParseNews(){
    //create an AJAX object
    var xmlhttp = new XMLHttpRequest();

    //specifying requested data
    xmlhttp.open("GET", "http://www.iltalehti.fi/rss/uutiset.xml", true);
    xmlhttp.send();

    xmlhttp.onreadystatechange = function(){
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
            document.getElementById("newsfeed").innerHTML = xmlhttp.responseText; // fetch news into a dedicated div

            var xmlDoc = xmlhttp.responseXML;
            var items = xmlDoc.getElementsByTagName("item");
            var feedList = document.querySelector("#feed-list ul");

            for (var i = 0; < items.length; i++){
                var desc = items[i].getElementsByTagName("description")[0].childNodes[0].nodeValue;

                var li = document.createElement("li");
                li.innerHTML = desc;
                feedList.appendChild(li);
            }

        }
    };
}*/


function loadAndParseNews() {
    //tämmöinen epäelegantti ratkaisu tähän kohtaan
    hideDiv();

    // ajax object
    var xmlhttp = new XMLHttpRequest();

    //request data
    xmlhttp.open("GET", "http://www.iltalehti.fi/rss/uutiset.xml", true);
    xmlhttp.send();

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            // debug-div
            document.getElementById("newsfeed").innerHTML = xmlhttp.responseText; 

            // xml
            var xmlDoc = xmlhttp.responseXML;
            var items = xmlDoc.getElementsByTagName("item");
            
            var feedList = document.querySelector("#feed-list ul");
            feedList.innerHTML = ""; // listan putsaaminen vanhoista jutuista

            // itemit läpi
            for (var i = 0; i < items.length; i++) {
                var desc = items[i].getElementsByTagName("description")[0].childNodes[0].nodeValue;
                // uusi li-elementti uutisille
                var li = document.createElement("li");
                li.innerHTML = desc;
                feedList.appendChild(li);
            }
        }
    };
}

//debug-divin piilotusfunktio
function hideDiv(){
    var newsFeed = document.getElementById("newsfeed");
    newsFeed.style.display = "none";
}

