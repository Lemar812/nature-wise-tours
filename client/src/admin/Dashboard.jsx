// client/src/admin/Dashboard.jsx
import React from "react";

export default function AdminDashboard(){
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-2xl font-display">Admin Dashboard</h1>
      <div className="mt-6 grid md:grid-cols-3 gap-6">
        <div className="premium-card p-6">Bookings</div>
        <div className="premium-card p-6">Tours</div>
        <div className="premium-card p-6">Users</div>
      </div>
    </div>
  );
}
