import React from "react";

const Header: React.FC = () => {
  return (
    <div className="relative">
      <div className="absolute top-4 right-8">
        <button
          onClick={() => console.log("Logout clicked")}
          className="bg-[#f8b133] text-white px-4 py-2 rounded-full hover:bg-[#e6a022] transition-colors text-sm font-medium"
        >
          Logout
        </button>
      </div>

      <div
        className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0C3158]/90 z-10"
        aria-hidden="true"
      />

      <div
        className="w-full h-[240px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')",
        }}
      />

      <div className="absolute inset-0 z-20 flex flex-col justify-center items-center pt-8">
        <h1 className="text-[42px] font-bold text-[#c9c9c9] mb-1">
          Amaia Scapes Laguna
        </h1>
        <h2 className="text-[18px] text-[#00A651] tracking-[0.2em] font-medium">
          PROPERTY LIST
        </h2>
      </div>
    </div>
  );
};

export default Header;
