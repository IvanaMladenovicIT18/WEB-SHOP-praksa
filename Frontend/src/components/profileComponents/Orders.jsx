import { useState } from "react";
import useOrderItemStore from "../../store/orderItemStore";

const Orders = (props) => {

    const { orders } = props;

    const [selectedOrderId, setSelectedOrderId] = useState();
    const { orderItems, getOrderItemsByOrderId } = useOrderItemStore();

    const handleRowClick = async (orderId) => {
        setSelectedOrderId(orderId);
        getOrderItemsByOrderId(orderId);
    };

    return (
        <> 
        <div className="row mb-5">
            <div className="col-md-6">
                <h3>Vase porudzbine</h3>
                <table className="table table-hover table-striped">
                    <thead>
                        <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Cena</th>
                        <th scope="col">Datum</th>
                        <th scope="col">Vreme</th>
                        </tr>
                    </thead>
                    <tbody className="custom-table">
                        {orders.map((order) => (
                        <tr
                            key={order.id}
                            onClick={() => handleRowClick(order.id)}
                        >
                            <td>{order.id}</td>
                            <td>{order.totalPrice} RSD</td>
                            <td>{order.date}</td>
                            <td>{order.time}</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="col-md-6">
            {selectedOrderId && (
                <div>
                    <h3>Stavke porudzbine ID-{selectedOrderId}</h3>
                        <table className="table table-hover table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">Slika</th>
                                    <th scope="col">Naziv proizvoda</th>
                                    <th scope="col">Velicina</th>
                                    <th scope="col">Kolicina</th>
                                    <th scope="col">Cena/kom</th>
                                </tr>
                            </thead>
                            <tbody className="custom-table">
                                {orderItems.map((item) => (
                                    <tr key={item.id}>
                                        <td>
                                            <img className="order-item-img" src={item.Product.image} alt={item.Product.name}/>
                                        </td>
                                        <td>{item.Product.name}</td>
                                        <td>{item.Product.size}</td>
                                        <td>{item.quantity}</td>
                                        <td>{item.itemPrice} RSD</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                </div>
            )}
            </div>
        </div>
        </>
    );
}

export default Orders;