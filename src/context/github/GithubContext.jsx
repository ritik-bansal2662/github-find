import { useReducer, createContext } from "react";
import GithubReducer from "./githubReducer";

const GithubContext = createContext()

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL

export const GithubProvider = ({children}) => {
    const initialState = {
        users: [],
        user:{},
        loading: false,
    }

    const [state, dispatch] = useReducer(GithubReducer, initialState)

    // get search users
    const searchUsers = async (text) => {
        setLoading()
        const params = new URLSearchParams({
            q:text
        })

        const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
            // headers: {
            //     Authorization: `token ${process.env}`
            // }
        })

        const {items} = await response.json()
        // console.log(items)

        dispatch({
            type: 'GET_USERS',
            payload: items,
        })
    }


    // get single user
    const getUser = async (login) => {
        setLoading()

        const response = await fetch(`${GITHUB_URL}/users?q=${login}`, {
            // headers: {
            //     Authorization: `token ${process.env}`
            // }
        })
        // console.log(response.status)

        if(response.status === 404) {
            window.location= '/not-found'
        } else {
            const data = await response.json()
            console.log(data)
    
            dispatch({
                type: 'GET_USER',
                payload: data,
            })
        }

    }

    //clear users fro state
    const clearUsers = () => dispatch({type:'CLEAR_USERS'})

    //set loading
    const setLoading = () => dispatch({type:'SET_LOADING'})

    return (
        <GithubContext.Provider value={{
            users: state.users,
            loading: state.loading,
            user: state.user,
            searchUsers,
            clearUsers,
            getUser,
        }}>
            {children}
        </GithubContext.Provider>
    )

}

export default GithubContext
