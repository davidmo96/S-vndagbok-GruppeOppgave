
function updateProfileView() {
  const profileView = document.getElementById("app");
  const currentUser = model.users[0];
  const userGoals = model.goals[0];
  const isEditing = model.viewState.overview.editmode;

  profileView.innerHTML = /*HTML*/ `

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
    <main class="profile-page">
        <header>
            <img id="shutiLogo" src="Pictures/Shuti Logo.png">
        </header>

        <section class="user-identity">
        <span>${currentUser.displayName}</span>
            ${
              isEditing
                ? `<button onclick="saveGoals()">Lagre Mål</button>`
                : `<button onclick="editGoals()">Rediger Mål</button>`
            }
        </section>

        <section>
            <h2>Mål for søvn:</h2>
        </section>
        
        <section class="user-goals">
            <span>Mengde søvn:</span>
            ${
              isEditing
                ? `<input type="number" class="goal-box" min="1" max="24" value="${userGoals.amountSleptHours}" 
                    onchange="model.goals[0].amountSleptHours = this.value; updateProfileView()"> Timer
                    <input type="number" class="goal-box" min="0" max="59" value="${userGoals.amountSleptMinutes}" 
                    onchange="model.goals[0].amountSleptMinutes = this.value; updateProfileView()"> Minutter`
                : `<span class="goal-box">${userGoals.amountSleptHours} </span> Timer
                    <span class="goal-box">${userGoals.amountSleptMinutes} </span> Minutter`
            }
        </section>

        <section class="user-goals">
            <span>Fra klokken:</span>
            ${
              isEditing
                ? `<input type="time" class="goal-box" value="${userGoals.bedTimeGoal}" 
                    onchange="model.goals[0].bedTimeGoal = this.value; updateProfileView()">`
                : `<span class="goal-box">${userGoals.bedTimeGoal}</span>`
            }
            <span>til klokken:</span>
            ${
              isEditing
                ? `<input type="time" class="goal-box" value="${userGoals.wakeUpGoal}" 
                    onchange="model.goals[0].wakeUpGoal = this.value; updateProfileView()">`
                : `<span class="goal-box">${userGoals.wakeUpGoal}</span>`
            }
        </section>

        ${getSleepGoalWarning()}
    </main>
`;
}
