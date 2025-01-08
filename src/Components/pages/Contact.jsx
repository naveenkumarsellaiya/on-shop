import React, { useState } from "react";

const Contact = ({toggle}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save form data to local storage
    const existingData = JSON.parse(localStorage.getItem("contactMessages")) || [];
    const updatedData = [...existingData, formData];
    localStorage.setItem("contactMessages", JSON.stringify(updatedData));

    // Clear form fields
    setFormData({
      name: "",
      email: "",
      message: "",
    });

    alert("Your message has been sended successfully!");
  };

  return (
    <div className={` px-6 py-8  text-gray-800 ${toggle?"text-white":" bg-white"}`}>
      <h1 className="text-4xl font-bold text-center text-violet-800 mb-6">
        Contact Us
      </h1>
      <p className="text-lg leading-relaxed mb-4 text-center">
        We’d love to hear from you! Whether you have a question about your order, feedback on our services, or just want to say hello, our team is here to help.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Information */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-violet-700">Get in Touch</h2>
          <p className="text-lg mb-2">
            <strong>Email:</strong> <a href="mailto:support@onshop.com"></a>support@onshop.com
          </p>
          <p className="text-lg mb-2">
            <strong>Phone:</strong><a href="tel:9639763983 ">+91 96 39 76 39 83 </a> 
          </p>
          <p className="text-lg mb-2">
            <strong>Address:</strong> 123 On-shop Street, Guindy, Chennai, Pin-600 015
          </p>
          <p className="text-lg">
            Our support team is available Monday to Friday, 9:00 AM to 6:00 PM.
          </p>
        </div>

        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-violet-700">Send Us a Message</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-lg font-medium mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-violet-500 focus:border-violet-500"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-lg font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-violet-500 focus:border-violet-500"
                placeholder="Your Email"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-lg font-medium mb-1">
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-violet-500 focus:border-violet-500"
                rows="5"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-violet-700 text-white py-2 rounded-md hover:bg-violet-800 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
