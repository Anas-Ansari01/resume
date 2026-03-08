import { deleteAPI, getAPI, patchAPI, postAPI, putAPI } from "../api/api";
import { endpoints } from "../api/endpoints";

// Authorization Apis

export const signup = (payload, callBack, errorCallback) => {
    return (dispatch) => {
        postAPI(
            endpoints.REGISTER,
            payload,
            (response) => {
                // console.log('Response For Signup', response);
                callBack(response);
            },
            (error) => {
                console.log('Error While Signup', error);
                errorCallback(error)
            },
        );
    };
};

export const login = (payload, callBack, errorCallback) => {
    return (dispatch) => {
        postAPI(
            endpoints.LOGIN,
            payload,
            (response) => {
                // console.log('Response For Login', response);
                callBack(response);
            },
            (error) => {
                console.log('Error While Login', error);
                errorCallback(error)
            },
        );
    };
};

export const emailVerification = (payload, paramInfo, callBack, errorCallback) => {
    return (dispatch) => {
        getAPI(
            endpoints.VERIFYEMAIL + paramInfo,
            payload,
            (response) => {
                // console.log('Response For Email Verification', response);
                callBack(response);
            },
            (error) => {
                console.log('Error While Email Verification', error);
                errorCallback(error)
            },
        );
    };
};

export const resetPasswordEmail = (payload, callBack, errorCallback) => {
    return (dispatch) => {
        postAPI(
            endpoints.RESETPASSWORDEMAIL,
            payload,
            (response) => {
                // console.log('Response For Email for Reset Password', response);
                callBack(response);
            },
            (error) => {
                console.log('Error While Email for Reset Password', error);
                errorCallback(error)
            },
        );
    };
};

export const resetPassword = (payload, paramInfo, callBack, errorCallback) => {
    return (dispatch) => {
        postAPI(
            endpoints.RESETPASSWORD + paramInfo + '/',
            payload,
            (response) => {
                // console.log('Response For Reset Password', response);
                callBack(response);
            },
            (error) => {
                console.log('Error While for Reset Password', error);
                errorCallback(error)
            },
        );
    };
};

export const emailExist = (payload, callBack, errorCallback) => {
    return (dispatch) => {
        postAPI(
            endpoints.EMAIL,
            payload,
            (response) => {
                // console.log('Response For Login', response);
                callBack(response);
            },
            (error) => {
                console.log('Error While sign up', error);
                errorCallback(error)
            },
        );
    };
};

export const resendVerificationLink = (payload, callBack, errorCallback) => {
    return (dispatch) => {
        postAPI(
            endpoints.RESENDVERIFICATIONLINK,
            payload,
            (response) => {
                // console.log('Response For Login', response);
                callBack(response);
            },
            (error) => {
                console.log('Error While getting verification link', error);
                errorCallback(error)
            },
        );
    };
};


// Appointment Apis

export const getAllAppointments = (payload, dietitianId, callBack, errorCallback) => {
    //   const manualToken = localStorage.getItem('accessToken');

    return (dispatch) => {
        getAPI(
            endpoints.APPOINTMENTS + `?dietitians=${dietitianId}`,
            payload,
            (response) => {
                // console.log('Response For getting all appointments', response);
                callBack(response);
            },
            (error) => {
                console.log('Error While getting all appointments', error);
                errorCallback(error)
            },
        );
    };
};

export const scheduleNewAppointment = (payload, callBack, errorCallback) => {
    return (dispatch) => {
        postAPI(
            endpoints.APPOINTMENTS,
            payload,
            (response) => {
                // console.log('Response For adding new appointments', response);
                callBack(response);
            },
            (error) => {
                console.log('Error While adding new appointments', error);
                errorCallback(error)
            },
        );
    };
};

export const getAppointmentById = (payload, dietitianId, appointmentId, callBack, errorCallback) => {
    return (dispatch) => {
        getAPI(
            endpoints.APPOINTMENTS + `?dietitians=${dietitianId}&appointment_id=${appointmentId}`,
            payload,
            (response) => {
                // console.log('Response For getting appointment by id', response);
                callBack(response);
            },
            (error) => {
                console.log('Error While getting appointment by id', error);
                errorCallback(error)
            },
        );
    };
};

