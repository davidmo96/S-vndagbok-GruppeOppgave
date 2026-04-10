const logPage = document.getElementById('logView')

logView()
function logView() {
    logPage.innerHTML = /*HTML*/ `
    
    <h1 id="logHeader"> Logg </h1>
    <table>
        <tr>
            <th>Dag</th>
            <th>Når sto du opp?</th>
            <th>Når la du deg?</th>
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
            <td>${day.wakeUp ?? ''}</td>
            <td>${day.bedTime ?? ''}</td>
            <td>${calculateSleep()}</td>
            <td>${day.mood ?? ''}</td>
            <td>${day.sleepQuality ?? ''}</td>
            <td>${day.notes ?? ''}</td>
        </tr>
        `
    }
    document.getElementById('logTable').innerHTML = html
}