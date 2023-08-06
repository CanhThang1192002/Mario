import React from "react";
import moment from "moment";
import '../../styles/bai1/table.scss'

class ComponentTable extends React.Component {
    clickxoa = (sv) => {
        this.props.deletesinhvien(sv);
    }
    render() {
        let { sinhvien } = this.props
        return (
            <>
                <div>
                    <table className="table">
                        <thead className="tab_thead">
                            <tr>
                                <th className="text">STT</th>
                                <th className="text">MSSV</th>
                                <th className="text">Họ và tên</th>
                                <th className="text">Ngày sinh</th>
                                <th className="text">Email</th>
                                <th className="text" ></th>
                            </tr>
                        </thead>
                        <tbody className="tab_body">
                            {
                                sinhvien && sinhvien.length > 0 ?
                                    sinhvien.map((item, index) => {
                                        return (
                                            <tr key={item.stt}>
                                                <td className="text">{item.stt}</td>
                                                <td className="text">{item.mssv}</td>
                                                <td className="text">{item.ten}</td>
                                                <td className="text">{item.ngaysinh}</td>
                                                <td className="text">{item.email}</td>
                                                <td className="text"><button className="xoa" onClick={() => this.clickxoa(item)}>Xóa</button></td>
                                            </tr>
                                        )
                                    })
                                    :
                                    null
                            }
                        </tbody>
                    </table>
                </div>
            </>
        )
    }
}

export default ComponentTable;