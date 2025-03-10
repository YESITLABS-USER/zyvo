import { Modal } from "react-bootstrap";
import useCommon from "../../../hooks/useCommon";
import { useForm } from "react-hook-form";


const CreateNewWishlistModal = ({
    show,
    handleCreateModalClose,
    propertyId,
    userId
}) => {

    const {
        createNewWishlist
    } = useCommon();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        data.user_id = userId;
        data.property_id = propertyId;
        console.log("Form Data:", data);
        const submitResponse = await createNewWishlist(data);
        console.log("submit response is", submitResponse);
        // Handle form submission logic here (e.g., API call)
        handleCreateModalClose();
    };

    console.log("property id from create new wishlist is", propertyId);
    

    return (
        <>
            <Modal show={show} onHide={handleCreateModalClose}>
                <Modal.Header closeButton>
                    <Modal.Title className="w-100 text-center">Create Wishlist</Modal.Title>
                </Modal.Header>
                <Modal.Body className="create-wishlist-content">
                    <div className="modal-body px-4 py-4">
                        <form onSubmit={handleSubmit(onSubmit)} method="post">
                            <p>Please Enter the Name</p>
                            <label>
                                <input
                                    type="text"
                                    className="ps-3"
                                    placeholder="Name"
                                    {...register("name", { required: "Name is required" })}
                                />
                            </label>
                            {errors.name && <p className="error">{errors.name.message}</p>}

                            <textarea
                                placeholder="Description"
                                {...register("description", {
                                    required: "Description is required",
                                    maxLength: { value: 50, message: "Max 50 characters allowed" },
                                })}
                            />
                            {errors.description && <p className="error">{errors.description.message}</p>}

                            <p>Max 50 characters</p>

                            <div className="custom-modal-label d-flex gap-3">
                                <input type="submit" value="Create" data-bs-dismiss="modal" />
                                <input type="button" className="cancel-btn" value="Clear" onClick={() => reset()} />
                            </div>
                        </form>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )

}

export default CreateNewWishlistModal;