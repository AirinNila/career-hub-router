import React from 'react';

const Category = ({category}) => {
    const {logo, category_name, availability} = category;
    return (
        <div className='flex flex-col gap-2 p-4 rounded-md bg-[#7E90FE0d]'>
            <div><img src={logo} alt="" /></div>
            <p className='text-xl title font-extrabold'>{category_name}</p>
            <p className='des text-base'>{availability}</p>
        </div>
    );
};

export default Category;