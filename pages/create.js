import Link from 'next/link'
import Duration from './duration'
import TimeZone from './time-zone'

function Create() {
    return(
        <div>
            <div className="container">
                <div className="font">
                    <Link href="list">My Meeting</Link>            
                </div>
                <div >
                    <div className="row">
                        <div className="col-25">
                            <p className="font">Topic</p>
                        </div>
                        <div className="col-75">
                            <input type="text" placeholder="Your topic"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <p className="font">Description</p>
                        </div>
                        <div className="col-75">
                            <input type="text" placeholder="Enter your meeting description"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <p className="font">Start</p>
                        </div>
                        <div className="col-75">
                            <input className="date" type="date"/>
                            <input className="time" type="time"/>

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <p className="font">Duration</p>
                        </div>
                       <Duration/>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <p className="font">Time Zone</p>
                        </div>
                        <TimeZone/>
                    </div>
                    <div>
                        <Link href="list">
                            <input className="btn-create" type="submit" value="Create"/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Create