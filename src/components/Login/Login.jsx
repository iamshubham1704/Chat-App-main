import React from 'react'
import "./login.css"
import { toast } from "react-toastify"
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth, db } from '/Chat bot/src/lib/firebase';
import { doc, setDoc } from "firebase/firestore"
import upload from '../../lib/upload';

function Login() {
    const [avatar, setavatar] = React.useState({
        file: null,
        url: ""
    })

    const handleAvatar = (e) => {
        if (e.target.files[0]) {
            setavatar({
                file: e.target.files[0],
                url: URL.createObjectURL(e.target.files[0])
            })
        }
    }

    const handleLogin = (e) => {
        e.preventDefault()
        toast.success("hello")
    }

    const handleRegister = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)

        const { username, email, password } = Object.fromEntries(formData)

        try {
            const res = await createUserWithEmailAndPassword(auth, email, password, username)

            const imgURL = await upload(avatar.file)

            await setDoc(doc(db, "users", res.user.uid), {
                username,
                email,
                avatar: imgURL,
                id: res.user.uid,
                blocked: [],
            });

            await setDoc(doc(db, "userchats", res.user.uid), {
                chats: [],

            });

            toast.success("User registered successfully")
        } catch (error) {
            console.error(error)
            toast.error(error.message)
        }
    }

    return (
        <div className='login'>
            <div className="item">
                <h2>Welcome back,</h2>
                <form onSubmit={handleLogin}>
                    <input type="text" placeholder="Username" name='username' />
                    <input type="password" placeholder="Password" name='password' />
                    <button type="submit">Login</button>
                    <p>Forgot Password?</p>
                    <p>Don't have an account? <a href="">Sign Up</a></p>

                </form>
            </div>
            <div className="separator"></div>
            <div className="item"></div>
            <div className='createaccount'>
                <h2 className='hf'>Create an Account</h2>
                <form className='donthaveaccount' onSubmit={handleRegister}>
                    <label htmlFor="file">
                        <img src={avatar.url || "./avatar.png"} alt="" /></label>
                    <input type="file" id='file' style={{ display: "none" }} onChange={handleAvatar} />
                    <input type="text" placeholder="Username" name='username' />
                    <input type="email" placeholder="Email" name='email' />
                    <input type="password" placeholder="Password" name='password' />
                    <button type="submit">Sign Up</button>

                </form>
            </div>
        </div>
    )
}

export default Login
