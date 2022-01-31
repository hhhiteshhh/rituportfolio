import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Loader from "../components/Loader";
import { db } from "../firebase";
import { addDoc, collection, doc, serverTimestamp } from "firebase/firestore";
function ContactScreen() {
  const [loading, setLoading] = useState(true);
  const [send, setSend] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  useEffect(() => setInterval(() => setLoading(false), 2000), []);

  const handleSubmit = (e) => {
    if (firstName && lastName && email && message) {
      e.preventDefault();
      addDoc(collection(db, "messages"), {
        firstName: firstName,
        lastName: lastName,
        email: email,
        message: message,
        timestamp: serverTimestamp(),
      });
      setFirstName("");
      setLastName("");
      setEmail("");
      setMessage("");
      setSend(true);
    } else {
      e.preventDefault();
      alert("Please fill in all fields");
    }
  };
  if (loading) {
    return <Loader />;
  }
  return (
    <div>
      <Header />
      <div className={"bg-local bg-[#1a1a1d] flex flex-1 sm:background"}>
        <div
          className={`flex flex-col bg-[#1a1a1d] mx-auto lg:max-w-xl py-16 px-4 min-h-screen ${
            send && `items-center justify-center`
          }`}
        >
          {send ? (
            <div className="flex items-center justify-center flex-col bg-black h-96 mx-22">
              <h1 className="text-center text-white p-14 text-4xl">
                Thank you!
                <br />
                <br />
                <span className="text-center text-white text-lg">
                  Your submission has been received!
                </span>
              </h1>
            </div>
          ) : (
            <>
              <h1 className="text-center text-white pt-32">/CONTACT US/</h1>
              <p className="text-center text-white p-14 text-4xl">
                Drop me a message
              </p>
              <form className="flex flex-col items-start justify-start space-y-7 max-w-4xl mx-auto">
                <label className="text-white text-md">NAME</label>
                <div className="space-x-4">
                  <input
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    type="text"
                    name="name"
                    placeholder="First Name"
                    className="px-4 py-2 border-2 border-[#4e4e50] outline-none rounded-md bg-[#1a1a1d] text-white placeholder-[#4a4a50]"
                  />
                  <input
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    type="text"
                    name="name"
                    placeholder="Last Name"
                    className="px-4 py-2 border-2 border-[#4e4e50] outline-none rounded-md bg-[#1a1a1d] text-white placeholder-[#4a4a50]"
                  />
                </div>
                <label className="text-white text-md">EMAIL</label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 border-2 border-[#4e4e50] outline-none rounded-md bg-[#1a1a1d] text-white placeholder-[#4a4a50]"
                />
                <label className="text-white text-md">Messsage</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  name="message"
                  rows="10"
                  cols="30"
                  placeholder="Message"
                  className="w-full px-4 py-2 border-2 border-[#4e4e50] outline-none rounded-md bg-[#1a1a1d] text-white placeholder-[#4a4a50]"
                ></textarea>
                <button
                  onSubmit={(e) => {
                    handleSubmit(e);
                  }}
                  onClick={(e) => {
                    handleSubmit(e);
                  }}
                  type="submit"
                  className="py-5 border-2 border-[#4e4e50] px-48 mx-auto rounded-md text-lg transition-all duration-150 ease-out text-white hover:bg-[#4e4e50] active:scale-90 focus:outline-none focus:ring-1 focus:ring-[#4e4e50]"
                >
                  Submit
                </button>
              </form>
            </>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ContactScreen;
