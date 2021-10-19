import Link from 'next/link'

function ListPageTwo() {
    return(
        <div>
            <header className="app-header">
                <h1>Meeting Lists</h1>
            </header>
            <div className="list-content">
                <div>
                <div className="contents">
                    <div className="flex-list">
                        <input  className="search" placeholder="Search" />
                            <Link href="create">
                                <button className="btn-create">+Create</button>
                            </Link>
                            </div>
                            <div>
                                <div className="">
                                    <div className="head-list">
                                        <div className="contents-head" >
                                            <div>
                                                <p >My Meeting</p>
                                            </div>
                                            <div>
                                                <p>Description</p>
                                            </div>
                                            <div>
                                                <p>Start</p>
                                            </div>
                                            <div>
                                                <p>Duration</p>
                                            </div>
                                            <div>
                                                <p>Time</p>
                                            </div>
                                            <div>
                                        </div>
                                    </div> 
                                    </div>
                                    <div className="list-1">
                                        <div className="contents-list" >
                                            <div>
                                                <p>My Meeting</p>
                                            </div>
                                            <div>
                                                <p>meeting</p>
                                            </div>
                                            <div>
                                                <p>12/10/2021 15.00 AM</p>
                                            </div>
                                            <div>
                                                <p>2 Hr 0 min</p>
                                            </div>
                                            <div>
                                                <p>(GMT+7) Indochina Time-Bangkok</p>
                                            </div>
                                            <div>
                                                <button className="btn-edit">Edit</button>
                                                <button className="btn-delete">Delete</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="list-1">
                                        <div className="contents-list" >
                                            <div>
                                                <p>My Meeting</p>
                                            </div>
                                            <div>
                                                <p>meeting</p>
                                            </div>
                                            <div>
                                                <p>12/10/2021 15.00 AM</p>
                                            </div>
                                            <div>
                                                <p>2 Hr 0 min</p>
                                            </div>
                                            <div>
                                                <p>(GMT+7) Indochina Time-Bangkok</p>
                                            </div>
                                            <div>
                                                <button className="btn-edit">Edit</button>
                                                <button className="btn-delete">Delete</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="list-1">
                                        <div className="contents-list" >
                                            <div>
                                                <p>My Meeting</p>
                                            </div>
                                            <div>
                                                <p>meeting</p>
                                            </div>
                                            <div>
                                                <p>12/10/2021 15.00 AM</p>
                                            </div>
                                            <div>
                                                <p>2 Hr 0 min</p>
                                            </div>
                                            <div>
                                                <p>(GMT+7) Indochina Time-Bangkok</p>
                                            </div>
                                            <div>
                                                <button className="btn-edit">Edit</button>
                                                <button className="btn-delete">Delete</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="list-1">
                                        <div className="contents-list" >
                                            <div>
                                                <p>My Meeting</p>
                                            </div>
                                            <div>
                                                <p>meeting</p>
                                            </div>
                                            <div>
                                                <p>12/10/2021 15.00 AM</p>
                                            </div>
                                            <div>
                                                <p>2 Hr 0 min</p>
                                            </div>
                                            <div>
                                                <p>(GMT+7) Indochina Time-Bangkok</p>
                                            </div>
                                            <div>
                                                <button className="btn-edit">Edit</button>
                                                <button className="btn-delete">Delete</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-list">
                                <Link href="list">
                                    <button className="btn-next">Previous</button>
                                </Link>
                                <Link href="list">
                                    <button className="btn-next">Next</button>
                                </Link>
                            </div>
                    </div>
                </div> 
            </div>
        </div>
    ) 
}

export default ListPageTwo