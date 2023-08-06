import React from "react";
import BanDo from './bando.js'
import NhanVat from "./nhavat.js";


class Map extends React.Component {
    sinh = (n, m) => {
        let a = [];
        let i = 0, j = 0;
        for (i = 0; i < n; i++) {
            let b = [];
            for (j = 0; j < m; j++) {
                b[j] = (j + 1) + (i * 6);
            }
            a[i] = b;
        }
        return a;
    }

    state = {
        arr: this.sinh(8, 6),
        nhanVat: 46,
        dich: 5
    }

    setNguoi = (data) => {
        this.setState({
            nhanVat: data
        })
    }

    render() {
        return (
            <>
                <BanDo
                    arr={this.state.arr}
                />
                <NhanVat
                    nhanVat={this.state.nhanVat}
                    dich={this.state.dich}
                />
            </>
        )
    }
}

export default Map;