const overViewPage = document.getElementById('app')

function showOverView(index) {
    overViewPage.innerHTML = /*HTML*/ `
    

        <img id="shutiLogo" src="Pictures/Shuti Logo.png">
    
     <h1 id="overViewHeader" onclick="overViewEditMode()"> Oversikt </h1>

    <div class="dropdown">
        <button class="dropbtn">
        <img src="Pictures/menu.png" alt="Button Description" width="25" height="25">
        </button>
            <div>${createDropDownButton()}</div>
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
            <th>Rediger:</th>
        </tr>
        <tbody id="overViewTable"></tbody>
    </table>

`
addOverViewTable(index)
}

function addOverViewTable(index){
    const sleepLog = findUserSleepLog()
    const goals = findUserGoals()
    const tableList = sleepLog.list;
    console.log('goals check',goals)
    let html = '';
        if(model.viewState.editmode !== true){
         for (let i = 0; i < tableList.length; i++) {
            const day = tableList[i];
            let color = "";
            if(day.hoursSlept >= goals.amountSleptHours){
                color = "green";
            }
            else if(day.hoursSlept < goals.amountSleptHours && day.hoursSlept != null){
                color = "red";
            }
            html += /*HTML*/ `
             <tr class=${color}>
                <td>${day.dayName ?? ''}</td>
                <td>${day.bedTime?? ''}</td>
                <td>${day.wakeUp?? ''}</td>
                <td>${day.hoursSlept?? ''}</td>
                <td>${day.mood?? ''}</td>
                <td>${day.sleepQuality?? ''}</td>
                <td>${day.notes?? ''}</td>
                <td><button class="button" onclick="overViewEditMode(${i})" id="overViewHeader">Rediger</button></td>
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
              <td></td>
              <td>  <input  type="number" min="1" max="5"onchange="model.viewState.log.mood = checkValueScale(this.value)" ></td>
              <td>  <input type="number" min="1" max="5"onchange="model.viewState.log.sleepQuality = checkValueScale(this.value)" ></td>
              <td>  <input  type="text"onchange="model.viewState.log.notes = this.value"></td>
              <td><button class="button" onclick="sleepHoursCalculated(${index})" id="overViewHeader">Legg Til</button></td>
             </tr>
                          `
        
    }
    document.getElementById('overViewTable').innerHTML = html
}
