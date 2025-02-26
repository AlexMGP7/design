"use client";

import React from "react";

/** Representa una fase o tarea en el plan */
interface Tarea {
  id: string;
  nombre: string;
  inicio: string; // 'YYYY-MM-DD'
  fin: string;    // 'YYYY-MM-DD'
  estado: "Pendiente" | "En Progreso" | "Finalizado";
  color?: string;
}

/** Datos falsos para el timeline */
const tareas: Tarea[] = [
  {
    id: "1",
    nombre: "Diagnóstico Inicial",
    inicio: "2023-07-01",
    fin: "2023-07-05",
    estado: "En Progreso",
    color: "#3b82f6", // azul
  },
  {
    id: "2",
    nombre: "Levantamiento de Procesos",
    inicio: "2023-07-03",
    fin: "2023-07-10",
    estado: "Pendiente",
    color: "#f59e0b", // amarillo
  },
  {
    id: "3",
    nombre: "Análisis de Riesgos",
    inicio: "2023-07-08",
    fin: "2023-07-12",
    estado: "Pendiente",
    color: "#ef4444", // rojo
  },
  {
    id: "4",
    nombre: "Propuesta de Soluciones",
    inicio: "2023-07-11",
    fin: "2023-07-20",
    estado: "Pendiente",
    color: "#a855f7", // morado
  },
  {
    id: "5",
    nombre: "Implementación",
    inicio: "2023-07-15",
    fin: "2023-07-25",
    estado: "Pendiente",
    color: "#10b981", // verde
  },
];

/** Obtiene un array con todas las fechas (YYYY-MM-DD) desde 'inicio' hasta 'fin'. */
function obtenerRangoFechas(inicio: string, fin: string): string[] {
  const arr: string[] = [];
  const current = new Date(inicio);
  const last = new Date(fin);

  while (current <= last) {
    arr.push(current.toISOString().split("T")[0]);
    current.setDate(current.getDate() + 1);
  }
  return arr;
}

export default function PlanificacionPage() {
  // 1. Determinar fecha mínima y máxima para nuestro timeline (en este ejemplo, se hace manualmente).
  const fechaMin = "2023-07-01";
  const fechaMax = "2023-07-30";
  
  // 2. Generar todas las fechas (columnas) del timeline.
  const columnas = obtenerRangoFechas(fechaMin, fechaMax);

  /** Calcula cuántos días hay entre dos fechas (inclusive). */
  function diasEntre(f1: string, f2: string): number {
    const d1 = new Date(f1);
    const d2 = new Date(f2);
    return Math.round((d2.getTime() - d1.getTime()) / (1000 * 60 * 60 * 24));
  }

  return (
    <div className="p-4 space-y-6 max-w-7xl mx-auto">
      <div>
        <h1 className="text-2xl font-bold mb-1">Plan de Consultoría</h1>
        <p className="text-gray-500">Vista en forma de Timeline al estilo Jira</p>
      </div>

      {/* Contenedor principal scrollable */}
      <div className="border rounded-md shadow-sm overflow-x-auto bg-white dark:bg-gray-900">
        {/* Cabecera de Fechas */}
        <div className="sticky top-0 bg-gray-100 dark:bg-gray-800 border-b z-10">
          <div className="flex">
            {/* Columna izquierda vacía para alinear con "Info de Tarea" */}
            <div className="min-w-[200px] p-2" />
            {/* Fechas */}
            {columnas.map((col) => {
              const dia = new Date(col).getDate();
              return (
                <div
                  key={col}
                  className="p-2 text-center text-xs w-16 border-l border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400"
                >
                  {dia}
                </div>
              );
            })}
          </div>
        </div>

        {/* Lista de Tareas */}
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          {tareas.map((tarea) => {
            // Cálculo de offsets
            const startIndex = diasEntre(fechaMin, tarea.inicio);
            const endIndex = diasEntre(fechaMin, tarea.fin);

            return (
              <div key={tarea.id} className="flex hover:bg-gray-50 dark:hover:bg-gray-800">
                {/* Columna Izquierda: Info de la tarea */}
                <div className="min-w-[200px] p-2 border-r border-gray-200 dark:border-gray-700">
                  <p className="font-semibold text-gray-700 dark:text-gray-300">
                    {tarea.nombre}
                  </p>
                  <p className="text-sm text-gray-500">{tarea.estado}</p>
                  <p className="text-xs text-gray-400 mt-1">
                    {tarea.inicio} - {tarea.fin}
                  </p>
                </div>

                {/* Columnas de Fechas (Timeline) */}
                <div className="relative flex">
                  {columnas.map((col) => (
                    <div
                      key={col}
                      className="w-16 h-14 border-r border-gray-200 dark:border-gray-700"
                    />
                  ))}

                  {/* Barra de la tarea */}
                  <div
                    className="absolute top-4 h-3 rounded-full transition-colors duration-300"
                    style={{
                      left: `${startIndex * 4}rem`, // 4rem = ancho w-16
                      width: `${(endIndex - startIndex + 1) * 4}rem`,
                      backgroundColor: tarea.color || "#3b82f6",
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
