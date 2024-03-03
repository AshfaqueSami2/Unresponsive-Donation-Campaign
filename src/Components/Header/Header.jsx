import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="relative">
        <div className="flex justify-between mt-12">
      <div className="ml-36">
        <img  src={"../../../src/assets/Pictuers/Logo.png"} alt="" />
      </div>
      <div className="flex items-center	mr-36 space-x-12 bg-base-100 text-lg">
        <NavLink >Home</NavLink>
        <NavLink>Donation</NavLink>
        <NavLink >Statistics</NavLink>
      </div>
    </div>
    <div>
        
    </div>
    </div>
    
  );
};

export default Header;
