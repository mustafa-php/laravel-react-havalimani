import fastTrackİmg from "./../resimler/fast-track.png";
import ulasimİmg from "./../resimler/havalimani_ulasim.png";
import alisverisİmg from "./../resimler/alisveris.png";
import yemekİmg from "./../resimler/yemek.png";
import kayipEsyaİmg from "./../resimler/havalimani_kayip_esya.png";
import otelİmg from "./../resimler/havalimani_otel.png";
import igaPass from "./../resimler/igaPass.png";



import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/core';

const SplideKart = () => {
    return (
        <>
            <Splide hasTrack={false} className="slider-kart" options={{
                pagination: false,
                rewind: true,
                perPage: 5,
                breakpoints: {
                    1200: {
                        perPage: 3
                    },
                    640: {
                        perPage: 2
                    },
                    320: {
                        perPage: 4
                    }
                },
            }}>

                <SplideTrack >
                    <SplideSlide>
                        <div className="kart">
                            <img src={fastTrackİmg} alt="" />
                            <div>
                                <div>İGA Fast Track</div>
                            </div>
                            <div className="perde"></div>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className="kart">
                            <img src={ulasimİmg} alt="" />
                            <div>
                                <div>Ulaşım</div>
                            </div>
                            <div className="perde"></div>
                        </div>
                    </SplideSlide>

                    <SplideSlide>
                        <div className="kart">
                            <img src={alisverisİmg} alt="" />
                            <div>
                                <div>Alışveriş</div>
                            </div>
                            <div className="perde"></div>
                        </div>
                    </SplideSlide>

                    <SplideSlide>
                        <div className="kart">
                            <img src={yemekİmg} alt="" />
                            <div>
                                <div>Yemek</div>
                            </div>
                            <div className="perde"></div>
                        </div>
                    </SplideSlide>

                    <SplideSlide>
                        <div className="kart">
                            <img src={kayipEsyaİmg} alt="" />
                            <div>
                                <div>Kayıp Eşya</div>
                            </div>
                            <div className="perde"></div>
                        </div>
                    </SplideSlide>

                    <SplideSlide>
                        <div className="kart">
                            <img src={igaPass} alt="" />
                            <div>
                                <div>İGA Pass</div>
                            </div>
                            <div className="perde"></div>
                        </div>
                    </SplideSlide>

                    <SplideSlide>
                        <div className="kart">
                            <img src={otelİmg} alt="" />
                            <div>
                                <div>Yotel</div>
                            </div>
                            <div className="perde"></div>
                        </div>
                    </SplideSlide>
                </SplideTrack>

                <div className="splide__arrows">
                    <div className="splide__arrows-container">
                        <button className="splide__arrow splide__arrow--prev onceki">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-arrow-left-short" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z" />
                            </svg>
                        </button>
                        <button className="splide__arrow splide__arrow--next sonraki">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                            </svg>
                        </button>
                    </div>
                </div>

            </Splide>
        </>
    );
}

export default SplideKart;