import Menu from './Menu';
import logo from './../istlogo.svg';

const Baslik = () => {
    return (
        <>
            <header>
                <div className="row baslik">
                    <div className='sutun '>
                        <div className='hava-durumu text-center'>
                            <div>
                                <div className="hava_durumu_logo"><img src="https://cdn-icons-png.flaticon.com/128/1375/1375428.png" style={{
                                    height: "50px", width: "50px"
                                }} alt="" /></div>
                            </div>
                            <div>
                                <div className="hava_durumu_derece">18 °C</div>
                                <div className="hava_durumu_il">İstanbul</div>
                            </div>
                        </div>

                    </div>
                    <div className='sutun text-center'>
                        <img src={logo} className="logo" alt="" />
                    </div>
                    <div className='sutun text-end'>
                        <button className='dil-sec'>
                            En
                        </button>
                    </div>
                </div>

                <Menu></Menu>
            </header>
        </>
    );
}

export default Baslik;