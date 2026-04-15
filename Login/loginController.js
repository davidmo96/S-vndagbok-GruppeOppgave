function logInUser() {
    const username = model.viewState.login.username;
    const password = model.viewState.login.password;

    model.viewState.login.errorMessage = '';

    if(!username || !password){
        model.viewState.login.errorMessage = 'Du må fylle inn begge feltene!';
        updateView();
        return;
    }

    const user = model.users.find(u => 
        u.username === username && u.password === password
    );

    if (user && user.password === password) {
        model.app.currentUser = user;
        model.app.currentPage = "overViewPage";
        
        model.viewState.login.username = '';
        model.viewState.login.password = '';

    } else {
        model.viewState.login.errorMessage = 'Feil brukernavn eller passord!'
    }
    showOverView();
}

function logOut() {
    model.app.currentUser = null;
    model.app.currentPage = "login";

    model.viewState.login.username = '';
    model.viewState.login.password = '';
    model.viewState.login.errorMessage = '';
    
    updateView();
}