"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Settings() {
  return (
    <div className="mx-auto max-w-6xl space-y-6 p-4">
      <h1 className="text-2xl font-bold">Configuraciones</h1>
      <p className="text-gray-500 dark:text-gray-400">
        Ajusta las preferencias básicas de la aplicación.
      </p>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {/* Configuración de Tema */}
        <Card>
          <CardHeader>
            <CardTitle>Tema</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Ajusta el tema de la aplicación.</p>
            <div className="mt-4 flex gap-2">
              <Button variant="outline">Claro</Button>
              <Button variant="outline">Oscuro</Button>
            </div>
          </CardContent>
        </Card>
        {/* Configuración de Idioma */}
        <Card>
          <CardHeader>
            <CardTitle>Idioma</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Selecciona el idioma de la interfaz.</p>
            <div className="mt-4 flex gap-2">
              <Button variant="outline">Español</Button>
              <Button variant="outline">Inglés</Button>
            </div>
          </CardContent>
        </Card>
        {/* Configuración de Notificaciones */}
        <Card>
          <CardHeader>
            <CardTitle>Notificaciones</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Configura la recepción de notificaciones.</p>
            <div className="mt-4 flex gap-2">
              <Button variant="outline">Activadas</Button>
              <Button variant="outline">Desactivadas</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
