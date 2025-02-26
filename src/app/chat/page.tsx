"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type Message = {
  id: number;
  sender: "consultor" | "usuario";
  text: string;
};

const mensajesIniciales: Message[] = [
  { id: 1, sender: "consultor", text: "¡Hola! ¿En qué puedo ayudarte hoy?" },
  { id: 2, sender: "usuario", text: "Tengo una consulta sobre nuestros procesos internos." },
  { id: 3, sender: "consultor", text: "Claro, cuéntame más detalles para poder ayudarte." },
];

export default function ChatPage() {
  const [mensajes, setMensajes] = useState<Message[]>(mensajesIniciales);
  const [nuevoMensaje, setNuevoMensaje] = useState("");

  const handleSend = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (nuevoMensaje.trim()) {
      const mensaje: Message = {
        id: mensajes.length + 1,
        sender: "usuario",
        text: nuevoMensaje,
      };
      setMensajes([...mensajes, mensaje]);
      setNuevoMensaje("");
    }
  };

  return (
    <div className="mx-auto max-w-3xl space-y-6 p-4">
      <h1 className="text-2xl font-bold">Consultoría en Chat</h1>
      <Card>
        <CardHeader>
          <CardTitle>Chat de Consultoría</CardTitle>
        </CardHeader>
        <CardContent className="h-96 overflow-y-auto space-y-4">
          {mensajes.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.sender === "usuario" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`rounded-lg p-3 max-w-xs ${
                  msg.sender === "usuario"
                    ? "bg-indigo-500 text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
        </CardContent>
        <div className="border-t p-4">
          <form onSubmit={handleSend} className="flex gap-2">
            <Input
              value={nuevoMensaje}
              onChange={(e) => setNuevoMensaje(e.target.value)}
              placeholder="Escribe tu mensaje..."
              className="flex-1"
            />
            <Button type="submit">Enviar</Button>
          </form>
        </div>
      </Card>
    </div>
  );
}
