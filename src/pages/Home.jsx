import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import DisplayCard from '../components/DisplayCard';

const Home = () => {
    // get data from store:
    const { dataList, selectedAccountIndex } = useSelector(state => state.datas);
    return (dataList[selectedAccountIndex] &&
        <div className='px-2'>
            {/* display current account name */}
            <span className='px-2 py-1 border-2 border-[#031896] rounded-md'>{dataList[selectedAccountIndex]?.AccName}</span>
            {/* {dataList.length <= 0 && <div className='text-center text-sm'><p>No items!</p> <p>Create Your Account from settings to get started</p></div>} */}
            {dataList[selectedAccountIndex].AccData.length <= 0 && <div className='text-center text-sm'><p>No items!</p> <p>Click + icon to get started</p></div>}
            <div className='lg:grid lg:grid-cols-4 lg:gap-2'>
                {/* display the cards using the store data */}
                {[...dataList[selectedAccountIndex].AccData].sort((a,b)=> a.u_timestamp - b.u_timestamp).map((item, i) => {
                    return (<DisplayCard key={i} item={item} />)
                })}
            </div>

            {/* plus icon for adding new item */}
            <div className='fixed bottom-5 right-5 bg-[#031896] rounded-full h-14 w-14 text-white flex justify-center items-center'>
                <Link to={"/add"}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </Link>
            </div>

        </div>
    )
}

export default Home