export const getAppointmentsByDate = (payload, dietitianId, startDate, endDate, callBack, errorCallback) => {
    return (dispatch) => {
        getAPI(
            endpoints.APPOINTMENTS + `?dietitians=${dietitianId}&start_date=${startDate}&end_date=${endDate}`,
            payload,
            (response) => {
                // console.log('Response For getting appointment by id', response);
                callBack(response);
            },
            (error) => {
                console.log('Error While getting appointment by id', error);
                errorCallback(error)
            },
        );
    };
};

export const updateAppointment = (payload, callBack, errorCallback) => {
    return (dispatch) => {
        putAPI(
            endpoints.APPOINTMENTS,
            payload,
            (response) => {
                // console.log('Response For updating  appointments', response);
                callBack(response);
            },
            (error) => {
                console.log('Error While updating  appointments', error);
                errorCallback(error)
            },
        );
    };
};

export const deleteAppointment = (payload, callBack, errorCallback) => {
    return (dispatch) => {
        deleteAPI(
            endpoints.APPOINTMENTS,
            payload,
            (response) => {
                // console.log('Response For delete  appointment', response);
                callBack(response);
            },
            (error) => {
                console.log('Error While delete  appointment', error);
                errorCallback(error)
            },
        );
    };
};

export const getAppointmentsByPatientId = (payload, patientId, callBack, errorCallback) => {
    return (dispatch) => {
        getAPI(
            endpoints.GETAPPOINTMENTSBYPATIENTID + `?user_id=${patientId}`,
            payload,
            (response) => {
                // console.log('Response For getting appointments of patients by id', response);
                callBack(response);
            },
            (error) => {
                console.log('Error While getting appointments of patients by id', error);
                errorCallback(error)
            },
        );
    };
};



// Patient API's

export const getPatientsByDietician = (payload, dietitianId, callBack, errorCallback) => {
    return (dispatch) => {
        getAPI(
            endpoints.GETPATIENTSLIST + `?dietitians=${dietitianId}`,
            payload,
            (response) => {
                // console.log('Response For getting patients by id', response);
                callBack(response);
            },
            (error) => {
                console.log('Error While getting patients by id', error);
                errorCallback(error)
            },
        );
    };
};

export const getPatientsOfWeek = (payload, dietitianId, callBack, errorCallback) => {
    return (dispatch) => {
        getAPI(
            endpoints.PATIENTOFWEEK + `?user_id=${dietitianId}`,
            payload,
            (response) => {
                // console.log('Response For getting patients by id', response);
                callBack(response);
            },
            (error) => {
                console.log('Error While getting patients of week by id', error);
                errorCallback(error)
            },
        );
    };
};

export const getPatientLoggedVitals = (payload, id, date, callBack, errorCallback) => {
    return (dispatch) => {
        getAPI(
            endpoints.LOGGEDVITALS + `?date_filter=${date}&` + `user_id=${id}`,
            payload,
            (response) => {
                // console.log('Response For getting patients by id', response);
                callBack(response);
            },
            (error) => {
                console.log('Error While getting patient logged vitals', error);
                errorCallback(error)
            },
        );
    };
};

export const getPatientStoolHistory= (payload, id, date, callBack, errorCallback) => {
    return (dispatch) => {
        getAPI(
            endpoints.STOOL + `?date_filter=${date}&` + `user_id=${id}`,
            payload,
            (response) => {
                // console.log('Response For getting patients by id', response);
                callBack(response);
            },
            (error) => {
                console.log('Error While getting patient stool history', error);
                errorCallback(error)
            },
        );
    };
};

export const getPatientMeals= (payload, id, date, callBack, errorCallback) => {
    return (dispatch) => {
        getAPI(
            endpoints.MEAL + `?date_filter=${date}&` + `user_id=${id}`,
            payload,
            (response) => {
                // console.log('Response For getting patients by id', response);
                callBack(response);
            },
            (error) => {
                console.log('Error While getting patient meals', error);
                errorCallback(error)
            },
        );
    };
};

