export const endpoints = {
  LOGIN: `/login/`,
  REGISTER: `/register/`,
  VERIFYEMAIL: '/email-verify/',
  RESETPASSWORDEMAIL: '/send-reset-password-email/',
  RESETPASSWORD: '/reset-password/',
  EMAIL: '/emailVerification/',
  RESENDVERIFICATIONLINK: '/verify/user-email/',

  APPOINTMENTS: '/appointments/',
  GETAPPOINTMENTSBYPATIENTID: '/PatientAppointments/',

  GETPATIENTSLIST: 'dietitianPatientList/',
  INVITEPATIENT: '/scode/',
  PATIENTOFWEEK: '/UsersCreatedLast7Days/',

  GETPATIENTDETAILS: '/PatientPersonalData/',
  GETFACIALSCANDATA: '/facescandata/',

  AGORACONVERSATIONLIST: '/api/getagoranickname/',
  FIREBASETOKEN: '/FetchWebToken/',

  NOTIFICATIONS: '/notificationlogs/apiview/',

  LOGGEDVITALS: "/FoodGeneralWeightTracker/",
  STOOL: "/FoodGeneralStoolTracker/",
  MEAL: "/FoodGeneralMealLog/",
  VITALSGRAPH: "/foodgeneral/loggedvitals/",

  CHECKINDATES: "/CalendarRequestData/",
  CHECKINS: "/ProgressInsightQuestionsView/",

  PROGRESSINSIGHT: "/ProgressInsight/",
  FACESCANGRAPH: "/facescanGraph/",
  INSIGHTCOUNT: "/InsightCount/",

  UPDATEPASSWORD: "/changedietitianpassword/",
  UPDATEPROFILE: "/update/dietitianprofile/",

  UPLOAD: "/upload/",
  GETDOCUMENTLIST: "/DocumentsList/",

  ADDNOTES: "/patient-notes/",
  ADDFEEDBACK: "/sendfeedback/",

  AGORATOKEN:"/agora-accesstoken/",
  VIDEO_CALL_CHANNEL: '/agora-user-token-publisher/',

  POST_NOTIFICATION: '/chat/notifications/',
  PATIENTS_DATE_DOWNLOAD:'/excel/patient-data/'



};