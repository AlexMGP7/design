"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Formulario() {
  const [satisfaccion, setSatisfaccion] = useState("");
  const [departamento, setDepartamento] = useState("");
  const [comodidad, setComodidad] = useState("");
  const [importanciaTrabajo, setImportanciaTrabajo] = useState("");
  const [fortalezas, setFortalezas] = useState("");
  const [cambioDeseado, setCambioDeseado] = useState("");
  const [colaboracion, setColaboracion] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Aquí podrías enviar los datos del formulario
    console.log({
      satisfaccion,
      departamento,
      comodidad,
      importanciaTrabajo,
      fortalezas,
      cambioDeseado,
      colaboracion,
    });
  };

  const inputClasses =
    "mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 transition-colors";
    
  return (
    <div className="mx-auto max-w-2xl p-6 space-y-6">
      <h1 className="text-3xl font-bold text-center">
        Encuesta de Satisfacción del Empleado
      </h1>
      <p className="text-center text-gray-500 dark:text-gray-400">
        Este formulario es anónimo. Responde las siguientes preguntas para ayudarnos a mejorar el ambiente laboral.
      </p>
      <Card className="shadow-lg rounded-xl">
        <CardHeader className="border-b">
          <CardTitle className="text-xl">Formulario de Satisfacción</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Nivel de Satisfacción */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Nivel de Satisfacción
              </label>
              <select
                value={satisfaccion}
                onChange={(e) => setSatisfaccion(e.target.value)}
                className={`${inputClasses} appearance-none`}
              >
                <option value="">Seleccione...</option>
                <option value="muy_insatisfecho">Muy Insatisfecho</option>
                <option value="insatisfecho">Insatisfecho</option>
                <option value="neutral">Neutral</option>
                <option value="satisfecho">Satisfecho</option>
                <option value="muy_satisfecho">Muy Satisfecho</option>
              </select>
            </div>
            {/* Departamento */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Departamento
              </label>
              <select
                value={departamento}
                onChange={(e) => setDepartamento(e.target.value)}
                className={`${inputClasses} appearance-none`}
              >
                <option value="">Seleccione...</option>
                <option value="ventas">Ventas</option>
                <option value="marketing">Marketing</option>
                <option value="desarrollo">Desarrollo</option>
                <option value="administracion">Administración</option>
                <option value="recursos_humanos">Recursos Humanos</option>
              </select>
            </div>
            {/* Comodidad en el entorno de trabajo */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                ¿Te sientes cómodo en tu entorno de trabajo?
              </label>
              <select
                value={comodidad}
                onChange={(e) => setComodidad(e.target.value)}
                className={`${inputClasses} appearance-none`}
              >
                <option value="">Seleccione...</option>
                <option value="no">No</option>
                <option value="si">Sí</option>
              </select>
            </div>
            {/* Importancia del trabajo */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                ¿Crees que tu trabajo es tan importante como el de otros en la empresa?
              </label>
              <select
                value={importanciaTrabajo}
                onChange={(e) => setImportanciaTrabajo(e.target.value)}
                className={`${inputClasses} appearance-none`}
              >
                <option value="">Seleccione...</option>
                <option value="no_importante">No es importante</option>
                <option value="poco_importante">Poco importante</option>
                <option value="igual_importante">Igual de importante</option>
                <option value="muy_importante">Muy importante</option>
              </select>
            </div>
            {/* Fortalezas de la compañía */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                ¿Cuáles consideras que son las mayores fortalezas de la compañía?
              </label>
              <textarea
                value={fortalezas}
                onChange={(e) => setFortalezas(e.target.value)}
                rows={3}
                className={`${inputClasses} resize-none`}
                placeholder="Escribe tus comentarios..."
              />
            </div>
            {/* Cambio deseado */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                ¿Qué cambio te gustaría que sucediera en la empresa?
              </label>
              <textarea
                value={cambioDeseado}
                onChange={(e) => setCambioDeseado(e.target.value)}
                rows={3}
                className={`${inputClasses} resize-none`}
                placeholder="Escribe tu sugerencia..."
              />
            </div>
            {/* Colaboración para mejorar dinámicas internas */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                ¿Estás dispuesto a colaborar con tus compañeros para mejorar las dinámicas internas?
              </label>
              <select
                value={colaboracion}
                onChange={(e) => setColaboracion(e.target.value)}
                className={`${inputClasses} appearance-none`}
              >
                <option value="">Seleccione...</option>
                <option value="no">No</option>
                <option value="si">Sí</option>
              </select>
            </div>
            <div className="pt-4">
              <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white transition-colors">
                Enviar Encuesta
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
