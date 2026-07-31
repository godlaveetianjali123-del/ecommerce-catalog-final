import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";


function ProductCard({ product }) {

  const { addToCart } = useCart();

  const navigate = useNavigate();


  function handleBuyNow() {

    addToCart(product);

    navigate("/cart");

  }


  return (

    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">


      {/* Product Image */}
      <div className="relative">

        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover"
        />


        <span className="absolute top-3 left-3 bg-green-500 text-white px-3 py-1 rounded-full text-sm">
          SALE
        </span>

      </div>



      {/* Product Details */}
      <div className="p-5">


        <h2 className="text-xl font-bold">
          {product.name}
        </h2>


        <p className="text-gray-500 mt-1">
          {product.category}
        </p>



        <div className="flex items-center gap-2 mt-3">

          <span className="bg-green-600 text-white px-2 py-1 rounded">
            ⭐ {product.rating}
          </span>


          <span className="text-gray-500 text-sm">
            {product.stock} available
          </span>

        </div>



        <div className="mt-4">

          <span className="text-2xl font-bold text-blue-600">
            ${product.price}
          </span>


          <span className="ml-3 text-gray-400 line-through">
            ${product.price + 50}
          </span>

        </div>



        {/* Buttons */}

        <div className="flex gap-3 mt-5">


          <button
            onClick={() => addToCart(product)}
            className="flex-1 bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition"
          >
            Add Cart
          </button>



          <button
            onClick={handleBuyNow}
            className="flex-1 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
          >
            Buy Now
          </button>


        </div>



        <Link
          to={`/products/${product.id}`}
          className="block text-center mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          View Details
        </Link>


      </div>


    </div>

  );

}


export default ProductCard;