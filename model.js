const app = document.getElementById("app");

const model = {
  app: {
    currentPage: "login",
  },
  viewState: {
    login: {
      username: null,
      password: null,
    },
    createUser: {
      username: '',
      password: '',
      repeatPassword: '',
      displayName: '',
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
      displayName: "Dio Brando",
      username: "diobran@getacademy.no",
      password: "konodioda",
    },
  ],

  averageSleepData:[],

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
          mood: 5,
          sleepQuality: 4,
          notes: "Sovet godt, men våknet noen ganger",
          bedTime: "22:30",
          wakeUp: "06:30",
          hoursSlept: null,
        },
        {
          id: 1,
          dayName: "Tirsdag",
          mood: 3,
          sleepQuality: 2,
          notes: "Fikk ikke sove",
          bedTime: "03:15",
          wakeUp: "07:00",
          hoursSlept: null,
        },
        {
          id: 2,
          dayName: "Onsdag",
          mood: 1,
          sleepQuality: 5,
          notes: "Knuste alarmklokka i søvne",
          bedTime: "22:30",
          wakeUp: "10:00",
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
