import axios from 'axios';
import React from 'react';
import Card from '../components/Card';

function Orders () {
  const [orders,setOrders] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() =>{
    (async () =>{
      try {
        const {data} = await axios.get('https://6156e726e039a0001725ac90.mockapi.io/orders');
        setOrders(data.reduce((prev, obj) =>[...prev,...obj.items],[]));
        setIsLoading(false);                            
      } catch (error) {
        alert(error.message);
      }
    })();
  },[])

  return(
    <div className="content p-40">
      <div className="d-flex align-center mb-40">
        <h1 className="ml-20">Мои заказы</h1>
      </div>

      <div className="d-flex flex-wrap">
        {(isLoading ? [...Array(8)] : orders).map((item,index) => (
          <Card  
            key = {index}
            loading={isLoading}
            {...item}
          />
        ))}
      </div>
    </div>
  )
}
export default Orders;