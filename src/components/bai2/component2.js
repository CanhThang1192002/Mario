import React from "react";
import GridLayout from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import '../../styles/bai2/component2.scss'
import anh1 from '../../assets/anh1.jpg'
import anh2 from '../../assets/anh2.jpg'
import anh3 from '../../assets/anh3.jpg'
import anh4 from '../../assets/anh4.jpg'
import anh5 from '../../assets/anh5.jpg'
import anh6 from '../../assets/anh6.jpg'


class Component2 extends React.Component {
    render() {
        const layout = [
            { i: "a", x: 0, y: 0, w: 1, h: 1 },
            { i: "b", x: 1, y: 0, w: 1, h: 1 },
            { i: "c", x: 2, y: 0, w: 1, h: 1 },
            { i: "d", x: 0, y: 1, w: 1, h: 1 },
            { i: "e", x: 1, y: 1, w: 1, h: 1 },
            { i: "f", x: 2, y: 1, w: 1, h: 1 },
        ];

        return (
            <>
                <div className="bai2">
                    <GridLayout
                        className="layout"
                        layout={layout}
                        cols={3}
                        rowHeight={250}
                        width={1000}
                    >
                        <div key="a" className="khunganh"><img className="anh" src={anh1} style={{ width: '100%', height: '100%' }} /></div>
                        <div key="b" className="khunganh"><img className="anh" src={anh2} style={{ width: '100%', height: '100%' }} /></div>
                        <div key="c" className="khunganh"><img className="anh" src={anh3} style={{ width: '100%', height: '100%' }} /></div>
                        <div key="d" className="khunganh"><img className="anh" src={anh4} style={{ width: '100%', height: '100%' }} /></div>
                        <div key="e" className="khunganh"><img className="anh" src={anh5} style={{ width: '100%', height: '100%' }} /></div>
                        <div key="f" className="khunganh"><img className="anh" src={anh6} style={{ width: '100%', height: '100%' }} /></div>
                    </GridLayout>
                </div>
            </>
        )
    }
}
export default Component2;