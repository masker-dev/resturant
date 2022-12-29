import React from "react";
import chef1 from "../../images/chef4.jpg";
import chef2 from "../../images/chef2.jpg";
import chef3 from "../../images/chef3.jpg";

const Chefs = () => {
  const chefs = [
    {
      name: "Walter White",
      role: "Master Chef",
      desc: "Velit aut quia fugit et et. Dolorum ea voluptate vel tempore tenetur ipsa quae aut. Ipsum exercitationem iure minima enim corporis et voluptate.",
      pic: chef2,
    },
    {
      name: "Sarah Jhonson",
      role: "Patissier",
      desc: "Quo esse repellendus quia id. Est eum et accusantium pariatur fugit nihil minima suscipit corporis. Voluptate sed quas reiciendis animi neque sapien",
      pic: chef3,
    },
    {
      name: "William Anderson",
      role: "Cook",
      desc: "Vero omnis enim consequatur. Voluptas consectetur unde qui molestiae deserunt. Voluptates enim aut architecto porro aspernatur molestiae modi.",
      pic: chef1,
    },
  ];
  return (
    <section className="team py-20 bg-gray-200 ">
      <div className="container mx-auto px-5">
        <div className="title mb-10 text-center" data-aos="fade-up">
          <p className="text-sm text-slate-500 mb-4">CHEFS</p>
          <h3 className="text-5xl atamicfont ">
            OUR <span className="text-red-600 ">POFFESIONAL </span>CHEFS
          </h3>
        </div>
        <div className="chefs flex flex-col md:flex-row  ">
          {chefs.map((chef, index) => (
            <>
              <div
                style={{ height: "600px" }}
                className="flex flex-col mb-5 w-full md:w-4/12 md:mb-0 md:mx-5  bg-white  "
                data-aos="flip-right"
                d
              >
                <div className="relative h-2/3 ">
                  <img
                    className="h-full w-full object-cover"
                    src={chef.pic}
                    alt="person"
                  />
                  <svg
                    className="absolute bottom-0"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 320"
                  >
                    <path
                      fill="#ffffff"
                      fillOpacity="1"
                      d="M0,160L34.3,181.3C68.6,203,137,245,206,256C274.3,267,343,245,411,202.7C480,160,549,96,617,112C685.7,128,754,224,823,245.3C891.4,267,960,213,1029,213.3C1097.1,213,1166,267,1234,256C1302.9,245,1371,171,1406,133.3L1440,96L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
                    ></path>
                  </svg>
                </div>
                <div className="details text-center">
                  <h3 className="text-2xl font-black">{chef.name}</h3>
                  <p className="text-gray-400 mb-3">{chef.role}</p>
                  <p className="text-gray-600 p-3 italic text-sm">
                    {chef.desc}
                  </p>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Chefs;
