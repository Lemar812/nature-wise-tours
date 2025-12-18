import React from 'react';
export default function AdminSidebar(){
  return (
    <aside className="w-64 p-4 premium-card rounded-lg">
      <nav className="space-y-2">
        <a href="/admin" className="block py-2 px-3 rounded hover:bg-zinc-800">Overview</a>
        <a href="/admin/manage-tours" className="block py-2 px-3 rounded hover:bg-zinc-800">Manage Tours</a>
        <a href="/admin/manage-bookings" className="block py-2 px-3 rounded hover:bg-zinc-800">Manage Bookings</a>
        <a href="/admin/gallery" className="block py-2 px-3 rounded hover:bg-zinc-800">Gallery</a>
      </nav>
    </aside>
  );
}
