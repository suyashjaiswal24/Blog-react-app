import { useContext, useState } from "react"
import { useRef } from "react"
import { Link } from "react-router-dom"
import { Context } from "../../context/Context"
import "./login.css"
import { axiosInstance } from "../../config"

export default function Login() {

	const userRef = useRef()
	const passwordRef = useRef()
	const [success, setSuccess] = useState(true)
	const { dispatch, isFetching} = useContext(Context)

	const handleSubmit = async (e)=>{
		e.preventDefault()
		dispatch({type:"LOGIN_START"})
		try{
			const res = await axiosInstance.post("auth/login", {
				username: userRef.current.value,
				password: passwordRef.current.value,
			})
			dispatch({type:"LOGIN_SUCCESS", payload:res.data})
		} catch(err){
			setSuccess(false)
			setTimeout(() => {
				setSuccess(true);
			}, 2000)
			dispatch({type:"LOGIN_FAILURE"})
		}
	}

	return (
		<>
			<div className="login">
				<span className="loginTitle">Login</span>
				<form className="loginForm" onSubmit={handleSubmit}>
					<label>Username</label>
					<input type="text" className="loginInput" placeholder="Enter your Username" ref={userRef} />
					<label>Password</label>
					<input type="password" className="loginInput" placeholder="Enter your password" ref={passwordRef} />
					<button className="loginButton" type="submit" disabled={isFetching}>Login</button>
					{!success && <span style={{ color: "red", textAlign: "center", marginTop: "20px" }}>Wrong Credentials...</span>}
				</form>
				<button className="loginRegisterButton">
					<Link className="link" to={"/register"}>REGISTER</Link>
				</button>
			</div>
			<div className="sample">
				<table>
					<caption>Sample User Credentials</caption>
					<tr>
						<th>Username</th>
						<th>Password</th>
					</tr>
					<tr>
						<td>user111</td>
						<td>1234</td>
					</tr>
					<tr>
						<td>user222</td>
						<td>1234</td>
					</tr>
					<tr>
						<td>user333</td>
						<td>1234</td>
					</tr>

				</table>
			</div>
		</>
	)
}
