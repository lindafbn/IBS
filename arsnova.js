alert("Hallooo");

var xmlHttpObject = new XMLHttpRequest();

    // Funktion, die bei Statusänderungen reagiert
    function handleStateChange()
    {
        // Derzeitigen Status zurückgeben
        alert("xmlHttpObject.readyState = " + xmlHttpObject.readyState + (xmlHttpObject.readyState >= 3 ? " HTTP-Status = " + xmlHttpObject.status : ''));
    }
    
    // Wenn Dokument geladen ausführen
    window.onload = function() {
        // Anfrage vorbereiten, ruft www.webmasterpro.de auf
        xmlHttpObject.open('GET', 'https://arsnova.eu/api/statistics/');
        // Handler hinterlegen
        xmlHttpObject.onreadystatechange = handleStateChange;
        // Anfrage abschicken
        xmlHttpObject.send(null);
    }