// setTimeout(countParticipant, 10000)

function countParticipant() {
  
    alert("Google Meet auto leave enabled")

    setInterval(function () {
        count = document.getElementsByClassName("wnPUne N0PJ8e")[0].innerHTML
        console.log("participant count " + count);
        if (count <= inputCountValue) {
            window.location.reload();
        }
    }, 20000);
}

countParticipant()