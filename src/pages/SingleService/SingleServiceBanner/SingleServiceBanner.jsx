
const SingleServiceBanner = () => {
    return (
        <div
          className="hero h-[400px]"
          style={{
            backgroundImage:
              "url(https://i.ibb.co/3mXwsL7/Title-Banner.png)",
          }}
        >
          <div className="hero-overlay bg-opacity-10"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <p className="mb-5 bg-yellow-300 text-black inline px-4 py-1">
                House Master
              </p>
              <h1 className="mt-5 text-5xl font-bold text-black">Service Details</h1>
            </div>
          </div>
        </div>
      );
};

export default SingleServiceBanner;