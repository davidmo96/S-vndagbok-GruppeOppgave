const loginPage = document.getElementById('loginPage')

loginView()
function loginView() {
    loginPage.innerHTML = /*HTML*/ `

    <img id="shutiLogo" src="Pictures/Shuti Logo.png">
    
    <h1 id="loginHeader"> Logg inn</h1>


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