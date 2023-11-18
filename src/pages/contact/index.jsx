import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    // Validate Name
    if (formData.name.trim() === "") {
      newErrors.name = "Name is required";
      isValid = false;
    } else {
      newErrors.name = "";
    }

    // Validate Email
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (!formData.email.match(emailRegex)) {
      newErrors.email = "Enter a valid email address";
      isValid = false;
    } else {
      newErrors.email = "";
    }

    // Validate Subject
    if (formData.subject.trim() === "") {
      newErrors.subject = "Subject is required";
      isValid = false;
    } else {
      newErrors.subject = "";
    }

    // Validate Message
    if (formData.message.trim() === "") {
      newErrors.message = "Message is required";
      isValid = false;
    } else {
      newErrors.message = "";
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();

    if (isValid) {
      // Submit the form or perform other actions here
      console.log("Form is valid. Submitting data:", formData);

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } else {
      console.log("Form contains validation errors.");
    }
  };

  return (
    <div>
      <div className="py-10 text-center">
        <h2 className="font-bold text-2xl text-secondary">CONTACT US</h2>
        <h4 className="pt-4 font-bold text-4xl text-primary">
          CONTACT US FOR ANY QUERY
        </h4>
      </div>

      <div className=" h-3/5 mt-10">
        <section className="text-primary body-font relative">
          <div className="absolute inset-0 bg-bgLight">
            <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              title="map"
              scrolling="no"
              src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=Rawalpindi,+Punjab,+Pakistan&ie=UTF8&t=&z=14&iwloc=B&output=embed"
              style={{}}
            ></iframe>
          </div>
          <div className=" px-5 py-24 mx-auto flex">
            <div className="xl:w-1/3 md:w-1/2 bg-bgLight rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
              <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
                Contact Us
              </h2>

              <div className="relative mb-4">
                <label
                  htmlFor="name"
                  className="leading-7 text-sm text-primary"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-white rounded border border-lightGray  text-base outline-none text-primary py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                <span className="text-secondary text-sm">{errors.name}</span>
              </div>

              <div className="relative mb-4">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-primary"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-white rounded border border-lightGray  text-base outline-none text-primary py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                <span className="text-secondary text-sm">{errors.email}</span>
              </div>

              <div className="relative mb-4">
                <label
                  htmlFor="subject"
                  className="leading-7 text-sm text-primary"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-white rounded border border-lightGray  text-base outline-none text-primary py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                <span className="text-secondary text-sm">{errors.subject}</span>
              </div>

              <div className="relative mb-4">
                <label
                  htmlFor="message"
                  className="leading-7 text-sm text-primary"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-white rounded border border-lightGray  h-32 text-base outline-none text-primary py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                />
                <span className="text-secondary text-sm">{errors.message}</span>
              </div>
              <button
                className="text-white font-bold bg-secondary border-0 py-2 px-6 focus:outline-none hover:bg-orange-700 rounded text-lg"
                onClick={handleSubmit}
              >
                Send Message
              </button>
              <p className="text-xs text-lightGray mt-3 text-center font-bold">
                Guardians of Security, Your Security, Our Priority
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
