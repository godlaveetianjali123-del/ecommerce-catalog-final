import { useEffect, useState } from "react";


function Profile() {

  const [user, setUser] = useState(null);


  useEffect(() => {

    const savedUser = localStorage.getItem("user");

    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }

  }, []);



  return (

    <div className="min-h-screen flex items-center justify-center bg-gray-100">


      <div className="bg-white p-8 rounded-lg shadow-md w-96">


        <h1 className="text-3xl font-bold mb-6 text-center">
          Dashboard
        </h1>


        {user ? (

          <div className="text-center">

            <h2 className="text-xl font-semibold">
              Welcome, {user.name}
            </h2>


            <p className="mt-3">
              Email: {user.email}
            </p>


          </div>

        ) : (

          <p className="text-center">
            Please login first
          </p>

        )}


      </div>


    </div>

  );
}


export default Profile;