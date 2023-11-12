import React from 'react';
import { Link } from 'react-router-dom';
import Lottie404Error from '../../assets/LottieFiles/404Error.json'
import Lottie from 'lottie-react';

const ErrorPage = () => {
    return (
        <div className="h-[100vh] flex flex-col gap-4 bg-gray-800 text-white justify-center items-center mx-auto p-5 text-center">
            <Lottie animationData={Lottie404Error} className='mb-0'></Lottie>
            
            {/* <h1 className="text-9xl font-bold">4<span className="text-orange-400">0</span>4</h1> */}
            <p className="text-lg md:text-2xl mt-[-20px]">The Page You Are Looking For Is Temporarily Unavailable.</p>
            {/* <p className="text-lg md:text-2xl">It might have been removed or the name is changed.</p>
            <p className="text-lg md:text-2xl">Please try again later.</p> */}

            <Link to='/'>
            <button className="mt-3 bg-yellow-300 hover:bg-yellow-400 text-black py-2 px-6 h-full border-0 rounded-lg font-semibold">
              Go Back To Home
            </button>
            </Link>
        </div>
    );
};

export default ErrorPage;