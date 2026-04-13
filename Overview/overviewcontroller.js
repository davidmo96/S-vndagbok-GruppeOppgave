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

function insertData(){
    console.log(model.viewState.log.bedTime)
    console.log(model.viewState.log.mood)
    console.log(model.viewState.log.notes)
    sleepHoursCalculated();
}

function sleepHoursCalculated(){
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
             console.log(sleepHours);
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
             console.log(sleepHours);
             
    }
    else{
        console.log(error);
    }
}
