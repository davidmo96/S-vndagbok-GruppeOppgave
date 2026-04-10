const overViewPage = document.getElementById('app')

showOverView()
function showOverView(index) {
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
            <th>Rediger:</th>
        </tr>
        <tbody id="overViewTable"></tbody>
    </table>

`
addOverViewTable(index)
}

function addOverViewTable(index){
    const tableList = model.sleepLog[0].list;
    let html = '';
        if(model.viewState.editmode !== true){
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
                <td><button onclick="overViewEditMode(${i})">Rediger</button></td>
             </tr>
                          `
    }
        }
  

    else if(model.viewState.editmode === true){
            const day = tableList[index];

            html += /*HTML*/ `
             <tr>
              <td>  ${day.dayName}</td>
              <td>  <input  type="time"  onchange="model.viewState.log.bedTime = this.value"></td>
              <td>  <input  type="time" onchange="model.viewState.log.wakeUp = this.value"></td>
              <td>  ${day.calculatedSleep}></td>
              <td>  <input  type="number" min="1" max="5"onchange="model.viewState.log.mood = this.value" ></td>
              <td>  <input type="number" min="1" max="5"onchange="model.viewState.log.sleepQuality = this.value" ></td>
              <td>  <input  type="text"onchange="model.viewState.log.notes = this.value"></td>
              <td><button onclick="insertData()">Legg Til</button></td>
             </tr>
                          `
        
    }
    document.getElementById('overViewTable').innerHTML = html
}
