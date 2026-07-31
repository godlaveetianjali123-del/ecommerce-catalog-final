import { useParams, useNavigate } from "react-router-dom";
import products from "../data/products";
import { useCart } from "../context/CartContext";


function ProductDetails() {


  const { id } = useParams();

  const navigate = useNavigate();

  const { addToCart } = useCart();



  const product = products.find(
    (item) => item.id === Number(id)
  );



  if (!product) {

    return (
      <h1 className="text-center text-3xl mt-10">
        Product Not Found
      </h1>
    );

  }



  function buyNow(){

    addToCart(product);

    navigate("/checkout");

  }



  return (

    <section className="bg-gray-100 min-h-screen py-10">


      <div className="container mx-auto px-5">


        <div className="bg-white rounded-xl shadow-lg p-8 grid md:grid-cols-2 gap-10">


          {/* Image */}

          <div>

            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[450px] object-cover rounded-xl"
            />

          </div>



          {/* Details */}

          <div>


            <h1 className="text-4xl font-bold mb-4">
              {product.name}
            </h1>


            <p className="text-gray-500 mb-4">
              Category: {product.category}
            </p>



            <div className="mb-5">

              <span className="bg-green-600 text-white px-3 py-1 rounded">
                ⭐ {product.rating}
              </span>

            </div>



            <h2 className="text-3xl font-bold text-blue-600 mb-5">
              ${product.price}
            </h2>



            <p className="text-gray-700 leading-7 mb-8">
              {product.description}
            </p>




            <div className="flex gap-5">


              <button

                onClick={()=>addToCart(product)}

                className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600"
              >
                Add To Cart
              </button>



              <button

                onClick={buyNow}

                className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700"
              >
                Buy Now
              </button>


            </div>



          </div>


        </div>


      </div>


    </section>

  );

}


export default ProductDetails;