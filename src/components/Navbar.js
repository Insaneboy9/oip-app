import React from "react";
import logo from "../assets/logo-no-background.png";
import { Link, useMatch, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Navbar() {
  const homeMatch = useMatch("/home");
  const dailiesMatch = useMatch("/dailies");
  const aboutMatch = useMatch("/about");
  const reflectionMatch = useMatch("/reflection");
  const posterMatch = useMatch("/poster");
  const navigate = useNavigate();
  const toStart = () => navigate("/");

  return (
    <div className="flex p-5 top-0 left-0 h-full absolute flex-col w-1/6">
      <div className="flex-initial">
        <img
          onClick={toStart}
          className="w-32 cursor-pointer"
          src={logo}
          alt="Logo"
        />
      </div>
      <div className="flex-initial h-full flex justify-around items-center flex-col gap-10">
        <ul className="h-full w-full">
          <li className="mt-5 flex w-full">
            <Link to="/home">
              <span className="text-white mr-2">Design Journal</span>
            </Link>
            {homeMatch && (
              <motion.div
                layoutId="circle"
                className="bg-yellow rounded-full w-3 h-3"
              />
            )}
          </li>
          <li className="mt-5 flex w-full items-center">
            <Link to="/dailies">
              <span className="text-white mr-2">Daily Blog</span>
            </Link>
            {dailiesMatch && (
              <motion.div
                layoutId="circle"
                className="bg-yellow rounded-full w-3 h-3"
              />
            )}
          </li>
          <li className="mt-5 flex w-full items-center">
            <Link to="/reflection">
              <span className="text-white mr-2">Reflection</span>
            </Link>
            {reflectionMatch && (
              <motion.div
                layoutId="circle"
                className="bg-yellow rounded-full w-3 h-3"
              />
            )}
          </li>
          <li className="mt-5 flex w-full items-center">
            <Link to="/poster">
              <span className="text-white mr-2">Poster</span>
            </Link>
            {posterMatch && (
              <motion.div
                layoutId="circle"
                className="bg-yellow rounded-full w-3 h-3"
              />
            )}
          </li>
          <li className="mt-5 flex w-full items-center">
            <Link to="/about">
              <span className="text-white mr-2">About Us</span>
            </Link>
            {aboutMatch && (
              <motion.div
                layoutId="circle"
                className="bg-yellow rounded-full w-3 h-3"
              />
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
