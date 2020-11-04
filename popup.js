document.addEventListener('DOMContentLoaded', function () {
    var enableId = document.getElementById('enable')
    enableId.addEventListener('click', function () {



        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.executeScript({
                file: 'contentScript.js'           
            });
        });

    });
});

// function checkParticipantsCount() {

    // chrome.tabs.getSelected(null, function (tab) {
    //     var code = 'window.location.reload();';
    //     chrome.tabs.executeScript(tab.id, { code: code });
    // });

// }
