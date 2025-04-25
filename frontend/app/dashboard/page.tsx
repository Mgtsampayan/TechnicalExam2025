import React from "react";

const Header: React.FC = () => {
  return (
    <div className="relative w-full bg-gradient-to-b from-white to-[#1e335c]/10 py-8">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] mix-blend-overlay bg-cover bg-center opacity-20"></div>
      <div className="relative z-10 text-center">
        <h1 className="text-[2.5rem] font-bold text-[#1e335c]">
          Amaia Scapes Laguna
        </h1>
        <p className="text-[#00a082] font-semibold tracking-[0.25em] mt-2 text-sm uppercase">
          Property List
        </p>
      </div>
    </div>
  );
};

export default Header;

<div className="absolute top-4 right-8">
  <button
    onClick={() => console.log("Logout clicked")}
    className="bg-[#f8b133] text-white px-4 py-2 rounded-full hover:bg-[#e6a022] transition-colors text-sm font-medium"
  >
    Logout
  </button>
</div>;
