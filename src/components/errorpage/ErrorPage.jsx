import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-4 pt-36">
            <h2 className="text-3xl font-semibold">Page not Find!</h2>
           <Link to="/"> <button className="btn btn-primary">Go Back</button></Link>
        </div>
    );
};

export default ErrorPage;