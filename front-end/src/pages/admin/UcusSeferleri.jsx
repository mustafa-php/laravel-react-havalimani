import axios from 'axios';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';

const UcusSeferleri = () => {

    const [havaYoluSirketi, setHavaYoluSirketi] = useState();
    const [ucusNereye, setUcusNereye] = useState();
    const [kalkisSaati, setKalkisSaati] = useState();
    const [inisSaati, setİnisSaati] = useState();
    const [ucusTarihi, setUcusTarihi] = useState();
    const [kontejan, setKontejan] = useState();
    const [fiyat, setFiyat] = useState();

    const [guncelHavaYoluSirketi, setGuncelHavaYoluSirketi] = useState();
    const [guncelUcusNereye, setGuncelUcusNereye] = useState();
    const [guncelKalkisSaati, setGuncelKalkisSaati] = useState();
    const [guncelİnisSaati, setGuncelİnisSaati] = useState();
    const [guncelUcusTarihi, setGuncelUcusTarihi] = useState();
    const [guncelKontejan, setGuncelKontejan] = useState();
    const [guncelFiyat, setGuncelFiyat] = useState();


    const random = Math.random().toString(36).substring(2, 15);

    const [show, setShow] = useState(false);
    const [guncelleDurum, setGuncelleDurum] = useState(false);

    const [ucusSeferleri, setUcusSeferleri] = useState();

    const [guncellenecekUcusNo, setGuncellenecekUcusNo] = useState();

    const [yenile, setYenile] = useState();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const guncelleKapat = () => {
        setGuncelleDurum(false);
        setGuncellenecekUcusNo();
    }

    const guncelleAc = (ucus_no) => {
        setGuncelleDurum(true);
        setGuncellenecekUcusNo(ucus_no);
    };

    const degerYolla = async (e) => {
        e.preventDefault();
        const veriler = {
            hava_yolu_sirketi: havaYoluSirketi,
            nereye: ucusNereye,
            kalkis: kalkisSaati,
            inis: inisSaati,
            tarih: ucusTarihi,
            doluluk: "0",    
            kontejan: kontejan,
            fiyat: fiyat
        };

        axios.post("http://localhost:8000/api/ucusseferis/", veriler).then(response => {
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
            hava_yolu_sirketi: guncelHavaYoluSirketi,
            nereye: guncelUcusNereye,
            kalkis: guncelKalkisSaati,
            inis: guncelİnisSaati,
            tarih: guncelUcusTarihi,
            kontejan: guncelKontejan,
            fiyat: guncelFiyat
        };

        axios.put("http://localhost:8000/api/ucusseferis/" + guncellenecekUcusNo, guncelveriler)
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

    function degerSil(ucus_no) {
        axios.delete("http://localhost:8000/api/ucusseferis/" + ucus_no);
        setYenile(random);
    }

    useEffect(() => {
        setTimeout(() => {
            axios.get("http://localhost:8000/api/ucusseferis/").then(function (response) {
                setUcusSeferleri(response.data)
            });
        }, 1000);
    }, [yenile])

    return (
        <>
            <div className="ucus-seferleri">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Havayolu Şirketi</th>
                            <th>Uçuş Nereye</th>
                            <th>Kakış Saati</th>
                            <th>İniş Saati</th>
                            <th>Uçuş Tarihi</th>
                            <th>Kontejan</th>
                            <th>Doluluk</th>
                            <th>Fiyat</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ucusSeferleri && ucusSeferleri.map(data => (
                            <tr key={data.id}>
                                <th>{data.hava_yolu_sirketi}</th>
                                <th>{data.nereye}</th>
                                <th>{data.kalkis}</th>
                                <th>{data.inis}</th>
                                <th>{data.tarih}</th>
                                <th>{data.kontejan}</th>
                                <th>{data.doluluk}</th>
                                <th>{data.fiyat}</th>
                                <th>
                                    <button className='duzenle-bt' onClick={() => { guncelleAc(data.ucus_seferi_no) }}>Düzenle</button>
                                    <button className='sil-bt' onClick={() => { degerSil(data.ucus_seferi_no) }}>Sil</button>
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
                        <Modal.Title>Uçuş Seferi Ekle</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className='modal-ekle-alan'>
                            <div>
                                <label htmlFor="">Havayolu Şirketi</label>
                                <input type="text" onChange={(e) => { setHavaYoluSirketi(e.target.value) }} placeholder='Havayolu Şirketi' />
                            </div>
                            <div>
                                <label htmlFor="">Uçuş Nereye</label>
                                <input type="text" onChange={(e) => { setUcusNereye(e.target.value) }} placeholder='Uçuş Nereye' />
                            </div>
                            <div>
                                <label htmlFor="">Kalkış Saati</label>
                                <input type="text" onChange={(e) => { setKalkisSaati(e.target.value) }} placeholder='Kalkış Saati' />
                            </div>
                            <div>
                                <label htmlFor="">İniş Saati</label>
                                <input type="text" onChange={(e) => { setİnisSaati(e.target.value) }} placeholder='İniş Saati' />
                            </div>
                            <div>
                                <label htmlFor="">Uçuş Tarihi</label>
                                <input type="text" onChange={(e) => { setUcusTarihi(e.target.value) }} placeholder='Uçuş Günü' />
                            </div>
                            <div>
                                <label htmlFor="">Kontejan</label>
                                <input type="text" onChange={(e) => { setKontejan(e.target.value) }} placeholder='Kontejan' />
                            </div>
                            <div>
                                <label htmlFor="">Fiyat</label>
                                <input type="text" onChange={(e) => { setFiyat(e.target.value) }} placeholder='Fiyat' />
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
                        <Modal.Title>Uçuş Seferi Güncelle</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className='modal-ekle-alan'>
                            <div>
                                <label htmlFor="">Havayolu Şirketi</label>
                                <input type="text" onChange={(e) => { setGuncelHavaYoluSirketi(e.target.value) }} placeholder='Havayolu Şirketi' />
                            </div>
                            <div>
                                <label htmlFor="">Uçuş Nereye</label>
                                <input type="text" onChange={(e) => { setGuncelUcusNereye(e.target.value) }} placeholder='Uçuş Nereye' />
                            </div>
                            <div>
                                <label htmlFor="">Kalkış Saati</label>
                                <input type="text" onChange={(e) => { setGuncelKalkisSaati(e.target.value) }} placeholder='Kalkış Saati' />
                            </div>
                            <div>
                                <label htmlFor="">İniş Saati</label>
                                <input type="text" onChange={(e) => { setGuncelİnisSaati(e.target.value) }} placeholder='İniş Saati' />
                            </div>
                            <div>
                                <label htmlFor="">Uçuş Tarihi</label>
                                <input type="text" onChange={(e) => { setGuncelUcusTarihi(e.target.value) }} placeholder='Uçuş Günü' />
                            </div>
                            <div>
                                <label htmlFor="">Kontejan</label>
                                <input type="text" onChange={(e) => { setGuncelKontejan(e.target.value) }} placeholder='Kontejan' />
                            </div>
                            <div>
                                <label htmlFor="">Fiyat</label>
                                <input type="text" onChange={(e) => { setGuncelFiyat(e.target.value) }} placeholder='Fiyat' />
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <button className='btn btn-primary modal-ekle-button'>
                            Düzenle
                        </button>
                    </Modal.Footer>
                </form>
            </Modal>
        </>
    );
}

export default UcusSeferleri;