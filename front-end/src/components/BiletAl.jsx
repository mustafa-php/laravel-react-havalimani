import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Takvim from "./Takvim";
import Sehirler from "./Sehirler";

const BiletAl = () => {

    const [gidisTarih, setgidisTarih] = useState("");
    const [donusTarihi, setdonusTarihi] = useState("");
    const [gidisNereye, setgidisNereye] = useState("");
    const [sehirlerGorunum, setSehirlerGorunum] = useState(false);
    const [takvimGunu, setTakvimGunu] = useState()
    const [takvim, settakvim] = useState(false)
    const navigate = useNavigate();


    function degerYolla(e) {
        e.preventDefault();

        if (donusTarihi.trim() === "") {
            setdonusTarihi("donusyok");
        }

        const [gun, ay, yil] = gidisTarih.split('.')
        const formatgidisTarih = yil + "-" + ay + "-" + gun;


        const [sehir] = gidisNereye.split("-");

        console.log(formatgidisTarih);
        const state = {
            gidisTarih: formatgidisTarih,
            donusTarihi: donusTarihi,
            gidisNereye: sehir
        };

        navigate("/bilet-bul", { state });
    }

    const gunSecildi = (data) => {
        setTakvimGunu(data)
    }

    useEffect(() => {
        if (takvimGunu !== undefined) {
            const bugun = new Date();
            const formattedDate = new Date(bugun.getFullYear(), bugun.getMonth(), takvimGunu + 1).toLocaleString('tr-TR', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                timeZone: 'UTC' // Zaman dilimini istediğiniz gibi ayarlayabilirsiniz
            });

            setgidisTarih(formattedDate);
        }
    }, [takvimGunu]);

    const sehirSecildi = (data) => {
        setgidisNereye(data);
    }

    return (
        <>
            <div className="bilet-al">
                <div className="bilet-al-baslik">Bilet Al</div>
                <div className="bilet-al-govde">
                    <form className="bilet-al-container" onSubmit={degerYolla}>
                        <div className="gidis-tarih">
                            <label htmlFor="gidisTarihi">Gidiş Tarihi</label>
                            <input autoComplete="off"
                                type="text"
                                id="gidisTarihi"
                                name="gidisTarih"
                                onFocus={() => {
                                    setTimeout(() => {
                                        settakvim(true);
                                    }, 200);
                                }}

                                onBlur={() => {
                                    setTimeout(() => {
                                        settakvim(false);
                                    }, 200);
                                }}

                                onChange={(e) => { setgidisTarih(e.target.value) }}
                                value={gidisTarih}
                                placeholder="Gidiş Tarihi"
                                readOnly />
                            {
                                takvim && (
                                    <Takvim secilenGun={gunSecildi}></Takvim>
                                )
                            }

                        </div>
                        <div className="donus-tarihi">
                            <label htmlFor="donusTarihi">Dönüş Tarihi</label>
                            <input autoComplete="off"
                                type="text"
                                id="donusTarihi"
                                name="donusOlucakmı"
                                onChange={(e) => { setdonusTarihi(e.target.value) }}
                                placeholder="Dönüş Tarihi" />
                        </div>

                        <div className="gidis-nereye">
                            <label htmlFor="gidisNereye">Nereye</label>
                            <input autoComplete="off"
                                type="text"
                                id="gidisNereye"
                                name="gidisNereye"
                                onFocus={() => {
                                    setTimeout(() => {
                                        setSehirlerGorunum(true);
                                    }, 200);
                                }}
                                onBlur={() => {
                                    setTimeout(() => {
                                        setSehirlerGorunum(false);
                                    }, 200);
                                }}
                                onChange={(e) => { setgidisNereye(e.target.value) }}
                                value={gidisNereye}
                                placeholder="Nereye" />
                            {
                                sehirlerGorunum && (
                                    <Sehirler sehirAra={gidisNereye} secilenSehir={sehirSecildi}></Sehirler>
                                )
                            }
                        </div>

                        <div className="bilet-al-button-container">
                            <button className="bilet-al-button">Onay</button>
                        </div>
                    </form>
                </div>

            </div>
        </>
    );
}

export default BiletAl;