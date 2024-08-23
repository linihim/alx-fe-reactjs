import { useState } from 'react';

   function Contact() {
     const [formData, setFormData] = useState({
       name: '',
       email: '',
       message: ''
     });

     const handleChange = (e) => {
       setFormData({ ...formData, [e.target.name]: e.target.value });
     };

     const handleSubmit = (e) => {
       e.preventDefault();
       alert('Form submitted!');
     };

     return (
        <div style={{ padding: '20px', backgroundColor: '#fff0f5', borderRadius: '10px' }}>
        <h1 style={{ color: '#cc0066', marginBottom: '20px' }}>Contact Us</h1>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', maxWidth: '400px', margin: '0 auto' }}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            style={{ padding: '10px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            style={{ padding: '10px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            style={{ padding: '10px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ccc', minHeight: '100px' }}
          />
          <button type="submit" style={{ padding: '10px', backgroundColor: '#cc0066', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
            Send Message
          </button>
        </form>
      </div>
     );
   }

   export default Contact;