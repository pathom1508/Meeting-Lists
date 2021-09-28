import React, { Component } from 'react'
import { useState } from 'react' 
import {Drawer} from '../component/Drawer'
import Manual from './manual-Data'
import ManualDetail from './manual-Detail'

export class Gamanual extends Component {
    constructor(props) {
    super(props)
    this.state = {show:false}
    };

    render() {
        return (
            <div>
            <div>
            <button onClick={() => {
                    this.setState({
                        show: !this.state.show
                    })
            }} className="btn btn-dark btn-rounded shadow-sm px-4 py-1 mt-3">SHOW</button>
                <Drawer show={this.state.show} place="right" title="How to get Zoom Token"  >
                    <div>
                        <Manual/>
                   </div> 
                </Drawer>                                             
             </div>
             </div>
        )
    }  
}


export default Gamanual
