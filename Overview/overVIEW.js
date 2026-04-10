const overViewPage = document.getElementById('app')

showOverView()
function showOverView() {
    overViewPage.innerHTML = /*HTML*/ `
    
    <h1 id="overViewHeader"> Oversikt </h1>
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
        <tbody id="overViewTable"></tbody>
    </table>

    <button onclick="overViewEditMode()">Rediger</button>
`
addOverViewTable()
}

function addOverViewTable(){
    const tableList = model.sleepLog[0].list;
    let html = '';
        if(model.viewState.editmod !== true){
         for (let i = 0; i < tableList.length; i++) {
            const day = tableList[i];

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
        }
  

    else if(model.viewState.editmod === true){
        for (let i = 0; i < tableList.length; i++) {
            const day = tableList[i];

            html += /*HTML*/ `
             <tr>
              <td>  ${day.dayName}</td>
              <td>  <input placeholder="${day.bedTime ?? ''}" type="time"></td>
              <td>  <input placeholder="${day.wakeUp ?? ''}" type="time"></td>
              <td>  ${day.calculatedSleep}></td>
              <td>  <input placeholder="${day.mood ?? ''}" type="number" min="1" max="5"></td>
              <td>  <input placeholder="${day.sleepQuality ?? ''}"type="number" min="1" max="5"></td>
              <td>  <input placeholder="${day.notes ?? ''}" type="text"></td>
             </tr>
                          `
        }
    }
    document.getElementById('overViewTable').innerHTML = html
}
