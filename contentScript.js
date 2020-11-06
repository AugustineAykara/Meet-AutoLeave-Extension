
function countParticipant() {
  
    alert("Google Meet auto leave enabled and will leave when participant count less than " + inputCountValue)

    setInterval(function () {
        count = document.getElementsByClassName("wnPUne N0PJ8e")[0].innerHTML
        if (count <= inputCountValue) {
            window.location.reload();
        }
    }, 5000);
}

countParticipant()
