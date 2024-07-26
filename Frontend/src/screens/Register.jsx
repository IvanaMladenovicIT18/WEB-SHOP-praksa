import { Link, useNavigate } from "react-router-dom";
import Header from "../components/homeComponents/Header"
import { useState } from "react";
import useUserStore from "../store/userStore";

const Register = () => {

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [notification, setNotification] = useState(null);

    const { register } = useUserStore();

    const navigate = useNavigate();

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            await register(name, surname, phoneNumber, address, email, password);
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
                    <h1>Registracija</h1>
                    <input
                        type="text"
                        placeholder="Ime"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Prezime"
                        value={surname}
                        onChange={(e) => setSurname(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Broj telefona"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Adresa"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                    />
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
                    <button type="submit">Registruj se</button>
                    <p> Već imaš nalog?
                        <Link to={"/login"} className="register-link">
                            Prijavi se
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

export default Register;