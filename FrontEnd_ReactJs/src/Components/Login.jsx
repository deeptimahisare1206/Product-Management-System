import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import { Flip, toast } from "react-toastify";
import Navbar from "./Navbar";

const Login = () => {

    //  const [msg, setmsg] = useState();
    
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
      const [error, setError] = useState("");
    const navigate = useNavigate();
     const {login} = useAuth();
    
      const UserLogin = async (e) => {
        e.preventDefault();
setError('')

const logData={
  email , password
}
        try {
            const response = await axios.post("http://localhost:8090/user/login", logData);
             if (response.status === 200){
login();

              navigate("/start")

             }
         
        } catch (error) {
console.log("An error occured" ,error)
toast.error('Unauthorized');
        }

      }



  return (
    <>
    <Navbar/>
      <div className="w-screen p-5">
        <div className="bg-gray-200 p-5 w-fit place-self-center ">
          <h1 className="lg:text-5xl lg:font-normal text-3xl font-extrabold text-center">
            Login
          </h1>
          
          {/* {msg && <p className="text-green-700 font-semibold text-xl text-center m-5">{msg}</p>} */}
          <form className="flex flex-col gap-3" onSubmit={UserLogin} >
            <table className="w-auto border-collapse">
              <tbody>
               
                <tr className="border-b-2 border-b-gray-300">
                  <td className="p-4">
                    {" "}
                    <label>Username:</label>
                  </td>
                  <td className="p-4">
                    <input
                      className="border-b-teal-700 border-b-2 bg-transparent w-full outline-none px-4 py-1"
                      type="text"
                      name="username"
                      value={email}
                      onChange={(e)=>setEmail(e.target.value)}
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
                      type="password"
                      name="password"
                      value={password}
                      onChange={(e)=>setPassword(e.target.value)}

                    />
                  </td>
                </tr>
               
                

                <tr className="border-b-2 border-b-gray-300">
                  <td className="text-center">
                    <button
                      className="px-4 py-1 bg-teal-700 text-white font-bold text-2xl"
                      type="submit"
                    >
                      LOGIN
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

export default Login;
