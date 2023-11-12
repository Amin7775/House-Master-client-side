import { Link } from "react-router-dom";
import RegisterBanner from "./RegisterBanner/RegisterBanner";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";


const Register = () => {

  const {createUser,updateUser}= useContext(AuthContext)


    const handleRegister = e => {
        e.preventDefault()
        const form = e.target;

        const name = form.name.value;
        const photoURL = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name,photoURL,email,password)

        createUser(email,password)
        .then(UserDetails => {
          console.log(UserDetails.user)
          updateUser(name,photoURL)
          .then(res=>{
            console.log(res)
          })
          .catch(error => console.log(error.message))
          Swal.fire({
            title: `Registration Success`,
            text: `Thank you for registering with us,  ${UserDetails.user.email}`,
            icon: "success"
          });
        })
        .catch(error => {
          Swal.fire({
            title: "Error",
            text: `Error Details: ${error.message}`,
            // text2: `Error Details: ${error.message}`,
            icon: "error"
          });
        })
    }
    
    return (
        <div className="min-h-screen bg-[#fbfbfa]">
            <RegisterBanner></RegisterBanner>
            {/* form */}
      <div className=" py-10 px-5 max-w-2xl mx-auto">
        <h2 className="text-3xl font-semibold text-gray-700 capitalize dark:text-white text-center ">
          Register Here
        </h2>
        <form onSubmit={handleRegister}>
          <div className="grid grid-cols-1 gap-6 mt-4 ">
            <div className="w-full">
              <label className="text-gray-700 dark:text-gray-200">Name</label>
              <input
                required
                name="name"
                type="text"
                className="block w-full px-4 py-3 mt-2 text-gray-700 border-2 bg-white rounded-sm    focus:border-yellow-300  focus:outline-none focus:bg-inherit "
              />
            </div>
            <div className="w-full">
              <label className="text-gray-700 dark:text-gray-200">Photo URL</label>
              <input
                required
                name="photo"
                type="text"
                className="block w-full px-4 py-3 mt-2 text-gray-700 border-2 bg-white rounded-sm    focus:border-yellow-300  focus:outline-none focus:bg-inherit "
              />
            </div>
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
              Register
            </button>
          </div>
        </form>
        <div className="mt-6 space-y-2">
        <p className="text-center mt-2">
                  Register With Google ?{" "}
                  <span className="text-blue-600 cursor-pointer font-medium">
                    Click Here
                  </span>
                </p>
                <p className="text-center">
                  Already Have An Account ?{" "}
                  <span className="text-blue-600 font-medium">
                    <Link to={"/login"}>Click Here To Login</Link>
                  </span>
                </p>
        </div>
      </div>
        </div>
    );
};

export default Register;