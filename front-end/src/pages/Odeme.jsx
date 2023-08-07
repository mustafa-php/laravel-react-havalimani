import { useEffect, useState } from "react";
import cipLogo from "./../icons/chip.png";
import kartLogo from "./../icons/mastercard.png";
import { useLocation } from "react-router-dom";
import axios from "axios";

const Odeme = () => {
    const [kartNo, setKartNo] = useState(-1);
    const [haneler, setHaneler] = useState();
    const [gun, setGun] = useState();
    const [ay, setAy] = useState();
    const [cvc, setCvc] = useState();
    const [isim, setİsim] = useState();
    const [soyisim, setSoyisim] = useState();
    const [tcNo, setTcNo] = useState();
    const [dogumTarihi, setDogumTarihi] = useState();
    const [email, setEmail] = useState();
    const [telNo, setTelNo] = useState();
    const [ucusSeferi, setUcusSeferi] = useState();

    const location = useLocation();
    const { state } = location;
    const { ucus_no } = state;

    function biletOdeme() {
        const veriler = {
            isim: isim,
            soyisim: soyisim,
            tc_no: tcNo,
            tel_no: telNo,
            mail: email,
            dogum_tarihi: dogumTarihi,
            ucus_seferi_no: ucus_no
        };

        axios.post("http://localhost:8000/api/bilets", veriler)
            .then(function (response) {
                window.location.href = 'http://localhost:3000/bilet-alindi';
            })
            .catch(function (params) {
                console.log(params)
            })

    }

    useEffect(() => {
        axios.get("http://localhost:8000/api/ucusseferis/" + ucus_no).then(function (response) {
            setUcusSeferi(response.data);
        });

    }, [ucus_no]);

    useEffect(() => {
        const parts = [];
        if (kartNo.length > -1 && kartNo.length < 17) {
            for (let i = 0; i < kartNo.length; i += 4) {
                parts.push(kartNo.substring(i, i + 4));
            }
            setHaneler(parts);
        }
    }, [kartNo])

    return (
        <>
            <div className="odeme-container">
                <div>
                    <div className="banka-karti">
                        <div className="kart-onizleme-alani">
                            <div className="kart-onizlemesi">
                                <div className="kart-onizleme-cip"><img src={cipLogo} className="cip-logo" alt="" /></div>
                                <div className="kart-onizleme-logo"><img src={kartLogo} className="kart-logo" alt="" /></div>
                                <div className="kart-onizleme-no">
                                    {haneler && haneler.map((hane, index) => (
                                        <span key={index}>{hane}</span>
                                    ))}
                                </div>
                                <div className="kart-onizleme-skt">{gun}/{ay}</div>
                                <div className="kart-onizleme-cvc">{cvc}</div>
                            </div>
                        </div>
                        <div className="kart-bilgi-giris-alani">
                            <form action="">
                                <div className="input-alani">
                                    <label htmlFor="">Kart No</label>
                                    <input type="text" onChange={(e) => { setKartNo(e.target.value) }} maxLength={16} placeholder="Kart No" />
                                </div>

                                <div className="input-alani">
                                    <label htmlFor="">Son Kullanma Tarihi</label>
                                    <input type="text" onChange={(e) => { setGun(e.target.value) }} maxLength={2} placeholder="Gün" />
                                    <input type="text" onChange={(e) => { setAy(e.target.value) }} maxLength={2} placeholder="Ay" />
                                </div>

                                <div className="input-alani">
                                    <label htmlFor="">CVC</label>
                                    <input type="text" onChange={(e) => { setCvc(e.target.value) }} maxLength={3} placeholder="CVC" />
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="kisisel-bilgiler">
                        <form action="">
                            <div className="input-alani">
                                <label htmlFor="">İsim</label>
                                <input type="text" onChange={(e) => { setİsim(e.target.value) }} placeholder="İsim" />
                            </div>
                            <div className="input-alani">
                                <label htmlFor="">Soyisim</label>
                                <input type="text" onChange={(e) => { setSoyisim(e.target.value) }} placeholder="Soyisim" />
                            </div>
                            <div className="input-alani">
                                <label htmlFor="">TC No</label>
                                <input type="text" maxLength={11} onChange={(e) => { setTcNo(e.target.value) }} placeholder="TC No" />
                            </div>
                            <div className="input-alani">
                                <label htmlFor="">Doğum Tarihi</label>
                                <input type="text" onChange={(e) => { setDogumTarihi(e.target.value) }} placeholder="Doğum Tarihi" />
                            </div>
                            <div className="input-alani">
                                <label htmlFor="">Email</label>
                                <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email" />
                            </div>
                            <div className="input-alani">
                                <label htmlFor="">Cep Telefon</label>
                                <input type="tel" onChange={(e) => { setTelNo(e.target.value) }} placeholder="Cep Telefonu" />
                            </div>
                        </form>
                    </div>
                </div>

                <div>
                    <div className="bilet-onizleme">
                        {ucusSeferi &&
                            <div key={ucusSeferi.ucus_no}>
                                <div>
                                    <img src={ucusSeferi.havayolu_icon_yolu} alt="" className="turk-hava-logo-onizleme" />
                                </div>
                                <div>
                                    <div>Kalkış</div>
                                    <div> {ucusSeferi.kalkis} | {ucusSeferi.tarih} |</div>
                                    <div>İstanbul Havalimanı</div>
                                </div>
                                <div>
                                    <div>İniş</div>
                                    <div>{ucusSeferi.inis}</div>
                                    <div>{ucusSeferi.nereye}</div>
                                </div>
                            </div>
                        }
                    </div>
                    <div>
                        <button className="bilet-satis-tamamla-button" onClick={() => { biletOdeme() }}>Tamamla</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Odeme;