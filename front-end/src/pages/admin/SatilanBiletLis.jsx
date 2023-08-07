import axios from 'axios';
import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';

const SatilanBiletList = () => {
    const [veriler, setVeriler] = useState();

    useEffect(() => {

        axios.get("http://localhost:8000/api/bilets/").then(function (response) {
            setVeriler(response.data);
        });

    }, [])


    return (
        <>
            <div className="satilan-bilet-alan">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Satın Alan</th>
                            <th>Şirket İsimi</th>
                            <th>Nereye</th>
                            <th>Kakış Saati</th>
                            <th>İniş Saati</th>
                        </tr>
                    </thead>
                    <tbody>
                        {veriler &&

                            veriler.map(data => (
                                <tr>
                                    <th>{data.isim + " " + data.soyisim}</th>
                                    <th>{data.hava_yolu_sirketi}</th>
                                    <th>{data.nereye}</th>
                                    <th>{data.kalkis}</th>
                                    <th>{data.inis}</th>
                                </tr>
                            ))
                        }

                    </tbody>
                </Table>
            </div>
        </>
    );
}

export default SatilanBiletList;