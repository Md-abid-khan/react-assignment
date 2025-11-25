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

export { getItemFromLS, addItemToLS };