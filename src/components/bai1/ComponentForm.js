import React from "react";
import { toast } from 'react-toastify';
import moment from 'moment';
import '../../styles/bai1/form.scss'

class ComponentForm extends React.Component {
    state = {
        stt: '',
        mssv: '',
        ten: '',
        ngaysinh: '',
        email: ''
    }
    ClickThem = (e) => {

        e.preventDefault();
        if (!this.state.mssv || !this.state.ten || !this.state.ngaysinh || !this.state.email) {
            toast.error("Vui lòng nhập đầy đủ thông tin");
            return;
        }
        let sinhvien = {
            stt: this.state.stt,
            mssv: this.state.mssv,
            ten: this.state.ten,
            ngaysinh: this.state.ngaysinh,
            email: this.state.email
        }
        this.props.addsinhvien(sinhvien)
        this.setState({
            mssv: '',
            ten: '',
            ngaysinh: '',
            email: ''
        })
    }
    render() {
        let { sinhvien } = this.props
        if (sinhvien.length === 0) this.state.stt = 1
        else this.state.stt = Number(sinhvien[sinhvien.length - 1].stt) + 1
        return (
            <>
                <div className="form">
                    <form className="text_form">
                        <input className="text" placeholder="MSSV" value={this.state.mssv} onChange={(e) => this.setState({ mssv: e.target.value })} />
                        <input className="text" placeholder="Họ và tên" value={this.state.ten} onChange={(e) => this.setState({ ten: e.target.value })} /><br />
                        <input className="text" type="date" placeholder="Ngày sinh" onChange={(e) => this.setState({ ngaysinh: moment(e.target.value).format("DD/MM/YYYY") })} />
                        <input className="text" placeholder="Emali" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} />
                    </form>
                    <button className="them" onClick={(e) => this.ClickThem(e)}>thêm</button>
                </div>
            </>
        )
    }
}

export default ComponentForm;
