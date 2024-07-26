import Header from "../components/homeComponents/Header";
import useOrderStore from "../store/orderStore";
import { useEffect, useState } from "react";
import Footer from '../components/homeComponents/Footer';
import Orders from "../components/profileComponents/Orders";
import useUserStore from "../store/userStore";
import ProfileInfo from "../components/profileComponents/ProfileInfo";


const ProfileScreen = () => {

    const [showOrders, setShowOrders] = useState(false);
    const [showProfile, setShowProfile] = useState(true);
    const { orders, getOrdersByUser } = useOrderStore();
    const { user } = useUserStore();
    console.log(orders)

    useEffect(() => {
        getOrdersByUser(user.id);
        }, [getOrdersByUser]);

    const handleShowOrders = () => {
        setShowOrders(true);
        setShowProfile(false);
    };

    const handleShowProfile = () => {
        setShowOrders(false);
        setShowProfile(true);
    };

    return (
        <>
            <Header/>
            <div className="container">
                <div className="row mt-3 mb-5">
                    <div className="col-md-12 mb-3 d-flex justify-content-center gap-2">
                        <button onClick={handleShowProfile} className="round-black-btn">
                            Profil
                        </button>
                        <button onClick={handleShowOrders} className="round-black-btn">
                            Porudzbine
                        </button>
                    </div>
                    {showProfile && (
                        <div className="col-md-12 mt-3">
                            <ProfileInfo />
                        </div>
                    )}
                    {showOrders && (
                        <div className="col-md-12 mt-3">
                            <Orders orders={orders} />
                        </div>
                    )}
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default ProfileScreen;