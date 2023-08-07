const Takvim = ({secilenGun}) => {

    const aylar = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"];
    const bugun = new Date();
    const ayinIlkGunu = new Date(bugun.getFullYear(), bugun.getMonth(), 1).getDay();
    const ayKacGun = new Date(bugun.getFullYear(), bugun.getMonth(), 0).getDate();
    const sayilar = [];

    for (let i = ayinIlkGunu; i <= ayKacGun + ayinIlkGunu; i++) {
        if (ayinIlkGunu >= i) {
            sayilar.push(<div key={i} className="bos"></div>);
        } else {
            sayilar.push(<div key={i} onClick={() => secilenGun(i-ayinIlkGunu) }>{i - ayinIlkGunu}</div>);
        }
    }

    return (
        <div className="takvim">
            <div className="takvim-bas">{aylar[new Date().getMonth()]} / {new Date().getFullYear()}</div>
            <div className="takvim-govde">
                <div className="gun-isimleri">
                    <div>Pzt</div>
                    <div>Sal</div>
                    <div>Çar</div>
                    <div>Per</div>
                    <div>Cum</div>
                    <div>Cmt</div>
                    <div>Paz</div>
                </div>
                <div className="gun-rakamlari">
                    {
                        sayilar
                    }
                </div>
            </div>
        </div>
    );
}

export default Takvim;