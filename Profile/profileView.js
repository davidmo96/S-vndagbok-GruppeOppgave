updateProfileView();

function updateProfileView() {
  const profileView = document.getElementById("profileView");
  const currentUser = model.users[0];
  const userGoals = model.goals[0];

  profileView.innerHTML = /*HTML*/ `
    <main class="profile-page">
        <header>
            <img id="shutiLogo" src="Shuti Logo.png">
        </header>

        <section class="user-identity">
        <span>${currentUser.displayName}</span>
        </section>

        <section class="edit-button">
            <button onclick="editGoals()">Rediger Mål</button>
        </section>

        <section>
            <h2>Mål for søvn:</h2>
        </section>
        
        <section class="user-goals">
            <span>Mengde søvn:</span>
            <span class="goal-box">${userGoals.amountSleptHours} Timer</span>
            <span class="goal-box">${userGoals.amountSleptMinutes} Minutter</span>
        </section>

        <section class="user-goals">
            <span>Fra klokken:</span>
            <span class="goal-box">${userGoals.bedTimeGoal}</span>
            <span>til klokken:</span>
            <span class="goal-box">${userGoals.wakeUpGoal}</span>
        </section>

        <footer>
            <button onclick="saveGoals()">Lagre</button>
        </footer>
    </main>
`;
}
