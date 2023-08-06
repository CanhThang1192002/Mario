import React from "react";
import Map from './map.js'
import '../../styles/bai3/component3.scss'


class Component3 extends React.Component {

    render() {
        return (
            <>
                <Map />
                <div className="btnRun">
                    <button className="btn-run">Run</button>
                </div>
            </>
        )
    }
}

export default Component3;