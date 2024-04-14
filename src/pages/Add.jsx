import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch } from "react-redux"
import { addItem } from '../Redux/DataSlice';
import { getFormattedDate, timestampFromDate } from '../libs/Datefunction';


const Add = () => {
    const dispatch = useDispatch();
    const [startDate, setstartDate] = useState(new Date());
    const [formData, setformData] = useState({
        remark: "",
        date: new Date(),
        paid: "",
        balance: "",
    })

    const handleChange = (e) => {
        setformData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const validateForm = ()=>{
        if (!formData.remark || !formData.date || !formData.balance || !formData.paid) {
            alert("Values cannot be Empty");
            return false;
        }
        if (formData.paid < 0 || formData.balance < 0 ) {
            alert("Values cannot be Negative");
        }
        if (formData.paid < formData.balance) {
            alert("Due cannot be more than Paid");
        }
        return true;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log("submitted", formData);
        if (validateForm()) {
            dispatch(addItem({
                u_timestamp: timestampFromDate(formData.date),
                // u_date: formData.date,
                u_date: getFormattedDate(formData.date),
                u_remark: formData.remark,
                u_paid: Number(formData.paid),
                u_balance: Number(formData.balance)
            }))
            window.history.back();
        }
    }
    return (
        <div className='px-2 lg:max-w-[60%] lg:mx-auto'>
            <div className='flex justify-between px-2 mb-2'>
                {/* heading */}
                <h3 className='text-2xl text-center'>Add</h3>
            </div>
            
            <form onSubmit={handleSubmit} className='flex flex-col gap-2'>
                <label className="input input-bordered flex items-center gap-2">
                    <span className='w-[20%]'>Remark</span>
                    <input
                        name='remark'
                        value={formData.remark}
                        onChange={handleChange}
                        type="text"
                        className="grow"
                        placeholder="Enter Remark" />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                    <span className='w-[20%]'>Date</span>
                    <DatePicker
                        selected={startDate}
                        dateFormat="dd/MM/yyyy"
                        onChange={(date) => {
                            setstartDate(date);
                            setformData({
                                ...formData,
                                date: date
                            })
                        }}
                        name='date'
                        value={formData.date}
                        className="grow"
                        placeholder="Enter Date" />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                    <span className='w-[20%]'>Paid</span>
                    <input
                        name='paid'
                        value={formData.paid}
                        onChange={handleChange}
                        type="number"
                        // min={0}
                        className="grow"
                        placeholder="Enter Paid Amount" />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                    <span className='w-[20%]'>Due</span>
                    <input
                        name='balance'
                        value={formData.balance}
                        onChange={handleChange}
                        type="number"
                        // min={0}
                        className="grow"
                        placeholder="Enter Balance Amount" />
                </label>
                <button className='btn bg-[#031896] text-white'>Add</button>
            </form>
        </div>
    )
}

export default Add