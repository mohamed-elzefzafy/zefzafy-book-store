import "./contactus.css";

const ContactUs = () => {
    return (
      <section className="contact">
        <div className="contact-wrabber">
          <div className="contact-item">
            <div className="contact-item-icon">
              <i className="bi bi-house-fill"></i>
              Address
              <p className="contact-item-text">Iraq - Baghdad - Alrashid st</p>

            </div>
          </div>

          <div className="contact-item">
            <div className="contact-item-icon">
              <i className="bi bi-telephone-fill"></i>
              Phone
              <p className="contact-item-text">123-456-789</p>
              
            </div>
          </div>


          <div className="contact-item">
            <div className="contact-item-icon">
              <i className="bi bi-envelope-fill"></i>
              Email
              <p className="contact-item-text">info@fakeemail.com</p>
              
            </div>
          </div>
        </div>

        <form  onSubmit={e => e.preventDefault()} className="contact-form">
        <h2 className="contact-form-title">Contact Us Form</h2>
             <div className="contact-input-wrabber">
              <input type="text" placeholder="Name *" /> 
              <input type="text" placeholder="Subject *" /> 
              <input type="email" placeholder="Email *" /> 
             </div>
             <textarea className="contact-text-area" placeholder="Your Message *" rows={5}></textarea>
             <button className="contact-btn">Send</button>
        </form>
      </section>
    );
}

export default ContactUs;
