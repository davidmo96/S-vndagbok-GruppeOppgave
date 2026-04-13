function editGoals() {
  model.viewState.overview.editmode = true;
  updateProfileView();
}

function saveGoals() {
  model.viewState.overview.editmode = false;
  updateProfileView();
}

function getSleepGoalWarning() {
  const userGoals = model.goals[0];

  if (!userGoals.bedTimeGoal || !userGoals.wakeUpGoal) return "";

  const startParts = userGoals.bedTimeGoal.split(":");
  const endParts = userGoals.wakeUpGoal.split(":");

  const startHour = parseInt(startParts[0]);
  const startMinute = parseInt(startParts[1]);
  const endHour = parseInt(endParts[0]);
  const endMinute = parseInt(endParts[1]);

  const startTotalMinutes = startHour * 60 + startMinute;
  const endTotalMinutes = endHour * 60 + endMinute;

  let diffMinutes = endTotalMinutes - startTotalMinutes;

  if (diffMinutes < 0) {
    diffMinutes = diffMinutes + 1440;
  }

  const hoursBetween = diffMinutes / 60;
  const sleepGoalHours = parseInt(userGoals.amountSleptHours);

  if (hoursBetween < sleepGoalHours) {
    return `
      <span class="goal-warning">
        Dette tidsrommet dekker bare ${hoursBetween} av ${sleepGoalHours} timer i søvnmålet ditt
      </span>`;
  }

  return "";
}
