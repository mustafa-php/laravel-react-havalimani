import Onayİsareti from "./../icons/accepted.png";
import UcakDunya from "./../icons/ucak2.png";

const BiletAlindi = () => {
    return (
        <>
            <div className="bilet-alindi">
                <div className="aciklama">
                    <div className="bslk">İYİ UÇUŞLAR</div>
                    <div className="mtn">Biletiniz xxxxxx@gmail.com adresine eposta ile iletilmiştir !</div>
                </div>
                <div className="icons">
                    <img src={Onayİsareti} className="onay-isareti" alt="" />
                    <img src={UcakDunya} className="ucak-dunya" alt="" />
                </div>

                <div className="text-center">
                    <a href="http://localhost:3000/" className="ba-ansyf-button">Anasayfaya Dön</a>
                </div>
            </div>
        </>
    );
}

export default BiletAlindi;