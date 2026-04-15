const loginPage = document.getElementById('app')

loginView()
function loginView() {
    loginPage.innerHTML = /*HTML*/ `

    <img id="shutiLogo" src="Pictures/Shuti Logo.png">
    
    <h1 id="loginHeader"> Logg inn</h1>

    <div class="dropdown">
        <button class="dropbtn">
        <img src="Pictures/menu.png" alt="Button Description" width="25" height="25">
        </button>
            <div class="dropdown-content">
                <button onclick="changePage('logView')" class="dropdownContentButtons">Logg</a>
                <button onclick="changePage('overViewPage')" class="dropdownContentButtons">Oversikt</a>
                <button onclick="changePage('profileView')" class="dropdownContentButtons">Profil</a>
                <button onclick="" class="dropdownContentButtons">Logg ut</a>
            </div>
    </div>


    <div id="pageContent">
    <input type="text" placeholder="Brukernavn" onchange="" class="input" required>
    <br>
    <input type="password" placeholder="Passord" onchange="" class="input" required>
    <br>
    <button class="button">Logg inn</button>
    <p>Har du ingen bruker?</p>
    <button class="button1" onclick="createUserView()">Opprett bruker</button>
    </div>
`
}