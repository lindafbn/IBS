var x;

function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      var a = JSON.parse(xhttp.responseText);

      document.getElementById("antworten").innerHTML = a.answers;
      document.getElementById("hoersaalfragen").innerHTML = a.lectureQuestions;
      document.getElementById("vorbereitungsfragen").innerHTML = a.preparationQuestions;
      document.getElementById("offenesitzungen").innerHTML = a.openSessions;
      document.getElementById("geschlossenesitzungen").innerHTML = a.closedSessions;
      document.getElementById("ersteller").innerHTML = a.creators;
      document.getElementById("aktivenutzer").innerHTML = a.activeUsers;
      document.getElementById("aktivestudenten").innerHTML = a.activeStudents;
      document.getElementById("eingeloggtenutzer").innerHTML = a.loggedinUsers;
      document.getElementById("zwischenfragen").innerHTML = a.interposedQuestions;
      document.getElementById("konzeptfragen").innerHTML = a.conceptQuestions;
      document.getElementById("fragen").innerHTML = a.questions;
      document.getElementById("sitzungen").innerHTML = a.sessions;
 
   var chart = new CanvasJS.Chart("Übersicht", {
    title:{
      text: "Übersicht"              
    },
    data: [              
    {
      // Change type to "doughnut", "line", "splineArea", etc.
      type: "doughnut",
      dataPoints: [
        { label: "Fragen",  y: a.questions  },
        { label: "Antworten",  y: a.answers  },
        { label: "Aktive Studenten", y: a.activeStudents  },
        { label: "Sessions",  y: a.sessions  }, 
        { label: "Ersteller", y: a.creators}
      ]
    }
    ]
  });
  chart.render();
  var chart = new CanvasJS.Chart("Aktuell", {
    title:{
      text: "Aktuelle Nutzer"              
    },
    data: [              
    {
      // Change type to "doughnut", "line", "splineArea", etc.
      type: "bar",
      dataPoints: [
        { label: "Aktive Nutzer", y: a.activeUsers },
        { label: "eingeloggtenutzer",  y: a.loggedinUsers  }
      ]
    }
    ]
  });
  chart.render();

   var chart = new CanvasJS.Chart("Fragen", {
    title:{
      text: "Arsnova Totals"              
    },
    data: [              
    {
      // Change type to "doughnut", "line", "splineArea", etc.
      type: "column",
      dataPoints: [
        { label: "Hörsaalfragen", y: a.lectureQuestions },
        { label: "Vorbereitungsfragen", y: a.preparationQuestions  },
        { label: "Zwischenfragen",  y: a.interposedQuestions  },
        { label: "Konzeptfragen",  y: a.conceptQuestions  }     ]
    }
    ]
  });
  chart.render();

     var chart = new CanvasJS.Chart("Sessions", {
    title:{
      text: "Arsnova Sessions"              
    },
    data: [              
    {
      // Change type to "doughnut", "line", "splineArea", etc.
      type: "pie",
      dataPoints: [

        { label: "Offene Sessions",  y: a.openSessions  },
        { label: "Geschlossene Sessions",  y: a.closedSessions  }    ]
    }
    ]
  });
     chart.render();


	/*setInterval("alert('blubb');", 30000);*/
    }
  };
  xhttp.open("GET", "https://arsnova.eu/api/statistics/", true);
  xhttp.send();
}

/*function loadCha() {
window.onload = function () {
  var chart = new CanvasJS.Chart("chartContainer", {
    title:{
      text: "Arsnova"              
    },
    data: [              
    {
      // Change type to "doughnut", "line", "splineArea", etc.
      type: "column",
      dataPoints: [
        { label: "lulu",  y: 10  },
        { label: "orange", y: 15  },
        { label: "banana", y: 25  },
        { label: "mango",  y: 30  },
        { label: "grape",  y: 28  }
      ]
    }
    ]
  });
  chart.render();
} }*/