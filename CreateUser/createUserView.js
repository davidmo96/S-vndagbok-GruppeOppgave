const createUserPage = document.getElementById('createUserPage')


createUserView()
function createUserView() {
    createUserPage.innerHTML = /*HTML*/ `

    <img id="shutiLogo" src="Pictures/Shuti Logo.png">
    
    <h1 id="createUserHeader">Create user</h1>

    <div id="pageContent">
    <br>
    <input type="text" placeholder="Brukernavn" onchange="(this.value)" class="input" required>
    <br>
    <input type="text" placeholder="Passord" onchange="(this.value)" class="input" required>
    <br>
    <input type="text" placeholder="Gjenta passord" onchange="(this.value)" class="input" required>
    <br>
    <button class="button" onclick="createUser()">Opprett bruker</button>
    </div>
`
}


function createUser(username, password){
    const newUser = {
        username: username,
        password: password,
    }
        

viewState.login.push(newUser)

/*
if (){
    loginView()
}
*/


}