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
  
  if (!model.app.currentUser) model.app.currentPage = "login";
  if (model.app.currentPage === "login") loginView();

}