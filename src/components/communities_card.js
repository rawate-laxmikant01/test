
import React from 'react';
import { Communities_data } from '../constants';

const CommunitiesCard = () => {
    return (
        <>
            <div className="grid md:grid-cols-2 md:my-3 sm:mb-6 xl:grid-cols-3 gap-4 mt-12 mb-3 text-[#887C68] text-left ">
                {Communities_data.map((data) => (
                    <div class="m-3 sm:m-6 rounded shadow-lg flex flex-col shadow-2xl-r shadow-[#5746467a] max-w-[400px] mix-w-[250px] justify-self-center">
                        <img class="w-full object-cover h-[292px]" src={data.image} alt={data.name + "Image Loading"}></img>
                        <div class="px-6 py-4  flex-grow">
                            <p class="text-[16px] font-normal leading-[24px] mt-6">
                                {data.details}
                            </p>
                        </div>
                        <div className='bg-[#F8F8F8] text-[22px] p-4 px-6'>
                            {data.name}
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
};
export default CommunitiesCard;
