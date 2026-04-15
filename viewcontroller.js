function changePage(newPage) {
  model.app.currentPage = newPage;
  console.log(newPage);
  updateView();
}

updateView();
function updateView() {
  if (model.app.currentPage === "logView") logView();
  if (model.app.currentPage === "overViewPage") showOverView();
  if (model.app.currentPage === "profileView") updateProfileView();


}