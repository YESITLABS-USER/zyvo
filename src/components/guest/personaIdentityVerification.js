import PersonaReact from 'persona-react';
import { useDispatch, useSelector } from 'react-redux';
import { closePersona } from '../../store/slices/profileSlice';
import { Modal } from 'react-bootstrap';
import { useEffect, useState } from 'react';

const InlineInquiry = () => {

    const showVerification = useSelector((state) => state.profile.showPersonaVerification);
    const dispatch = useDispatch();

    const [showVerificationModal, setShowVerificationModal] = useState(false);

    console.log("show verification is", showVerification, showVerificationModal);

    useEffect(()=>{
        setShowVerificationModal(showVerification);
    }, [showVerification])

    if (!showVerification) return null; // Don't render if not triggered 

    return (
        <Modal show={showVerificationModal} onHide={()=>{
            setShowVerificationModal(false);
            dispatch(closePersona());
        }}>
            <div>
                <PersonaReact
                    templateId='itmpl_Ygs16MKTkA6obnF8C3Rb17dm'
                    environment='sandbox'
                    onLoad={() => { console.log('Loaded inline'); }}
                    onComplete={({ inquiryId, status, fields }) => {
                        // Inquiry completed. Optionally tell your server about it.
                        console.log(`Sending finished inquiry ${inquiryId} to backend`, status);
                        dispatch(closePersona());
                    }}
                    onError={(error) => console.log("persona react error is",error)}
                />
            </div>
        </Modal>
        
    );
};

export default InlineInquiry;