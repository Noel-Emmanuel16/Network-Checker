// Functions
function hasNetwork(online){
    const body = document.body;
    const status = document.querySelector(".status");
    const errorMsg =   `<h1>No Internet</h1>
                        <p>Try:</p>
                        <ul>
                            <li>Checking the network cables, modem, and router</li>
                            <li>Reconnecting to Wi-Fi</li>
                            <li><a href="javascript:diagnoseErrors()">Running Windows Network Diagnostics</a></li>
                        </ul>
                        <p>ERR_INTERNET_DISCONNECTED</p>
                        <button>Reload Page</button>`;
    const successMsg = `<h1 class="logo">facebook 
                         Connecting people together</h1>`;

    if(online){
        body.classList.remove("offline");
        status.innerHTML = successMsg;
    }else{
        body.classList.add("online");
        status.innerHTML = errorMsg;
    }
}

// Event-listener
window.addEventListener("load",() => {
    hasNetwork(navigator.onLine);
    //If browser is online,set hasNetwork to be true
    window.addEventListener("online",() => {
        hasNetwork(true);
    });
     //If browser is offline,set hasNetwork to be false
    window.addEventListener("offline",() => {
        hasNetwork(false);
    });
});