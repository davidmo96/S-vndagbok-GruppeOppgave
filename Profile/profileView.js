updateProfileView();

function updateProfileView() {
  const profileView = document.getElementById("profileView");
  const currentUser = model.users[0];
  const userGoals = model.goals[0];
  const isEditing = model.viewState.overview.editmode;

  profileView.innerHTML = /*HTML*/ `
    <main class="profile-page">
        <header>
            <img id="shutiLogo" src="Shuti Logo.png">
        </header>

        <section class="user-identity">
        <span>${currentUser.displayName}</span>
        <span></span>${
          isEditing
            ? `<button onclick="saveGoals()">Fullfør</button>`
            : `<button onclick="editGoals()">Rediger Mål</button>`
        }
        </section>

        <section class="edit-button">
            
        </section>

        <section>
            <h2>Mål for søvn:</h2>
        </section>
        
        <section class="user-goals">
            <span>Mengde søvn:</span>
            ${
              isEditing
                ? `<input type="number" class="goal-box" value="${userGoals.amountSleptHours}" 
                    oninput="model.goals[0].amountSleptHours = this.value"> Timer
                    <input type="number" class="goal-box" value="${userGoals.amountSleptMinutes}" 
                    oninput="model.goals[0].amountSleptMinutes = this.value"> Minutter`
                : `<span class="goal-box">${userGoals.amountSleptHours} Timer</span>
                    <span class="goal-box">${userGoals.amountSleptMinutes} Minutter</span>`
            }
        </section>

        <section class="user-goals">
            <span>Fra klokken:</span>
            ${
              isEditing
                ? `<input type="time" class="goal-box" value="${userGoals.bedTimeGoal}" 
                    oninput="model.goals[0].bedTimeGoal = this.value">`
                : `<span class="goal-box">${userGoals.bedTimeGoal}</span>`
            }
            <span>til klokken:</span>
            ${
              isEditing
                ? `<input type="time" class="goal-box" value="${userGoals.wakeUpGoal}" 
                    oninput="model.goals[0].wakeUpGoal = this.value">`
                : `<span class="goal-box">${userGoals.wakeUpGoal}</span>`
            }
        </section>

        <footer>
            <button onclick="saveGoals()">Lagre</button>
        </footer>
    </main>
`;
}
