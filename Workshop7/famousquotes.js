// Load AJAX content into web page

function loadXMLFile() {
    // Create AJAX object
    var xmlhttp = new XMLHttpRequest();

    // Specify the data / url to be fetched
    xmlhttp.open("GET", "https://quotes.rest/qod.xml", true); //cors-virhettä pukkaa vaikka kokeilin httpsää ja molempia linkkejä
    xmlhttp.send();

    xmlhttp.onreadystatechange = function() {
            if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
 // find myDiv and insert results there
                    document.getElementById("quotes").innerHTML = xmlhttp.responseText;
            }
    }
}