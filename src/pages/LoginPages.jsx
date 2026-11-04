import { Link } from 'react-router-dom'
import { useState } from "react";
import { login } from "../components/function/LoginFunction";
export default function LoginPages() {


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    function handeleSumbit(e) {
        e.preventDefault();

        if (email.trim() == "" && password.trim() == "") {
            alert("пожалуста запольните все ")
        }
        else {
            const loginData = {
                password: password,
                email: email,
            }
            login(loginData)
        }
    }

    return (
        <div className="box">
            <form className="form" onSubmit={(e) => handeleSumbit(e)}>
                <h1>Welcome Back</h1>
                <p>Login to your account</p>


                <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" className="email" />

                <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" className="password" />

                <button className="btn">  Login </button>

                <Link to="/register" className="login">
                    Зарегистрироваться
                </Link>

            </form>
        </div>
    )
}