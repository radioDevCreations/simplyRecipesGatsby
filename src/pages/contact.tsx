import React from "react";
import Layout from "../components/Layout";

const Contact = () => {
  return (
    <>
      <Layout>
        <main className="page">
          <section className="contact-page">
            <article className="contact-info">
              <h3>Want To Get In Touch?</h3>
              <p>
                Master cleanse edison bulb meggings succulents. Etsy street art
                flexitarian, wayfarers irony seitan master cleanse vinyl
                readymade copper mug small batch hoodie viral craft beer.
              </p>
              <p>
                Chillwave vexillologist thundercats photo booth chia you
                probably haven't heard of them gentrify intelligentsia
                chicharrones tilde small batch butcher truffaut tattooed.
              </p>
              <p>
                Banjo gentrify photo booth la croix, tacos marfa VHS austin tbh
                swag gochujang fam lomo.
              </p>
            </article>
            <article className="form contact-form">
              <div>
                <label htmlFor="name">your name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div>
                <label htmlFor="email"></label>
                <input type="text" name="email" id="email" />
              </div>
              <div>
                <label htmlFor="message"></label>
                <textarea name="message" id="message"></textarea>
              </div>
              <button type="submit" className="btn block">
                submit
              </button>
            </article>
          </section>
        </main>
      </Layout>
    </>
  );
};

export default Contact;
