import React from 'react'

const Table_unused = () => {
    return (
        <>
            {/* tableview */}
            <div className=" min-h-[85vh] hidden">
                <table className="w-full border-2 border-black text-sm" border={2}>

                    <thead>
                        <tr>
                            <th className='max-w-[10%] overflow-auto'>S.no</th>
                            <th className='max-w-[30%] overflow-auto'>Remark</th>
                            <th className='max-w-[20%] overflow-auto'>Date</th>
                            <th className='max-w-[10%] overflow-auto'>Paid</th>
                            <th className='max-w-[10%] overflow-auto'>Balance</th>
                        </tr>
                    </thead>
                    <tbody>

                        {/* <tr>
                            <td className='' >1</td>
                            <td className='' >Quality Ccialist </td>
                            <td className='' >10/05/2024</td>
                            <td className='' >500.0</td>
                            <td className='' >10.0</td>
                        </tr> */}

                        {/* {itemsList.map((item, i) => {
                            return (<tr key={i}>
                                <td>{i + 1}</td>
                                <td onClick={() => {
                                    sessionStorage.setItem("selectedItem", JSON.stringify(item));
                                    if(window.confirm("Do you want to modify?")){
                                        navigate("/modify")
                                    }
                                }}
                                >{item.u_remark}</td>
                            
                                <td>{(item.u_date)}</td>
                                <td>{(item.u_paid).toFixed(2)}</td>
                                <td>{(item.u_balance).toFixed(2)}</td>
                            </tr>
                            )
                        })} */}
                    </tbody>
                </table>
            </div>
            {/* tableview end */}
        </>
    )
}

export default Table_unused