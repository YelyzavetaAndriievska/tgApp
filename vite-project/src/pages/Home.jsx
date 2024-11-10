import Footer from "../components/Footer";

export default function Home() {
  const reactLogo =
    "https://user-images.githubusercontent.com/78242022/268242274-808a779e-7026-487b-ae56-d2a0e9b5b192.png";

  return (
    <>
      <main>
        <section className="content">
          <section className="logo-section">
            <img src={reactLogo} alt="" />
          </section>

          <section className="welcome-section">
            <p>Welcome to</p>
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
    </>
  );
}
