import React, { useState } from 'react'

const ModalAccounts = ({ id, title, handleSubmit, submitDisplay,handleDelete }) => {
    const [accountName, setaccountName] = useState("");
    return (
        <dialog id={id} className="modal">
            <div className="modal-box text-black">
                <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                    onClick={()=>{setaccountName("")}}>✕</button> {/* reset the data feild on click x */}
                </form>
                <h3 className="font-bold text-lg ">{title}</h3>
                <div className="py-4">
                    <label className="input input-bordered flex items-center gap-2 mb-2">
                        <span className='w-[20%]'>Name</span>
                        <input
                            name="acc_name"
                            value={accountName}
                            onChange={(e) => { setaccountName(e.target.value) }}
                            type="text"
                            className="grow"
                            placeholder="Enter Acc Name" />
                    </label>
                    <form method="dialog" className='flex'>
                        {handleDelete && <button className="btn me-2 w-1/2 mx-auto"
                            onClick={() => { handleDelete() }}>Delete
                        </button>}
                        <button className={`btn btn-neutral me-2 ${handleDelete?"w-1/2":"w-full" }  mx-auto`}
                            onClick={() => { handleSubmit(accountName) }}>{submitDisplay}
                        </button>
                    </form>
                </div>
            </div>
        </dialog>
    )
}

export default ModalAccounts