export const getPatientVitalsGraph= (payload, id, date, dateLimits, callBack, errorCallback) => {
    return (dispatch) => {
        getAPI(
            endpoints.VITALSGRAPH  + `?user_id=${id}` +`&start_date=${date}` + `&${dateLimits}`,
            payload,
            (response) => {
                // console.log('Response For getting patients by id', response);
                callBack(response);
            },
            (error) => {
                console.log('Error While getting patient meals', error);
                errorCallback(error)
            },
        );
    };
};

export const getCheckInDates= (payload, id, callBack, errorCallback) => {
    return (dispatch) => {
        getAPI(
            endpoints.CHECKINDATES  + `?user_id=${id}`,
            payload,
            (response) => {
                // console.log('Response For getting patients by id', response);
                callBack(response);
            },
            (error) => {
                console.log('Error While getting patient meals', error);
                errorCallback(error)
            },
        );
    };
};

export const getCheckins= (payload, id, date, type, callBack, errorCallback) => {
    return (dispatch) => {
        getAPI(
            endpoints.CHECKINS  + `?user_id=${id}` + `&start_date=${date}` + `&question_model=${type}`,
            payload,
            (response) => {
                // console.log('Response For getting patients by id', response);
                callBack(response);
            },
            (error) => {
                console.log('Error While getting checkins', error);
                errorCallback(error)
            },
        );
    };
};

export const getProgressInsight= (payload, id, date, type, callBack, errorCallback) => {
    return (dispatch) => {
        getAPI(
            endpoints.PROGRESSINSIGHT  + `?user_id=${id}` + `&start_date=${date}` + `&time_period=${type}`,
            payload,
            (response) => {
                // console.log('Response For getting patients by id', response);
                callBack(response);
            },
            (error) => {
                console.log('Error While getting checkins', error);
                errorCallback(error)
            },
        );
    };
};

export const getFaceScanGraph= (payload, id, date, type, callBack, errorCallback) => {
    return (dispatch) => {
        getAPI(
            endpoints.FACESCANGRAPH  + `?user_id=${id}` + `&start_date=${date}` + `&time_period=${type}`,
            payload,
            (response) => {
                // console.log('Response For getting patients by id', response);
                callBack(response);
            },
            (error) => {
                console.log('Error While getting face scan graph data', error);
                errorCallback(error)
            },
        );
    };
};

export const invitePatient = (payload, callBack, errorCallback) => {
    return (dispatch) => {
        postAPI(
            endpoints.INVITEPATIENT,
            payload,
            (response) => {
                // console.log('Response for inviting patient', response);
                callBack(response);
            },
            (error) => {
                console.log('Error While inviting patient', error);
                errorCallback(error)
            },
        );
    };
};

export const getPatientDetailById = (payload, patientId, callBack, errorCallback) => {
    return (dispatch) => {
        getAPI(
            endpoints.GETPATIENTDETAILS + `?user_id=${patientId}`,
            payload,
            (response) => {
                // console.log('Response For getting patients by id', response);
                callBack(response);
            },
            (error) => {
                console.log('Error While getting patients by id', error);
                errorCallback(error)
            },
        );
    };
};

export const getFacialScanDataByPatientId = (payload, patientId, date, callBack, errorCallback) => {
    return (dispatch) => {
        getAPI(
            endpoints.GETFACIALSCANDATA + `?UserID=${patientId}` + `&date=${date}`,
            payload,
            (response) => {
                // console.log('Response For getting facial scan data of patients by id', response);
                callBack(response);
            },
            (error) => {
                console.log('Error While getting facial scan data of patients by id', error);
                errorCallback(error)
            },
        );
    };
};

export const getInsightCount = (payload, patientId, callBack, errorCallback) => {
    return (dispatch) => {
        getAPI(
            endpoints.INSIGHTCOUNT + `?UserID=${patientId}`,
            payload,
            (response) => {
                // console.log('Response For getting facial scan data of patients by id', response);
                callBack(response);
            },
            (error) => {
                console.log('Error While getting facial scan data of patients by id', error);
                errorCallback(error)
            },
        );
    };
};

// CHAT

