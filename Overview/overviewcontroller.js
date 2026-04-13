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

function insertData(index){
    sleepHoursCalculated(index);
}

function sleepHoursCalculated(index){
    if (model.viewState.log.bedTime > model.viewState.log.wakeUp){
             bedTimeHourAndMin =model.viewState.log.bedTime.split(":")
             bedTimeHour = parseInt(bedTimeHourAndMin[0], 10);
             bedTimeMinute = parseInt(bedTimeHourAndMin[1], 10);
             bedTimeCalced = Number(bedTimeHour+bedTimeMinute/60);
             console.log(bedTimeCalced);
             wakeUpHourAndMin =model.viewState.log.wakeUp.split(":")
             wakeUpHour = parseInt(wakeUpHourAndMin[0], 10);
             wakeUpMinute = parseInt(wakeUpHourAndMin[1], 10);
             wakeUpCalced = Number(wakeUpHour+wakeUpMinute/60);
             console.log(wakeUpCalced);
             sleepHours = 24-(Number(bedTimeCalced-wakeUpCalced));
             console.log("PM");
             model.viewState.log.hoursSlept = sleepHours
             console.log(sleepHours);
             pushToData(index)
    }
    else if (model.viewState.log.bedTime <= model.viewState.log.wakeUp){
             bedTimeHourAndMin =model.viewState.log.bedTime.split(":")
             bedTimeHour = parseInt(bedTimeHourAndMin[0], 10);
             bedTimeMinute = parseInt(bedTimeHourAndMin[1], 10);
             bedTimeCalced = Number(bedTimeHour+bedTimeMinute/60);
             console.log(bedTimeCalced);
             wakeUpHourAndMin =model.viewState.log.wakeUp.split(":")
             wakeUpHour = parseInt(wakeUpHourAndMin[0], 10);
             wakeUpMinute = parseInt(wakeUpHourAndMin[1], 10);
             wakeUpCalced = Number(wakeUpHour+wakeUpMinute/60);
             console.log(wakeUpCalced);
             sleepHours = Number(wakeUpCalced-bedTimeCalced);
             console.log("AM");
             model.viewState.log.hoursSlept = sleepHours
             console.log(sleepHours);
            pushToData(index)
    }
    else{
        console.log(error);
    }
}

function pushToData(index){
    console.log(index);
     i = index
     model.sleepLog[0].list[i].mood = model.viewState.log.mood;
     model.sleepLog[0].list[i].sleepQuality = model.viewState.log.sleepQuality;
     model.sleepLog[0].list[i].notes = model.viewState.log.notes;
     model.sleepLog[0].list[i].bedTime = model.viewState.log.bedTime;
     model.sleepLog[0].list[i].wakeUp = model.viewState.log.wakeUp;
     model.sleepLog[0].list[i].hoursSlept = model.viewState.log.hoursSlept;
    overViewEditMode(index);
}