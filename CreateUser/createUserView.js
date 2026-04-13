const createUserPage = document.getElementById('createUserPage')


createUserView()
function createUserView() {
    createUserPage.innerHTML = /*HTML*/ `

    <img id="shutiLogo" src="Pictures/Shuti Logo.png">
    
    <h1 id="createUserHeader">Create user</h1>

    <div id="pageContent">
    <br>
    <input 
        type="text" 
        placeholder="Brukernavn" 
        oninput = "model.viewState.createUser.username = this.value"
        class="input" 
        required>
    <br>
    
    <input 
        type="text" 
        placeholder="Passord" 
        oninput = "model.viewState.createUser.password = this.value"
        class="input" 
        required>
    <br>

    <input 
        type="text" 
        placeholder="Gjenta passord" 
        oninput = "model.viewState.createUser.repeatPassword = this.value"
        class="input" 
        required>
    <br>

    <button class="button" onclick="createUser()">Opprett bruker</button>
    </div>
`
}


function createUser() {

    if (model.viewState.createUser.password !== model.viewState.createUser.repeatPassword) {
        alert("Passordene matcher ikke")
        return
    }
    model.users.push({
        id: generateId(),
        displayName: model.viewState.createUser.username,
        username: model.viewState.createUser.username,
        password: model.viewState.createUser.password,
    })
    return loginView()
}

function generateId(){
    const number = Math.floor(Math.random()*999)
    if(model.users.find(user => user.id == number)){
        generateId()
    }
    return number
}