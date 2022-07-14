import { createContext, useReducer } from "react";
import alertReducer from './AlertReducer'

const AlertContext = createContext()

export const AlertProvider = ({children}) => {
    const initialState = null

    const [state, disptach] = useReducer(alertReducer, initialState)

    const setAlert = (msg, type) => {
        disptach({
            type: 'SET_ALERT',
            payload: {msg, type}
        })

        setTimeout(() => dispatchEvent({ type: 'REMOVE_ALERT'}), 3000)
    }

    return <AlertContext.Provider value={{alert: state, setAlert }}>
        {children}
    </AlertContext.Provider>
}

export default AlertContext
