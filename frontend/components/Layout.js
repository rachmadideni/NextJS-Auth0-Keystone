import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
}
