import axios from "axios";
import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";

const Sehirler = ({ sehirAra, secilenSehir }) => {
    const [sehirhv, setSehirhv] = useState();
    const [yukleniyor, setYukleniyor] = useState(true)
    useEffect(() => {
        setYukleniyor(true);
        setSehirhv(false);
        setTimeout(() => {
            axios.get("http://localhost:8000/api/havalimanis/" + sehirAra).then(function (response) {
                setYukleniyor(true)
                setSehirhv(response.data);
                setYukleniyor(false);
            });
        }, 200);
    }, [sehirAra])

    return (
        <div className="sehirler">
            {sehirhv &&
                sehirhv.map((sehir, index) => (
                    <div className="sehir" key={index} onClick={() => secilenSehir(sehir.sehir + "-" + sehir.havalimani_isimi)} >{sehir.sehir} {" (" + sehir.havalimani_isimi + ")"}</div>
                ))
            }

            {
                yukleniyor &&
                <div className="text-center p-3">
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </div>
            }
        </div>
    );
}

export default Sehirler;