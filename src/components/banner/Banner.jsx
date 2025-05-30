import img from '../assets/images/user.png'

const Banner = () => {
    return (
        <div className=" ">
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src={img}
      className="max-w-sm rounded-lg "
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