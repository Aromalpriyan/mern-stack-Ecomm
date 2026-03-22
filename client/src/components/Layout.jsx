import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Toaster } from "sonner";

const Layout = ({title, description, keywords, author}) => {
  return (
    <div>
      <Toaster position="top-right" richColors/>
        <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <meta name="author" content={author} />
                <title>{title}</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
      <Navbar />
      <main className="min-h-screen pt-24 px-6 over">
        <Outlet />
      </main>
      <Footer />
      

    </div>
  );
};

Layout.defaultProps = {
  title:"MyStore",
  description:"MERN Stack Ecommerce App",
  keywords:"Nodejs, Expressjs, Reactjs, HTML, Tailwindcss",
  author:"Aromal"
}

export default Layout;