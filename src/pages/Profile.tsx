import React from 'react';
import {useAuthState} from "react-firebase-hooks/auth";
import firebase from "firebase/compat";
import {auth, logout} from '../firebase'
import Loading from "../components/Loading";
import {useDispatch} from "react-redux";
const Profile = () => {
    const defaultImg = require('../assets/image/default-img.png')
    const [user,loading] = useAuthState(auth)
    const dispatch = useDispatch()
    async function handleLogout() {
        dispatch({type:"changeLoad",payload:true})
        try {
            await logout();
        } catch {
            alert("Error!");
        }
        dispatch({type:"changeLoad",payload:false})
    }
    if(loading) {
        return <Loading />
    }
    return (
        <div className="profile">
            <img src={defaultImg} alt=""/>
            <p>Email:{user?.email}</p>
            <div className="blue-button">
                <button onClick={()=>handleLogout()}>
                    Logout
                </button>
            </div>
        </div>
    );
};

export default Profile;