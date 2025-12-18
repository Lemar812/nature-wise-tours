// client/src/admin/Login.jsx
import React from "react";

export default function AdminLogin(){
  return (
    <div className="container mx-auto px-6 py-28 max-w-md">
      <div className="premium-card p-8">
        <h2 className="text-2xl font-display mb-4">Admin Login</h2>
        <form className="space-y-4">
          <input className="w-full p-3 rounded bg-black/40 border border-white/10" placeholder="Email" />
          <input className="w-full p-3 rounded bg-black/40 border border-white/10" placeholder="Password" type="password" />
          <button className="btn-gold px-4 py-2 rounded-full">Sign in</button>
        </form>
      </div>
    </div>
  );
}
