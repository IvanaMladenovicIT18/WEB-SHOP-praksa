import { useState } from "react";
import useUserStore from "../../store/userStore";
import { format } from 'date-fns'

const ProfileInfo = () => {

    const { user, updateUser } = useUserStore();

    const [name, setName] = useState(user.name);
    const [surname, setSurname] = useState(user.surname);
    const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber);
    const [address, setAddress] = useState(user.address);
    const [notification, setNotification] = useState(null);

    const formattedDate = format(new Date(user.registrationDate), 'dd.MM.yyyy HH:mm:ss');

    const submitHandler = async (e) => {
        e.preventDefault();

        const userData = {
            name,
            surname,
            phoneNumber,
            address
        };

        try {
            await updateUser(userData);
            setNotification({ message: 'Profil ažuriran!', type: 'success' });
            setTimeout(() => setNotification(null), 5000);
        } catch (error) {
            setNotification({ type: 'danger', message: 'Neispravni format podataka' });
            setTimeout(() => setNotification(null), 5000);
        }

    };

    return (
        <> 
            <div className="row">
                <div className="col-md-6">
                    <h3 className="mb-2">Informacije o korisniku</h3>
                    <div className="login">
                        <div className="user-cart row">
                            <div className="col-md-3">
                                <h6>Korisnik:</h6>
                            </div>
                            <div className="col-md-9 text-end">
                                <h6>{user.name} {user.surname}</h6>
                            </div>
                        </div>
                        <div className="user-cart row">
                            <div className="col-md-3">
                                <h6>Mail:</h6>
                            </div>
                            <div className="col-md-9 text-end">
                                <h6>{user.email}</h6>
                            </div>
                        </div>
                        <div className="user-cart row">
                            <div className="col-md-5">
                                <h6>Broj telefona:</h6>
                            </div>
                            <div className="col-md-7 text-end">
                                <h6>{user.phoneNumber}</h6>
                            </div>
                        </div>  
                        <div className="user-cart row">
                            <div className="col-md-5">
                                <h6>Adresa:</h6>
                            </div>
                            <div className="col-md-7 text-end">
                                <h6>{user.address}</h6>
                            </div>
                        </div>  
                        <div className="user-cart row">
                            <div className="col-md-5">
                                <h6>Datum registracije:</h6>
                            </div>
                            <div className="col-md-7 text-end">
                                <h6>{formattedDate}</h6>
                            </div>
                        </div>  
                    </div>
                </div>

                <div className="col-md-6">
                    <h3 className="mb-2">Izmeni</h3>
                    <form 
                        className="login"
                        onSubmit={submitHandler}
                    >
                        <label>Ime</label>
                        <input
                            type="text"
                            placeholder="Ime"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                        <label>Prezime</label>
                        <input
                            type="text"
                            placeholder="Prezime"
                            value={surname}
                            onChange={(e) => setSurname(e.target.value)}
                            required
                        />
                        <label>Broj telefona</label>
                        <input
                            type="text"
                            placeholder="Broj telefona"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            required
                        />
                        <label>Adresa</label>
                        <input
                            type="text"
                            placeholder="Adresa"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            required
                        />
                        <button type="submit">Sačuvaj promene</button>
                    </form>
                    {notification && (
                        <div className={`alert alert-${notification.type} fixed-top mb-0`} role="alert">
                            {notification.message}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default ProfileInfo;