import { init } from "./init"
export const reducer = (state=init, action)=>{
    return {
         ...state,
         isLoadHome:action.payload
    }

}