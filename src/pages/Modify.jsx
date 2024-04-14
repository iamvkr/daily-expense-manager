import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import DatePicker from "react-datepicker";
import { updateItem, deleteItem } from '../Redux/DataSlice';
import { getFormattedDate, timestampFromDate } from '../libs/Datefunction';

const Modify = () => {
  const [seletedItem, setseletedItem] = useState(JSON.parse(sessionStorage.getItem("selectedItem")));
  const dispatch = useDispatch();
  const [startDate, setstartDate] = useState(new Date(seletedItem.u_timestamp));
  const [formData, setformData] = useState({
    remark: seletedItem.u_remark,
    date: new Date(seletedItem.u_timestamp),
    paid: seletedItem.u_paid,
    balance: seletedItem.u_balance,
  })

  const handleChange = (e) => {
    setformData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const validateForm = () => {
    if (!formData.remark || !formData.date || !String(formData.balance) || !String(formData.paid)) {
      alert("Values cannot be Empty");
      return false;
    }
    if (formData.paid < 0 || formData.balance < 0) {
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
      dispatch(updateItem({
        tm: seletedItem.u_timestamp,
        newData: {
          u_timestamp: timestampFromDate(formData.date),
          // u_date: formData.date,
          u_date: getFormattedDate(formData.date),
          u_remark: formData.remark,
          u_paid: Number(formData.paid),
          u_balance: Number(formData.balance)
        }
      }))
    }
    window.history.back();
  }
  const handleDelete = () => {
    if (confirm("Are you sure to delete?")) {
      dispatch(deleteItem({ tm: seletedItem.u_timestamp }));
      window.history.back();
    }
  }
  return (
    <div className='px-2'>
      <div className='flex justify-between px-2 mb-2'>
        {/* heading */}
        <h3 className='text-2xl text-center'>Update</h3>
        {/* delete svg */}
        <svg
          onClick={handleDelete}
          xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
        </svg>

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
            type="text"
            className="grow"
            placeholder="Enter Paid Amount" />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <span className='w-[20%]'>Balance</span>
          <input
            name='balance'
            value={formData.balance}
            onChange={handleChange}
            type="text"
            className="grow"
            placeholder="Enter Balance Amount" />
        </label>
        <button className='btn bg-[#031896] text-white'>Update</button>
      </form>
    </div>
  )
}

export default Modify