import React from "react";
import anh9 from '../../assets/anh9.png'
import "../../styles/bai4/thongbao.scss"
class thongbao extends React.Component {
    clickok = () => {
        window.location.reload();
    }
    render() {
        return (
            <>
                <div className="thongBao">
                    <img src={anh9} style={{ width: '100%', height: '100%' }} ></img>
                    <button className="ok" onClick={() => this.clickok()}>OK</button>
                </div>
            </>
        )
    }
}

export default thongbao;