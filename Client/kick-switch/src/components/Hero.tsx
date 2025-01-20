import heroImage from "../assets/wallpaperflare.com_wallpaper.jpg";

const Hero = () => {
  return (
    <div className="relative flex justify-center items-center overflow-hidden h-[400px] md:h-[550px] w-full">
      <img
        src={heroImage}
        alt="Hero Image"
        className="object-cover w-full h-full"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center px-4 space-y-4">
        <p className="text-white text-3xl md:text-5xl font-bold text-center">
          BUY, SELL, TRADE
        </p>
        <p className="text-white text-sm md:text-lg text-center">
          THE WORLD'S LARGEST SHOE MARKETPLACE
        </p>

        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
          <button className="bg-gray-200 border py-2 px-6 rounded-md text-sm md:text-base">
            BROWSE
          </button>
          <button className="bg-gray-800 text-white py-2 px-6 rounded-md text-sm md:text-base">
            LOGIN
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
