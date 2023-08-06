import React from "react";
import '../../styles/bai3/bando.scss'

class bando extends React.Component {
    render() {
        let { arr } = this.props
        return (
            <>
                <div className="bai3">
                    {
                        arr.map((item, index) => {
                            return (
                                <div className="row" key={item}>
                                    {
                                        item.map((item2, index2) => {
                                            if ((index === 1 && index2 > 2) || (index === 3 && index2 < 4) || (index === 5 && index2 > 1)) {
                                                return (
                                                    <div key={item2}
                                                        className="o"
                                                        id={item2}
                                                        style={{ position: 'absolute', width: '50px', height: '50px', transform: 'translate(' + 100 * index2 + '%,' + 100 * index + '%)', backgroundColor: 'blue' }}
                                                    >
                                                    </div>
                                                )
                                            }
                                            else {
                                                return (
                                                    <div key={item2}
                                                        className="o"
                                                        id={item2}
                                                        style={{ position: 'absolute', width: '50px', height: '50px', transform: 'translate(' + 100 * index2 + '%,' + 100 * index + '%)', backgroundColor: 'white' }}
                                                    >
                                                    </div>
                                                )
                                            }
                                        })
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            </>
        )
    }
}
export default bando;