"use client";

import { Button } from "@/components/ui/button";
import { Layers, Bell } from "lucide-react";

export default function Header() {
  return (
    <header className="flex h-14 items-center justify-between border-b bg-white px-4 dark:bg-gray-800">
      <Button variant="ghost" size="icon" className="md:hidden">
        <Layers className="h-6 w-6" />
        <span className="sr-only">Toggle menu</span>
      </Button>
      <div className="flex items-center gap-2 md:hidden">
        <Layers className="h-6 w-6 text-blue-600" />
        <span className="text-lg font-semibold">Dashboard</span>
      </div>
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon">
          <Bell className="h-5 w-5" />
          <span className="sr-only">Notifications</span>
        </Button>
        <div className="h-8 w-8 rounded-full bg-gray-200 md:hidden">
          <img
            src="/placeholder.svg?height=32&width=32"
            alt="User avatar"
            className="h-full w-full rounded-full object-cover"
          />
        </div>
      </div>
    </header>
  );
}
