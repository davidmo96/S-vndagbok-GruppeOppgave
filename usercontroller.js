
function identifyUser(){
    return model.users.find(user => user.id == model.app.currentUser) || null
}

function findUserGoals(){
  const user = identifyUser()
  return model.goals.find(goals => goals.userID == user.id);
}


function findUserSleepLog(){
  const user = identifyUser()
  return model.sleepLog.find(sleepLog => sleepLog.userID == user.id);
}
