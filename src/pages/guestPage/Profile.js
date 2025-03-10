import React, { useState, useEffect } from "react";
import Header from "../../components/guest/Header";
import Footer from "../../components/guest/Footer";
import AuthModal from "../../components/guest/authModal";
import { useDispatch, useSelector } from "react-redux";
import useProfile from "../../hooks/useProfile";
import Autocomplete from "react-google-autocomplete";
import { GOOGLE_KEY } from "../../config/Constant";
import ForgotWithEmail from "../../components/guest/authProfileModals/EmailVerification";
import PhoneVerification from "../../components/guest/authProfileModals/PhoneVerification";
import ChangePassword from "../../components/guest/authProfileModals/ChangePassword";
import Modal from "react-bootstrap/Modal"
import { InlineInquiry } from "../../components/guest/personaIdentityVerification";
import { openPersona } from "../../store/slices/profileSlice";

const availableLanguages = [
  "English",
  "Spanish",
  "French",
  "German",
  "Italian",
  "Portuguese",
  "Dutch",
  "Russian",
  "Ukrainian",
  "Polish",
  "Turkish",
  "Greek",
  "Hungarian",
  "Romanian",
  "Mandarin Chinese",
  "Cantonese",
  "Japanese",
  "Korean",
  "Vietnamese",
  "Thai",
  "Hindi",
  "Bengali",
  "Urdu",
  "Punjabi",
  "Marathi",
  "Tamil",
  "Telugu",
  "Arabic",
  "Persian (Farsi)",
  "Hebrew",
  "Pashto",
  "Kurdish",
  "Swahili",
  "Hausa",
  "Yoruba",
  "Igbo",
  "Zulu",
  "Amharic",
  "Tagalog",
  "Malay",
  "Indonesian",
  "Burmese",
  "Khmer",
  "Lao",
];

