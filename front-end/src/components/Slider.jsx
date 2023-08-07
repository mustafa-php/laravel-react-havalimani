import SliderResim1 from "./../resimler/istanbul.jpg";
import SliderResim2 from "./../resimler/aircraft-4885805.jpg";
import SliderResim3 from "./../resimler/airplane-4974678.jpg";

const Slider = () => {
    return (<>

        <div className="Slider">
            <div className="foto-container">
                <img src={SliderResim1} alt="" />
                <img src={SliderResim2} alt="" />
                <img src={SliderResim3} alt="" />
            </div>

            <button className="slider-geri">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-chevron-compact-left" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223z" />
                </svg>
            </button>
            <button className="slider-ileri">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-chevron-compact-right" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z" />
                </svg>
            </button>
        </div>

    </>);
}

export default Slider;