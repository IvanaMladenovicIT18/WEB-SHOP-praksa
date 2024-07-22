import { Link } from "react-router-dom";
import Header from "../components/homeComponents/Header"

const Register = () => {

    return (
        <>
            <Header/>
            <div className="container d-flex flex-column justify-content-center align-items-center">
                <form className="login col-md-5">
                    <h1>Registracija</h1>
                    <input
                        type="text"
                        placeholder="Ime"
                        required
                    />
                    <input
                        type="text"
                        placeholder="Prezime"
                        required
                    />
                    <input
                        type="text"
                        placeholder="Broj telefona"
                        required
                    />
                    <input
                        type="text"
                        placeholder="Adresa"
                        required
                    />
                    <input
                        type="email"
                        placeholder="Email adresa"
                        required
                    />
                    <input
                        type="password"
                        placeholder="Lozinka"
                        required
                    />
                    <button type="submit">Registruj se</button>
                    <p>
                        <Link to={"/login"}>
                            Vec imas nalog? Prijavi se
                        </Link>
                    </p>
                </form>
            </div>
        </>
    )
}

export default Register;