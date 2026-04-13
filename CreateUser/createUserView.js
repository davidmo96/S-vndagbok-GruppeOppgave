const createUserPage = document.getElementById('createUserPage')


createUserView()
function createUserView() {
    createUserPage.innerHTML = /*HTML*/ `

    <img id="shutiLogo" src="Shuti Logo.png">
    
    <h1 id="createUserHeader">Create user</h1>

    <div id="pageContent">
    <input type="text" placeholder="E-post" onchange="" class="input">
    <br>
    <input type="text" placeholder="Brukernavn" onchange="" class="input">
    <br>
    <input type="password" placeholder="Passord" onchange="" class="input">
    <br>
    <input type="password" placeholder="Gjenta passord" onchange="" class="input">
    <br>
    <button class="button">Opprett bruker</button>
    </div>
`
}