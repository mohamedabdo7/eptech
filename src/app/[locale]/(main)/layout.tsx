import Footer from "@/app/components/layouts/Footer";
import Navbar from "@/app/components/layouts/Navbar";
import React from "react";

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      {/* Sticky transparent navbar that works on all pages */}
      <Navbar />

      {/* Page content */}
      {children}

      {/* Footer with different background */}
      <Footer />
    </>
  );
};

export default MainLayout;
// import React from "react";

// const MainLayout: React.FC<{
//   children: React.ReactNode;
// }> = ({ children }) => {
//   return (
//     <>
//       <div>Navbar</div>
//       {children}
//       <div>Footer</div>
//     </>
//   );
// };

// export default MainLayout;
