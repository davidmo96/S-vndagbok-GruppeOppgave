function editGoals() {
  model.viewState.overview.editmode = true;
  updateProfileView();
}

function saveGoals() {
  model.viewState.overview.editmode = false;
  updateProfileView();
}
