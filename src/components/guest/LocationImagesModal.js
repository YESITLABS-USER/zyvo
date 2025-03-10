import { Carousel, Modal } from "react-bootstrap";
import { imageBase } from "../../config/Constant";


const LocationImagesModal = ({ show, handleClose, images }) => {

    console.log("images in LocationImagesModal is", images);


    // return (
    //     <Modal show={show} onHide={handleClose} className="modal fade" id="loction-grid-popup">
    //         {/* <div className="modal-content">
    //             <button
    //                 type="button"
    //                 className="close"
    //                 data-bs-dismiss="modal"
    //                 aria-label="Close"
    //             >
    //                 <span aria-hidden="true">
    //                     <i className="fa-solid fa-arrow-left"></i>
    //                 </span>
    //             </button> */}
    //             <Modal.Body className="modal-body p-5 pb-0">
    //                 <div
    //                     id="carouselExampleIndicators"
    //                     className="carousel slide"
    //                     data-bs-ride="true"
    //                 >
    //                     <div className="carousel-indicators">
    //                         {
    //                             images.map((item,index)=>{
    //                                 <button
    //                                     type="button"
    //                                     data-bs-target="#carouselExampleIndicators"
    //                                     data-bs-slide-to={`${index}`}
    //                                     className={index==0 ? "active" : ""}
    //                                     aria-current={index==0 ? true : false}
    //                                     aria-label={`Slide ${index}`}
    //                                 ></button>
    //                             })
    //                         }
    //                         {/* <button
    //                             type="button"
    //                             data-bs-target="#carouselExampleIndicators"
    //                             data-bs-slide-to="0"
    //                             className="active"
    //                             aria-current="true"
    //                             aria-label="Slide 1"
    //                         ></button>
    //                         <button
    //                             type="button"
    //                             data-bs-target="#carouselExampleIndicators"
    //                             data-bs-slide-to="1"
    //                             aria-label="Slide 2"
    //                         ></button>
    //                         <button
    //                             type="button"
    //                             data-bs-target="#carouselExampleIndicators"
    //                             data-bs-slide-to="2"
    //                             aria-label="Slide 3"
    //                         ></button>
    //                         <button
    //                             type="button"
    //                             data-bs-target="#carouselExampleIndicators"
    //                             data-bs-slide-to="3"
    //                             aria-label="Slide 4"
    //                         ></button> */}
    //                     </div>
    //                     <div className="carousel-inner">
    //                         {images?.map((image, index) => (
    //                             <div key={index} className="carousel-item">
    //                                 <img
    //                                     src={`${imageBase}${image}`}
    //                                     className={index==0 ? "d-block w-100 active" : "d-block w-100"}
    //                                     alt="..."
    //                                 />
    //                             </div>
    //                         ))}
    //                         {/* <div className="carousel-item active">
    //                                 <img
    //                                     src="https://design.yilstaging.com/ZYVO/assets/images/location/modal-view.svg"
    //                                     className="d-block w-100"
    //                                     alt="..."
    //                                 />
    //                             </div>
    //                             <div className="carousel-item">
    //                                 <img
    //                                     src="https://design.yilstaging.com/ZYVO/assets/images/location/modal-view.svg"
    //                                     class="d-block w-100"
    //                                     alt="..."
    //                                 />
    //                             </div>
    //                             <div className="carousel-item">
    //                                 <img
    //                                     src="https://design.yilstaging.com/ZYVO/assets/images/location/modal-view.svg"
    //                                     className="d-block w-100"
    //                                     alt="..."
    //                                 />
    //                             </div>
    //                             <div className="carousel-item">
    //                                 <img
    //                                     src="https://design.yilstaging.com/ZYVO/assets/images/location/modal-view.svg"
    //                                     className="d-block w-100"
    //                                     alt="..."
    //                                 />
    //                             </div> */}
    //                     </div>
    //                     <button
    //                         className="carousel-control-prev"
    //                         type="button"
    //                         data-bs-target="#carouselExampleIndicators"
    //                         data-bs-slide="prev"
    //                     >
    //                         <span
    //                             className="carousel-control-prev-icon"
    //                             aria-hidden="true"
    //                         ></span>
    //                         <span className="visually-hidden">Previous</span>
    //                     </button>
    //                     <button
    //                         className="carousel-control-next"
    //                         type="button"
    //                         data-bs-target="#carouselExampleIndicators"
    //                         data-bs-slide="next"
    //                     >
    //                         <span
    //                             className="carousel-control-next-icon"
    //                             aria-hidden="true"
    //                         ></span>
    //                         <span className="visually-hidden">Next</span>
    //                     </button>
    //                 </div>
    //             </Modal.Body>
    //         {/* </div> */}
    //     </Modal >
    // );
    return (
        <Modal show={show} onHide={handleClose}  variant='light' className="location-popup">
            <div className="my-modal-boy">
                <Carousel interval={null} style={{}}>
                    {images?.map((img, index)=> (
                        <Carousel.Item   key={index} style={{textAlign:"center"}}>
                            <img src={`${imageBase}${img}`} style={{height:"455px", margin:"auto"}}/>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>
        </Modal>
    )
}

export default LocationImagesModal