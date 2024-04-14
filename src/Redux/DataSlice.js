import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    dataList: JSON.parse(localStorage.getItem("myDatas"))|| [],
    selectedAccountIndex: 0
}

/* 
format for dataList:
[{
  AccName: "Default1",
  AccData: [{
    u_timestamp: 1712758016060,
    u_date: "10/04/2024",
    u_remark: "REMARK1",
    u_paid: 100.0,
    u_balance: 10.0
  }]
}]
*/

export const datasSlice = createSlice({
    name: 'datas',
    initialState,
    reducers: {
        addAccount: (state, action) => {
            state.dataList = [...state.dataList, action.payload];
            localStorage.setItem("myDatas", JSON.stringify(state.dataList));
        },
        updateAccount: (state, action) => {
            const {index, newAccName } = action.payload;
            state.dataList[index].AccName = newAccName;
            localStorage.setItem("myDatas", JSON.stringify(state.dataList));
        },
        deleteAccount: (state, action) => {
            const { index } = action.payload;
            state.dataList.splice(index, 1)
            // state.dataList.splice(index, 1)
            localStorage.setItem("myDatas", JSON.stringify(state.dataList));
            window.location.reload();
        },
        addItem: (state, action) => {
            state.dataList[state.selectedAccountIndex].AccData.push(action.payload);
            localStorage.setItem("myDatas", JSON.stringify(state.dataList));
        },
        updateItem: (state, action) => {
            const { tm, newData } = action.payload;
            state.dataList[state.selectedAccountIndex].AccData = state.dataList[state.selectedAccountIndex].AccData.map((item, i, a) => {
                if (item.u_timestamp == tm) {
                    return (newData);
                }
                return item;
            })
            localStorage.setItem("myDatas", JSON.stringify(state.dataList));
        },
        deleteItem: (state, action) => {
            const { tm } = action.payload;
            state.dataList[state.selectedAccountIndex].AccData = state.dataList[state.selectedAccountIndex].AccData.filter((item, i, a) => {
                if (item.u_timestamp != tm) {
                    return true;
                }
            })
            localStorage.setItem("myDatas", JSON.stringify(state.itemsList));
        },
        setselectedAccountIndex: (state, action)=>{
            state.selectedAccountIndex = action.payload;
        }
    },
})

// Action creators are generated for each case reducer function
export const { addAccount, updateAccount, deleteAccount, addItem, updateItem, deleteItem,setselectedAccountIndex } = datasSlice.actions;

export default datasSlice.reducer;