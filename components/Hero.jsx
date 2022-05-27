const Hero = () => {
    return (
        <div>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100 courasel_image" src="https://i.ibb.co/s6XvjYy/slide1.png" alt="First slide " />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100 courasel_image" src="https://i.ibb.co/t3nJjPJ/slide2.png" alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100 courasel_image" src="https://i.ibb.co/GF9Xz77/slide3.png" alt="Third slide" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                    data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                    data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}

export default Hero;