"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Layers,
  LayoutDashboard,
  Video,
  Settings,
  User,
} from "lucide-react";
import React from "react";

interface SidebarProps {
  activeView: string;
  setActiveView: React.Dispatch<React.SetStateAction<string>>;
}

export default function Sidebar({ activeView, setActiveView }: SidebarProps) {
  return (
    <div className="hidden w-64 flex-col bg-white dark:bg-gray-800 md:flex">
      {/* Encabezado del Sidebar */}
      <div className="flex h-14 items-center border-b px-4">
        <div className="flex items-center gap-2">
          <Layers className="h-6 w-6 text-blue-600" />
          <span className="text-lg font-semibold">DO</span>
        </div>
      </div>
      <nav className="flex-1 overflow-auto py-4">
        {/* Sección Main */}
        <div className="px-4 py-2">
          <h2 className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
            Main
          </h2>
          <div className="space-y-1">
            <Link href="/dashboard">
              <Button
                variant="ghost"
                className={`w-full justify-start gap-2 ${
                  activeView === "dashboard" ? "bg-gray-100 dark:bg-gray-700" : ""
                }`}
                onClick={() => setActiveView("dashboard")}
              >
                <LayoutDashboard className="h-4 w-4" />
                Dashboard
              </Button>
            </Link>
          </div>
        </div>
        {/* Sección Meetings */}
        <div className="px-4 py-2">
          <h2 className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
            Meetings
          </h2>
          <div className="space-y-1">
            <Link href="/virtual-room">
              <Button
                variant="ghost"
                className="w-full justify-start gap-2"
                onClick={() => setActiveView("virtualRoom")}
              >
                <Video className="h-4 w-4" />
                Virtual Room
              </Button>
            </Link>
          </div>
        </div>
        {/* Sección General */}
        <div className="px-4 py-2">
          <h2 className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
            General
          </h2>
          <div className="space-y-1">
            <Link href="/settings">
              <Button
                variant="ghost"
                className="w-full justify-start gap-2"
                onClick={() => setActiveView("settings")}
              >
                <Settings className="h-4 w-4" />
                Settings
              </Button>
            </Link>
            <Link href="/profile">
              <Button
                variant="ghost"
                className="w-full justify-start gap-2"
                onClick={() => setActiveView("profile")}
              >
                <User className="h-4 w-4" />
                Profile
              </Button>
            </Link>
          </div>
        </div>
      </nav>
      {/* Footer del Sidebar */}
      <div className="border-t p-4">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-full bg-gray-200">
            <img
              src="/placeholder.svg?height=36&width=36"
              alt="User avatar"
              className="h-full w-full rounded-full object-cover"
            />
          </div>
          <div>
            <p className="text-sm font-medium">John Doe</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              john@example.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
