//Check for the User registration apis

import axios from "axios";
import { useState } from "react";
import Navbar from "./Navbar";

const Registration = () => {
  const [msg, setmsg] = useState();

  const [user, setUser] = useState({
    firstname: "",
    username: "",
    password: "",
    city: "",
    confirmPassword: "",
  });

  const handleInputChange = (e) => {
    const value = e.target.value;

    setUser({ ...user, [e.target.name]: value });
  };

  const UserRegister = async (e) => {
    e.preventDefault();

    if (user.password !== user.confirmPassword) {
      setmsg("Password doesn't Match");
      return;
    }
    setmsg("");
    try {
        axios.post("http://localhost:8090/user/register", user).then((response) => {
          setmsg("User Register Successfully!");
    
          setUser({
            firstname: "",
            username: "",
            password: "",
            city: "",
            confirmPassword: ""
          });
        });
    } catch (error) {
        setmsg("Unable to Register User.");
    }
  };

  return (
    <>
    <Navbar/>
      <div className="w-screen p-5">
        <div className="bg-gray-200 p-5 w-fit place-self-center rounded-3xl">
          <h1 className="lg:text-5xl lg:font-normal text-3xl font-extrabold text-center">
            Registration
          </h1>
          {msg && <p className="text-green-700 font-semibold text-xl text-center m-5">{msg}</p>}
          <form className="flex flex-col gap-3" onSubmit={UserRegister}>
            <table className="w-auto border-collapse">
              <tbody>
                <tr className="border-b-2 border-b-gray-300 ">
                  <td className="p-4">
                    {" "}
                    <label>FirstName:</label>
                  </td>
                  <td className="p-4">
                    {" "}
                    <input
                      className="border-b-teal-700 border-b-2 bg-transparent w-full outline-none px-4 py-1"
                      type="text"
                      name="firstname"
                      value={user.firstname}
                      onChange={handleInputChange}
                    />
                  </td>
                </tr>
                <tr className="border-b-2 border-b-gray-300">
                  <td className="p-4">
                    {" "}
                    <label>UserName:</label>
                  </td>
                  <td className="p-4">
                    <input
                      className="border-b-teal-700 border-b-2 bg-transparent w-full outline-none px-4 py-1"
                      type="text"
                      name="username"
                      value={user.username}
                      onChange={handleInputChange}
                    />
                  </td>
                </tr>

                <tr className="border-b-2 border-b-gray-300">
                  <td className="p-4">
                    {" "}
                    <label>Password:</label>
                  </td>
                  <td className="p-4">
                    <input
                      className="border-b-teal-700 border-b-2 bg-transparent w-full outline-none px-4 py-1"
                      type="text"
                      name="password"
                      value={user.password}
                      onChange={handleInputChange}
                    />
                  </td>
                </tr>
                <tr className="border-b-2 border-b-gray-300">
                  <td className="p-4">
                    {" "}
                    <label>City:</label>
                  </td>
                  <td className="p-4">
                    <input
                      className="border-b-teal-700 border-b-2 bg-transparent w-full outline-none px-4 py-1"
                      type="text"
                      name="city"
                      value={user.city}
                      onChange={handleInputChange}
                    />
                  </td>
                </tr>
                <tr className="border-b-2 border-b-gray-300">
                  <td className="p-4">
                    {" "}
                    <label>Confirm Password:</label>
                  </td>
                  <td className="p-4">
                    <input
                      className="border-b-teal-700 border-b-2 bg-transparent w-full outline-none px-4 py-1"
                      type="text"
                      name="confirmPassword"
                      value={user.confirmPassword}
                      onChange={handleInputChange}
                    />
                  </td>
                </tr>

                <tr className="border-b-2 border-b-gray-300">
                  <td className="text-center">
                    <button
                      className="px-4 py-1 bg-teal-700 text-white font-bold text-2xl"
                      type="submit"
                    >
                      ADD
                    </button>
                    
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
      </div>
    </>
  );
};

export default Registration;
