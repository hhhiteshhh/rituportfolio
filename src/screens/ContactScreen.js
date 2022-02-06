import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Loader from "../components/Loader";
import { db } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import MSTeams from "../components/MSTeams";
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
      <div className={" bg-[#1a1a1d] sm:background"}>
        <div
          className={` bg-[#1a1a1d] mx-auto lg:max-w-xl py-16 ${
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
              <div className="flex items-center justify-center flex-col">
                <h1 className="text-white">/CONTACT US/</h1>
                <p className=" text-white text-lg md:text-4xl p-5 md:p-14">
                  Drop me a message
                </p>
              </div>
              <form className="flex flex-col flex-1 items-center justify-center text-sm md:text-lg space-y-3">
                <div className="space-y-3">
                  <label className="text-white mx-3 md:mx-10 sm:mx-5 lg-mx-8">
                    NAME
                  </label>
                  <div className="space-y-3 flex flex-col">
                    <input
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      type="text"
                      name="name"
                      placeholder="First Name"
                      className="mx-3 md:mx-10 w-52 md:w-96 px-4 py-2 rounded-md bg-[#1a1a1d] border-2 border-[#6b6e70] outline-none text-white placeholder-[#4a4a50]"
                    ></input>
                    <input
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      type="text"
                      name="name"
                      placeholder="Last Name"
                      className="mx-3 md:mx-10 w-52 md:w-96 px-4 py-2 rounded-md bg-[#1a1a1d] border-2 border-[#6b6e70] outline-none text-white placeholder-[#4a4a50]"
                    ></input>
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-white mx-3 md:mx-10 sm:mx-5 lg-mx-8">
                    EMAIL
                  </label>
                  <div>
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      className="mx-3 md:mx-10 w-52 md:w-96 px-4 py-2 rounded-md bg-[#1a1a1d] border-2 border-[#6b6e70] outline-none text-white placeholder-[#4a4a50]"
                    ></input>
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-white mx-3 md:mx-10 sm:mx-5 lg-mx-8">
                    MESSAGE
                  </label>
                  <div>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      name="message"
                      rows="10"
                      cols="30"
                      placeholder="Message"
                      className="mx-3 md:mx-10 w-52 md:w-96 px-4 py-2 rounded-md bg-[#1a1a1d] border-2 border-[#6b6e70] outline-none text-white placeholder-[#4a4a50]"
                    ></textarea>
                  </div>
                </div>
                <div>
                  <button
                    onSubmit={(e) => {
                      handleSubmit(e);
                    }}
                    onClick={(e) => {
                      handleSubmit(e);
                    }}
                    type="submit"
                    className="mx-3 md:mx-10 w-52 md:w-96 py-2 border-2 border-[#6b6e70] px-4 rounded-md text-lg transition-all duration-150 ease-out text-white hover:bg-[#6b6e70] active:scale-90 focus:outline-none focus:ring-1 focus:ring-[#6b6e70]"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>

      <div className="h-[0.8px] bg-[#4e4e50] w-full"></div>
      <MSTeams />
      <div className="h-[0.8px] bg-[#4e4e50] w-full"></div>
      <Footer />
    </div>
  );
}

export default ContactScreen;
