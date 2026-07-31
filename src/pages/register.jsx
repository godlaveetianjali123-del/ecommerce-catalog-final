import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


function Register() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();



  const handleRegister = (e) => {

    e.preventDefault();


    setError("");


    if (password.length < 4) {

      setError("Password must be at least 4 characters");

      return;
    }



    const users = JSON.parse(
      localStorage.getItem("users")
    ) || [];



    const existingUser = users.find(
      (user) => user.email === email
    );



    if (existingUser) {

      setError("Email already registered");

      return;
    }



    const newUser = {

      name,
      email,
      password

    };



    users.push(newUser);



    localStorage.setItem(
      "users",
      JSON.stringify(users)
    );



    alert("Registration successful");


    navigate("/login");

  };



  return (

    <section className="min-h-screen flex items-center justify-center bg-gray-100">


      <div className="bg-white p-8 rounded-lg shadow-md w-96">


        <h1 className="text-3xl font-bold mb-6 text-center">
          Register
        </h1>



        {error && (

          <p className="text-red-600 text-center mb-4">
            {error}
          </p>

        )}



        <form onSubmit={handleRegister}>


          <input
            type="text"
            placeholder="Name"
            className="w-full border p-3 rounded mb-4"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            required
          />



          <input
            type="email"
            placeholder="Email"
            className="w-full border p-3 rounded mb-4"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            required
          />



          <input
            type="password"
            placeholder="Password"
            className="w-full border p-3 rounded mb-4"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            required
          />



          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded hover:bg-green-700"
          >
            Register
          </button>


        </form>



        <p className="mt-5 text-center">

          Already have an account?

          <Link
            to="/login"
            className="text-blue-600 ml-2"
          >
            Login
          </Link>


        </p>



      </div>


    </section>

  );

}


export default Register;