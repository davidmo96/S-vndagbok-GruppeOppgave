function editGoals() {
  model.viewState.profile.editModeGoals = true;
  updateProfileView();
}

function saveGoals() {
  model.viewState.profile.ditModeGoals = false;
  updateProfileView();
}

function getSleepGoalWarning() {
  const userGoals = model.goals[0];

  if (!userGoals.bedTimeGoal || !userGoals.wakeUpGoal) return "";

  // Deler string inn i to deler: f.eks "22:30" blir "22" og "30".
  const startParts = userGoals.bedTimeGoal.split(":");
  const endParts = userGoals.wakeUpGoal.split(":");

  // Konverterer string til tall.
  const startHour = parseInt(startParts[0]);
  const startMinute = parseInt(startParts[1]);
  const endHour = parseInt(endParts[0]);
  const endMinute = parseInt(endParts[1]);

  // Gjør om hele klokkeslettet til minutter.
  const startTotalMinutes = startHour * 60 + startMinute;
  const endTotalMinutes = endHour * 60 + endMinute;

  // Trekker start-tiden fra slutt-tiden.
  let diffMinutes = endTotalMinutes - startTotalMinutes;

  // Hvis man legger seg kl. 23 og våkner kl. 07, blir regnestykket negativt.
  // Legger til 1440 minutter (et døgn) for å flytte våknetiden til neste dag.
  if (diffMinutes < 0) {
    diffMinutes = diffMinutes + 1440;
  }

  // Deler minuttene på 60 for å få timer igjen.
  const hoursBetween = diffMinutes / 60;

  // Henter ut målet og bruker "|| 0" for å unngå feil hvis minutt-boksen er tom.
  const sleepGoalHours =
    parseInt(userGoals.amountSleptHours) +
    parseInt(userGoals.amountSleptMinutes || 0) / 60;

  // .toFixed(1) runder av til ett desimal, Number fjerner .0 hvis det er et heltall.
  if (hoursBetween < sleepGoalHours) {
    return /*HTML*/ ` 
      <span class="goal-warning">
        Dette tidsrommet dekker bare ${Number(hoursBetween.toFixed(1))} 
        av ${Number(sleepGoalHours.toFixed(1))} timer i søvnmålet ditt
      </span>`;
  }

  return "";
}
