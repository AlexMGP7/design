"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeView, setActiveView] = useState("dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen">
      <Sidebar
        activeView={activeView}
        setActiveView={setActiveView}
        isOpen={isSidebarOpen}
        onLinkClick={() => setIsSidebarOpen(false)}
      />
      <div className="flex-1 flex flex-col">
        <Header onToggleSidebar={() => setIsSidebarOpen((prev) => !prev)} />
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}