export const getConversationListNicknames = (payload, userId, callBack, errorCallback) => {
    return (dispatch) => {
        postAPI(
            endpoints.AGORACONVERSATIONLIST + `?user_id=${userId}`,
            payload,
            (response) => {
                // console.log('Response For getting facial scan data of patients by id', response);
                callBack(response);
            },
            (error) => {
                console.log('Error While getting facial scan data of patients by id', error);
                errorCallback(error)
            },
        );
    };
};

export const sendFirebaseToken = (payload, callBack, errorCallback) => {
    return (dispatch) => {
        postAPI(
            endpoints.FIREBASETOKEN,
            payload,
            (response) => {
                // console.log('Response For getting facial scan data of patients by id', response);
                callBack(response);
            },
            (error) => {
                console.log('Error While sending firebase token', error);
                errorCallback(error)
            },
        );
    };
};

export const getNotifications = (payload, callBack, errorCallback) => {
    return (dispatch) => {
        postAPI(
            endpoints.NOTIFICATIONS,
            payload,
            (response) => {
                // console.log('Response For getting facial scan data of patients by id', response);
                callBack(response);
            },
            (error) => {
                console.log('Error While getting notifications', error);
                errorCallback(error)
            },
        );
    };
};

export const getNotificationsSeen = (payload, userId, callBack, errorCallback) => {
    return (dispatch) => {
        putAPI(
            endpoints.NOTIFICATIONS + userId,
            payload,
            (response) => {
                // console.log('Response For getting facial scan data of patients by id', response);
                callBack(response);
            },
            (error) => {
                console.log('Error While updating notifications', error);
                errorCallback(error)
            },
        );
    };
};

export const PushNotification = (payload, callBack, errorCallback) => {
    return (dispatch) => {
        postAPI(
            endpoints.POST_NOTIFICATION,
            payload,
            (response) => {
                // console.log('Response For getting facial scan data of patients by id', response);
                callBack(response);
            },
            (error) => {
                console.log('Error While pushing notifications', error);
                errorCallback(error)
            },
        );
    };
};


// Profile

export const updatePasswordProfile = (payload, callBack, errorCallback) => {
    return (dispatch) => {
        postAPI(
            endpoints.UPDATEPASSWORD,
            payload,
            (response) => {
                // console.log('Response For getting facial scan data of patients by id', response);
                callBack(response);
            },
            (error) => {
                console.log('Error While sending Update Password', error);
                errorCallback(error)
            },
        );
    };
};

export const updateProfile = (payload, callBack, errorCallback) => {
    return (dispatch) => {
        postAPI(
            endpoints.UPDATEPROFILE,
            payload,
            (response) => {
                // console.log('Response For getting facial scan data of patients by id', response);
                callBack(response);
            },
            (error) => {
                console.log('Error While sending Update Profile', error);
                errorCallback(error)
            },
        );
    };
};

export const getProfile = (payload, userId, callBack, errorCallback) => {
    return (dispatch) => {
        getAPI(
            endpoints.UPDATEPROFILE +  `?user_id=${userId}`,
            payload,
            (response) => {
                // console.log('Response For getting facial scan data of patients by id', response);
                callBack(response);
            },
            (error) => {
                console.log('Error While sending Update Profile', error);
                errorCallback(error)
            },
        );
    };
};

export const documentUpload = (payload, callBack, errorCallback) => {
    return (dispatch) => {
        postAPI(
            endpoints.UPLOAD,
            payload,
            (response) => {
                // console.log('Response For getting facial scan data of patients by id', response);
                callBack(response);
            },
            (error) => {
                console.log('Error While sending document upload', error);
                errorCallback(error)
            },
        );
    };
};

export const getDocument = (payload, userId, patientId, callBack, errorCallback) => {
    return (dispatch) => {
        getAPI(
            endpoints.GETDOCUMENTLIST +  `?dietitian=${userId}` +  `&patient=${patientId}`,
            payload,
            (response) => {
                // console.log('Response For getting facial scan data of patients by id', response);
                callBack(response);
            },
            (error) => {
                console.log('Error While sending getting document', error);
                errorCallback(error)
            },
        );
    };
};

