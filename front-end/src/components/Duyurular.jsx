
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Duyurular = () => {
    return (
        <>
            <div className="duyurular">
                <div className="duyurular-baslik">Duyurular</div>
                <OwlCarousel className='owl-theme' dots={false} items={5}>
                    <div className="duyuru item">
                        <div className="duyuru-baslik">Lorem ipsum dolor sit amet.</div>
                        <div className="duyuru-icerik">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Ad iste molestias voluptas a alias unde officia facilis! Cum, maiores molestias.
                        </div>
                    </div>
                    <div className="duyuru item">
                        <div className="duyuru-baslik">Lorem ipsum dolor sit amet.</div>
                        <div className="duyuru-icerik">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Ad iste molestias voluptas a alias unde officia facilis! Cum, maiores molestias.
                        </div>
                    </div>
                    <div className="duyuru item">
                        <div className="duyuru-baslik">Lorem ipsum dolor sit amet.</div>
                        <div className="duyuru-icerik">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Ad iste molestias voluptas a alias unde officia facilis! Cum, maiores molestias.
                        </div>
                    </div>
                    <div className="duyuru item">
                        <div className="duyuru-baslik">Lorem ipsum dolor sit amet.</div>
                        <div className="duyuru-icerik">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Ad iste molestias voluptas a alias unde officia facilis! Cum, maiores molestias.
                        </div>
                    </div>
                    <div className="duyuru item">
                        <div className="duyuru-baslik">Lorem ipsum dolor sit amet.</div>
                        <div className="duyuru-icerik">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Ad iste molestias voluptas a alias unde officia facilis! Cum, maiores molestias.
                        </div>
                    </div>
                    <div className="duyuru item">
                        <div className="duyuru-baslik">Lorem ipsum dolor sit amet.</div>
                        <div className="duyuru-icerik">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Ad iste molestias voluptas a alias unde officia facilis! Cum, maiores molestias.
                        </div>
                    </div>
                    <div className="duyuru item">
                        <div className="duyuru-baslik">Lorem ipsum dolor sit amet.</div>
                        <div className="duyuru-icerik">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Ad iste molestias voluptas a alias unde officia facilis! Cum, maiores molestias.
                        </div>
                    </div>
                    <div className="duyuru item">
                        <div className="duyuru-baslik">Lorem ipsum dolor sit amet.</div>
                        <div className="duyuru-icerik">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Ad iste molestias voluptas a alias unde officia facilis! Cum, maiores molestias.
                        </div>
                    </div>
                </OwlCarousel>
            </div>
        </>
    );
}

export default Duyurular;