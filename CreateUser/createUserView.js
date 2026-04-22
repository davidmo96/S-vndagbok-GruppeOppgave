const createUserPage = document.getElementById("app");

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

    <input 
        type="text" 
        placeholder="Visningsnavn" 
        oninput = "model.viewState.createUser.displayName = this.value"
        class="input" 
        required>
        <br />

    <button class="button" onclick="createUser()">Opprett bruker</button>
    </div>
`;
}

function createUser() {
  if (
    model.viewState.createUser.password !==
    model.viewState.createUser.repeatPassword
  ) {
    alert("Passordene matcher ikke");
    return;
  }
  const newid = generateId();
  model.users.push({
    id: newid,
    displayName: model.viewState.createUser.displayName,
    username: model.viewState.createUser.username,
    password: model.viewState.createUser.password,
  });
  (model.goals.push({
    userID: newid,
    bedTimeGoal: "22:00",
    wakeUpGoal: "06:00",
    amountSleptHours: 8,
    amountSleptMinutes: 0,
  }),
    model.sleepLog.push({
      userID: newid,
      list: [
        {
          id: 0,
          dayName: "Mandag",
          mood: null,
          sleepQuality: null,
          notes: null,
          bedTime: null,
          wakeUp: null,
          hoursSlept: null,
        },
        {
          id: 1,
          dayName: "Tirsdag",
          mood: null,
          sleepQuality: null,
          notes: null,
          bedTime: null,
          wakeUp: null,
          hoursSlept: null,
        },
        {
          id: 2,
          dayName: "Onsdag",
          mood: null,
          sleepQuality: null,
          notes: null,
          bedTime: null,
          wakeUp: null,
          hoursSlept: null,
        },
        {
          id: 3,
          dayName: "Torsdag",
          mood: null,
          sleepQuality: null,
          notes: null,
          bedTime: null,
          wakeUp: null,
          hoursSlept: null,
        },
        {
          id: 4,
          dayName: "Fredag",
          mood: null,
          sleepQuality: null,
          notes: null,
          bedTime: null,
          wakeUp: null,
          hoursSlept: null,
        },
        {
          id: 5,
          dayName: "Lørdag",
          mood: null,
          sleepQuality: null,
          notes: null,
          bedTime: null,
          wakeUp: null,
          hoursSlept: null,
        },
        {
          id: 6,
          dayName: "Søndag",
          mood: null,
          sleepQuality: null,
          notes: null,
          bedTime: null,
          wakeUp: null,
          hoursSlept: null,
        },
      ],
    }));
  return loginView();
}

function generateId() {
  const number = Math.floor(Math.random() * 999);
  if (model.users.find((user) => user.id == number)) {
    generateId();
  }
  return number;
}
