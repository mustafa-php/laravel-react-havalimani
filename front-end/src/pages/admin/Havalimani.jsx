import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Modal, Table } from "react-bootstrap";

const Havalimani = () => {
    const [havalimanlari, setHavalimanlari] = useState();
    const [hvİsim, setHvİsim] = useState();
    const [sehir, setSehir] = useState();

    const random = Math.random().toString(36).substring(2, 15);

    const [show, setShow] = useState(false);
    const [guncelleDurum, setGuncelleDurum] = useState(false);
    const [guncellenecekHv, setGuncellenecekHv] = useState();
    const [yenile, setYenile] = useState();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const guncelleKapat = () => {
        setGuncelleDurum(false);
        setGuncellenecekHv();
    }

    const guncelleAc = (Hv) => {
        setGuncelleDurum(true);
        setGuncellenecekHv(Hv);
    };

    const degerYolla = async (e) => {
        e.preventDefault();
        const veriler = {
            havalimani_isimi: hvİsim,
            sehir: sehir
        };

        axios.post("http://localhost:8000/api/havalimanis/", veriler).then(response => {
            console.log('İstek başarılı:', response.data);
        })
            .catch(error => {
                console.error('İstek hatası:', error);
            });
        setShow(false);
        setYenile(random);
    }

    function degerGuncelle(e) {
        e.preventDefault();

        const guncelveriler = {
            havalimani_isimi: hvİsim,
            sehir: sehir
        };

        axios.put("http://localhost:8000/api/havalimanis/" + guncellenecekHv, guncelveriler)
            .then(response => {
                setGuncelleDurum(false);
                console.log('İstek başarılı:', response.data);
            })
            .catch(error => {
                console.error('İstek hatası:', error.message);
            });
        ;
        setYenile(random);
    }

    function degerSil(Hv) {
        axios.delete("http://localhost:8000/api/havalimanis/" + Hv);
        setYenile(random);
    }

    useEffect(() => {
        setTimeout(() => {
            axios.get("http://localhost:8000/api/havalimanis/").then(function (response) {
                setHavalimanlari(response.data);
            });
        }, 1000);
    }, [yenile])

    return (
        <>
            <div className="havalimanlari">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Havalimani İsim</th>
                            <th>Şehir</th>
                        </tr>
                    </thead>
                    <tbody>
                        {havalimanlari && havalimanlari.map(data => (
                            <tr key={data.id}>
                                <th>{data.havalimani_isimi}</th>
                                <th>{data.sehir}</th>
                                <th>
                                    <button className='duzenle-bt' onClick={() => { guncelleAc(data.havalimani_isimi) }}>Düzenle</button>
                                    <button className='sil-bt' onClick={() => { degerSil(data.havalimani_isimi) }}>Sil</button>
                                </th>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>

            <Button variant="primary" className='ekle-modal-button' onClick={handleShow}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
                </svg>
            </Button>

            <Modal show={show} onHide={handleClose}>
                <form action="" onSubmit={degerYolla}>
                    <Modal.Header closeButton>
                        <Modal.Title>havalimani Ekle</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className='modal-ekle-alan'>
                            <div>
                                <label htmlFor="">Havalimanı İsim</label>
                                <input type="text" onChange={(e) => { setHvİsim(e.target.value) }} placeholder='Havalimanı İsim' />
                            </div>
                            <div>
                                <label htmlFor="">Şehir</label>
                                <input type="text" onChange={(e) => { setSehir(e.target.value) }} placeholder='Şehir' />
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <button className='btn btn-primary modal-ekle-button'>
                            Ekle
                        </button>
                    </Modal.Footer>
                </form>
            </Modal>

            <Modal show={guncelleDurum} onHide={guncelleKapat}>
                <form action="" onSubmit={degerGuncelle}>
                    <Modal.Header closeButton>
                        <Modal.Title>Havalimani Güncelle</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className='modal-ekle-alan'>
                            <div>
                                <label htmlFor="">Havalimanı İsim</label>
                                <input type="text" onChange={(e) => { setHvİsim(e.target.value) }} placeholder='Havalimani İsim' />
                            </div>
                            <div>
                                <label htmlFor="">Şehir</label>
                                <input type="text" onChange={(e) => { setSehir(e.target.value) }} placeholder='Şehir' />
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <button className='btn btn-primary modal-ekle-button'>
                            Güncelle
                        </button>
                    </Modal.Footer>
                </form>
            </Modal>
        </>
    );
}

export default Havalimani;