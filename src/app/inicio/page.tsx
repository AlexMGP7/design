"use client";

import React from "react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center px-4">
      <div className="max-w-2xl text-center">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200">
          ¡Bienvenido/a a nuestra Plataforma!
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
          Nos alegra tenerte aquí. Explora nuestras soluciones y descubre cómo podemos ayudarte a potenciar el crecimiento de tu empresa.
        </p>
        <p className="mt-2 text-gray-500 dark:text-gray-400">
          Si necesitas asistencia, nuestro equipo de consultores está listo para ayudarte.
        </p>
      </div>
    </div>
  );
}
