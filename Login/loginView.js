const loginPage = document.getElementById('app')

loginView()
function loginView() {
    loginPage.innerHTML = /*HTML*/ `

    <img id="shutiLogo" src="Pictures/Shuti Logo.png">
    
    <h1 id="loginHeader"> Logg inn</h1>

    <div id="pageContent">

    <input 
    type="text" 
    placeholder="Brukernavn" 
    class="input" 
    onchange= "model.viewState.login.username = this.value
    model.viewState.login.errorMessage = '';
    "
    required>
    <br>

    <input 
    type="password" 
    placeholder="Passord" 
    class="input" 
    onchange= "model.viewState.login.password = this.value
    model.viewState.login.errorMessage = '';
    "
    required>
    <br>

    <div class="error">${model.viewState.login.errorMessage}</div>

    <button class="button" onclick="logInUser()">Logg inn</button>
    <p>Har du ingen bruker?</p>
    <button class="button1" onclick="createUserView()">Opprett bruker</button>
    </div>
`
}