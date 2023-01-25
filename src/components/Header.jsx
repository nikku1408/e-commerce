import React from "react";
import { useLocation, useNavigate } from "react-router";

export default function Header() {
  const location = useLocation();

  const pathMatchRoute = (route) => {
    if (route === location.pathname) {
      return true;
    }
  };

  const navigate = useNavigate();

  return (
    <div className="bg-slate-100 border-b shadow-sm sticky top-0 z-50">
      <header className="flex justify-between items-center p-3 max-w-6xl mx-auto">
        <div>
          <img
            src="https://download.blender.org/branding/blender_logo_socket.png"
            alt="logo"
            className="h-12 cursor-pointer"
            onClick={() => navigate("/")}
          />
        </div>
        <div>
          <ui className="flex space-x-10 list-none">
            <li
              className={`cursor-pointer py-1 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                pathMatchRoute("/") && "text-black border-b-red-500"
              }`}
              onClick={() => navigate("/")}
            >
              Home
            </li>
            <li
              className={`cursor-pointer py-1 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                pathMatchRoute("/offers") && "text-black border-b-red-500"
              }`}
              onClick={() => navigate("/offers")}
            >
              Offers
            </li>
            <li
              className={`cursor-pointer py-1 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                pathMatchRoute("/sign-in") && "text-black border-b-red-500"
              }`}
              onClick={() => navigate("/sign-in")}
            >
              Sign In
            </li>
          </ui>
        </div>
      </header>
    </div>
  );
}
