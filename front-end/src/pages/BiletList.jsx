import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

const BiletList = () => {
    const [veriler, setVeriler] = useState()
    const navigate = useNavigate();
    const location = useLocation();
    const { state } = location;
    const { gidisTarih, gidisNereye } = state;

    useEffect(() => {
        const veri = {
            nereye: gidisNereye,
            tarih: gidisTarih,
        };

        axios.post("http://localhost:8000/api/ucusseferis/where", veri).then(function (response) {
            setVeriler(response.data);
        }).catch();
    }, [gidisNereye, gidisTarih]);

    function odeme(ucus_seferi_no) {
        const state = {
            ucus_no : ucus_seferi_no
        };
        navigate("/odeme", {state});
    }

    return (
        <>

            <div className="bilet-bul-container">
                <div className="filtreler">
                    <div className="filtreler-baslik">Filtrele</div>
                    <div className="filtreler-govde">
                        <div className="filtre-alan">
                            <div className="filtre-baslik">
                                <div>Aktarma</div>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-caret-down" viewBox="0 0 16 16">
                                        <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z" />
                                    </svg>
                                </div> </div>
                            <div className="filtre-icerik">
                                <div>
                                    <div className="filtre-secim">
                                        <input type="checkbox" hidden name="aktarmasız" id="" />
                                        <button className="checkbox" id="aktarmasız"></button>
                                    </div>
                                    <div>Aktarmasız</div>
                                </div>
                            </div>
                        </div>

                        <div className="filtre-alan">
                            <div className="filtre-baslik">
                                <div>Bilet Fiyatlari</div>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-caret-down" viewBox="0 0 16 16">
                                        <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z" />
                                    </svg>
                                </div> </div>
                            <div className="filtre-icerik">

                            </div>
                        </div>

                        <div className="filtre-alan">
                            <div className="filtre-baslik">
                                <div>Kalkış - Varış Saatleri</div>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-caret-down" viewBox="0 0 16 16">
                                        <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z" />
                                    </svg>
                                </div> </div>
                            <div className="filtre-icerik">

                            </div>
                        </div>

                        <div className="filtre-alan">
                            <div className="filtre-baslik">
                                <div>Uçuş Süresi</div>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-caret-down" viewBox="0 0 16 16">
                                        <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z" />
                                    </svg>
                                </div> </div>
                            <div className="filtre-icerik">

                            </div>
                        </div>
                    </div>
                </div>

                <div className="biletler">
                    <div className="biletler-govde">
                        {veriler &&
                            veriler.map(data => (

                                <div className="bilet" key={data.ucus_seferi_no}>
                                    <div className="bilet-ucak-logo"><img src={data.havayolu_icon_yolu} className="bilet-icon" alt="" /></div>
                                    <div className="bilet-ucak-isim">{data.hava_yolu_sirketi}</div>
                                    <div className="bagaj-alani"><div className="icon"></div> <span>Bagaj: <b>15KG</b></span></div>
                                    <div className="kalkis-inis-durumu">
                                        <div className="saatler">
                                            <div className="kalkis-saati">{data.kalkis}</div>
                                            <div className="ucak-iconu">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" className="bi bi-airplane-engines" viewBox="0 0 16 16">
                                                    <path d="M8 0c-.787 0-1.292.592-1.572 1.151A4.347 4.347 0 0 0 6 3v3.691l-2 1V7.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.191l-1.17.585A1.5 1.5 0 0 0 0 10.618V12a.5.5 0 0 0 .582.493l1.631-.272.313.937a.5.5 0 0 0 .948 0l.405-1.214 2.21-.369.375 2.253-1.318 1.318A.5.5 0 0 0 5.5 16h5a.5.5 0 0 0 .354-.854l-1.318-1.318.375-2.253 2.21.369.405 1.214a.5.5 0 0 0 .948 0l.313-.937 1.63.272A.5.5 0 0 0 16 12v-1.382a1.5 1.5 0 0 0-.83-1.342L14 8.691V7.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v.191l-2-1V3c0-.568-.14-1.271-.428-1.849C9.292.591 8.787 0 8 0ZM7 3c0-.432.11-.979.322-1.401C7.542 1.159 7.787 1 8 1c.213 0 .458.158.678.599C8.889 2.02 9 2.569 9 3v4a.5.5 0 0 0 .276.447l5.448 2.724a.5.5 0 0 1 .276.447v.792l-5.418-.903a.5.5 0 0 0-.575.41l-.5 3a.5.5 0 0 0 .14.437l.646.646H6.707l.647-.646a.5.5 0 0 0 .14-.436l-.5-3a.5.5 0 0 0-.576-.411L1 11.41v-.792a.5.5 0 0 1 .276-.447l5.448-2.724A.5.5 0 0 0 7 7V3Z" />
                                                </svg>
                                            </div>
                                            <div className="inis-saati">{data.inis}</div>
                                        </div>
                                        <div className="havalimani-durum">
                                            <span>İst</span>
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                                                    <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                                                </svg>
                                            </span>
                                            <span>{data.nereye}</span>
                                        </div>
                                    </div>
                                    <div className="bilet-fiyati">
                                        <span>{data.fiyat}₺</span>
                                    </div>
                                    <div className="satin-al-button-container">
                                        <button className="satin-al-button"
                                            onClick={() => { odeme(data.ucus_seferi_no) }} >Satın Al</button>
                                    </div>
                                </div>

                            ))
                            
                        }
                    </div>
                </div>
            </div>

        </>
    );
}

export default BiletList;