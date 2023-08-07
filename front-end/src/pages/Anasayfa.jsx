import Slider from "./../components/Slider";
import BiletAl from "./../components/BiletAl";
import Duyurular from "./../components/Duyurular";
import SplideKart from "./../components/SplideKart";
import GidenGelenUcaklar from "./../components/GidenGelenUcaklar";
import Sss from "./../components/Sss";
import Bloglar from "./../components/Bloglar";

const Anasayfa = () => {
    return (
        <>
            <Slider></Slider>
            <BiletAl></BiletAl>
            <Duyurular></Duyurular>
            <GidenGelenUcaklar></GidenGelenUcaklar>
            <SplideKart></SplideKart>
            <Sss></Sss>
            <Bloglar></Bloglar>
            
            <button className="yukari-button">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-chevron-up" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z" />
                </svg>
            </button>
        </>
    );
}

export default Anasayfa