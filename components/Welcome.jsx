import { Fade } from "react-reveal";
const Welcome = () => {
    return (
        <div>
            <div className="container new_section">
                <div className="text-center">
                    <h4 className="text-white">
                        <Fade top>
                            Welcome To
                        </Fade>
                    </h4>
                    <div className="display-2 text-primary mackondo">
                        <Fade top>
                            INDIAN GRILL ROOM
                        </Fade>
                    </div>
                    <div className=" text-white h4">
                        <Fade bottom>
                            Serving quality North Indian Food at the
                            heart of Gurugram
                        </Fade>
                    </div>
                    <div className="mt-4 ">
                        <button className="btn btn-primary me-4"> Book Table </button>
                        <button className="btn btn-outline-primary "> Order Online </button>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Welcome;