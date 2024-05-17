"use client";

import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerOne}>
        <div className={styles.subscribe}>
          <div>
            <h3>Be the first to know</h3>
            <p>Sign up for updates from mettā muse.</p>
          </div>
          <div className={styles.input}>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your e-mail..."
            />
            <button type="button">Subscribe</button>
          </div>
        </div>
        <div className={styles.contactUs_currency}>
          <div className={styles.contactUs}>
            <h3>Contact Us</h3>
            <p>+44 221 133 5360</p>
            <p>customercare@mettamuse.com</p>
          </div>
          <div className={styles.currency}>
            <h3>Currency</h3>
            <section>
              <img src="/us.svg" alt="us-Flag" />◆ USD
            </section>
            <p>
              Transactions will be completed in Euros and a currency reference
              is available on hover.
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div className={styles.footerTwo}>
        <div className={styles.section}>
          <div className={styles.muse_quick}>
            <div className={styles.muse}>
              <h3>mettta muse</h3>
              <ul>
                <li>About Us</li>
                <li>Stories</li>
                <li>Artisans</li>
                <li>Boutiques</li>
                <li>Contact Us</li>
                <li>EU Compliances Docs</li>
              </ul>
            </div>
            <div className={styles.quickLicks}>
              <h3>Quick links</h3>
              <ul>
                <li>Orders & Shipping</li>
                <li>Join/Login as a Seller</li>
                <li>Payment & Pricing</li>
                <li>Return & Refunds</li>
                <li>FAQs</li>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
              </ul>
            </div>
          </div>
          <div className={styles.followUs_payments}>
            <div className={styles.followUs}>
              <h3>follow us</h3>
              <section>
                <img src="/Insta.svg" alt="instagram" />
                <img src="/a.svg" alt="linkedin" />
              </section>
            </div>
            <div className={styles.payments}>
              <h3>
                mettā muse <span>Accepts</span>
              </h3>
              <section>
                <img src="/payments/googlePay.svg" alt="googlePay" />
                <img src="/payments/masterCard.svg" alt="masterCard" />
                <img src="/payments/paypal.svg" alt="paypal" />
                <img src="/payments/amex.svg" alt="amex" />
                <img src="/payments/applepay.svg" alt="applepay" />
                <img src="/payments/opay.svg" alt="opay" />
              </section>
            </div>
          </div>
        </div>
        <div className={styles.copyRight}>
          <p>Copyright © 2023 mettamuse. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
