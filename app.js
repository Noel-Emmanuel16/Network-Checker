// Functions
function hasNetwork(online){
    const body = document.body;
    const status = document.querySelector(".status");
    const errorMsg = `  <h1>No internet</h1>
                        <p>Try:</p>
                        <ul>
                            <li>Checking the network cables, modem, and router</li>
                            <li>Reconnecting to Wi-Fi</li>
                            <li><a href="#">Running Windows Network Diagnostics</a></li>
                        </ul>
                        <p>ERR_INTERNET_DISCONNECTED</p>
                        <button>Reload Page</button>`;
    const successMsg = `<h1>Welcome to StudyBud</h1>`;

    if(online){
        body.classList.remove("offline");
        status.innerHTML = successMsg;
    }else{
        body.classList.add("online");
        status.innerHTML = errorMsg;
    }
}

window.addEventListener("load",() => {
    hasNetwork(navigator.onLine);

    window.addEventListener("online",() => {
        hasNetwork(true);
    });

    window.addEventListener("offline",() => {
        hasNetwork(false);
    });
});