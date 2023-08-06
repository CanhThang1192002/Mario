import React from "react";
import "../../styles/bai4/component4.scss"
import Map from "../bai3/map.js"
import DieuKhien from "./dieukhien.js";
import ThongBao from "./thongbao.js";
class Component4 extends React.Component {
    state = {
        nhanVat: 46,
        dich: 5,
        show: false
    }
    setNV = (data) => {
        this.setState({
            nhanVat: data
        })
    }
    setShow = (data) => {
        this.setState({
            show: data
        })
    }
    render() {
        return (
            <>
                {
                    this.state.show === false ?
                        <>
                            <Map />
                            <DieuKhien
                                nhanVat={this.state.nhanVat}
                                dich={this.state.dich}
                                setNV={this.setNV}
                                setShow={this.setShow}
                            />
                        </>
                        :
                        <div className="thongbao">
                            <ThongBao />
                        </div>
                }
            </>
        )
    }
}
export default Component4;