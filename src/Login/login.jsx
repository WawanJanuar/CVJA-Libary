import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import loginCss from "./login.module.css"

const Login = () => {

    const [email, SetEmail] = useState("")
    const [password, SetPassword] = useState("")

    const navigate = useNavigate()

    const HandleLogin = (e) => {
        e.preventDefault()

        if(email === "wawanjanuar@gmail.id" && password === "12345A"){
            alert("Login berhasil")
            console.log("Login berhasil")
            SetEmail("")
            SetPassword("")
            navigate('/')
        } else {
            alert("Login gagal user: wawanjanuar@gmail.id dan pass: 12345A")
            console.log("Login gagal ")
            SetEmail("")
            SetPassword("")
        }
    }

    return(
        <>
            {/* pembuatan container untuk layar blur */}
            <div className={loginCss.Container}>
                <section className={loginCss.sect1}>
                    <div className={loginCss.img}></div>
                </section>
                <section className={loginCss.sect2}>
                    <div className={loginCss.formLog}>
                        <h2>Hello !</h2>
                        <h3>Welcome Back</h3>
                        <form onSubmit={HandleLogin}>
                            <input 
                            type="email" 
                            value={email}
                            onChange={(e) => SetEmail(e.target.value)}
                            placeholder="Enter Email:" 
                            className={loginCss.email} />

                            <input 
                            type="password" 
                            value={password}
                            onChange={(e) => SetPassword(e.target.value)}
                            placeholder="Password:" 
                            className={loginCss.pass} />

                            <Link className={loginCss.forgot} to = './'>Forget Password</Link> 

                            <br />

                            <button type="submit" className={loginCss.submit}>Login</button>

                            <p className={loginCss.signt}>don't have an account? 
                                <Link className={loginCss.sign} to = './'> Sign Up</Link>
                            </p>
                        </form>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Login;