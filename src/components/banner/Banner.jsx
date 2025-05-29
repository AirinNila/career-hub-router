
const Banner = () => {
    return (
        <div className=" ">
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src="https://i.pinimg.com/736x/0a/d1/93/0ad19309a59be71b028548801ac38353.jpg"
      className="max-w-sm rounded-lg shadow-2xl"
    />
    <div>
      <h1 className="text-4xl md:text-6xl font-extrabold title">One Step <br /> Closer To Your <span className="primary" >Dream Job</span></h1>
      <p className="py-6 des text-md">
       Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;