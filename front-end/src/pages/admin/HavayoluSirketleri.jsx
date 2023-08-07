import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import axios from 'axios';

const HavaYoluSirketleri = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [guncelleDurum, setguncelleDurum] = useState(false);
    const guncelleKapat = () => {
        setguncelleDurum(false);
        setGuncellenecekİsim();
    }
    const guncelleAc = (isim) => {
        setguncelleDurum(true);
        setGuncellenecekİsim(isim);
    };

    const [guncellenecekİsim, setGuncellenecekİsim] = useState();

    const [resim, setResim] = useState();
    const [isim, setİsim] = useState();
    const [ucakSayisi, setUcakSayisi] = useState();

    const [guncelResim, setGuncelResim] = useState();
    const [guncelİsim, setGuncelİsim] = useState();
    const [guncelUcakSayisi, setGuncelUcakSayisi] = useState();

    const [sirketler, setSirketler] = useState();

    const [yenile, setYenile] = useState();

    const degerYolla = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('hava_yolu_resim', resim);
        formData.append("isim", isim);
        formData.append("ucak_sayisi", ucakSayisi);

        axios.post("http://localhost:8000/api/havayolusirketis/", formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            }).then(response => {
                console.log('İstek başarılı:', response.data);
            })
            .catch(error => {
                console.error('İstek hatası:', error);
            });

        setShow(false);

        setYenile(e);
    }

    function degerGuncelle(e) {
        e.preventDefault();

        const guncelveriler = new FormData();

        if (guncelResim !== undefined) {
            guncelveriler.append("hava_yolu_resim", guncelResim);
        }

        if (guncelİsim !== undefined) {
            guncelveriler.append("isim", guncelİsim);
        }

        if (guncelUcakSayisi !== undefined) {
            guncelveriler.append("ucak_sayisi", guncelUcakSayisi);
        }

        axios.post("http://localhost:8000/api/havayolusirketis/" + guncellenecekİsim, guncelveriler)
            .then(response => {
                console.log('İstek başarılı:', response.data);
            })
            .catch(error => {
                console.error('İstek hatası:', error.message);
            });
        ;
        setguncelleDurum(false);
        setYenile(e);
    }

    function degerSil(isim) {
        axios.delete("http://localhost:8000/api/havayolusirketis/" + isim);
        setYenile(isim);
    }

    useEffect(() => {
        setTimeout(() => {
            axios.get("http://localhost:8000/api/havayolusirketis/").then(function (response) {
                setSirketler(response.data)
            });
        }, 1000);
    }, [yenile]);

    return (
        <>
            <div>
                <div className="havayolu-sirketleri">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Logo</th>
                                <th>Şirket İsimi</th>
                                <th>Uçak Sayısı</th>
                                <th>Butonlar</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                sirketler &&
                                sirketler.map((veri, index) => (
                                    <tr key={index}>
                                        <td><img src={veri.icon_yolu} className="havayolu-sirketi-icon" alt="" /></td>
                                        <td>{veri.isim}</td>
                                        <td>{veri.ucak_sayisi}</td>
                                        <td>
                                            <button className='duzenle-bt' onClick={() => { guncelleAc(veri.isim) }}>Düzenle</button>
                                            <button className='sil-bt' onClick={() => { degerSil(veri.isim) }} >Sil</button>
                                        </td>
                                    </tr>
                                ))
                            }

                        </tbody>
                    </Table>
                </div>
            </div>

            <Modal show={guncelleDurum} onHide={guncelleKapat}>
                <form action="" onSubmit={degerGuncelle}>
                    <Modal.Header closeButton>
                        <Modal.Title>Havayolu Şirketi Güncelle</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className='hys-ekle-alan'>
                            <div>
                                <label htmlFor="">Logo Seç</label>
                                <input type="file"
                                    onChange={(e) => { setGuncelResim(e.target.files[0]) }}
                                    placeholder='logo Seç' />
                            </div>
                            <div>
                                <label htmlFor="">Şirket İsimi</label>
                                <input type="text"
                                    onChange={(e) => { setGuncelİsim(e.target.value) }}
                                    placeholder='Şirket İsimi' />
                            </div>
                            <div>
                                <label htmlFor="">Uçak Sayısı</label>
                                <input type="text"
                                    onChange={(e) => { setGuncelUcakSayisi(e.target.value) }}
                                    placeholder='Uçak Sayısı' />
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <button className='btn btn-success modal-ekle-button' >
                            Güncelle
                        </button>
                    </Modal.Footer>
                </form>
            </Modal>

            <Button variant="primary" className='ekle-modal-button' onClick={handleShow}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
                </svg>
            </Button>

            <Modal show={show} onHide={handleClose}>
                <form action="" onSubmit={degerYolla}>
                    <Modal.Header closeButton>
                        <Modal.Title>Havayolu Şirketi Ekle</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className='hys-ekle-alan'>
                            <div>
                                <label htmlFor="">Logo Seç</label>
                                <input type="file"
                                    onChange={(e) => { setResim(e.target.files[0]) }}
                                    placeholder='logo Seç' />
                            </div>
                            <div>
                                <label htmlFor="">Şirket İsimi</label>
                                <input type="text"
                                    onChange={(e) => { setİsim(e.target.value) }}
                                    placeholder='Şirket İsimi' />
                            </div>
                            <div>
                                <label htmlFor="">Uçak Sayısı</label>
                                <input type="text"
                                    onChange={(e) => { setUcakSayisi(e.target.value) }}
                                    placeholder='Uçak Sayısı' />
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <button className='btn btn-primary modal-ekle-button' >
                            Ekle
                        </button>
                    </Modal.Footer>
                </form>
            </Modal>
        </>
    );
}

export default HavaYoluSirketleri;