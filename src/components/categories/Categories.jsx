import { useEffect, useState } from "react";
import Category from "../category/Category";

const Categories = () => {
    const [categories, setCategories] = useState([])

    useEffect( () => {
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    } ,[])
    return (
        <div>
            <section className="flex flex-col gap-4 items-center font-bold mt-10">
                <h2 className="text-2xl md:text-4xl title">Job Category List</h2>
                <p className="des text-base text-center" >Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className="flex-col flex md:flex-row gap-4 justify-center md:items-center">
                    {
                        categories.map(category => <Category key={category.id} category={category}></Category>)
                    }
                </div>
            </section>
        </div>
    );
};

export default Categories;