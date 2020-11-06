document.addEventListener('DOMContentLoaded', function () {
    enableId = document.getElementById('enable')
    countId = document.getElementById('count')

    enableId.addEventListener('click', function () {
        countValue = countId.value
        if(countValue == ''){
            countValue = 30
        }
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.executeScript({
                code: 'var inputCountValue =' + countValue,
            }, function () {
                chrome.tabs.executeScript({ file: 'contentScript.js' });
            });
        });
    });
});

