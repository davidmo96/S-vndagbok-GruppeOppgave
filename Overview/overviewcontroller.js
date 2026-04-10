function overViewEditMode(){
    if(model.viewState.editmod !== true){
        model.viewState.editmod = true;
        showOverView();
    }
    else if (model.viewState.editmod === true){
        model.viewState.editmod = false;
        showOverView();
    }

}