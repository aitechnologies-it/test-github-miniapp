function clearAmount(){
    document.getElementById("amount").value = "";
}

function addAmount(e){
    let target = e.target || e.srcElement;
    if (isNaN(parseInt(document.getElementById("amount").value)))
        document.getElementById("amount").value = 0
    
    document.getElementById("amount").value = parseInt(document.getElementById("amount").value) + parseInt(target.getAttribute("data-amount"));
}

function setThemeClass() {
    document.documentElement.className = Telegram.WebApp.colorScheme;
}

Telegram.WebApp.onEvent('themeChanged', setThemeClass);
setThemeClass();