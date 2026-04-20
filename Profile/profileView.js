function updateProfileView() {
  const profileView = document.getElementById("app");
  const currentUser = model.app.currentUser;
  const userGoals = findUserGoals();
  const isEditingGoals = model.viewState.profile.editModeGoals;

  profileView.innerHTML = /*HTML*/ `

    <div class="dropdown">
        <button class="dropbtn">
        <img src="Pictures/menu.png" alt="Button Description" width="25" height="25">
        </button>
            <div>${createDropDownButton()}</div>
    </div>
    
    <main class="profile-page">
            <img id="shutiLogo" src="Pictures/Shuti Logo.png">

        <section class="user-identity">
        <span>${currentUser.displayName}</span>
            ${
              isEditingGoals
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
              isEditingGoals
                ? `<input type="number" class="goal-box" min="1" max="24" value="${userGoals.amountSleptHours}" 
                    onchange="findUserGoals().amountSleptHours = this.value; updateProfileView()"> Timer
                    <input type="number" class="goal-box" min="0" max="59" value="${userGoals.amountSleptMinutes}" 
                    onchange="findUserGoals().amountSleptMinutes = this.value; updateProfileView()"> Minutter`
                : `<span class="goal-box">${userGoals.amountSleptHours} </span> Timer
                    <span class="goal-box">${userGoals.amountSleptMinutes} </span> Minutter`
            }
        </section>

        <section class="user-goals">
            <span>Fra klokken:</span>
            ${
              isEditingGoals
                ? `<input type="time" class="goal-box" value="${userGoals.bedTimeGoal}" 
                    onchange="findUserGoals().bedTimeGoal = this.value; updateProfileView()">`
                : `<span class="goal-box">${userGoals.bedTimeGoal}</span>`
            }
            <span>til klokken:</span>
            ${
              isEditingGoals
                ? `<input type="time" class="goal-box" value="${userGoals.wakeUpGoal}" 
                    onchange="findUserGoals().wakeUpGoal = this.value; updateProfileView()">`
                : `<span class="goal-box">${userGoals.wakeUpGoal}</span>`
            }
        </section>

        ${getSleepGoalWarning()}
    </main>
`;
}
