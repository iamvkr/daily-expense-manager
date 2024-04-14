import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addAccount, deleteAccount, setselectedAccountIndex, updateAccount } from '../Redux/DataSlice';
import ModalAccount from './ModalAccount';

const Navbar = () => {
    const dispatch = useDispatch();
    let sIndex = 0;
    const { dataList, selectedAccountIndex } = useSelector(state => state.datas);

    const validateForm = (accountName) => {
        if (!accountName) {
            alert("Values cannot be Empty")
            return false
        }
        return true
    }

    const handleAddAccount = (accountName) => {
        validateForm(accountName) && dispatch(addAccount({ AccName: accountName, AccData: [] }))
    }
    const handleUpdateAccount = (accountName) => {
        validateForm(accountName) && dispatch(updateAccount({ newAccName: accountName, index: sIndex }))
    }
    const handleDeleteAccount = () => {
        confirm("Are you sure to Delete?") && dispatch(deleteAccount({ index: sIndex }))
    }
    const handleSwitchAccount = (i) => {
        dispatch(setselectedAccountIndex(i))
    }
    return (
        <div className="navbar  flex w-full justify-between px-2 shadow-md h-14 items-center mb-3 bg-[#031896] text-white">
            <a className="btn btn-ghost text-lg">
                {/* rupee svg */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                    className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 8.25H9m6 3H9m3 6-3-3h1.5a3 3 0 1 0 0-6M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                Daily Expense Manager
            </a>
            <div className='flex'>
                <span className='hidden lg:block'>Accounts</span>
                <div className="dropdown dropdown-end" id='drop_menu'>

                    <div tabIndex={0} role="button" className="m-1">
                        {/* list svg */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
                        </svg>
                    </div>
                    <ul
                        onClick={() => { document.body.click() }}
                        tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-white text-black rounded-box w-52">
                        {dataList.map((acc, i) => <li key={i}>
                            <span className='flex justify-between'>
                                <span onClick={() => {
                                    handleSwitchAccount(i)
                                }}>{acc.AccName}</span>
                                <button
                                    onClick={() => {
                                        sIndex = i;
                                        document.getElementById('update_acc_modal').showModal()
                                    }}
                                    className='btn btn-sm'>EDIT
                                </button>
                            </span>
                        </li>)}
                        <li ><a className='mx-auto'
                            onClick={() => { document.getElementById('add_acc_modal').showModal() }}>Add Account</a></li>
                    </ul>
                </div>
            </div>


            {/* modal for add accounts: */}
            <ModalAccount id={"add_acc_modal"}
                title={"Add New Account!"}
                submitDisplay="Add"
                handleSubmit={handleAddAccount} />

            {/* modal for (update + delete) accounts: */}
            <ModalAccount id={"update_acc_modal"}
                title={"Update Account!"}
                submitDisplay="Update"
                handleSubmit={handleUpdateAccount}
                handleDelete={handleDeleteAccount}
            />
        </div>
    )
}

export default Navbar