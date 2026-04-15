function logInUser() {
    const username = model.viewState.login.username;
    const password = model.viewState.login.password;

    model.viewState.login.errorMessage = '';

    if (!username && !password) {
        model.viewState.login.errorMessage = 'Fyll inn brukernavn og passord';
        updateView();
        return;
    } else if (!username) {
        model.viewState.login.errorMessage = 'Skriv inn brukernavn';
        updateView();
        return;
    } else if (!password) {
        model.viewState.login.errorMessage = 'Skriv inn passord';
        updateView();
        return;
    }

    const user = model.users.find(u =>
        u.username === username && u.password === password
    );

    if (user) {
        model.app.currentUser = user;
        model.app.currentPage = "overViewPage";

        model.viewState.login.username = '';
        model.viewState.login.password = '';
    } else {
        model.viewState.login.errorMessage = 'Feil brukernavn eller passord!';
    }

    updateView();
}

function logOut() {
    model.app.currentUser = null;
    model.app.currentPage = "login";

    model.viewState.login.username = '';
    model.viewState.login.password = '';
    model.viewState.login.errorMessage = '';

    updateView();
}