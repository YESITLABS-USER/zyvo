import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { FaPlus, FaTrash } from "react-icons/fa";

const ItemSelector = ({ onItemsUpdate, propertyData }) => {
  const itemsList = [
    "Computer Screen",
    "Studio Lights",
    "Projectors",
    "Speakers",
    "Microphones",
    "Sounds Systems",
    "DJ Equipment",
    "Tables",
    "Chairs",
    "Stage PlaMorms",
    "Art Supplies (Paint, brushes)",
    "Art Supplies (Paint, brushes)",
    "Allow Alcohol",
    "Onsite Food Prep (Event)",
    "Extra Person above Max Capacity",
    "Photographer (Per Hour)",
    "Videographer (Per Hour)",
  ];

  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [price, setPrice] = useState("");
  const [addedItems, setAddedItems] = useState(
    propertyData?.add_ons != null && Array.isArray(propertyData.add_ons)
      ? propertyData.add_ons
      : []
  ); // Stores selected items [{ item: "", price: "" }]

  // Update parent when state changes
  const updateParent = (newItems) => {
    setAddedItems(newItems);
    onItemsUpdate && onItemsUpdate(newItems); // Call parent function if provided
  };

  // Handle adding selected item
  const handleAddItem = () => {
    if (selectedItem && price) {
      const newItems = [...addedItems, { name: selectedItem, price }];
      updateParent(newItems);
      setSelectedItem(null);
      setPrice("");
      setShowModal(false);
    }
  };

  // Handle deleting an item
  const handleDeleteItem = (index) => {
    const newItems = addedItems.filter((_, i) => i !== index);
    updateParent(newItems);
  };

  return (
    <div>
      {/* Dynamically Added Items */}
      {addedItems.map((entry, index) => (
        <div key={index} className="d-flex align-items-center gap-2 mb-2">
          <span className="fw-bold">
            {entry.name} - ${entry.price}{" "}
            {/* Fix: Change entry.item to entry.name */}
          </span>
          <Button
            variant="danger"
            size="sm"
            onClick={() => handleDeleteItem(index)}
          >
            <FaTrash />
          </Button>
        </div>
      ))}

      {/* Show "Add New" Button if items are fewer than 2 */}
      {addedItems.length < 2 && (
        <Button
          variant="light"
          onClick={() => setShowModal(true)}
          style={{ border: "1px solid inherit", borderRadius: "30px" }}
        >
          <FaPlus /> Add New
        </Button>
      )}

      {/* Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Select an Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* List of Items */}
          <div className="mb-3">
            {itemsList.map((item, index) => (
              <Button
                key={index}
                variant={
                  selectedItem === item ? "primary" : "outline-secondary"
                }
                className="d-block w-100 mb-2"
                onClick={() => setSelectedItem(item)}
              >
                {item}
              </Button>
            ))}
          </div>

          {/* Show Selected Item Above Price Input */}
          {selectedItem && (
            <div className="alert alert-info text-center py-2">
              Selected Item: <strong>{selectedItem}</strong>
            </div>
          )}

          {/* Price Input */}
          <Form.Group>
            <Form.Label>Enter Price</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </Form.Group>
        </Modal.Body>

        {/* Add Button */}
        <Modal.Footer>
          <Button
            variant="success"
            onClick={handleAddItem}
            disabled={!selectedItem || !price}
          >
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ItemSelector;
