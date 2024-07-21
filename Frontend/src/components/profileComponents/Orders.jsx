const Orders = (props) => {

    const { orders } = props;

    return (
        <> 
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
                    <tr key={order.id}>
                        <td>{order.id}</td>
                        <td>{order.totalPrice} RSD</td>
                        <td>{order.date}</td>
                        <td>{order.time}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default Orders;