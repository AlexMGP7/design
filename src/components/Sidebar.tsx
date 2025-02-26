"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  Layers,
  LayoutDashboard,
  BarChart,
  CreditCard,
  Users,
  Video,
  Calendar,
  Bell,
  Settings,
  User,
} from "lucide-react";

interface SidebarProps {
  activeView: string;
  setActiveView: (view: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeView, setActiveView }) => {
  return (
    <div className="hidden w-64 flex-col bg-white dark:bg-gray-800 md:flex">
      <div className="flex h-14 items-center border-b px-4">
        <div className="flex items-center gap-2">
          <Layers className="h-6 w-6 text-blue-600" />
          <span className="text-lg font-semibold">Dashboard</span>
        </div>
      </div>
      <nav className="flex-1 overflow-auto py-4">
        <div className="px-4 py-2">
          <h2 className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
            Main
          </h2>
          <div className="space-y-1">
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
            <Button variant="ghost" className="w-full justify-start gap-2">
              <BarChart className="h-4 w-4" />
              Analytics
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2">
              <CreditCard className="h-4 w-4" />
              Transactions
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2">
              <Users className="h-4 w-4" />
              Customers
            </Button>
          </div>
        </div>
        <div className="px-4 py-2">
          <h2 className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
            Meetings
          </h2>
          <div className="space-y-1">
            <Button
              variant="ghost"
              className="w-full justify-start gap-2"
              onClick={() => setActiveView("virtualRoom")}
            >
              <Video className="h-4 w-4" />
              Virtual Room
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2">
              <Calendar className="h-4 w-4" />
              Schedule Meeting
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2">
              <Users className="h-4 w-4" />
              Participants
            </Button>
          </div>
        </div>
        <div className="px-4 py-2">
          <h2 className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
            General
          </h2>
          <div className="space-y-1">
            <Button variant="ghost" className="w-full justify-start gap-2">
              <Settings className="h-4 w-4" />
              Settings
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2">
              <User className="h-4 w-4" />
              Profile
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2">
              <Bell className="h-4 w-4" />
              Notifications
            </Button>
          </div>
        </div>
      </nav>
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
};

export default Sidebar;
