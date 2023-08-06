import React from "react";
import ReactDOM from 'react-dom';
import anh7 from '../../assets/anh7.jpg'
import anh8 from '../../assets/anh8.jpg'
import '../../styles/bai3/nhanvat.scss'

class nhavat extends React.Component {
    setnhanvat = (nhanVat, dich) => {
        const container1 = document.getElementById(nhanVat.toString());
        const root1 = ReactDOM.createRoot(container1);
        root1.render(<img className="anh7" src={anh7} style={{ width: '100%', height: '100%' }} />);
        const container2 = document.getElementById(dich.toString());
        const root2 = ReactDOM.createRoot(container2);
        root2.render(<img className="anh8" src={anh8} style={{ width: '60%', height: '60%' }} />);
    }
    componentDidMount() {
        this.setnhanvat(this.props.nhanVat, this.props.dich)
    }
    render() {
        let { nhanVat, dich } = this.props
        return (
            <>
            </>
        )
    }
}

export default nhavat;