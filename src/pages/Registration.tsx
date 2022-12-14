import React, {useRef} from 'react';
import {login, logout, signup} from "../firebase";
import {useDispatch} from "react-redux";
import {useForm} from "react-hook-form";
import {validation} from "../assets/info/validation";

const Registration = () => {
    const dispatch = useDispatch()

    const emailRefReg = useRef();
    const passwordRefReg = useRef();

    const emailRefLog = useRef();
    const passwordRefLog = useRef();

    async function handleSignup() {
        dispatch({type:"changeLoad",payload:true})
        // @ts-ignore
        await signup(emailRefReg.current.value, passwordRefReg.current.value);
        dispatch({type:"changeLoad",payload:false})

    }

    async function handleLogin() {
        dispatch({type:"changeLoad",payload:true})

        // @ts-ignore
        await login(emailRefLog.current.value, passwordRefLog.current.value);
        dispatch({type:"changeLoad",payload:false})

    }

    async function handleLogout() {
        dispatch({type:"changeLoad",payload:true})

        try {
            await logout();
        } catch {
            alert("Error!");
        }
        dispatch({type:"changeLoad",payload:false})

    }

    const {register,handleSubmit , formState: { errors }} = useForm()

    return (
        <form onSubmit={handleSubmit(e=>signup(e.email,e.password))}>
            <div className="sign-form">
                <div className="section">
                    <div className="container">
                        <div className="row full-height justify-content-center">
                            <div className="col-12 text-center align-self-center py-5">
                                <div className="section pb-5 pt-5 pt-sm-2 text-center">
                                    <h6><span>Sign Up </span><span>Log In</span></h6>
                                    <input className="checkbox" type="checkbox" id="reg-log" name="reg-log"/>
                                    <label htmlFor="reg-log"></label>
                                    <div className="card-3d-wrap mx-auto">
                                        <div className="card-3d-wrapper">
                                            <div className="card-front">
                                                <div className="center-wrap">
                                                    <div className="section text-center">
                                                        <h4 className="mb-4 pb-3">Sign Up</h4>
                                                        <div className="form-group mt-2">
                                                            {/*@ts-ignore*/}
                                                            <input ref={emailRefReg} type="email" name="regemail" className="form-style"
                                                                   placeholder="Your Email" id="logemail"
                                                                   autoComplete="off" {...register('email',{...validation.email})} />
                                                            {/*@ts-ignore*/}
                                                            <span className="error-msg">{errors?.email?.message}</span>
                                                        </div>
                                                        <div className="form-group mt-2">
                                                            {/*@ts-ignore*/}
                                                            <input ref={passwordRefReg} type="password" name="regpass" className="form-style"
                                                                   placeholder="Your Password" id="logpass"
                                                                   autoComplete="off" {...register('password',{...validation.password})} />
                                                            {/*@ts-ignore*/}
                                                            <span className="error-msg">{errors?.password?.message}</span>
                                                        </div>
                                                        <button className="btn mt-4" >submit</button>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="card-back">
                                                <div className="center-wrap">
                                                    <div className="section text-center">
                                                        <h4 className="mb-4 pb-3">Log In</h4>
                                                        <div className="form-group">
                                                            {/*@ts-ignore*/}
                                                            <input ref={emailRefLog} type="email" name="logemail" className="form-style"
                                                                   placeholder="Your Email" id="logemail"
                                                                   autoComplete="off"/>
                                                        </div>
                                                        <div className="form-group mt-2">
                                                            {/*@ts-ignore*/}
                                                            <input ref={passwordRefLog} type="password" name="logpass" className="form-style"
                                                                   placeholder="Your Password" id="logpass"
                                                                   autoComplete="off"/>
                                                        </div>
                                                        <button className="btn mt-4" onClick={handleLogin}>submit</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default Registration;