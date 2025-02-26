"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Definimos un tipo para cada actividad y para el objeto que almacena las actividades
type Activity = { time: string; task: string };
const mockActivities: Record<string, Activity[]> = {
  "2023-07-01": [
    { time: "09:00 AM", task: "Revisión de correos" },
    { time: "10:30 AM", task: "Reunión de equipo" },
    { time: "12:00 PM", task: "Almuerzo" },
    { time: "02:00 PM", task: "Presentación de avances" },
  ],
  "2023-07-02": [
    { time: "09:30 AM", task: "Actualización de informes" },
    { time: "11:00 AM", task: "Revisión de pendientes" },
    { time: "01:00 PM", task: "Almuerzo" },
    { time: "03:00 PM", task: "Llamada con cliente" },
  ],
  // Puedes agregar más fechas y actividades
};

export default function ActividadesPage() {
  const [selectedDate, setSelectedDate] = useState("2023-07-01");

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(e.target.value);
  };

  // Obtenemos las actividades para la fecha seleccionada
  const activities = mockActivities[selectedDate] || [];

  return (
    <div className="mx-auto max-w-3xl space-y-6 p-4">
      <h1 className="text-2xl font-bold">Actividades Diarias</h1>
      <p className="text-gray-500">
        Selecciona una fecha para ver la rutina de actividades.
      </p>

      {/* Selector de fecha */}
      <div className="space-y-2">
        <label htmlFor="actividad-fecha" className="block text-sm font-medium text-gray-700">
          Fecha
        </label>
        <input
          type="date"
          id="actividad-fecha"
          className="block w-full max-w-xs rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          value={selectedDate}
          onChange={handleDateChange}
        />
      </div>

      {/* Listado de actividades */}
      <Card>
        <CardHeader>
          <CardTitle>Rutina para {selectedDate}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {activities.length > 0 ? (
            activities.map((act: Activity, index: number) => (
              <div key={`${selectedDate}-${index}`} className="flex items-baseline gap-2">
                <p className="font-medium">{act.time}</p>
                <p className="text-gray-600">{act.task}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No hay actividades programadas para este día.</p>
          )}
        </CardContent>
      </Card>

      {/* Botón de acción (Opcional) */}
      <Button className="mt-4">Agregar Nueva Actividad</Button>
    </div>
  );
}
