const logPage = document.getElementById('logView')

logView()
function logView() {
    logPage.innerHTML = /*HTML*/ `
    
    <h1 id="logHeader"> Logg </h1>

    <div class="dropdown">
        <button class="dropbtn">
        <img src="Log/menu.png" alt="Button Description" width="25" height="25">
        </button>
            <div class="dropdown-content">
                <button>Oversikt</a>
                <button>Rediger søvnønsker</a>
                <button>Logg ut</a>
            </div>
    </div>
    <br>
    <table>
        <tr>
            <th>Dag</th>
            <th>Når la du deg?</th>
            <th>Når sto du opp?</th>
            <th>Antall timer søvn:</th>
            <th>Humør 1-5</th>
            <th>Søvnkvalitet 1-5</th>
            <th>Kommentar:</th>
        </tr>
        <tbody id="logTable"></tbody>
    </table>
    `
makeLog()
}


function makeLog(){
    const logList = model.sleepLog[0].list;
    let html = '';

    for (let i = 0; i < logList.length; i++) {
        const day = logList[i];

        html += /*HTML*/ `
        <tr>
            <td>${day.dayName}</td>
            <td>${day.bedTime ?? ''}</td>
            <td>${day.wakeUp ?? ''}</td>
            <td>${day.calculatedSleep}</td>
            <td>${day.mood ?? ''}</td>
            <td>${day.sleepQuality ?? ''}</td>
            <td>${day.notes ?? ''}</td>
        </tr>
        `
    }
    document.getElementById('logTable').innerHTML = html
}


