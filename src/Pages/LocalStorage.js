const getItemFromLS = () => {
    const stringyItemFromLS = localStorage.getItem("bookMarks");

    if (stringyItemFromLS) {
        const parseItemFromLS = JSON.parse(stringyItemFromLS);
        return parseItemFromLS
    }
    else {
        return []
    }
}

const addItemToLS = (id) => {

    const LsItems = getItemFromLS();
    if (LsItems.includes(id)) {
        alert("Sorry! You have already marked this book as read.")
    }
    else{

        const items = [...LsItems, id];
    
        const stringyItemToAdd = JSON.stringify(items);
    
        localStorage.setItem("bookMarks", stringyItemToAdd)
    }
}
const removeitemLS = (id)=>{
    const LsItems= getItemFromLS();
    const afterRemove = LsItems.map(i=> i !==id);
    const stringifyAfterRemove = JSON.stringify(afterRemove);
    localStorage.setItem("bookMarks", stringifyAfterRemove) 
}

export { getItemFromLS, addItemToLS , removeitemLS};