const app = document.getElementById("app");

const model = {
  app: {
    currentPage: "login",
    currentUser: null,
  },

  viewState: {
    login: {
      username: null,
      password: null,
      errorMessage: "",
    },
    createUser: {
      username: "",
      password: "",
      repeatPassword: "",
      displayName: "",
    },
    editUser: {
      password: null,
      repeatPassword: null,
      displayName: null,
    },
    overview: {
      averagesleep: null,
      editmode: false,
    },
    log: {
      id: null,
      dayName: "",
      mood: null,
      sleepQuality: null,
      notes: null,
      bedTime: null,
      wakeUp: null,
      hoursSlept: null,
    },
    profile: {
      bedTimeGoal: null,
      wakeUpGoal: null,
      amountSleptGoal: null,
      editModeGoals: false,
    },
  },

  days: [
    "Mandag",
    "Tirsdag",
    "Onsdag",
    "Torsdag",
    "Fredag",
    "Lørdag",
    "Søndag",
  ],
  scale: [1, 2, 3, 4, 5],

  users: [
    {
      id: 0,
      displayName: "Admin",
      username: "admin",
      password: "123",
    },
  ],

  goals: [
    {
      userID: 0,
      bedTimeGoal: "22:00",
      wakeUpGoal: "06:00",
      amountSleptHours: 8,
      amountSleptMinutes: 0,
    },
  ],

  sleepLog: [
    {
      userID: 0,
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
    },
  ],
};
  