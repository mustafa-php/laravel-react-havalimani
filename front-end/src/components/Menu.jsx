import { Link, Outlet } from "react-router-dom";
import logo from "./../istlogo.svg";

const Menu = () => {
    return (
        <>

            <div className="menu">
                <button className="menu-button">
                    <div>
                        <div>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </button>
                <div className="menu-container">

                    <div className="menu-bas">
                        <div className="menu-bas-logo-container">
                            <img src={logo} className="menu-bas-logo" alt="" />
                        </div>
                        <div className="menu-cikis-button-container">
                            <button className="menu-cikis-button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="menu-govde">

                        <div className="menu-basliklari">
                            <div className="menu-baslik aktif">
                                <button>Uçuşlar</button>
                            </div>

                            <div className="menu-baslik">
                                <button>Hizmetler</button>
                            </div>

                            <div className="menu-baslik">
                                <button>Havalimanı</button>
                            </div>

                            <div className="menu-baslik">
                                <button>Ticari</button>
                            </div>

                            <div className="menu-baslik">
                                <button>Kurumsal</button>
                            </div>
                        </div>

                        <div className="menu-icerikleri">
                            <div className="menu-icerik-alan-1">
                                <div className="menu-icerik-baslik">Uçuş Bilgileri</div>
                                <div className="menu-icerik-govde">
                                    <a href="./">Gelen Uçuşlar</a>
                                    <a href="./">Giden Uçuşlar</a>
                                    <a href="./">Havayolu Şirketleri</a>
                                    <a href="./">Bilet Satış Ofisleri</a>
                                </div>
                            </div>
                            <div className="menu-icerik-alan-2">
                            <div className="menu-icerik-baslik">Havalimanı Rehberi</div>
                                <div className="menu-icerik-govde">
                                    <a href="./">Yolcu Rehberi</a>
                                    <a href="./">Gelen Yolcu Rehberi</a>
                                    <a href="./">Giden Yolcu Rehberi</a>
                                    <a href="./">Transfer Yolcu Rehberi</a>
                                    <a href="./">İga Yanımda {"(Erişebilirlik)"}</a>
                                </div>
                            </div>
                            <div className="menu-icerik-alan-3"></div>
                        </div>

                    </div>


                    {/*   <Link to={"/"}>Anasayfa</Link>
                    <Link to={"/BiletAl"}>Bilet Al</Link>
                    <Link to={"/GidenGelenUcak"}>Giden Gelen Uçak</Link>
                    <Outlet></Outlet> */}
                </div>
            </div>

        </>
    );
}

export default Menu;