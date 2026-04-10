updateProfileView();

function updateProfileView() {
  const app = document.getElementById("app");
  const currentUser = model.users[0];
  const userGoals = model.goals[0];

  app.innerHTML = /*HTML*/ `
    <main class="profile-page">
        <header>
            <img id="shutiLogo" src="Shuti Logo.png">
        </header>

        <section>
            <h1>${currentUser.displayName}</h1>
            <button onclick="editGoals()">Rediger Mål</button>
        </section>

        <section>
            <h2>Mål for søvn:</h2>
        </section>
        
        <section>
            <span>Mengde søvn:</span>
            <span class="goal-box">${userGoals.amountSleptHours} Timer</span>
            <span class="goal-box">${userGoals.amountSleptMinutes} Minutter</span>
        </section>

        <section>
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
