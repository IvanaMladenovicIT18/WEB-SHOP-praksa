import { Link } from "react-router-dom";
import Header from "../components/homeComponents/Header"

const Login = () => {

    return (
        <>
            <Header/>
            <div className="container d-flex flex-column justify-content-center align-items-center">
                <form className="login col-md-5">
                    <h1>Prijava</h1>
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
                    <button type="submit">Prijavi se</button>
                    <p>
                        <Link to={"/register"}>
                            Nemas nalog? Registruj se
                        </Link>
                    </p>
                </form>
            </div>
        </>
    )
}

export default Login;