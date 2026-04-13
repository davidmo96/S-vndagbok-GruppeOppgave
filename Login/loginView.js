const loginPage = document.getElementById('loginPage')

loginView()
function loginView() {
    loginPage.innerHTML = /*HTML*/ `

    <img id="shutiLogo" src="Shuti Logo.png">
    
    <h1 id="loginHeader"> Logg inn</h1>


    <div id="pageContent">
    <input type="text" placeholder="Brukernavn/E-post" onchange="" class="input">
    <br>
    <input type="text" placeholder="Passord" onchange="" class="input">
    <br>
    <button class="button">Logg inn</button>
    <p>Har du ingen bruker?</p>
    <button class="button1">Opprett bruker</button>
    </div>
`
}