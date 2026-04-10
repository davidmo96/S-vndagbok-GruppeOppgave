updateProfileView();

function updateProfileView() {
  const app = document.getElementById("app");
  const currentUser = model.users[0];
  const userGoals = model.goals[0];

  app.innerHTML = /*HTML*/ `
       <main class=profile-page>
            <header>
                <h1>${currentUser.displayName}</h1>
                <button onclick="editGoals()">Rediger Mål</button>
            </header>

            <section>
                <h2>Mål for søvn:</h2>
            </section>
            
            <section>
                <span>Mengde søvn:</span>
                <span>${userGoals.amountSleptGoal} Timer</span>
            </section>

            <section>
                <span>Fra klokken:</span>
                <span>${userGoals.bedTimeGoal}</span>
                <span>til klokken:</span>
                <span>${userGoals.wakeUpGoal}</span>
            </section>

            <footer>
                <button onclick="saveGoals()">Lagre</button>
            </footer>
        </main>
    `;
}
