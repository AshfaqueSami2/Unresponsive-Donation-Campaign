import './Banner.css'

const Banner = () => {
  return (
    <div className="">
      <div
        style={{ marginTop: "-120px" }}
        className="w-full overflow-hidden absolute bg-white opacity-25"
      >
        <img
          className="w-full overflow-hidden"
          src={"../../../src/assets/Pictuers/banner-doc1.jpg"}
          alt=""
        />
      </div>
      <div
        style={{ marginLeft: "550px", marginTop: "242px" }}
        className="absolute  "
      >
        <h1 className="text-5xl text-[#0B0B0B]">
          I Grow By Helping People In Need
        </h1>
        <div style={{marginTop:'40px',marginLeft:'80px'}}>
        <input className='input' type="text" placeholder="Search..."/>
        <button className="btn">Search</button>
        </div>
      </div>
     
    </div>
  );
};

export default Banner;
