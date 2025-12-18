import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-[#1c1c1c] text-white">
      <ScrollToTop />

      <Header />

      {/* IMPORTANT: flex-1 creates a bounded scroll area */}
      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