function Profile() {
  const {
    getUserProfile,
    addHobby,
    deleteHobby,
    addPet,
    deletePet,
    addWork,
    deleteWork,
    deleteLanguage,
    addLanguage,
    addPlace,
    deletePlace,
    addAboutMe,
    addName,
    addStreet,
    addCity,
    addState,
    addZip
  } = useProfile();
  const profileData = useSelector((state) => state.profile);
  console.log(profileData, "profile data ****");
  const dispatch = useDispatch()

  console.log("profileData?.about_me", profileData?.profileData?.about_me);

  const [aboutMe, setAboutMe] = useState(profileData?.profileData?.about_me);
  const [isAddingAboutMe, setIsAddingAboutMe] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isAddingName, setIsAddingName] = useState(false);

  // const [hobbies, setHobbies] = useState([]);
  // const [newHobby, setNewHobby] = useState("");
  // const [editingIndex, setEditingIndex] = useState(null);
  // const [isAdding, setIsAdding] = useState(false);

  const [hobbies, setHobbies] = useState([]);
  const [pets, setPets] = useState([]);
  const [works, setWorks] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [places, setPlaces] = useState([]);
  const [editingIndex, setEditingIndex] = useState({ type: null, index: null });

  const [newHobby, setNewHobby] = useState("");
  const [isAddingHobby, setIsAddingHobby] = useState(false);

  const [newPet, setNewPet] = useState("");
  const [isAddingPet, setIsAddingPet] = useState(false);

  const [newWork, setNewWork] = useState("");
  const [isAddingWork, setIsAddingWork] = useState(false);

  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [isAddingLanguage, setIsAddingLanguage] = useState(false);

  const [selectedPlace, setSelectedPlace] = useState("");
  const [isAddingPlace, setIsAddingPlace] = useState(false);

  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");

  const [isAddingStreet, setIsAddingStreet] = useState(false);
  const [isAddingCity, setIsAddingCity] = useState(false);
  const [isAddingState, setIsAddingState] = useState(false);
  const [isAddingZip, setIsAddingZip] = useState(false);

  const [verifyEmailModal, setVerifyEmailModal] = useState(false);
  const [verifyPhoneModal, setVerifyPhoneModal] = useState(false);

  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [showChangePasswordModal, setShowChangePasswordModal] = useState(false); 

  // modal 422
  const [showFileUploadModal, setShowFileUploadModal] = useState(false)
  const [preview, setPreview] = useState(null);
   const [file, setFile] = useState(null);

  //  verified
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [isPhoneVerified, setIsPhoneVerified] = useState(false);
  const [isIdentityVerified, setIsIdentityVerified] = useState(false);


  useEffect(() => {
    const handleGetProfile = async () => {
      try {
        const res = await getUserProfile({ user_id: "1" });
        console.log(res, "handle get profile");
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };

    handleGetProfile();
  }, []);

  useEffect(() => {
    if (profileData?.profileData?.first_name) {
      setFirstName(profileData?.profileData?.first_name);
    }
    if (profileData?.profileData?.last_name) {
      setLastName(profileData?.profileData?.last_name);
    }
    if (profileData?.profileData?.about_me) {
      setAboutMe(profileData.profileData.about_me);
    }
    if (profileData?.profileData?.hobbies) {
      setHobbies(profileData.profileData.hobbies);
    }
    if (profileData?.profileData?.pets) {
      setPets(profileData.profileData.pets);
    }
    if (profileData?.profileData?.my_work) {
      setWorks(profileData.profileData.my_work);
    }
    if (profileData?.profileData?.languages) {
      setLanguages(profileData.profileData.languages);
    }
    if (profileData?.profileData?.where_live) {
      setPlaces(profileData.profileData.where_live);
    }
    if (profileData?.profileData?.street) {
      setStreetAddress(profileData.profileData.street);
    }
    if (profileData?.profileData?.city) {
      setCity(profileData.profileData.city);
    }
    if (profileData?.profileData?.state) {
      setState(profileData.profileData.state);
    }
    if (profileData?.profileData?.zip_code) {
      setZipCode(profileData.profileData.zip_code);
    }

    if (profileData?.profileData?.email) {
      setEmail(profileData.profileData.email);
    }

    if (profileData?.profileData?.phone_number) {
      setPhoneNumber(profileData.profileData.phone_number);
    }

    // verification..
    if(profileData?.profileData?.email_verified){
      setIsEmailVerified(true)
    }

    if(profileData?.profileData?.phone_verified){
      setIsPhoneVerified(true)
    }

    if(profileData?.profileData?.identity_verified){
      setIsIdentityVerified(true)
    }
  }, [profileData?.profileData]);

  const handleAboutMeSubmit = async () => {
    if (isAddingAboutMe) {
      await addAboutMe({ user_id: "1", about_me: aboutMe });
      setIsAddingAboutMe(false);
    } else {
      setIsAddingAboutMe(true);
    }
  };

  const handleNameSubmit = async () => {
    if (isAddingName) {
      await addName({
        user_id: "1",
        first_name: firstName,
        last_name: lastName,
      });
      setIsAddingName(false);
    }
  };

  // Handle edit
  const handleEdit = (type, index, value) => {
    if (type === "hobby") {
      const updatedList = [...hobbies];
      updatedList[index] = value;
      setHobbies(updatedList);
    }
    if (type === "pet") {
      const updatedList = [...pets];
      updatedList[index] = value;
      setPets(updatedList);
    }
    if (type === "work") {
      const updatedList = [...works];
      updatedList[index] = value;
      setWorks(updatedList);
    }
    setEditingIndex({ type, index });
  };

  // Handle update
  const handleUpdate = async (type, index) => {
    if (type === "hobby") {
      await addHobby({ user_id: "1", index, hobby_name: hobbies[index] });
    }
    if (type === "pet") {
      await addPet({ user_id: "1", index, pet_name: pets[index] });
    }
    if (type === "work") {
      await addWork({ user_id: "1", index, work_name: works[index] });
    }
    setEditingIndex({ type: null, index: null });
  };

  // Handle delete
  const handleDelete = async (type, index) => {
    if (type === "hobby") {
      await deleteHobby({ user_id: "1", index }); // Call API action
      setHobbies(hobbies.filter((_, i) => i !== index));
    }
    if (type === "pet") {
      await deletePet({ user_id: "1", index });
      setPets(pets.filter((_, i) => i !== index));
    }
    if (type === "work") {
      await deleteWork({ user_id: "1", index });
      setWorks(works.filter((_, i) => i !== index));
    }
    if (type === "language") {
      await deleteLanguage({ user_id: "1", index });
      setLanguages(languages.filter((_, i) => i !== index));
    }
    if (type === "place") {
      await deletePlace({ user_id: "1", index });
      setLanguages(places.filter((_, i) => i !== index));
    }
  };

  // Handle add
  const handleAdd = async (type) => {
    if (type === "hobby" && newHobby.trim()) {
      await addHobby({ user_id: "1", hobby_name: newHobby }); // Call API action
      setHobbies([...hobbies, newHobby]);
      setNewHobby("");
      setIsAddingHobby(false);
    }
    if (type === "pet" && newPet.trim()) {
      await addPet({ user_id: "1", pet_name: newPet }); // Call API action
      setPets([...pets, newPet]);
      setNewPet("");
      setIsAddingPet(false);
    }
    if (type === "work" && newWork.trim()) {
      await addWork({ user_id: "1", work_name: newWork }); // Call API action
      setWorks([...works, newWork]);
      setNewWork("");
      setIsAddingWork(false);
    }
    if (
      type === "language" &&
      selectedLanguage &&
      !languages.includes(selectedLanguage)
    ) {
      await addLanguage({ user_id: "1", language_name: selectedLanguage });
      setLanguages([...languages, selectedLanguage]);
      setSelectedLanguage("");
      setIsAddingLanguage(false);
    }
    if (type === "place") {
      await addPlace({ user_id: "1", place_name: selectedPlace });
      setPlaces([...places, selectedPlace]);
      setSelectedPlace("");
      setIsAddingPlace(false);
    }
  };

  const handleAddressSubmit = async (type) => {
    if (type == "street") {
      if (isAddingStreet) {
        await addStreet({ user_id: "1", street_address: streetAddress })
        setIsAddingStreet(false);
      } else {
        setIsAddingStreet(true);
      }
    }
    if (type == "city") {
      if (isAddingCity) {
        await addCity({ user_id: "1", city })
        setIsAddingCity(false);
      } else {
        setIsAddingCity(true);
      }
    }
    if (type == "state") {
      if (isAddingState) {
        await addState({ user_id: "1", state })
        setIsAddingState(false);
      } else {
        setIsAddingState(true);
      }
    }
    if (type == "zip") {
      if (isAddingZip) {
        await addZip({ user_id: "1", zip_code: zipCode })
        setIsAddingZip(false);
      } else {
        setIsAddingZip(true);
      }
    }
  }

  const maskPhoneNumber = (phone) => {
    if (!phone) return "";
    return phone.replace(/\d(?=\d{4})/g, "*");
  };


  // file change....

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file)); // Preview selected image
    }
    setFile(file);
    setShowFileUploadModal(false);
  };
  return (
    <>
      <Header />

      <main>
        {/* <!-- MOBILE --> */}
        <div className="mob-search-filter border-start-0 border-end-0">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <div className="mob-search-filter-in">
                  <div className="mob-search-in">
                    <ul>
                      <li>
                        <a href="mob-src-filter.html">Where</a>
                      </li>
                      <li>
                        <a
                          className="mob-search-in-time"
                          href="mob-src-filter.html"
                        >
                          Time
                        </a>
                      </li>
                      <li>
                        <a href="mob-src-filter.html">Activity</a>
                      </li>
                    </ul>
                    <a href="mob-src-filter.html" className="mob-search-button">
                      <i className="fa-regular fa-magnifying-glass"></i>
                    </a>
                  </div>
                  <div className="mob-filter-in">
                    <a href="mob-filter.html">
                      <img
                        src="https://design.yilstaging.com/ZYVO/assets/images/mobile/filters/filter.svg"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- MOBILE --> */}

        <div className="complete-your-profile">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="complete-your-profile-right">
                  <div className="complete-your-profile-right-top">
                    <div className="user-profile-upload-name">
                      <div className="user-profile-upload">
                        <div className="user-profile-upload-image">
                          <img
                            src={preview || "https://design.yilstaging.com/ZYVO/assets/images/create-profile/profile.png"}
                            alt=""
                          />
                        </div>
                        <button
                          type="button"
                          //change.....
                          onClick={()=>setShowFileUploadModal(true)}
                        >
                          <i className="fa-solid fa-pen"></i>
                        </button>
                      </div>
                      <div className="user-profile-name">
                        <h2>
                          Hey Katelyn!
                          <button type="button">
                            <i className="fa-solid fa-pen"></i>
                          </button>
                              {/* change... 483 */}
                          {/* <span className="user-name-dropdown">
                            <form>

                              <label>
                                <input type="text" placeholder="First name*" />
                                <input type="text" placeholder="Last name*" />
                              </label>
                              <input type="submit" value="Save Changes" />
                            </form>
                          </span> */}
                        </h2>
                        <p>
                          {" "}
                          Guest
                          <span className="info-wrap">
                            <img
                              src="https://design.yilstaging.com/ZYVO/assets/images/create-profile/info.svg"
                              alt=""
                            />
                            <span className="info-in">
                              Before you can book or host on the platform the
                              name on Id must match verification documents.
                            </span>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="complete-your-profile-right-bottom">
                    <div className="complete-your-profile-right-bottom-in">
                      <div className="complete-your-profile-right-bottom-image">
                        <img
                          src="https://design.yilstaging.com/ZYVO/assets/images/create-profile/mail.svg"
                          alt=""
                        />
                      </div>
                      <div className="complete-your-profile-right-bottom-data">
                        <h1>Email Address</h1>
                        {/* change... */}
                        {
                          isEmailVerified ? (
                            <p>
                              Verified <i className="fa-solid fa-badge-check"></i>
                            </p>
                          ) : (
                            <a onClick={() => setVerifyEmailModal(true)} style={{ cursor: "pointer" }}>
                              <u>Confirm now</u>
                            </a>
                          )
                        }

                        {/* <!-- <a data-bs-toggle="modal"
                      data-bs-target="#confirm-email-popup"><u>Confirm now</u></a> --> */}
                      </div>
                    </div>
                    <div className="complete-your-profile-right-bottom-in">
                      <div className="complete-your-profile-right-bottom-image">
                        <img
                          src="https://design.yilstaging.com/ZYVO/assets/images/create-profile/call.svg"
                          alt=""
                        />
                      </div>
                      <div className="complete-your-profile-right-bottom-data">
                        <h1>Phone Number</h1>
                        {/* change.. */}
                        {
                          isPhoneVerified ? (
                            <p>
                              Verified <i className="fa-solid fa-badge-check"></i>
                            </p>
                          ) : (
                            <a onClick={() => setVerifyPhoneModal(true)} style={{ cursor: "pointer" }}>
                              <u>Confirm now</u>
                            </a>
                          )
                        }
                        {/* <!-- <a data-bs-toggle="modal"
                      data-bs-target="#confirm-phone-popup"><u>Confirm now</u></a> --> */}
                      </div>
                    </div>
                    <div className="complete-your-profile-right-bottom-in">
                      <div className="complete-your-profile-right-bottom-image">
                        <img
                          src="https://design.yilstaging.com/ZYVO/assets/images/create-profile/identity.svg"
                          alt=""
                        />
                      </div>
                      <div className="complete-your-profile-right-bottom-data">
                        <h1>Verify identity</h1>
                        {/* change... */}
                        {
                          isIdentityVerified ? (
                            <p>
                              Verified <i className="fa-solid fa-badge-check"></i>
                            </p>
                          ) : (
                            <a style={{ cursor: "pointer" }} onClick={()=>dispatch(openPersona())}>
                              <u>Confirm now</u>
                            </a>
                          )
                        }
                        {/* <!-- <a><u>Confirm now</u></a> --> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-8 col-md-6 order-lg-first">
                <div className="complete-your-profile-left">
                  <form action="">
                    <h2>
                      About Me{" "}
                      <button
                        type="button"
                        className={`${isAddingAboutMe ? "check" : ""}`}
                        onClick={handleAboutMeSubmit}
                      >
                        <i
                          className={`fa-solid ${isAddingAboutMe ? "fa-check" : "fa-pen"
                            }`}
                        ></i>
                      </button>
                    </h2>
                    <div className="about-me">
                      <textarea
                        value={aboutMe}
                        onChange={(e) => setAboutMe(e.target.value)}
                        disabled={!isAddingAboutMe}
                      />
                      {/* </textarea> */}
                    </div>
                    <div className="user-data-list-wrap">
                      <h2>Where I live*</h2>
                      <div className="user-data-list-inner">
                        {places.map((location, index) => (
                          <div key={index} className="user-data-list-item">
                            <input
                              type="text"
                              placeholder="New York, US"
                              id="where-search"
                              value={location}
                              disabled
                            />
                            <button
                              type="button"
                              onClick={() => handleDelete("place", index)}
                            >
                              <i className="fa-solid fa-xmark"></i>
                            </button>
                            <div className="user-data-list-dropdown">
                              <ul>
                                <li className="where-src-item">
                                  <a>
                                    <img
                                      src="https://design.yilstaging.com/ZYVO/assets/images/filters/where-icons.svg"
                                      alt=""
                                    />
                                    Alaska, US
                                  </a>
                                </li>
                                <li className="where-src-item">
                                  <a>
                                    <img
                                      src="https://design.yilstaging.com/ZYVO/assets/images/filters/where-icons.svg"
                                      alt=""
                                    />
                                    California, US
                                  </a>
                                </li>
                                <li className="where-src-item">
                                  <a>
                                    <img
                                      src="https://design.yilstaging.com/ZYVO/assets/images/filters/where-icons.svg"
                                      alt=""
                                    />
                                    Delaware, US
                                  </a>
                                </li>
                                <li className="where-src-item">
                                  <a>
                                    <img
                                      src="https://design.yilstaging.com/ZYVO/assets/images/filters/where-icons.svg"
                                      alt=""
                                    />
                                    Florida, US
                                  </a>
                                </li>
                                <li className="where-src-item">
                                  <a>
                                    <img
                                      src="https://design.yilstaging.com/ZYVO/assets/images/filters/where-icons.svg"
                                      alt=""
                                    />
                                    New York, US
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        ))}
                        {/* Autocomplete Input for Adding New Location */}
                        {isAddingPlace && (
                          <div className="user-data-list-item">
                            <Autocomplete
                              apiKey={GOOGLE_KEY}
                              onPlaceSelected={(place) =>
                                setSelectedPlace(place.formatted_address)
                              }
                              options={{
                                types: ["(cities)"],
                              }}
                              placeholder="Search for a place..."
                              className="google-autocomplete"
                            />
                            {/* Check Icon: Save Location */}
                            {selectedPlace && (
                              <button
                                type="button"
                                className="check"
                                onClick={() => handleAdd("place")}
                              >
                                <i className="fa-solid fa-check"></i>
                              </button>
                            )}
                            {/* Cancel Icon: Close Input */}
                            {!selectedPlace && (
                              <button
                                type="button"
                                onClick={() => setIsAddingPlace(false)}
                              >
                                <i className="fa-solid fa-xmark"></i>
                              </button>
                            )}
                          </div>
                        )}
                        {!isAddingPlace && places.length <= 1 && (
                          <button
                            type="button"
                            className="add-new-btn"
                            onClick={() => setIsAddingPlace(true)}
                          >
                            Add New <i className="fa-solid fa-plus"></i>
                          </button>
                        )}
                        {/* <button type="button" className="add-new-btn">
                          Add New <i className="fa-solid fa-plus"></i>
                        </button> */}
                      </div>
                      <h2>My work</h2>
                      <div className="user-data-list-inner">
                        {works.map((work, index) => (
                          <div
                            className="user-data-list-item my-work"
                            key={`${index}`}
                          >
                            <input
                              type="text"
                              placeholder="Lawyer"
                              value={work}
                              onChange={(e) =>
                                handleEdit("work", index, e.target.value)
                              }
                            />
                            <button
                              type="button"
                              className={`${editingIndex.type === "work" &&
                                  editingIndex.index === index
                                  ? "check"
                                  : "icon-btn"
                                }`}
                              onClick={() =>
                                editingIndex.type === "work" &&
                                  editingIndex.index === index
                                  ? handleUpdate("work", index)
                                  : handleDelete("work", index)
                              }
                            >
                              <i
                                className={`fa-solid ${editingIndex.type === "work" &&
                                    editingIndex.index === index
                                    ? "fa-check"
                                    : "fa-xmark"
                                  }`}
                              ></i>
                            </button>
                            <div className="user-data-list-dropdown">
                              <ul>
                                <li className="where-src-item">
                                  <a>
                                    <img
                                      src="https://design.yilstaging.com/ZYVO/assets/images/create-profile/list-icons/work.svg"
                                      alt=""
                                    />
                                    Lawyer
                                  </a>
                                </li>
                                <li className="where-src-item">
                                  <a>
                                    <img
                                      src="https://design.yilstaging.com/ZYVO/assets/images/create-profile/list-icons/work.svg"
                                      alt=""
                                    />
                                    Lawyer
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        ))}
                        {isAddingWork && (
                          <div className="user-data-list-item my-work">
                            <input
                              type="text"
                              value={newWork}
                              onChange={(e) => setNewWork(e.target.value)}
                            />
                            {newWork !== "" && (
                              <button
                                type="button"
                                className="icon-btn"
                                onClick={() => handleAdd("work")}
                              >
                                <i className="fa-solid fa-check"></i>
                              </button>
                            )}
                            {newWork == "" && (
                              <button
                                type="button"
                                className="icon-btn"
                                onClick={() => setIsAddingWork(false)}
                              >
                                <i className="fa-solid fa-xmark"></i>
                              </button>
                            )}
                          </div>
                        )}
                        {!isAddingWork && works.length <= 1 && (
                          <button
                            type="button"
                            className="add-new-btn"
                            onClick={() => setIsAddingWork(true)}
                          >
                            Add New <i className="fa-solid fa-plus"></i>
                          </button>
                        )}
                        {/* <button type="button" className="add-new-btn">
                          Add New <i className="fa-solid fa-plus"></i>
                        </button> */}
                      </div>
                      <h2>Languages I speak*</h2>
                      <div className="user-data-list-inner">
                        {languages.map((language, index) => (
                          <div
                            className="user-data-list-item languages"
                            key={index}
                          >
                            <input type="text" value={language} readOnly />
                            <button
                              type="button"
                              onClick={() => handleDelete("language", index)}
                            >
                              <i className="fa-solid fa-xmark"></i>
                            </button>
                            <div className="user-data-list-dropdown">
                              <ul>
                                <li className="where-src-item">
                                  <a>
                                    <img
                                      src="https://design.yilstaging.com/ZYVO/assets/images/create-profile/list-icons/languages.svg"
                                      alt=""
                                    />
                                    English
                                  </a>
                                </li>
                                <li className="where-src-item">
                                  <a>
                                    <img
                                      src="https://design.yilstaging.com/ZYVO/assets/images/create-profile/list-icons/languages.svg"
                                      alt=""
                                    />
                                    English
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        ))}
                        {isAddingLanguage && (
                          <div className="user-data-list-item languages">
                            <select
                              value={selectedLanguage}
                              onChange={(e) =>
                                setSelectedLanguage(e.target.value)
                              }
                            >
                              <option value="">Select a language</option>
                              {availableLanguages.map((lang, index) => (
                                <option
                                  key={index}
                                  value={lang}
                                  disabled={languages.includes(lang)}
                                >
                                  {lang}
                                </option>
                              ))}
                            </select>
                            {selectedLanguage !== "" && (
                              <button
                                type="button"
                                className="check"
                                onClick={() => handleAdd("language")}
                              >
                                <i className="fa-solid fa-check"></i>
                              </button>
                            )}
                            {selectedLanguage == "" && (
                              <button
                                type="button"
                                className="icon-btn"
                                onClick={() => setIsAddingLanguage(false)}
                              >
                                <i className="fa-solid fa-xmark"></i>
                              </button>
                            )}
                          </div>
                        )}
                        {!isAddingLanguage && languages.length <= 1 && (
                          <button
                            type="button"
                            className="add-new-btn"
                            onClick={() => setIsAddingLanguage(true)}
                          >
                            Add New <i className="fa-solid fa-plus"></i>
                          </button>
                        )}
                        {/* <button type="button" className="add-new-btn">
                          Add New <i className="fa-solid fa-plus"></i>
                        </button> */}
                      </div>
                      <h2>Hobbies</h2>
                      <div className="user-data-list-inner">
                        {hobbies.map((hobby, index) => (
                          <div
                            key={index}
                            className="user-data-list-item hobbies"
                          >
                            <input
                              type="text"
                              value={hobbies[index]}
                              onChange={(e) =>
                                handleEdit("hobby", index, e.target.value)
                              }
                              placeholder="Hobbies"
                            />
                            <button
                              type="button"
                              onClick={() =>
                                editingIndex.type === "hobby" &&
                                  editingIndex.index === index
                                  ? handleUpdate("hobby", index)
                                  : handleDelete("hobby", index)
                              }
                              className={`${editingIndex.type === "hobby" &&
                                  editingIndex === index
                                  ? "check"
                                  : "icon-btn"
                                }`}
                            >
                              <i
                                className={`fa-solid ${editingIndex.type === "hobby" &&
                                    editingIndex === index
                                    ? "fa-check"
                                    : "fa-xmark"
                                  }`}
                              ></i>
                            </button>
                            <div className="user-data-list-dropdown">
                              <ul>
                                <li className="where-src-item">
                                  <a>
                                    <img
                                      src="https://design.yilstaging.com/ZYVO/assets/images/create-profile/list-icons/hobbies.svg"
                                      alt=""
                                    />
                                    Sports
                                  </a>
                                </li>
                                <li className="where-src-item">
                                  <a>
                                    <img
                                      src="https://design.yilstaging.com/ZYVO/assets/images/create-profile/list-icons/hobbies.svg"
                                      alt=""
                                    />
                                    Sports
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        ))}
                        {isAddingHobby && (
                          <div className="user-data-list-item hobbies">
                            <input
                              type="text"
                              value={newHobby}
                              onChange={(e) => setNewHobby(e.target.value)}
                            />
                            {newHobby != "" && (
                              <button
                                type="button"
                                className="check"
                                onClick={handleAdd("hobby")}
                              >
                                <i className="fa-solid fa-check"></i>
                              </button>
                            )}
                            {newHobby == "" && (
                              <button
                                type="button"
                                className="icon-btn"
                                onClick={() => setIsAddingHobby(false)}
                              >
                                <i className="fa-solid fa-xmark"></i>
                              </button>
                            )}
                          </div>
                        )}
                        {/* <button type="button" className="add-new-btn">
                          Add New <i className="fa-solid fa-plus"></i>
                        </button> */}
                        {/* Show "Add New" button only if user is not adding */}
                        {!isAddingHobby && hobbies.length <= 1 && (
                          <button
                            type="button"
                            className="add-new-btn"
                            onClick={() => setIsAddingHobby(true)}
                          >
                            Add New <i className="fa-solid fa-plus"></i>
                          </button>
                        )}
                      </div>
                      <h2>Pets</h2>
                      <div className="user-data-list-inner">
                        {pets.map((pet, index) => (
                          <div
                            className="user-data-list-item pets"
                            key={`index` + index}
                          >
                            <input
                              type="text"
                              placeholder="Pets"
                              value={pet}
                              onChange={(e) =>
                                handleEdit("pet", index, e.target.value)
                              }
                            />
                            <button
                              type="button"
                              onClick={() =>
                                editingIndex.type === "pet" &&
                                  editingIndex.index === index
                                  ? handleUpdate("pet", index)
                                  : handleDelete("pet", index)
                              }
                              className={`${editingIndex.type === "pet" &&
                                  editingIndex.index === index
                                  ? "check"
                                  : "icon-btn"
                                }`}
                            >
                              <i
                                className={`fa-solid ${editingIndex.type === "pet" &&
                                    editingIndex.index === index
                                    ? "fa-check"
                                    : "fa-xmark"
                                  }`}
                              ></i>
                            </button>
                            <div className="user-data-list-dropdown">
                              <ul>
                                <li className="where-src-item">
                                  <a>Dog</a>
                                </li>
                                <li className="where-src-item">
                                  <a>Dog</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        ))}
                        {isAddingPet && (
                          <div className="user-data-list-item pets">
                            <input
                              type="text"
                              value={newPet}
                              onChange={(e) => setNewPet(e.target.value)}
                            />
                            {newPet !== "" && (
                              <button
                                type="button"
                                className="check"
                                onClick={() => handleAdd("pet")}
                              >
                                <i className="fa-solid fa-check"></i>
                              </button>
                            )}
                            {newPet === "" && (
                              <button
                                type="button"
                                className="icon-btn"
                                onClick={() => setIsAddingPet(false)}
                              >
                                <i className="fa-solid fa-xmark"></i>
                              </button>
                            )}
                          </div>
                        )}
                        {!isAddingPet && pets.length <= 1 && (
                          <button
                            type="button"
                            className="add-new-btn"
                            onClick={() => setIsAddingPet(true)}
                          >
                            Add New <i className="fa-solid fa-plus"></i>
                          </button>
                        )}
                        {/* <button type="button" className="add-new-btn">
                          Add New <i className="fa-solid fa-plus"></i>
                        </button> */}
                      </div>
                      <h2>Email</h2>
                      <div className="user-data-list-inner">
                        <div className="user-data-list-item input-field">
                          <input
                            type="text"
                            placeholder="Enter Your Email"
                            value={email}
                            disabled
                          />
                          <button type="button" className="edit-field" onClick={() => setVerifyEmailModal(true)}>
                            <i className="fa-solid fa-pen"></i>
                          </button>
                        </div>
                      </div>
                      <h2>Phone Number</h2>
                      <div className="user-data-list-inner">
                        <div className="user-data-list-item input-field">
                          <input
                            type="text"
                            placeholder="Enter Your Phone Number"
                            value={maskPhoneNumber(phoneNumber)}
                          />
                          <button type="button" className="edit-field" onClick={() => setVerifyPhoneModal(true)}>
                            <i className="fa-solid fa-pen"></i>
                          </button>
                        </div>
                      </div>
                      <h2>Password</h2>
                      <div className="user-data-list-inner">
                        <div className="user-data-list-item input-field">
                          <input
                            type="password"
                            placeholder="Enter Your Password"
                            value="***********"
                          />
                          <button
                            type="button"
                            data-bs-target="#confirm-email-popup"
                            data-bs-toggle="modal"
                            className="edit-field"
                            onClick={() => setShowChangePasswordModal(true)}
                          >
                            <i className="fa-solid fa-pen"></i>
                          </button>
                        </div>
                      </div>
                      <h2>Mailing Address</h2>
                      <div className="user-data-list-inner mailing-address-wrap">
                        {/* <!-- ITEM --> */}
                        <div className="user-data-list-item input-field">
                          <input type="text"
                            value={streetAddress}
                            onChange={(e) => setStreetAddress(e.target.value)}
                            disabled={!isAddingStreet}
                            placeholder="Street"
                          />
                          <button type="button" className={`${isAddingStreet ? "check" : "edit-field"}`}
                            onClick={() => handleAddressSubmit("street")}>
                            <i className={`fa-solid ${isAddingStreet ? "fa-check" : "fa-pen"}`}></i>
                          </button>
                        </div>
                        {/* <!-- ITEM -->
                    <!-- ITEM --> */}
                        <div className="user-data-list-item input-field">
                          <input type="text" value={city} disabled={!isAddingCity}
                            onChange={(e) => setCity(e.target.value)} placeholder="City" />
                          <button type="button" className={`${isAddingCity ? "check" : "edit-field"}`}
                            onClick={() => handleAddressSubmit("city")}>
                            <i className={`fa-solid ${isAddingCity ? "fa-check" : "fa-pen"}`}></i>
                          </button>
                        </div>
                        {/* <!-- ITEM -->
                    <!-- ITEM --> */}
                        <div className="user-data-list-item input-field">
                          <input type="text" value={state} disabled={!isAddingState}
                            onChange={(e) => setState(e.target.value)} placeholder="State" />
                          <button type="button" className={`${isAddingState ? "check" : "edit-field"}`}
                            onClick={() => handleAddressSubmit("state")}>
                            <i className={`fa-solid ${isAddingState ? "fa-check" : "fa-pen"}`}></i>
                          </button>
                        </div>
                        {/* <!-- ITEM -->
                    <!-- ITEM --> */}
                        <div className="user-data-list-item input-field">
                          <input type="text" value={zipCode} disabled={!isAddingZip}
                            onChange={(e) => setZipCode(e.target.value)} placeholder="Zip Code" />
                          <button type="button" className={`${isAddingZip ? "check" : "edit-field"}`}
                            onClick={() => handleAddressSubmit("zip")}>
                            <i className={`fa-solid ${isAddingZip ? "fa-check" : "fa-pen"}`}></i>
                          </button>
                        </div>
                        {/* <!-- ITEM --> */}
                      </div>
                      <h2 className="payment-method">
                        Payment Methods{" "}
                        <span className="payment-method-dropdown-btn">
                          <i className="fa-solid fa-chevron-down"></i>
                        </span>
                        <div className="saved-cards">
                          <div className="saved-cards-in">
                            <div className="saved-cards-list">
                              <img
                                src="https://design.yilstaging.com/ZYVO/assets/images/payment-methods/visa.svg"
                                alt=""
                              />
                              <h4>....365890</h4>
                              <p>Preferred</p>
                              <div className="card-control-btn">
                                <i className="fa-solid fa-ellipsis-vertical"></i>
                                <span className="card-control-dropdown">
                                  <span className="card-control-dropdown-in">
                                    <a>Remove</a>
                                  </span>
                                </span>
                              </div>
                            </div>
                            <div className="saved-cards-list">
                              <img
                                src="https://design.yilstaging.com/ZYVO/assets/images/payment-methods/visa.svg"
                                alt=""
                              />
                              <h4>....365890</h4>
                              <div className="card-control-btn">
                                <i className="fa-solid fa-ellipsis-vertical"></i>
                                <span className="card-control-dropdown">
                                  <span className="card-control-dropdown-in">
                                    <a>Make as Preferred</a>
                                    <a>Remove</a>
                                  </span>
                                </span>
                              </div>
                            </div>
                            <div className="saved-cards-list">
                              <img
                                src="https://design.yilstaging.com/ZYVO/assets/images/payment-methods/visa.svg"
                                alt=""
                              />
                              <h4>....365890</h4>
                              <div className="card-control-btn">
                                <i className="fa-solid fa-ellipsis-vertical"></i>
                                <span className="card-control-dropdown">
                                  <span className="card-control-dropdown-in">
                                    <a>Make as Preferred</a>
                                    <a>Remove</a>
                                  </span>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </h2>
                      <div className="user-data-list-inner">
                        <button type="button" className="add-new-btn add-card">
                          Add Card <i className="fa-solid fa-plus"></i>
                        </button>
                        <div className="add-card-details">
                          <h5>Add Card Details</h5>
                          <input type="text" placeholder="Name" />
                          <input type="text" placeholder="Card Number" />
                          <input type="text" placeholder="CVV Number" />
                          <div className="add-card-details-in">
                            <select>
                              <option value="1">Month</option>
                              <option value="2">Jan</option>
                              <option value="3">Feb</option>
                              <option value="4">Mar</option>
                              <option value="5">Apr</option>
                            </select>
                            <select>
                              <option value="1">Year</option>
                              <option value="2">2020</option>
                              <option value="3">2021</option>
                              <option value="4">2022</option>
                              <option value="5">2023</option>
                            </select>
                          </div>
                          <h5 className="mt-2">Add Billing Address</h5>
                          <input type="text" placeholder="Street" />
                          <input type="text" placeholder="City" />
                          <input type="text" placeholder="State" />
                          <input type="text" placeholder="Zip Code" />
                          <label>
                            {" "}
                            <input type="checkbox" /> Same as Mailing Address{" "}
                          </label>
                          <input
                            type="button"
                            value="Submit"
                            data-bs-target="#card-added-successfully-popup"
                            data-bs-toggle="modal"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="user-data-btn">
                      <button type="submit">Save Changes</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- MOBILE --> */}
        <div className="mob-profile-bottom">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <div className="mob-profile-bottom-in">
                  <h2>Useful Pages</h2>
                  <ul>
                    <li>
                      <a href="notifications.html">
                        <img
                          src="https://design.yilstaging.com/ZYVO/assets/images/create-profile/mob-profile/1.svg"
                          alt=""
                        />
                        Notifications
                        <i className="fa-solid fa-chevron-right"></i>
                      </a>
                    </li>
                  </ul>
                  <h2>Support</h2>
                  <ul>
                    <li>
                      <a href="help-center.html">
                        <img
                          src="https://design.yilstaging.com/ZYVO/assets/images/create-profile/mob-profile/2.svg"
                          alt=""
                        />
                        Visit the Help Center
                        <i className="fa-solid fa-chevron-right"></i>
                      </a>
                    </li>
                    <li>
                      <a href="feedback.html">
                        <img
                          src="https://design.yilstaging.com/ZYVO/assets/images/create-profile/mob-profile/3.svg"
                          alt=""
                        />
                        Give us feedback
                        <i className="fa-solid fa-chevron-right"></i>
                      </a>
                    </li>
                  </ul>
                  <h2>Legal</h2>
                  <ul>
                    <li>
                      <a href="terms-of-services.html">
                        <img
                          src="https://design.yilstaging.com/ZYVO/assets/images/create-profile/mob-profile/4.svg"
                          alt=""
                        />
                        Terms of services
                        <i className="fa-solid fa-chevron-right"></i>
                      </a>
                    </li>
                    <li>
                      <a href="privacy-policy.html">
                        <img
                          src="https://design.yilstaging.com/ZYVO/assets/images/create-profile/mob-profile/4.svg"
                          alt=""
                        />
                        Privacy policy
                        <i className="fa-solid fa-chevron-right"></i>
                      </a>
                    </li>
                  </ul>
                  <div className="mob-profile-bottom-in-btns">
                    <button
                      type="button"
                      data-bs-target="#logout-popup"
                      data-bs-toggle="modal"
                    >
                      <img
                        src="https://design.yilstaging.com/ZYVO/assets/images/create-profile/mob-profile/logout.svg"
                        alt=""
                      />
                      Logout
                    </button>
                    <a href="">Switch to Host</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- MOBILE --> */}
      </main>
      <Modal
        id="add-profile-picture-popup"
        show={showFileUploadModal} onHide={() => setShowFileUploadModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title className="w-100 text-center">Add profile picture</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <label htmlFor="file-upload" style={{ cursor: "pointer" }}>
            <img
              src="https://zyvo.tgastaging.com/admin/images/ZYVO-images/all-icons/file-upload-icon.png"
              alt="Upload"
              style={{
                width: "150px",
                height: "150px",
                borderRadius: "10px",
                border: "2px dashed #ccc",
              }}
            />
          </label>
          <input
            id="file-upload"
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
        </Modal.Body>
      </Modal>
      <ForgotWithEmail
        show={verifyEmailModal}
        handleClose={() => setVerifyEmailModal(false)}
      />
      <PhoneVerification
        show={verifyPhoneModal}
        handleClose={() => setVerifyPhoneModal(false)}
      />
      <ChangePassword show={showChangePasswordModal} handleClose={() => setShowChangePasswordModal(false)} />
      <AuthModal />
      <Footer />
    </>
  );
}

export default Profile;
