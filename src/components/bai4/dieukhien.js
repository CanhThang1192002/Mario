import React from "react";
import ReactDOM from 'react-dom';
import anh7 from '../../assets/anh7.jpg'
import "../../styles/bai4/dieukhien.scss"
import { toast } from 'react-toastify';

class dieukhien extends React.Component {
    state = {
        way: [],
    }
    addNV = (nhanVat) => {
        const container1 = document.getElementById(nhanVat.toString());
        const root1 = ReactDOM.createRoot(container1);
        root1.render(<img className="anh7" src={anh7} style={{ width: '100%', height: '100%' }} />);
    }
    deleteNV = (nhanVat) => {
        const container = document.getElementById(nhanVat.toString());
        container.innerHTML = '';
    }
    clickUp = (nhanVat, dich) => {
        if (nhanVat > 6) {
            if ((9 < nhanVat - 6 && nhanVat - 6 < 13) || (18 < nhanVat - 6 && nhanVat - 6 < 23) || (32 < nhanVat - 6 && nhanVat - 6 < 37)) {
                toast.warning("Can't go up");
                return -1;
            } else {
                this.deleteNV(nhanVat);
                nhanVat = nhanVat - 6;
                // this.props.setNV(nhanVat);
                this.addNV(nhanVat);
            }

        } else {
            toast.warning("Can't go up");
            return -1;
        }
        if (nhanVat === dich) {
            this.props.setShow(true);
            return -2;
        }
        return nhanVat;
    }
    clickDown = (nhanVat, dich) => {
        if (nhanVat < 43) {
            if ((9 < nhanVat + 6 && nhanVat + 6 < 13) || (18 < nhanVat + 6 && nhanVat + 6 < 23) || (32 < nhanVat + 6 && nhanVat + 6 < 37)) {
                toast.warning("Can't go down");
                return -1;
            }
            else {
                this.deleteNV(nhanVat);
                nhanVat = nhanVat + 6;
                // this.props.setNV(nhanVat);
                this.addNV(nhanVat);
            }
        }
        else {
            toast.warning("Can't go down");
            return -1;
        }
        if (nhanVat === dich) {
            this.props.setShow(true);
            return -2;
        }
        return nhanVat;
    }
    clicLet = (nhanVat, dich) => {
        if (nhanVat !== 1 && nhanVat !== 7 && nhanVat !== 13 && nhanVat !== 19 && nhanVat !== 25 && nhanVat !== 31 && nhanVat !== 37 && nhanVat !== 43) {
            if ((9 < nhanVat - 1 && nhanVat - 1 < 13) || (18 < nhanVat - 1 && nhanVat - 1 < 23) || (32 < nhanVat - 1 && nhanVat - 1 < 37)) {
                toast.warning("Can't go left");
                return -1;
            }
            else {
                this.deleteNV(nhanVat);
                nhanVat = nhanVat - 1;
                // this.props.setNV(nhanVat);
                this.addNV(nhanVat);
            }
        }
        else {
            toast.warning("Can't go left");
            return -1;
        }
        if (nhanVat === dich) {
            this.props.setShow(true);
            return -2;
        }
        return nhanVat;
    }
    clickRight = (nhanVat, dich) => {
        if (nhanVat !== 6 && nhanVat !== 12 && nhanVat !== 18 && nhanVat !== 24 && nhanVat !== 30 && nhanVat !== 36 && nhanVat !== 42 && nhanVat !== 48) {
            if ((9 < nhanVat + 1 && nhanVat + 1 < 13) || (18 < nhanVat + 1 && nhanVat + 1 < 23) || (32 < nhanVat + 1 && nhanVat + 1 < 37)) {
                toast.warning("Can't go right")
                return -1;
            }
            else {
                this.deleteNV(nhanVat);
                nhanVat = nhanVat + 1;
                // this.props.setNV(nhanVat);
                this.addNV(nhanVat);
            }
        }
        else {
            toast.warning("Can't go right")
            return -1;
        }
        if (nhanVat === dich) {
            this.props.setShow(true);
            return -2;
        }
        return nhanVat;
    }
    setWay = (e) => {
        this.setState({
            way: [...this.state.way, e],
        })
    }
    async delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async dieuKhien(nhanVat, dich) {
        let nv = nhanVat;
        let nv1;
        for (let i = 0; i < this.state.way.length; i++) {
            document.getElementById(`way${i}`).style.backgroundColor = "#fff";
            if (nv === -1) {
                break;
            }
            else {
                nv1 = nv;
                if (this.state.way[i] === "Move Up") {
                    nv = this.clickUp(nv, dich);
                }
                if (this.state.way[i] === "Move Down") {
                    nv = this.clickDown(nv, dich);
                }
                if (this.state.way[i] === "Move Left") {
                    nv = this.clicLet(nv, dich);
                }
                if (this.state.way[i] === "Move Right") {
                    nv = this.clickRight(nv, dich);
                }
            }
            await this.delay(700);

        }
        if (nv === -2) return;
        if (nv === -1) {
            this.deleteNV(nv1);
        }
        else {
            this.deleteNV(nv);
        }
        this.addNV(nhanVat);
        alert("không thể đi đến ô đích")
        this.setState({
            way: [],
        })
    }

    render() {
        let { nhanVat, dich } = this.props;
        return (
            <>
                <div className="dieukhien">
                    <div className="way">
                        {
                            this.state.way && this.state.way.map((item, index) => {
                                return (
                                    <div className="way_item" id={`way${index}`}>
                                        <span className="way_item_index">{index + 1}:</span>
                                        <span className="way_item_text">{item}</span>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <select className="menu" value={"chon gia tri"} onChange={(e) => this.setWay(e.target.value)}>
                        <option style={{ display: "none" }}>Chọn đường đi</option>
                        <option value="Move Up">Move Up</option>
                        <option value="Move Down">Move Down</option>
                        <option value="Move Left">Move Left</option>
                        <option value="Move Right">Move Right</option>
                    </select>
                </div>
                <div className="btnRun">
                    <button className="btn-run" onClick={() => this.dieuKhien(nhanVat, dich)}>Run</button>
                </div>

            </>
        )
    }
}

export default dieukhien;