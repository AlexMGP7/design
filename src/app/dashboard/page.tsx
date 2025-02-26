"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Download } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

//
// Datos para la pestaña "Resumen"
//
const dataSales = [
  { name: "Ene", value: 400 },
  { name: "Feb", value: 300 },
  { name: "Mar", value: 500 },
  { name: "Abr", value: 200 },
  { name: "May", value: 350 },
  { name: "Jun", value: 600 },
  { name: "Jul", value: 450 },
  { name: "Ago", value: 500 },
  { name: "Sep", value: 550 },
  { name: "Oct", value: 400 },
  { name: "Nov", value: 300 },
  { name: "Dic", value: 450 },
];

const dataSatisfaction = [
  { name: "Ene", value: 85 },
  { name: "Feb", value: 88 },
  { name: "Mar", value: 90 },
  { name: "Abr", value: 87 },
  { name: "May", value: 92 },
  { name: "Jun", value: 89 },
  { name: "Jul", value: 91 },
  { name: "Ago", value: 93 },
  { name: "Sep", value: 90 },
  { name: "Oct", value: 88 },
  { name: "Nov", value: 92 },
  { name: "Dic", value: 94 },
];

//
// Datos para la pestaña "Analíticas"
//
const dataAnalytics = [
  { name: "Proyecto A", value: 75 },
  { name: "Proyecto B", value: 50 },
  { name: "Proyecto C", value: 90 },
  { name: "Proyecto D", value: 65 },
  { name: "Proyecto E", value: 80 },
];

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="mx-auto max-w-6xl space-y-6 p-4">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-2xl font-bold">Tablero</h1>
          <p className="text-gray-500 dark:text-gray-400">¡Bienvenido, John!</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Descargar Informe
          </Button>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Resumen</TabsTrigger>
          <TabsTrigger value="analytics">Analíticas</TabsTrigger>
          <TabsTrigger value="reports">Reportes</TabsTrigger>
          <TabsTrigger value="notifications">Notificaciones</TabsTrigger>
        </TabsList>

        {/* ====================== Pestaña: RESUMEN ====================== */}
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            {/* Métrica de Ventas */}
            <Card>
              <CardHeader>
                <CardTitle>Métrica de Ventas</CardTitle>
              </CardHeader>
              <CardContent className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={dataSales}
                    margin={{ top: 5, right: 10, left: 10, bottom: 0 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis
                      dataKey="name"
                      tickLine={false}
                      axisLine={false}
                      padding={{ left: 10, right: 10 }}
                    />
                    <YAxis tickLine={false} axisLine={false} />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="#3b82f6"
                      strokeWidth={2}
                      dot={false}
                      activeDot={{ r: 6 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
            {/* Métrica de Satisfacción de Empleados */}
            <Card>
              <CardHeader>
                <CardTitle>Satisfacción de Empleados</CardTitle>
              </CardHeader>
              <CardContent className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={dataSatisfaction}
                    margin={{ top: 5, right: 10, left: 10, bottom: 0 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis
                      dataKey="name"
                      tickLine={false}
                      axisLine={false}
                      padding={{ left: 10, right: 10 }}
                    />
                    <YAxis tickLine={false} axisLine={false} />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="#10B981"
                      strokeWidth={2}
                      dot={false}
                      activeDot={{ r: 6 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* ====================== Pestaña: ANALÍTICAS ====================== */}
        <TabsContent value="analytics" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Analíticas de Proyectos</CardTitle>
              <CardDescription>
                Aquí se muestra el rendimiento de proyectos internos.
              </CardDescription>
            </CardHeader>
            <CardContent className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={dataAnalytics}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} />
                  <YAxis axisLine={false} tickLine={false} />
                  <Tooltip />
                  <Bar dataKey="value" fill="#6366F1" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Analíticas de Marketing</CardTitle>
              <CardDescription>
                Datos ficticios de campañas y conversiones.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between">
                <div>
                  <p className="text-lg font-semibold">Campaña A</p>
                  <p className="text-sm text-gray-500">Conversiones: 120</p>
                </div>
                <div>
                  <p className="text-lg font-semibold text-green-600">+15%</p>
                  <p className="text-sm text-gray-500 text-right">
                    vs. mes anterior
                  </p>
                </div>
              </div>
              <div className="my-4 border-t" />
              <div className="flex justify-between">
                <div>
                  <p className="text-lg font-semibold">Campaña B</p>
                  <p className="text-sm text-gray-500">Conversiones: 90</p>
                </div>
                <div>
                  <p className="text-lg font-semibold text-red-600">-10%</p>
                  <p className="text-sm text-gray-500 text-right">
                    vs. mes anterior
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* ====================== Pestaña: REPORTES ====================== */}
        <TabsContent value="reports" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Últimos Reportes Generados</CardTitle>
              <CardDescription>
                Archivos PDF y CSV listos para descargar.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <span className="font-medium">Reporte Financiero - Q1</span> ·{" "}
                  <span className="text-sm text-gray-500">PDF, 1.2 MB</span>
                </li>
                <li>
                  <span className="font-medium">Reporte de Ventas - Marzo</span>{" "}
                  · <span className="text-sm text-gray-500">CSV, 800 KB</span>
                </li>
                <li>
                  <span className="font-medium">Reporte de Recursos Humanos</span>{" "}
                  · <span className="text-sm text-gray-500">PDF, 2.3 MB</span>
                </li>
              </ul>
              <div className="mt-4">
                <Button variant="outline">Ver Todos</Button>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Progreso de Reportes</CardTitle>
              <CardDescription>Estado de reportes automáticos</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <p>Reporte de Presupuesto</p>
                  <span className="text-xs text-white bg-blue-600 px-2 py-0.5 rounded-full">
                    En proceso
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <p>Reporte de Inventario</p>
                  <span className="text-xs text-white bg-green-600 px-2 py-0.5 rounded-full">
                    Completo
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <p>Reporte de Nómina</p>
                  <span className="text-xs text-white bg-yellow-600 px-2 py-0.5 rounded-full">
                    Pendiente
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* ====================== Pestaña: NOTIFICACIONES ====================== */}
        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Notificaciones Recientes</CardTitle>
              <CardDescription>
                Mensajes y alertas de las últimas 24 horas
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="mt-1 h-2 w-2 rounded-full bg-red-500" />
                  <div>
                    <p className="text-sm font-medium">Falla en Servidor A</p>
                    <p className="text-xs text-gray-500">
                      Se ha detectado una falla en el servidor A. Revisa el panel
                      de logs.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 h-2 w-2 rounded-full bg-blue-500" />
                  <div>
                    <p className="text-sm font-medium">
                      Solicitud de nuevo usuario
                    </p>
                    <p className="text-xs text-gray-500">
                      Juan Pérez ha solicitado acceso al módulo de Finanzas.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 h-2 w-2 rounded-full bg-green-500" />
                  <div>
                    <p className="text-sm font-medium">Reporte Completado</p>
                    <p className="text-xs text-gray-500">
                      El reporte de ventas trimestral está disponible.
                    </p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Alertas de Sistema</CardTitle>
              <CardDescription>
                Alertas críticas para el equipo de TI
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <div className="mt-1 h-2 w-2 rounded-full bg-red-500" />
                  <div>
                    <p className="text-sm font-medium">
                      Memoria alta en Servidor B
                    </p>
                    <p className="text-xs text-gray-500">
                      Uso de memoria por encima del 80%.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="mt-1 h-2 w-2 rounded-full bg-yellow-500" />
                  <div>
                    <p className="text-sm font-medium">
                      Actualización pendiente
                    </p>
                    <p className="text-xs text-gray-500">
                      Nueva versión de seguridad disponible.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
