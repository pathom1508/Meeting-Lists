import Link from "next/dist/client/link"
function Contents() {
    return(
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
                            <div >
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
            <div>
                <Link href="list-page-2">
                    <button className="btn-next-home">Next</button>
                </Link>
            </div>
        </div>
    )
}

export default Contents