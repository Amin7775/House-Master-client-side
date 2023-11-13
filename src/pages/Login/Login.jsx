import { Link } from "react-router-dom";
import LoginBanner from "./LoginBanner/LoginBanner";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import axios from "axios";

const Login = () => {

  const {user,loginUser,googleRegister,setPic} = useContext(AuthContext)

    const handleLogin = e => {
        e.preventDefault()
        const form = e.target;

        const email = form.email.value;
        const password = form.password.value;

        // console.log(email,password)
        
        loginUser(email,password)
        .then(UserInfo =>{
          // console.log(UserInfo)
          Swal.fire({
            title: `Welcome Back, ${UserInfo.user.email}`,
            icon: "success"
          })
          .then(res=> {
            axios.post('https://house-master-server.vercel.app/jwt',user,{withCredentials:true})
                .then(res=>{
                    console.log(res)
                    // if(res.data.success){
                    //     navigate(location?.state ? location?.state : '/')
                    // }
                })
          })
        })
        .catch(error=>{
          // console.log(error.message)
          Swal.fire({
            title: "Error",
            text: `Error Details: ${error.message}`,
            // text2: `Error Details: ${error.message}`,
            icon: "error"
          });
        })
        form.reset();
    }

    const handleGoogle = () =>{
      googleRegister()
      .then(userDetails => {
        console.log(userDetails.user)
        setPic(userDetails.user.photoURL)
      })
      .catch(error=>{
        console.log(error.message,"ERROR")
      })
    }

  return (
    <div className="min-h-screen bg-[#fbfbfa]">
      <Helmet>
        <title>House Master | Login</title>
      </Helmet>
      <LoginBanner></LoginBanner>
      {/* form */}
      <div className=" py-10 px-5 max-w-2xl mx-auto">
        <h2 className="text-3xl font-semibold text-gray-700 capitalize dark:text-white text-center ">
          Login
        </h2>
        <form onSubmit={handleLogin}>
          <div className="grid grid-cols-1 gap-6 mt-4 ">
            <div className="w-full">
              <label className="text-gray-700 dark:text-gray-200">Email</label>
              <input
                required
                name="email"
                type="text"
                className="block w-full px-4 py-3 mt-2 text-gray-700 border-2 bg-white rounded-sm    focus:border-yellow-300  focus:outline-none focus:bg-inherit "
              />
            </div>
            <div className="w-full">
              <label className="text-gray-700 dark:text-gray-200">
                Password
              </label>
              <input
                required
                name="password"
                type="text"
                className="block w-full px-4 py-3 mt-2 text-gray-700 border-2 bg-white rounded-sm  focus:border-yellow-300  focus:outline-none "
              />
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <button
              className="px-10 py-3 leading-5 transition-colors duration-200 transform bg-yellow-300 text-black font-medium  hover:bg-yellow-400 focus:outline-none rounded-sm"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
        <div className="mt-6 space-y-2">
        <p className="text-center mt-2">
                  Login With Google ?{" "}
                  <span onClick={handleGoogle} className="text-blue-600 cursor-pointer font-medium">
                    Click Here
                  </span>
                </p>
                <p className="text-center">
                  Dont Have An Account ?{" "}
                  <span className="text-blue-600 font-medium">
                    <Link to={"/register"}>Click Here To Register</Link>
                  </span>
                </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
