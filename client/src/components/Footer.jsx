import { Link } from "react-router-dom";
import logo from "../assets/Nature Wise Logo Transparent.png";
import {
  Facebook,
  Instagram,
  X,        // ✅ correct Lucide icon (NOT Twitter)
  Phone,
  Mail,
  MapPin,
  Twitter,
} from "../lib/icons";

export default function Footer() {
  return (
    <footer className="bg-[#0f2f25] text-gray-200">
      <div className="container mx-auto px-6 py-20 grid gap-12 md:grid-cols-4">

        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-6">
           <div className="text-xl font-extrabold text-white">
              Nature Wise Tours
            </div>
          </div>

          <p className="text-sm leading-relaxed text-gray-300 max-w-sm">
            Expertly guided luxury safari adventures across Tanzania and Kenya’s
            most iconic national parks.
          </p>

          {/* Socials */}
          <div className="flex gap-4 mt-6">
            {[Facebook, Instagram, Twitter].map((Icon, i) => (
              <div
                key={i}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[var(--brand-gold)]
                           flex items-center justify-center transition-all cursor-pointer"
              >
                <Icon size={18} />
              </div>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-6">Quick Links</h4>
          <ul className="space-y-4 text-sm">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/booking">Online Booking</Link></li>
          </ul>
        </div>

        {/* Experiences */}
        <div>
          <h4 className="text-white font-semibold mb-6">Top Experiences</h4>
          <ul className="space-y-4 text-sm">
  <li>
    <Link
      to="/destinations#tanzania"
      className="hover:text-[var(--brand-gold)] transition"
    >
      Tanzania Safaris
    </Link>
  </li>


  <li>
    <Link
      to="/destinations#kilimanjaro"
      className="hover:text-[var(--brand-gold)] transition"
    >
      Kilimanjaro Trekking
    </Link>
  </li>


  <li>
    <Link
      to="/destinations#zanzibar"
      className="hover:text-[var(--brand-gold)] transition"
    >
      Zanzibar Holidays
    </Link>
  </li>

  <li>
    <Link
      to="/destinations#kenya"
      className="hover:text-[var(--brand-gold)] transition"
    >
      Kenya Safaris
    </Link>
  </li>
</ul>

        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-6">Contact Info</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-center gap-3"><MapPin size={16}/> Arusha, Tanzania</li>
            <li className="flex items-center gap-3"><Phone size={16}/> +255 741 950 553</li>
            <li className="flex items-center gap-3"><Phone size={16}/> +255 757 881 824</li>
            <li className="flex items-center gap-3"><Mail size={16}/> info@naturewisetours.com</li>
          </ul>
        </div>

      </div>

      <div className="border-t border-white/10" />

      <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
        <div>© 2025 Nature Wise Tours · All rights reserved</div>
        <div>
  Created by{" "}
  <a
    href="https://wa.me/message/5VKY4GHMGJ65J1"
    target="_blank"
    rel="noopener noreferrer"
    className="
      text-[var(--brand-gold)] font-semibold
      hover:underline
      transition
    "
  >
    Elisha Lema
  </a>
</div>

      </div>
    </footer>
  );
}
