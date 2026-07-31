import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";


function Cart() {

  const { cartItems, removeFromCart } = useCart();


  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );


  return (

    <section className="bg-gray-100 min-h-screen py-10">

      <div className="container mx-auto px-5">


        <h1 className="text-4xl font-bold mb-8">
          Shopping Cart
        </h1>



        {
          cartItems.length === 0 ? (

            <div className="bg-white p-8 rounded-xl shadow">

              <p className="text-xl text-gray-600">
                Your cart is currently empty.
              </p>


              <Link
                to="/products"
                className="inline-block mt-5 bg-blue-600 text-white px-6 py-3 rounded-lg"
              >
                Continue Shopping
              </Link>


            </div>


          ) : (


            <div className="grid lg:grid-cols-3 gap-8">


              {/* Cart Items */}

              <div className="lg:col-span-2 space-y-5">


                {
                  cartItems.map((item)=>(


                    <div
                      key={item.id}
                      className="bg-white shadow rounded-xl p-5 flex justify-between items-center"
                    >


                      <div className="flex gap-5 items-center">


                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-28 h-28 object-cover rounded-lg"
                        />


                        <div>


                          <h2 className="text-xl font-bold">
                            {item.name}
                          </h2>


                          <p className="text-gray-500">
                            Quantity: {item.quantity}
                          </p>


                          <p className="text-blue-600 font-bold text-xl">
                            ${item.price}
                          </p>


                        </div>


                      </div>



                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                      >
                        Remove
                      </button>


                    </div>


                  ))
                }


              </div>



              {/* Summary */}

              <div className="bg-white rounded-xl shadow p-6 h-fit">


                <h2 className="text-2xl font-bold mb-5">
                  Order Summary
                </h2>


                <div className="flex justify-between mb-4">

                  <span>
                    Items
                  </span>

                  <span>
                    {cartItems.length}
                  </span>

                </div>



                <div className="flex justify-between text-xl font-bold">

                  <span>
                    Total
                  </span>

                  <span className="text-blue-600">
                    ${total.toFixed(2)}
                  </span>

                </div>



                <Link
                  to="/checkout"
                  className="block text-center mt-6 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700"
                >
                  Proceed to Checkout
                </Link>


                <Link
                  to="/products"
                  className="block text-center mt-3 bg-blue-600 text-white py-3 rounded-lg"
                >
                  Continue Shopping
                </Link>


              </div>


            </div>


          )

        }


      </div>


    </section>

  );
}


export default Cart;