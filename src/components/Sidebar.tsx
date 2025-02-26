"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Layers,
  LayoutDashboard,
  Video,
  Settings,
  User,
  Clipboard,
  MessageSquare,
  CalendarDays,
  ClipboardList,
} from "lucide-react";
import React, { useState } from "react";

interface SidebarProps {
  activeView: string;
  setActiveView: React.Dispatch<React.SetStateAction<string>>;
  isOpen: boolean;
  onLinkClick: () => void;
}

export default function Sidebar({
  activeView,
  setActiveView,
  isOpen,
  onLinkClick,
}: SidebarProps) {
  // Estado local para el rol: "empleado" o "consultor"
  const [role, setRole] = useState<"empleado" | "consultor">("empleado");

  const handleClick = (view: string) => {
    setActiveView(view);
    onLinkClick();
  };

  return (
    <div className={`${isOpen ? "block" : "hidden"} w-64 flex-col bg-white dark:bg-gray-800 md:flex`}>
      {/* Encabezado del Sidebar */}
      <div className="flex h-14 items-center border-b px-4">
        <div className="flex items-center gap-2">
          <Layers className="h-6 w-6 text-blue-600" />
          <span className="text-lg font-semibold">DO</span>
        </div>
      </div>

      <nav className="flex-1 overflow-auto py-4">
        {/* Sección Principal */}
        <div className="px-4 py-2">
          <h2 className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
            Principal
          </h2>
          <div className="space-y-1">
            {role === "empleado" ? (
              <Link href="/inicio">
                <Button
                  variant="ghost"
                  className={`w-full justify-start gap-2 ${activeView === "inicio" ? "bg-gray-100 dark:bg-gray-700" : ""}`}
                  onClick={() => handleClick("inicio")}
                >
                  <LayoutDashboard className="h-4 w-4" />
                  Inicio
                </Button>
              </Link>
            ) : (
              <Link href="/dashboard">
                <Button
                  variant="ghost"
                  className={`w-full justify-start gap-2 ${activeView === "dashboard" ? "bg-gray-100 dark:bg-gray-700" : ""}`}
                  onClick={() => handleClick("dashboard")}
                >
                  <LayoutDashboard className="h-4 w-4" />
                  Dashboard
                </Button>
              </Link>
            )}
            {role === "empleado" ? (
              <Link href="/formulario">
                <Button
                  variant="ghost"
                  className={`w-full justify-start gap-2 ${activeView === "formulario" ? "bg-gray-100 dark:bg-gray-700" : ""}`}
                  onClick={() => handleClick("formulario")}
                >
                  <Clipboard className="h-4 w-4" />
                  Formulario
                </Button>
              </Link>
            ) : (
              <Link href="/planificacion">
                <Button
                  variant="ghost"
                  className={`w-full justify-start gap-2 ${activeView === "planificacion" ? "bg-gray-100 dark:bg-gray-700" : ""}`}
                  onClick={() => handleClick("planificacion")}
                >
                  <ClipboardList className="h-4 w-4" />
                  Planificación
                </Button>
              </Link>
            )}
            <Link href="/actividades">
              <Button
                variant="ghost"
                className={`w-full justify-start gap-2 ${activeView === "actividades" ? "bg-gray-100 dark:bg-gray-700" : ""}`}
                onClick={() => handleClick("actividades")}
              >
                <CalendarDays className="h-4 w-4" />
                Actividades
              </Button>
            </Link>
            <Link href="/virtual-room">
              <Button
                variant="ghost"
                className={`w-full justify-start gap-2 ${activeView === "virtualRoom" ? "bg-gray-100 dark:bg-gray-700" : ""}`}
                onClick={() => handleClick("virtualRoom")}
              >
                <Video className="h-4 w-4" />
                Sala Virtual
              </Button>
            </Link>
            <Link href="/chat">
              <Button
                variant="ghost"
                className={`w-full justify-start gap-2 ${activeView === "chat" ? "bg-gray-100 dark:bg-gray-700" : ""}`}
                onClick={() => handleClick("chat")}
              >
                <MessageSquare className="h-4 w-4" />
                Chat
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
                className={`w-full justify-start gap-2 ${activeView === "settings" ? "bg-gray-100 dark:bg-gray-700" : ""}`}
                onClick={() => handleClick("settings")}
              >
                <Settings className="h-4 w-4" />
                Configuración
              </Button>
            </Link>
            <Link href="/profile">
              <Button
                variant="ghost"
                className={`w-full justify-start gap-2 ${activeView === "profile" ? "bg-gray-100 dark:bg-gray-700" : ""}`}
                onClick={() => handleClick("profile")}
              >
                <User className="h-4 w-4" />
                Perfil
              </Button>
            </Link>
          </div>
        </div>

        {/* Selector de rol colocado justo encima del footer */}
        <div className="px-4 py-2 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-around">
            <Button
              variant={role === "empleado" ? "default" : "outline"}
              size="sm"
              onClick={() => setRole("empleado")}
            >
              Empleado
            </Button>
            <Button
              variant={role === "consultor" ? "default" : "outline"}
              size="sm"
              onClick={() => setRole("consultor")}
            >
              Consultor
            </Button>
          </div>
        </div>
      </nav>

      {/* Footer del Sidebar */}
      <div className="border-t p-4">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-full bg-gray-200">
            <img
              src="/placeholder.svg?height=36&width=36"
              alt="Avatar de usuario"
              className="h-full w-full rounded-full object-cover"
            />
          </div>
          <div>
            <p className="text-sm font-medium">John Doe</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">john@example.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
