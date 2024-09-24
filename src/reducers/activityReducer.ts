import { Activity } from "../types"


export type ActivityActions = 
    {type: 'save-activity', payload: {newActivity : Activity}} | 
    {type: 'save-activeId', payload: {id : Activity['id']}} 
type ActivityState = {
    activities: Activity[],
    activeId: Activity['id']
}

export const initialState : ActivityState = {
    activities: [],
    activeId: ''
}

export const activityReducer = (
        state: ActivityState = initialState,
        action: ActivityActions
    ) => {
    
    if(action.type === 'save-activity'){
        // Este codigo maneja la logica para actualizar el State
        return {
           ...state,
           activities: [...state.activities, action.payload.newActivity] 
        }
    }

    if(action.type === 'save-activeId') {
        return {
            ...state,
           activeId: action.payload.id 
        }
    }

    return state
}