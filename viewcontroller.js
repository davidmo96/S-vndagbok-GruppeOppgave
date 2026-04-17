function changePage(newPage) {
  model.app.currentPage = newPage;
  console.log(newPage);
  updateView();
}

updateView();
function updateView() {
  console.log('page:',model.app.currentPage)
  console.log('User:',model.app.currentUser)
  if (model.app.currentUser == null){ model.app.currentPage = "login";
  console.log("test")}
  if (model.app.currentPage === "logView") logView();
  else if  (model.app.currentPage === "overViewPage") showOverView();
  else if  (model.app.currentPage === "profileView") updateProfileView();
  else if  (model.app.currentPage === "login") loginView();
  else{
    console.log("error")
  }

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