export const deleteDocument = (payload,  callBack, errorCallback) => {
    return (dispatch) => {
        deleteAPI(
            endpoints.GETDOCUMENTLIST  ,
            payload,
            (response) => {
                // console.log('Response For getting facial scan data of patients by id', response);
                callBack(response);
            },
            (error) => {
                console.log('Error While sending deleting document', error);
                errorCallback(error)
            },
        );
    };
};

export const addNotes = (payload, callBack, errorCallback) => {
    return (dispatch) => {
        postAPI(
            endpoints.ADDNOTES,
            payload,
            (response) => {
                // console.log('Response For getting facial scan data of patients by id', response);
                callBack(response);
            },
            (error) => {
                console.log('Error While adding notes', error);
                errorCallback(error)
            },
        );
    };
};

export const getNotes = (payload, userId, patientId, days, callBack, errorCallback) => {
    return (dispatch) => {
        getAPI(
            endpoints.ADDNOTES +  `?dietitian_id=${userId}` +  `&patient_id=${patientId}` +  `&last_days=${days}`,
            payload,
            (response) => {
                // console.log('Response For getting facial scan data of patients by id', response);
                callBack(response);
            },
            (error) => {
                console.log('Error While sending getting note', error);
                errorCallback(error)
            },
        );
    };
};

export const deleteNotes = (payload, note_id, callBack, errorCallback) => {
    return (dispatch) => {
        deleteAPI(
            endpoints.ADDNOTES  +  `?note_id=${note_id}`  ,
            payload,
            (response) => {
                // console.log('Response For getting facial scan data of patients by id', response);
                callBack(response);
            },
            (error) => {
                console.log('Error While sending deleting Notes', error);
                errorCallback(error)
            },
        );
    };
};

export const editNotes = (payload, callBack, errorCallback) => {
    return (dispatch) => {
        putAPI(
            endpoints.ADDNOTES,
            payload,
            (response) => {
                // console.log('Response For getting facial scan data of patients by id', response);
                callBack(response);
            },
            (error) => {
                console.log('Error While adding notes', error);
                errorCallback(error)
            },
        );
    };
};

export const addFeedback = (payload, callBack, errorCallback) => {
    return (dispatch) => {
        postAPI(
            endpoints.ADDFEEDBACK,
            payload,
            (response) => {
                // console.log('Response For getting facial scan data of patients by id', response);
                callBack(response);
            },
            (error) => {
                console.log('Error While adding feedback', error);
                errorCallback(error)
            },
        );
    };
};

export const getFeedback = (payload, dietitianId, patientId, mealId, mealType, callBack, errorCallback) => {
    return (dispatch) => {
        getAPI(
            endpoints.ADDFEEDBACK +  `?dietitian_id=${dietitianId}` +  `&patient_id=${patientId}` +  `&meal_id=${mealId}` + `&meal_type=${mealType}`,
            payload,
            (response) => {
                // console.log('Response For getting facial scan data of patients by id', response);
                callBack(response);
            },
            (error) => {
                console.log('Error While sending getting feedback', error);
                errorCallback(error)
            },
        );
    };
};

export const getAgoraToken = (payload, callBack, errorCallback) => {
    return (dispatch) => {
        postAPI(
            endpoints.AGORATOKEN,
            payload,
            (response) => {
                // console.log('Response For getting facial scan data of patients by id', response);
                callBack(response);
            },
            (error) => {
                console.log('Error While agora token', error);
                errorCallback(error)
            },
        );
    };
};

export const getVideoCallToken= (payload, callBack, errorCallback) => {
    return (dispatch) => {
        postAPI(
            endpoints.VIDEO_CALL_CHANNEL,
            payload,
            (response) => {
                // console.log('Response For getting facial scan data of patients by id', response);
                callBack(response);
            },
            (error) => {
                console.log('Error While agora token', error);
                errorCallback(error)
            },
        );
    };
};

export const downloadPtaientsDetail= (payload, callBack, errorCallback) => {
    return (dispatch) => {
        postAPI(
            endpoints.PATIENTS_DATE_DOWNLOAD,
            payload,
            (response) => {
                // console.log('Response For getting facial scan data of patients by id', response);
                callBack(response);
            },
            (error) => {
                console.log('Error While download', error);
                errorCallback(error)
            },
        );
    };
};








