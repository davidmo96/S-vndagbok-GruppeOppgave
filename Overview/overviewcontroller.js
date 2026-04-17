
//Bytter mellom edit view og vanlig view bed å endre verdien til "editmode" i viewstate.
function overViewEditMode(index){
    if(model.viewState.editmode !== true){
        model.viewState.editmode = true;
        console.log(index)
        showOverView(index);
    }
    else if (model.viewState.editmode === true){
        model.viewState.editmode = false;
        showOverView(index);
    }

}

//Kalkulerer tid sovet og setter tallet i viewstate hoursSlept
function sleepHoursCalculated(index){
    // Sjekker om tallet på leggetid er høyere eller lavere enn wakeup. Mattestykket ser annerledes ut ettersom hvilken.
    if (model.viewState.log.bedTime > model.viewState.log.wakeUp){
            //Splitter opp string med Timer og Minutter separert. Så ganger den dem med 10 hver, plusser sammen og deler med 60 for å få riktige tall bak komma. Feks 7.5 Timer heller enn 7 timer og 30 minutter
             bedTimeHourAndMin =model.viewState.log.bedTime.split(":")
             bedTimeHour = parseInt(bedTimeHourAndMin[0], 10);
             bedTimeMinute = parseInt(bedTimeHourAndMin[1], 10);
             bedTimeCalced = Number(bedTimeHour+bedTimeMinute/60);
             wakeUpHourAndMin =model.viewState.log.wakeUp.split(":")
             wakeUpHour = parseInt(wakeUpHourAndMin[0], 10);
             wakeUpMinute = parseInt(wakeUpHourAndMin[1], 10);
             wakeUpCalced = Number(wakeUpHour+wakeUpMinute/60);
             //Selve mattestykket for timer sovet
             sleepHours = 24-(Number(bedTimeCalced-wakeUpCalced));
             console.log("PM");
             model.viewState.log.hoursSlept = sleepHours.toFixed(2); //To fixed runder opp eller ned til 2 tall etter komma så man får 7.6 istedenfor 7.632983
             console.log(sleepHours);
             pushToData(index)
    }
    else if (model.viewState.log.bedTime <= model.viewState.log.wakeUp){
             bedTimeHourAndMin =model.viewState.log.bedTime.split(":")
             bedTimeHour = parseInt(bedTimeHourAndMin[0], 10);
             bedTimeMinute = parseInt(bedTimeHourAndMin[1], 10);
             bedTimeCalced = Number(bedTimeHour+bedTimeMinute/60);
             wakeUpHourAndMin =model.viewState.log.wakeUp.split(":")
             wakeUpHour = parseInt(wakeUpHourAndMin[0], 10);
             wakeUpMinute = parseInt(wakeUpHourAndMin[1], 10);
             wakeUpCalced = Number(wakeUpHour+wakeUpMinute/60);
             //Selve mattestykket for timer sovet
             sleepHours = Number(wakeUpCalced-bedTimeCalced);
             console.log("AM");
             model.viewState.log.hoursSlept = sleepHours.toFixed(2);  //To fixed runder opp eller ned til 2 tall etter komma så man får 7.6 istedenfor 7.632983
             console.log(sleepHours);
            pushToData(index)
    }
    else{
        console.log("error");
    }
}

//Tar all data som er mellomlagret i viewstate og setter inn i data delen av modellen.
function pushToData(index){
    console.log(index);
     i = index
     const sleepLog = findUserSleepLog()
     sleepLog.list[i].mood = model.viewState.log.mood;
     sleepLog.list[i].sleepQuality = model.viewState.log.sleepQuality;
     sleepLog.list[i].notes = model.viewState.log.notes;
     sleepLog.list[i].bedTime = model.viewState.log.bedTime;
     sleepLog.list[i].wakeUp = model.viewState.log.wakeUp;
     sleepLog.list[i].hoursSlept = model.viewState.log.hoursSlept;
    averageSleepCalc(index)
    overViewEditMode(index);
}

function checkValueScale(index){
    if(index > 5){
        return 5
    }
    else if(index < 1){
        return 1
    }
    else {
        return index;
    }
}

function averageSleepCalc(){
        let calc = 0
        let daysSlept = 0
        const sleepLog = findUserSleepLog()
    for(let i = 0; i < sleepLog.list.length; i++){
        const sleep = sleepLog.list[i].hoursSlept;

        if(sleep !== null){
            calc += Number(sleep)
            daysSlept ++

        }
    }
    model.viewState.overview.averagesleep = Math.round(calc/daysSlept)
}
