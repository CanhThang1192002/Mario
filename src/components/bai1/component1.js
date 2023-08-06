import React from "react";
import ComponentForm from "./ComponentForm";
import ComponentTable from "./ComponentTable";
import { toast } from 'react-toastify';

class component1 extends React.Component {
    state = {
        sinhvien: [
            { stt: '1', mssv: '20205022', ten: 'Nguyen Canh Thang', ngaysinh: '11/09/2002', email: 'thang.nc205022@sis.hust.edu.vn' },
            { stt: '2', mssv: '20205106', ten: 'Nguyen Van Nam', ngaysinh: '04/01/2002', email: 'nam.nv205106@sis.hust.edu.vn' },
            { stt: '3', mssv: '20205110', ten: 'Nguyen Trong Nhan', ngaysinh: '01/06/2002', email: 'nhan.nt205110@sis.hust.edu.vn' }
        ]
    }
    addsinhvien = (sv) => {
        this.setState({
            sinhvien: [...this.state.sinhvien, sv]
        })
        toast.success("thêm thành công");
    }
    deletesinhvien = (sv) => {
        let sinhvien = this.state.sinhvien;
        sinhvien = sinhvien.filter(item => item.stt !== sv.stt);
        this.setState({ sinhvien: sinhvien });
        toast.success("xóa thành công");
    }
    render() {
        let { sinhvien } = this.state
        return (
            <>
                <div>
                    <ComponentForm
                        sinhvien={this.state.sinhvien}
                        addsinhvien={this.addsinhvien}
                    />
                </div>
                <div>
                    <ComponentTable
                        sinhvien={this.state.sinhvien}
                        deletesinhvien={this.deletesinhvien}
                    />
                </div>
            </>
        )
    }
}

export default component1;