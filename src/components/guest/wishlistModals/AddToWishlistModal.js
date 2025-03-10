import { Button, Card, Col, Modal, Row } from "react-bootstrap";
import useCommon from "../../../hooks/useCommon";
import CreateNewWishlistModal from "./CreateNewWishlistModal";
import { useState } from "react";


const AddToWishlistModal = ({
    showAddWishlistModal,
    handleClose,
    wishlistArr,
    propertyId,
    userId
}) => {

    const {
        saveItemInWishlist
    } = useCommon();

    const [showCreateWishlistModal, setShowCreateWishlistModal] = useState(false);
    const [selectedPropertyId, setSelectedPropertyId] = useState(propertyId);

    console.log("wishlistArr is", wishlistArr);
    console.log("property id from add to wishlist is", propertyId);
    return (
        <div >
            <Modal show={showAddWishlistModal} onHide={handleClose} id="add-wishlist" style={{
                boxShadow: '10px',
                border: '1px solid #000000',
                borderRadius: '20px',
            }}>

                <Modal.Header closeButton>
                    <Modal.Title className="w-100" style={{
                        textAlign: "center"
                    }}>Add To Wishlist</Modal.Title>
                </Modal.Header>
                <Modal.Body className="modal-body px-4 py-4">
                    <Row className="g-4" xs={1} sm={2} md={2} lg={2} >
                        {wishlistArr?.map((item, index) => (
                            <Col key={index} className="d-flex align-items-stretch" style={{ width:'49%', boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.2)', margin:'2px', padding: '2px', borderRadius: '15px' }}>
                                <Card className="border-0 shadow-sm rounded w-100" style={{ height: "100%" }}>
                                    <Card.Img
                                        variant="top"
                                        src={`https://zyvo.tgastaging.com/${item.last_saved_property_image}`}
                                        alt="Wishlist Item"
                                        className="rounded-top"
                                        style={{ objectFit: 'cover', height: '180px', width:'100%' }}
                                    />
                                    <Card.Body className="text-center d-flex flex-column justify-content-between">
                                        <div>
                                            <Card.Title className="text-truncate" style={{ maxWidth: '100%' }}>
                                                {item?.wishlist_name}
                                            </Card.Title>
                                            <Card.Text className="text-muted small">
                                                {item?.items_in_wishlist} saved
                                            </Card.Text>
                                        </div>
                                        <Button
                                            variant="link"
                                            className="text-decoration-none text-primary mt-2"
                                            onClick={() => {
                                                saveItemInWishlist({
                                                    user_id: userId,
                                                    property_id: propertyId,
                                                    wishlist_id: item?.wishlist_id,
                                                });
                                                handleClose();
                                            }}
                                        >
                                            Select Wishlist
                                        </Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                    <Row className="d-flex justify-content-center m-4 ml-4">
                        <Col xs={12} className="d-flex " style={{ justifyContent: 'center' }}>
                            <Button
                                variant="primary"
                                onClick={() => {
                                    setSelectedPropertyId(propertyId);
                                    handleClose();
                                    setShowCreateWishlistModal(true);
                                }}
                            >
                                Create Wishlist
                            </Button>
                        </Col>
                    </Row>
                </Modal.Body>
            </Modal>
            <CreateNewWishlistModal
                show={showCreateWishlistModal}
                handleCreateModalClose={() => setShowCreateWishlistModal(false)}
                propertyId={selectedPropertyId}
                userId="1"
            />
        </div>
    )

}

export default AddToWishlistModal;