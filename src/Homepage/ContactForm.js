import { useState } from "react";

function ContactForm() {
    // Define state variables to store form input values
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
  
    // Function to handle form submission
    const handleSubmit = (e) => {
      e.preventDefault();
      // Add your logic to handle form submission (e.g., sending an email)
      console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
      // Clear form fields
      setName('');
      setEmail('');
      setMessage('');
    };
  
    return (
      <section className="bg-transparent py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-8">Contact Me</h2>
  
          <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-lg border border-rose-900">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-rose-900"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-rose-900"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-rose-900"
                  required
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-rose-900 text-white px-6 py-3 rounded-md font-semibold hover:bg-rose-600 transition duration-300"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  }
  
  export default ContactForm;
  