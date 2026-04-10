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
}

