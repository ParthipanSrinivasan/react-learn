import { useEffect, useState } from "react";

const Api_Fetch = () => {
    const [items, setItems] = useState([]);
    const [dataIsLoaded, setDataisLoaded] = useState(false);

    useEffect(() => {
        fetch('http://192.168.1.6:8000/product')
            .then((res) => res.json())
            .then((json) => {
                console.log(json);
                setItems(json);
                setDataisLoaded(true);
            })
    }, [])
    if (!dataIsLoaded) {
        return (
            <>
                <h1>PLease Wait Some Time.....</h1>
            </>
        )
    }
    return (
        <>
            <h1>Product Details</h1>
            <h3>fetch data from an API in React</h3>
            <div className="container">
                <table border='1'>
                    <thead>
                        <tr>
                            <th><strong>Product ID</strong></th>
                            <th><strong>Product_Name</strong></th>
                            <th><strong>Unit</strong></th>
                            <th><strong>Price</strong></th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item) =>(
                            <tr className="item" key={item.product_id}>
                                <td>{item.product_id}</td>
                                <td>{item.product_name}</td>
                                <td>{item.unit}</td>
                                <td>{item.price}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Api_Fetch