import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";


function Checkout() {

  const { cartItems } = useCart();

  const navigate = useNavigate();


  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );


  function placeOrder() {

    alert("Order placed successfully!");

    navigate("/");

  }


  return (

    <section className="bg-gray-100 min-h-screen py-10">

      <div className="container mx-auto px-5">


        <h1 className="text-4xl font-bold mb-8">
          Checkout
        </h1>



        <div className="grid md:grid-cols-2 gap-8">


          {/* Customer Details */}

          <div className="bg-white p-6 rounded-xl shadow">

            <h2 className="text-2xl font-bold mb-5">
              Shipping Details
            </h2>


            <input
              placeholder="Full Name"
              className="w-full border p-3 mb-4 rounded"
            />


            <input
              placeholder="Email"
              className="w-full border p-3 mb-4 rounded"
            />


            <input
              placeholder="Address"
              className="w-full border p-3 mb-4 rounded"
            />


            <input
              placeholder="Phone Number"
              className="w-full border p-3 rounded"
            />


          </div>



          {/* Order Summary */}

          <div className="bg-white p-6 rounded-xl shadow">


            <h2 className="text-2xl font-bold mb-5">
              Order Summary
            </h2>



            {
              cartItems.map(item=>(

                <div
                  key={item.id}
                  className="flex justify-between mb-3"
                >

                  <span>
                    {item.name}
                    {" "}x{item.quantity}
                  </span>


                  <span>
                    ${item.price * item.quantity}
                  </span>


                </div>

              ))
            }



            <hr className="my-5"/>



            <h3 className="text-xl font-bold">
              Total: ${total.toFixed(2)}
            </h3>



            <button
              onClick={placeOrder}
              className="mt-6 w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700"
            >
              Place Order
            </button>


          </div>


        </div>


      </div>


    </section>

  );

}


export default Checkout;