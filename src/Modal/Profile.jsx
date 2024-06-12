import React, { useState, useContext } from "react";
import "./Profile.css";
import countryList from "./countryList";
import { CartContext } from "../Data/CartContext";
import { FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { profile, updateProfile } = useContext(CartContext);
  const [isEditing, setIsEditing] = useState(!profile);
  const [selectedCountry, setSelectedCountry] = useState(
    profile?.country || ""
  );
  const [imageUrl, setImageUrl] = useState(profile?.imageUrl || "");
  const [firstName, setFirstName] = useState(profile?.firstName || "");
  const [lastName, setLastName] = useState(profile?.lastName || "");
  const [number, setNum] = useState(profile?.number || "");
  const [address, setAdress] = useState(profile?.address || "");
  const [email, setEmail] = useState(profile?.email || "");
  const navi = useNavigate();
  const backToStore = () => {
    navi("/");
  };
  const handleSave = () => {
    const newProfile = {
      firstName,
      lastName,
      number,
      address,
      email,
      country: selectedCountry,
      imageUrl,
    };
    updateProfile(newProfile);
    setIsEditing(false);
  };

  const handleClear = () => {
    updateProfile(null);
    setIsEditing(true);
    setSelectedCountry("");
    setImageUrl("");
    setFirstName("");
    setLastName("");
    setNum("");
    setAdress("");
    setEmail("");
  };

  return (
    <div className="container mx-auto bg-[#0F172A] mb-5 rounded text-white">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/4 border-r h-[100vh]">
          <div
            onClick={backToStore}
            className="text-xl font-font font-bold mt-5 cursor-pointer italic"
          >
            Back to Store
          </div>
          <div className="flex flex-col items-center text-center p-3 py-5">
            {imageUrl ? (
              <img
                src={imageUrl}
                alt="Profile"
                className="rounded-full mt-5"
                style={{ width: "150px", height: "150px" }}
              />
            ) : (
              <FaUser className="rounded-full mt-5" size={150} />
            )}
            <span className="font-bold mt-2 text-3xl">{`${firstName} ${lastName}`}</span>
            <span className="mt-2 text-gray-500">Number Phone : {number}</span>
            <span className="mt-2 text-gray-500">Address : {address}</span>
            <span className="mt-2 text-gray-500">Email : {email}</span>
            <span className="mt-2 text-gray-500">
              Country: {selectedCountry}
            </span>
          </div>
        </div>
        <div className="md:w-1/2 border-r">
          <div className="p-3 py-5">
            <div className="flex justify-between items-center mb-3">
              <h4 className="text-right">Profile Settings</h4>

              {profile && (
                <button
                  onClick={handleClear}
                  className="py-2 px-4 rounded text-white bg-red-600 hover:bg-red-700"
                >
                  Clear
                </button>
              )}
            </div>
            {isEditing ? (
              <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="labels">First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div>
                  <label className="labels">Surname</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Surname"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
                <div>
                  <label className="labels">Mobile Number</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setNum(e.target.value)}
                    value={number}
                    placeholder="Enter phone number"
                  />
                </div>
                <div>
                  <label className="labels">Address Line 1</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setAdress(e.target.value)}
                    value={address}
                    placeholder="Enter address line 1"
                  />
                </div>
                <div>
                  <label className="labels">Email ID</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    placeholder="Enter email id"
                  />
                </div>
                <div>
                  <label className="labels">Country</label>
                  <select
                    className="form-control"
                    value={selectedCountry}
                    onChange={(e) => setSelectedCountry(e.target.value)}
                  >
                    <option value="" disabled>
                      Select a country
                    </option>
                    {countryList.map((country, index) => (
                      <option key={index} value={country}>
                        {country}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="labels">Profile Image URL</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="URL"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                  />
                </div>
                <div className="mt-5 text-center">
                  <button
                    onClick={handleSave}
                    className="profile-button py-2 px-4 rounded text-white bg-green-600 hover:bg-green-700"
                  >
                    Save Profile
                  </button>
                </div>
              </div>
            ) : (
              <div className="mt-5">
                  <div className="bg-[#1E293B] p-6 rounded-lg  mx-auto shadow-md">
      <div className="mb-4 ">
        <div className="font-bold text-white">UserName</div>
        <div className="text-gray-600">{`${profile.firstName} ${profile.lastName}`}</div>
      </div>
      <div className="mb-4">
        <div className="font-bold text-white">Contact Info</div>
        <div className="text-gray-600">{profile.email}</div>
      </div>
      <div className="mb-4 flex justify-between items-center">
        <div className="font-bold text-white">Identity confirmation : <span className="text-gray-600 italic">{selectedCountry}</span></div>
        <div className="text-white text-2xl">🔒</div>
      </div>
      <div>
        <div className="font-bold text-white">Account ownership and control</div>
        <div className="text-gray-600">
          Manage your data, modify your legacy contact, deactivate or delete your accounts and profiles.
        </div>
      </div>
    </div>
                <button
                  onClick={() => setIsEditing(true)}
                  className="profile-button py-2 px-4 rounded text-white bg-blue-600 hover:bg-blue-700 mt-4"
                >
                  Edit Profile
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="md:w-1/4">
          <div className="p-3 py-5">
            <div className="flex justify-between items-center mb-3">
              <span>Recovery</span>
              <span className="border px-3 py-1 add-experience cursor-pointer">
                <i className="fa fa-plus"></i>&nbsp;More Security
              </span>
            </div>
            <div>
              <label className="labels">Number Phone</label>
              <input
                type="text"
                className="form-control"
                placeholder="Number phone"
              />
            </div>
            <div className="mt-3">
              <label className="labels">Recover Email</label>
              <input
                type="text"
                className="form-control"
                placeholder="Recover email"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
