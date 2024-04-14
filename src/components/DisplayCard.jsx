import React from 'react'
import { useNavigate } from 'react-router-dom';

const DisplayCard = ({ item }) => {
    const navigate = useNavigate();
    return (item &&
        <div className="shadow-lg flex h-20 lg:h-28 items-center mb-2 p-2 rounded-xl">
            {/* info svg */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                className="w-8 h-8 text-[#031896]">
                <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
            </svg>

            <div className='ms-2'>
                <h3 className="font-bold capitalize">{item.u_remark}</h3>
                <div className=" mt-1">
                    <span className='badge badge-neutral text-xs'>{(item.u_date)}</span>
                    <span className='mx-2 badge badge-success text-xs text-white'>₹{(item.u_paid).toFixed(2)}</span>
                    <span className='badge bg-[#031896] text-xs text-white'>₹{(item.u_balance).toFixed(2)}</span>
                </div>
            </div>
            <button className="btn btn-sm ms-auto"
                onClick={() => {
                    sessionStorage.setItem("selectedItem", JSON.stringify(item));
                    navigate("/modify");
                }}>
                    {/* edit pen svg */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                </svg>
            </button>
        </div>
    )
}

export default DisplayCard