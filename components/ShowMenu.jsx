import { Rotate } from "react-reveal";
const ShowMenu = () => {
    return (
        <div>

            <div className="container new_section">
                <div className="row">
                    <div className="col-lg-6 d-flex flex-column justify-content-center">
                        <div className="display-3 mackondo text-primary text-lg-start text-center line-height">

                            <Rotate left>
                                EXOTIC NORTH INDIAN MENU
                            </Rotate>

                        </div>
                        <div className="h4 text-lg-start text-center fw-light">
                            <Rotate left>
                                Quality North Indian Cuisine , cooked and served with love , a menu that will water your mouth !
                            </Rotate>
                        </div>
                        <div className="mt-4 text-lg-start text-center mb-5 mb-lg-0">
                            <button className="btn btn-outline-primary">

                                Explore Menu
                            </button>
                        </div>
                    </div>
                    <div className="col-lg-6 d-flex justify-content-center">
                            <Rotate right>
                            <img className="img-fluid" src="https://i.ibb.co/DMqKw1N/mocktail.png" alt="mocktail"
                            border="0" />
                            </Rotate>

                    </div>
                </div>
            </div>

        </div>
    );
}
export default ShowMenu;