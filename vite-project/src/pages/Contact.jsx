// import { Link } from "react-router-dom";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <main>
      <section className="content">
        <section className="welcome-section">
          <p>Contact</p>
          <h1> React blogs Home page</h1>
          <p>
            click the link on the navbar to go to a different section on the
            page
          </p>
        </section>
      </section>

      <section className="footer-section">
        <Footer />
      </section>
    </main>
  );
}
