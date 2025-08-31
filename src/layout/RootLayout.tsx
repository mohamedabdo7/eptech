// components/layout/Layout.jsx
import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Navbar from "../components/layouts/Navbar";
import Footer from "../components/layouts/Footer";

const RootLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
