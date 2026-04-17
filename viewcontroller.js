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


function createDropDownButton() {
  return /*HTML*/`
    <div class="dropdown-content">
      <button onclick="changePage('logView')" class="dropdownContentButtons">Logg</button>
      <button onclick="changePage('overViewPage')" class="dropdownContentButtons">Oversikt</button>
      <button onclick="changePage('profileView')" class="dropdownContentButtons">Profil</button>
      <button onclick="logOut()" class="dropdownContentButtons">Logg ut</button>
    </div>
  `;
}