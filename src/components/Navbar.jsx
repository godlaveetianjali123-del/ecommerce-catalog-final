import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";


function Navbar() {

  const [user, setUser] = useState(null);

  const navigate = useNavigate();



  useEffect(() => {

    const checkUser = () => {

      const savedUser = localStorage.getItem("user");

      if (savedUser) {
        setUser(JSON.parse(savedUser));
      } else {
        setUser(null);
      }

    };


    checkUser();


    // Update when login/logout happens
    window.addEventListener(
      "storage",
      checkUser
    );


    return () => {

      window.removeEventListener(
        "storage",
        checkUser
      );

    };


  }, []);




  const handleLogout = () => {

    localStorage.removeItem("user");

    setUser(null);

    navigate("/");

  };



  return (

    <nav className="bg-white shadow-md px-6 py-4">


      <div className="container mx-auto flex justify-between items-center">


        <Link
          to="/"
          className="text-2xl font-bold text-orange-600"
        >
          E-Commerce
        </Link>



        <div className="flex items-center gap-6">


          <Link to="/">
            Home
          </Link>


          <Link to="/products">
            Products
          </Link>


          <Link to="/cart">
            Cart
          </Link>



          {user ? (

            <>


              <span className="font-semibold text-blue-600">
                Hello, {user.name}
              </span>


              <button
                onClick={handleLogout}
                className="bg-red-600 text-white px-4 py-2 rounded"
              >
                Logout
              </button>


            </>


          ) : (

            <>


              <Link
                to="/login"
                className="bg-blue-600 text-white px-4 py-2 rounded"
              >
                Login
              </Link>


              <Link
                to="/register"
                className="bg-green-600 text-white px-4 py-2 rounded"
              >
                Register
              </Link>


            </>

          )}


        </div>


      </div>


    </nav>

  );

}


export default Navbar;