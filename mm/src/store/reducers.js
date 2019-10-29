export const shopList = (state = { shopList: [], allcheck: false, total: 0 }, actions) => {
    switch (actions.type) {
        case 'ADD_SHOP':
            {
                let ind = state.shopList.findIndex(item => item.id == actions.item.id);
                if (ind === -1) {
                    actions.item.count++;
                    state.shopList.push(actions.item)
                } else {
                    state.shopList[ind].count++;
                    console.log(state.shopList)
                }

                return {
                    ...state,
                    shopList: [...state.shopList]
                }
            }

        case 'CHANGE_CHECK':
            {
                let ind = state.shopList.findIndex(item => item.id == actions.id)
                state.shopList[ind].checked = !state.shopList[ind].checked
                let allcheck = state.shopList.every(item => item.checked)
                state.total = state.shopList.filter(item => item.checked).reduce((prev, cur) => prev + (cur.count * cur.price), 0)
                return {
                    ...state,
                    shopList: [...state.shopList],
                    allcheck,
                }
            }
        case 'CHANGE_ALLCHECK':
            {
                state.allcheck = !state.allcheck
                state.shopList.forEach(item => item.checked = state.allcheck)
                state.total = state.shopList.filter(item => item.checked).reduce((prev, cur) => prev + (cur.count * cur.price), 0)
                return {
                    ...state,
                    shopList: [...state.shopList],
                    allcheck: state.allcheck
                }
            }
        case 'CHANGE_COUNT':
            {
                let ind = state.shopList.findIndex(item => item.id == actions.id)
                state.shopList[ind].count = actions.count
                state.total = state.shopList.filter(item => item.checked).reduce((prev, cur) => prev + (cur.count * cur.price), 0)
                return {
                    ...state,
                    shopList: [...state.shopList],
                }
            }
        default:
            return {
                ...state,
                shopList: [...state.shopList]
            }
    }
}