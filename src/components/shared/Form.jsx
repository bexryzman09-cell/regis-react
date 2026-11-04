import { Link } from "react-router-dom";
import { register } from "../function/FormFunction";
import { useState } from "react";






export default function Form() {




    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");

    function handeleSumbit(e) {
        e.preventDefault();

        if (email.trim() == "" && username.trim() == "" && password.trim() == "") {
            alert("пожалуста запольните все ")
        }
        else {
            const newData = {
                password: password,
                email: email,
                name: username,
            }
            register(newData)
        }
    }


    return (
        <>
            <div className="box">
                <form className="form" onSubmit={(e)=>handeleSumbit(e)}>

                    <h1>Welcome</h1>
                    <p>Create your account</p>

                    <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" className="email" />

                    <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" className="password" />

                    <input onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Username" className="username" />

                    <button className="btn" type="submit"> Register </button>
                    <Link to="/login" className="login">
                        Войти
                    </Link>

                </form>
            </div>
        </>
    );
}