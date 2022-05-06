import React from 'react'

const Content = ({items, setItems, theme}) => {

    /*

    We are using this below function because we cannot change checkbox status directly. If we click on checkbox, the component will re-render and return the original state of the checkbox.

    */
    const handleCheck = (id) => {
        const listItems = items.map((item) => (item.id === id ? { ...item, available: !item.available } : item));
        setItems(listItems);
        localStorage.setItem('footballers', JSON.stringify(listItems));
    }

    const handleDelete = (id) => {
        const listItems = items.filter((item) => item.id !== id)
        setItems(listItems);
        localStorage.setItem('footballers', JSON.stringify(listItems));
    }

    return (
        <main className=" pt-3 container" >
            <ul style={{height: "40vh", overflowY: "scroll", scrollbarWidth:"thin"}}>
                {items.slice(0).reverse().map((item) => (
                    <li className={`list-none bg-${theme} bg-gradient rounded-2 p-3 text-warning my-2 col-lg-12 d-flex justify-content-between align-items-center`} key={item.id}>
                        <input type="checkbox"
                            onChange={() => handleCheck(item.id)}
                            className="" checked={item.available} name="" id="" />
                        <label className="form-label fw-bold" htmlFor="checkbox">
                            {item.playername}
                        </label>
                        <button onClick={() => handleDelete(item.id)} className="btn btn-primary mx-3 btn-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                            </svg>
                        </button>
                    </li>
                ))}
            </ul>

            <div className="alert alert-primary col-lg-12 mb-5">
                {items.length} {items.length === 1 ? "player": "players"}
                
            </div>
        </main>
    )
}

export default Content
