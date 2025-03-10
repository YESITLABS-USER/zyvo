import React, { useState, useEffect } from "react";
import Header from "../../components/guest/Header";
import Footer from "../../components/guest/Footer";
import Modal from "react-bootstrap/Modal";
import AuthModal from "../../components/guest/authModal";
import { useSelector } from "react-redux";
import useProfile from "../../hooks/useProfile";
import Autocomplete from "react-google-autocomplete";
import { GOOGLE_KEY } from "../../config/Constant";
import EmailVerification from "../../components/guest/authProfileModals/EmailVerification";
import PhoneVerification from "../../components/guest/authProfileModals/PhoneVerification";

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

const CreateProfile = () => {
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
  } = useProfile();
  const profileData = useSelector((state) => state.profile);
  console.log(profileData, "profile data ****");

  const formSubmitObj = {};
  const formData = new FormData();

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

  const [file, setFile] = useState(null);
  const [showFileUploadModal, setShowFileUploadModal] = useState(false);
  const [preview, setPreview] = useState(null);

  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [isPhoneVerified, setIsPhoneVerified] = useState(false);
  const [isIdentityVerified, setIsIdentityVerified] = useState(false);

  const [verifyEmailModal, setVerifyEmailModal] = useState(false);
  const [verifyPhoneModal, setVerifyPhoneModal] = useState(false);

  const [showNameEditModal, setShowNameEditModal] = useState(false);

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

    setIsEmailVerified(
      profileData?.profileData?.email_verified == 0 ? false : true
    );
    setIsPhoneVerified(
      profileData?.profileData?.phone_verified == 0 ? false : true
    );
    setIsIdentityVerified(
      profileData?.profileData?.identity_verified == 0 ? false : true
    );
  }, [profileData?.profileData]);

  const handleAboutMeSubmit = async () => {
    if (isAddingAboutMe) {
      // await addAboutMe({ user_id: "1", about_me: aboutMe });
      Object.assign(formSubmitObj, { about_me: aboutMe });
      formData.append("about_me", aboutMe);
      setIsAddingAboutMe(false);
    } else {
      setIsAddingAboutMe(true);
    }
  };

  const handleNameSubmit = async () => {
    if (isAddingName) {
      // await addName({
      //   user_id: "1",
      //   first_name: firstName,
      //   last_name: lastName,
      // });
      // Object.assign(formSubmitObj, {"first_name": firstName});
      // Object.assign(formSubmitObj, {"last_name":lastName});
      formData.append("first_name", firstName);
      formData.append("last_name", lastName);
      setIsAddingName(false);
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    try {
      // Object.assign(formSubmitObj, {"user_id": "1"});
      // Object.assign(formSubmitObj, {"where_live[]": places.join(",")});
      // Object.assign(formSubmitObj, {"works[]": works.join(",")});
      // Object.assign(formSubmitObj, {"languages[]": languages.join(",")});
      // Object.assign(formSubmitObj, {"pets[]": pets.join(",")});
      formData.append("user_id", "1");
      formData.append("first_name", firstName);
      formData.append("last_name", lastName);
      formData.append("where_live[]", places.join(","));
      formData.append("works[]", works.join(","));
      formData.append("languages[]", languages.join(","));
      formData.append("pets[]", pets.join(","));
      if (file) {
        formData.append("profile_image", file);
      }
      for (let [key, value] of formData.entries()) {
        console.log(key, value);
      }
    } catch (error) {
      console.log(error);
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
      // await deleteHobby({ user_id: "1", index });
      setHobbies(hobbies.filter((_, i) => i !== index));
    }
    if (type === "pet") {
      // await deletePet({ user_id: "1", index });
      setPets(pets.filter((_, i) => i !== index));
    }
    if (type === "work") {
      // await deleteWork({ user_id: "1", index });
      setWorks(works.filter((_, i) => i !== index));
    }
    if (type === "language") {
      // await deleteLanguage({ user_id: "1", index });
      setLanguages(languages.filter((_, i) => i !== index));
    }
    if (type === "place") {
      // await deletePlace({ user_id: "1", index });
      setLanguages(places.filter((_, i) => i !== index));
    }
  };

  // Handle add
  const handleAdd = async (type) => {
    if (type === "hobby" && newHobby.trim()) {
      // await addHobby({ user_id: "1", hobby_name: newHobby });
      setHobbies([...hobbies, newHobby]);
      setNewHobby("");
      setIsAddingHobby(false);
    }
    if (type === "pet" && newPet.trim()) {
      // await addPet({ user_id: "1", pet_name: newPet });
      setPets([...pets, newPet]);
      setNewPet("");
      setIsAddingPet(false);
    }
    if (type === "work" && newWork.trim()) {
      // await addWork({ user_id: "1", work_name: newWork });
      setWorks([...works, newWork]);
      setNewWork("");
      setIsAddingWork(false);
    }
    if (
      type === "language" &&
      selectedLanguage &&
      !languages.includes(selectedLanguage)
    ) {
      // await addLanguage({ user_id: "1", language_name: selectedLanguage });
      setLanguages([...languages, selectedLanguage]);
      setSelectedLanguage("");
      setIsAddingLanguage(false);
    }
    if (type === "place") {
      // await addPlace({ user_id: "1", place_name: selectedPlace });
      setPlaces([...places, selectedPlace]);
      setSelectedPlace("");
      setIsAddingPlace(false);
    }
  };

  // Handle add hobby
  // const handleAddHobby = async () => {
  //   if (newHobby.trim()) {
  //     await addHobby({ user_id: '1', hobby_name: newHobby }); // Call API action
  //     setHobbies([...hobbies, newHobby]); // Update local state
  //     setNewHobby("");
  //     setIsAdding(false);
  //   }
  // }

  // Handle hobby edit
  // const handleEditHobby = (index, value) => {
  //   const updatedList = [...hobbies];
  //   updatedList[index] = value;
  //   setHobbies(updatedList);
  //   setEditingIndex(index);
  // };

  // Update hobby via API
  // const handleUpdateHobby = async (index) => {
  //   await addHobby({ user_id: '1', index, hobby_name: hobbies[index] })
  //   setEditingIndex(null);
  // };

  // Delete hobby via API
  // const handleDeleteHobby = async (index) => {
  //   await deleteHobby({ user_id: '1', index }) // Call API action
  //   setHobbies((prev) => prev.filter((_, i) => i !== index)); // Update local state
  // };

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

      {/* auth */}

      <main>
        {/* MOBILE */}
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
        {/* MOBILE */}

        <div className="complete-your-profile">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <div className="complete-your-profile-left">
                  <h1>Complete your profile</h1>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="complete-your-profile-right">
                  <div className="complete-your-profile-right-top">
                    <div className="user-profile-upload-name">
                      <div className="user-profile-upload">
                        <div className="user-profile-upload-image">
                          <img
                            src={
                              preview ||
                              "https://design.yilstaging.com/ZYVO/assets/images/create-profile/profile.png"
                            }
                            alt=""
                          />
                        </div>
                        <button
                          // data-bs-toggle="modal"
                          // data-bs-target="#add-profile-picture-popup"
                          type="button"
                          onClick={() => setShowFileUploadModal(true)}
                        >
                          <i className="fa-solid fa-pen"></i>
                        </button>
                      </div>
                      <div className="user-profile-name">
                        {/* <span>
                          Hey {firstName}!
                          </span> */}
                        <button
                          type="button"
                          onClick={() => setShowNameEditModal(true)}
                        >
                          <i className="fa-solid fa-pen"></i>
                        </button>
                        <h2></h2>
                        {isAddingName && (
                          <span
                            className="user-name-dropdown"
                            style={{ display: "block" }}
                          >
                            <form onSubmit={handleNameSubmit}>
                              <label>
                                <input
                                  type="text"
                                  value={firstName}
                                  onChange={(e) => setFirstName(e.target.value)}
                                  placeholder="First name*"
                                />
                                <input
                                  type="text"
                                  value={lastName}
                                  onChange={(e) => setLastName(e.target.value)}
                                  placeholder="Last name*"
                                />
                              </label>
                              <input type="submit" value="Save Changes" />
                            </form>
                          </span>
                        )}

                        <p>
                          Guest
                          <span className="info-wrap">
                            <img
                              src="https://design.yilstaging.com/ZYVO/assets/images/create-profile/info.svg"
                              alt=""
                            />
                            <span className="info-in">
                              Before you can book or host on the platform, the
                              name on ID must match verification documents.
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
                        {isEmailVerified ? (
                          <p>
                            Verified <i className="fa-solid fa-badge-check"></i>
                          </p>
                        ) : (
                          <a
                            onClick={() => setVerifyEmailModal(true)}
                            style={{ cursor: "pointer" }}
                          >
                            <u>Confirm now</u>
                          </a>
                        )}
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
                        {isPhoneVerified ? (
                          <p>
                            Verified <i className="fa-solid fa-badge-check"></i>
                          </p>
                        ) : (
                          <a
                            onClick={() => setVerifyPhoneModal(true)}
                            style={{ cursor: "pointer" }}
                          >
                            <u>Confirm now</u>
                          </a>
                        )}
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
                        {isIdentityVerified ? (
                          <p>
                            Verified <i className="fa-solid fa-badge-check"></i>
                          </p>
                        ) : (
                          <a style={{ cursor: "pointer" }}>
                            <u>Confirm now</u>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-8 col-md-6 order-lg-first">
                <div className="complete-your-profile-left">
                  <form action="profile.html">
                    <h2>
                      About Me{" "}
                      <button
                        type="button"
                        className={`${isAddingAboutMe ? "check" : ""}`}
                        onClick={handleAboutMeSubmit}
                      >
                        <i
                          className={`fa-solid ${
                            isAddingAboutMe ? "fa-check" : "fa-pen"
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
                                    />{" "}
                                    Alaska, US
                                  </a>
                                </li>
                                <li className="where-src-item">
                                  <a>
                                    <img
                                      src="https://design.yilstaging.com/ZYVO/assets/images/filters/where-icons.svg"
                                      alt=""
                                    />{" "}
                                    California, US
                                  </a>
                                </li>
                                <li className="where-src-item">
                                  <a>
                                    <img
                                      src="https://design.yilstaging.com/ZYVO/assets/images/filters/where-icons.svg"
                                      alt=""
                                    />{" "}
                                    Delaware, US
                                  </a>
                                </li>
                                <li className="where-src-item">
                                  <a>
                                    <img
                                      src="https://design.yilstaging.com/ZYVO/assets/images/filters/where-icons.svg"
                                      alt=""
                                    />{" "}
                                    Florida, US
                                  </a>
                                </li>
                                <li className="where-src-item">
                                  <a>
                                    <img
                                      src="https://design.yilstaging.com/ZYVO/assets/images/filters/where-icons.svg"
                                      alt=""
                                    />{" "}
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
                              disabled
                            />
                            <button
                              type="button"
                              className={`${
                                editingIndex.type === "work" &&
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
                                className={`fa-solid ${
                                  editingIndex.type === "work" &&
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
                                    />{" "}
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
                                    />{" "}
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
                              disabled
                            />
                            <button
                              type="button"
                              onClick={() =>
                                editingIndex.type === "hobby" &&
                                editingIndex.index === index
                                  ? handleUpdate("hobby", index)
                                  : handleDelete("hobby", index)
                              }
                              className={`${
                                editingIndex.type === "hobby" &&
                                editingIndex === index
                                  ? "check"
                                  : "icon-btn"
                              }`}
                            >
                              <i
                                className={`fa-solid ${
                                  editingIndex.type === "hobby" &&
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
                                    />{" "}
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
                      {/* PETS SECTION */}
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
                              disabled
                            />
                            <button
                              type="button"
                              onClick={() =>
                                editingIndex.type === "pet" &&
                                editingIndex.index === index
                                  ? handleUpdate("pet", index)
                                  : handleDelete("pet", index)
                              }
                              className={`${
                                editingIndex.type === "pet" &&
                                editingIndex.index === index
                                  ? "check"
                                  : "icon-btn"
                              }`}
                            >
                              <i
                                className={`fa-solid ${
                                  editingIndex.type === "pet" &&
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
                    </div>
                    <div className="user-data-btn">
                      <button
                        type="submit"
                        onClick={(e) => handleFormSubmit(e)}
                      >
                        Save Profile
                      </button>
                      <a href="profile.html">Skip for now</a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Modal
        show={showFileUploadModal}
        onHide={() => setShowFileUploadModal(false)}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title className="w-100 text-center">
            Add profile picture
          </Modal.Title>
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
      <Modal
        show={showNameEditModal}
        onHide={() => setShowNameEditModal(false)}
        centered
      >
        {/* <Modal.Header closeButton>
          <Modal.Title className="w-100 text-center">Add profile picture</Modal.Title>
        </Modal.Header> */}
        <Modal.Body className="user-name-dropdown">
          <label>
            <input
              type="text"
              placeholder="First name*"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Last name*"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </label>
          <input
            type="submit"
            value="Save Changes"
            onClick={() => setShowNameEditModal(false)}
          />
        </Modal.Body>
      </Modal>
      <EmailVerification
        show={verifyEmailModal}
        handleClose={() => setVerifyEmailModal(false)}
      />
      <PhoneVerification
        show={verifyPhoneModal}
        handleClose={() => setVerifyPhoneModal(false)}
      />
      <AuthModal />
      <Footer />
    </>
  );
};

export default CreateProfile;
