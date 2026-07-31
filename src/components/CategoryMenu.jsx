import { Link } from "react-router-dom";

function CategoryMenu() {

  const categories = [
    {
      name: "Electronics",
      icon: "📱",
      link: "/products"
    },
    {
      name: "Fashion",
      icon: "👕",
      link: "/products"
    },
    {
      name: "Shoes",
      icon: "👟",
      link: "/products"
    },
    {
      name: "Accessories",
      icon: "⌚",
      link: "/products"
    },
    {
      name: "Gaming",
      icon: "🎮",
      link: "/products"
    }
  ];


  return (
    <section className="bg-white py-8 shadow">

      <div className="container">

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">

          {categories.map((category) => (

            <Link
              key={category.name}
              to={category.link}
              className="bg-gray-50 rounded-xl p-5 flex flex-col items-center hover:shadow-lg hover:bg-white transition"
            >

              <span className="text-4xl">
                {category.icon}
              </span>


              <span className="mt-3 font-semibold text-gray-700">
                {category.name}
              </span>


            </Link>

          ))}

        </div>

      </div>

    </section>
  );
}

export default CategoryMenu;