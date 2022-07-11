
document.getElementById('submit').onclick = function(){
    var page = document.getElementById('page').value;
    chrome.tabs.create({url:'https://api.coinpaprika.com/v1/coins/' + page});
}