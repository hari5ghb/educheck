import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-black p-5 shadow-lg fixed top-0 w-full z-50">
      <div className="container mx-auto">
        <div className="flex">
          <h2 className="font-bold text-2xl text-white font-mono">EduSeed</h2>

          <button className="text-white font-semibold ml-auto bg-violet-500 px-3 py-2 rounded-md hover:bg-violet-700 hover:shadow-md">
  <Link to="/login">Log In</Link>
</button>

        </div>
      </div>
    </div>
  );
};

export default Navbar;
