const INITIAL_STATE = {
    courses: [],
    activeCourse: {}
}

export default function course (state = INITIAL_STATE, action){

    switch (action.type) {
        case 'FETCH_COURSES':
            return {
                ...state,
                courses: action.payload
            }
            break;
        case 'ACTIVE_CURSE':
            return {
                ...state,
                activeCourse: action.payload
            }
            break;
        default:
            return state
            break;
    }
}