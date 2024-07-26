import { Link, useNavigate } from "react-router-dom";
import Header from "../components/homeComponents/Header"
import { useState } from "react";
import useUserStore from "../store/userStore";

const Login = () => {

    const navigate = useNavigate();
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [notification, setNotification] = useState(null);

    const { login } = useUserStore();

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            await login(email, password);
            navigate('/');
        } catch (err) {
            setNotification({ type: 'danger', message: err.message });
            setTimeout(() => setNotification(null), 5000);
        }
    };

    return (
        <>
            <Header/>
            <div className="container d-flex flex-column justify-content-center align-items-center">
                <form 
                    className="login col-md-5"
                    onSubmit={submitHandler}
                >
                    <h1>Prijava</h1>
                    <input
                        type="email"
                        placeholder="Email adresa"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Lozinka"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button type="submit">Prijavi se</button>
                    <p> Nemaš nalog?
                        <Link to={"/register"} className="register-link">
                             Registruj se
                        </Link>
                    </p>
                </form>
                {notification && (
                    <div className={`alert alert-${notification.type} fixed-top mb-0`} role="alert">
                        {notification.message}
                    </div>
                )}
            </div>
        </>
    )
}

export default Login;