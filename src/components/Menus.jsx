import React from "react";
import Fruit1 from "../assets/fruits/apple.png";
import Fruit2 from "../assets/fruits/orange.png";
import Fruit3 from "../assets/fruits/avocado.png";
import Fruit4 from "../assets/fruits/cherry.png";

const menusData = [
  {
    id: 1,
    title: "Fresh Red Apples",
    link: "/",
    price: "$2.00",
    img: Fruit1,
  },
  {
    id: 2,
    title: "Fresh Oranges",
    link: "/",
    price: "$4.00",
    img: Fruit2,
  },
  {
    id: 3,
    title: "Fresh Avocado",
    link: "/",
    price: "$6.00",
    img: Fruit3,
  },
  {
    id: 4,
    title: "Fresh Cherries",
    link: "/",
    price: "$5.00",
    img: Fruit4,
  },
];
const Menus = () => {
  return (
    <section>
      <div className="container pt-12 pb-20">
        <h1 className="text-2xl font-bold text-left pb-10 uppercase"> Our Menu</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {menusData.map((menu) => (
                <div className="bg-white rounded-3xl px-4 py-2 shadow-[0_0_22px_0_rgba(0,0,0,0.15)] flex flex-row justify-around items-center gap-3">
                    <img src={menu.img} className="w-[60px] mb-4 scale-110 transform -translate-y-6"/>
                    <div>
                        <h1 className="text-lg font-semibold">{menu.title}</h1>
                        <p className="text-lg font-semibold text-secondary">{menu.price}</p>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Menus;
