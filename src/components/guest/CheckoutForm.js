//
import React, { useState, useEffect } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import {
  Button,
  Card,
  Form,
  ListGroup,
  Container,
  Alert,
  Row,
  Col,
} from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";

import useCommon from "../../hooks/useCommon";
import { KEYS } from "../../config/Constant";
import Loader from "../Loader";

const CheckOutForm = ({ getStripId, getcard_id, selected }) => {
  console.log(selected, "sfasdhksadhlskkdjfsld");
  const stripe = useStripe();
  const elements = useElements();

  const userData = JSON.parse(localStorage.getItem(KEYS.USER_INFO));
  const userId = String(userData?.user_id);

  const {
    getAllSavedCard,
    saveCardStripe,
    setPrefferCard,
    getSavedAddress,
    isLoading,
  } = useCommon();
  const [showSavedCards, setShowSavedCards] = useState(true);
  const [showAddCardForm, setShowAddCardForm] = useState(false);
  const [savedCards, setSavedCards] = useState([]);
  const [isCardSave, setIsCardSaved] = useState(false);

  //   console.log(JSON.stringify(savedCards, null, 2), "savedCards");
  const [cardholderName, setCardholderName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [stripeToken, setStripeToken] = useState(null);
  const [isSameAsMailing, setIsSameAsMailing] = useState(false);
  const [savedAddress, setSavedAddress] = useState({});
  const [refresh, setRefresh] = useState(false);
  const [stripe_customer_id, setStripe_customer_id] = useState("");
  //
  const [selectedCardId, setSelectedCardId] = useState("");
  // Fetch saved cards when the component mounts
  useEffect(() => {
    const fetchSavedCards = async () => {
      try {
        const response = await getAllSavedCard({ user_id: userId });
        console.log(response, "response of saved cards");
        setSavedCards(response.data?.cards); // Assuming response.data contains an array of cards

        setStripe_customer_id(response.data?.stripe_customer_id);

        getStripId(response.data?.stripe_customer_id || stripe_customer_id);
        let findCardID = response.data?.cards;

        if (findCardID) {
          const preferredCard = findCardID.find((card) => card.is_preferred); // Find the preferred card

          if (preferredCard) {
            setSelectedCardId(preferredCard.card_id);
            getcard_id(preferredCard.card_id);
          }
        }
      } catch (error) {
        console.error("Error fetching saved cards:", error);
      }
    };

    fetchSavedCards();
  }, [refresh]);
  useEffect(() => {
    fetchAddress();
  }, []);
  //   useEffect(() => {
  //     const preferredCard = savedCards.find((card) => card.is_preferred);
  //     if (preferredCard) {
  //       setSelectedCardId(preferredCard.card_id);
  //       getcard_id(preferredCard?.card_id || selectedCardId);
  //     }
  //   }, [refresh]);

  const handleAddCard = async (event) => {
    event.preventDefault();
    setErrorMessage("");
    setIsCardSaved(true);
    if (!stripe || !elements) {
      setErrorMessage("Stripe has not loaded yet. Please try again.");
      return;
    }

    if (!cardholderName) {
      setErrorMessage("Please enter the cardholder name.");
      return;
    }
    const cardElement = elements.getElement(CardElement);
    const { error, token } = await stripe.createToken(cardElement, {
      name: cardholderName,
    });
    if (token) {
      //   getcard_id(token?.id);
      try {
        const response = await saveCardStripe({
          user_id: userId,
          token_stripe: token?.id,
        });
      } catch (error) {
        console.log(error, "shdkfhdkfhkdfhkfdhdkh");
      }
    }
    if (error) {
      setErrorMessage(error.message);
      setIsCardSaved(false);
    } else {
      setStripeToken(token.id);
      setSavedCards([
        ...savedCards,
        {
          id: token.id,
          last4: token.card.last4,
          brand: token.card.brand,
          exp: `${token.card.exp_month}/${token.card.exp_year}`,
          cvv: "***",
        },
      ]);
      setShowAddCardForm(false);
      setCardholderName("");
      setIsCardSaved(false);
    }
  };
  // set as a preffer

  const setAsPreffer = async (card) => {
    try {
      const response = await setPrefferCard({
        user_id: userId,
        card_id: card.card_id,
      });
      if (response) {
        console.log(response, "response of set preffer card");
        setRefresh((prev) => !prev);
      }
    } catch (error) {
      console.log(error, "set as a preffer card");
    }
  };

  const fetchAddress = async () => {
    try {
      const response = await getSavedAddress({ user_id: userId });
      console.log(response, "response of saved address");
      setSavedAddress(response.data); // Assuming response.data contains an array of cards
    } catch (error) {
      console.log(error);
    }
  };

  //

  return (
    <Container className="d-flex justify-content-center w-100">
      <Loader visible={isLoading} />
      <div style={{ width: "100%" }}>
        {/* Show Saved Cards Button */}
        {/* <Button
          variant="secondary"
          className="mb-3 w-100"
          onClick={() => setShowSavedCards(!showSavedCards)}
        >
          {showSavedCards ? "Hide Saved Cards" : "Show Saved Cards"}
        </Button> */}

        {/* Saved Cards Section */}
        {showSavedCards && (
          <Card className="p-3 shadow-sm w-100">
            <h5 className="mb-3">Saved Cards</h5>
            <ListGroup style={{ maxHeight: "200px", overflowY: "auto" }}>
              {savedCards.length > 0 ? (
                savedCards.map((card, _i) => (
                  <ListGroup.Item
                    key={_i}
                    className="d-flex justify-content-between align-items-center"
                    onClick={() => setAsPreffer(card)}
                  >
                    <div>
                      <strong>{card.brand}</strong> •••• {card.last4} <br />
                      <small>Exp: {card.exp} | CVV: ***</small>
                    </div>
                    {card?.is_preferred && (
                      <Button variant="outline-danger" size="sm">
                        Preferred
                      </Button>
                    )}
                  </ListGroup.Item>
                ))
              ) : (
                <p>No saved cards.</p>
              )}
            </ListGroup>

            {/* Add Card Button */}
            <Button
              variant="outline-primary"
              className="w-100 mb-3"
              onClick={() => setShowAddCardForm(!showAddCardForm)}
            >
              {showAddCardForm ? "Cancel" : "Add New Card"}
            </Button>

            {showAddCardForm && (
              <Container className="border">
                <Loader visible={isCardSave} />
                <Form onSubmit={handleAddCard}>
                  {errorMessage && (
                    <Alert variant="danger">{errorMessage}</Alert>
                  )}

                  <Form.Group className="mb-3">
                    <Form.Label>Cardholder Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="John Doe"
                      value={cardholderName}
                      onChange={(e) => setCardholderName(e.target.value)}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Card Details</Form.Label>
                    <div className="border p-2 rounded">
                      <CardElement options={{ hidePostalCode: true }} />
                    </div>
                  </Form.Group>

                  <Row className="mt-4">
                    <Col>
                      <h5>Add Billing Address</h5>
                      <Row className="align-items-center">
                        <Col xs="auto">
                          <Form.Check
                            type="checkbox"
                            id="sameAsMailing"
                            checked={isSameAsMailing}
                            onChange={(e) =>
                              setIsSameAsMailing(e.target.checked)
                            }
                          />
                        </Col>
                        <Col>
                          <Form.Label
                            htmlFor="sameAsMailing"
                            className="mb-0 fw-semibold"
                          >
                            Same as Mailing Address
                          </Form.Label>
                        </Col>
                      </Row>

                      <Row className="mt-2">
                        <Col>
                          <p className="mb-1">{savedAddress?.street_address}</p>
                          <p className="mb-1">{savedAddress?.city}</p>
                          <p className="mb-3">{savedAddress?.state}</p>
                          {/* Added spacing for button */}
                        </Col>
                      </Row>

                      <Button type="submit" variant="success" className="w-100">
                        Submit
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Container>
            )}
          </Card>
        )}
      </div>
    </Container>
  );
};

export default CheckOutForm;
