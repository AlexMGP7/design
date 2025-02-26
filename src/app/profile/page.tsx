"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Profile() {
  return (
    <div className="mx-auto max-w-6xl space-y-6 p-4">
      <h1 className="text-2xl font-bold">Perfil</h1>
      <p className="text-gray-500 dark:text-gray-400">
        Revisa y actualiza tu información personal.
      </p>
      <Card>
        <CardHeader>
          <CardTitle>Información Personal</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Nombre
              </label>
              <p className="mt-1 text-gray-900">John Doe</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Correo Electrónico
              </label>
              <p className="mt-1 text-gray-900">john@example.com</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Teléfono
              </label>
              <p className="mt-1 text-gray-900">+1 234 567 890</p>
            </div>
          </div>
          <div className="mt-6">
            <Button>Editar Perfil</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
