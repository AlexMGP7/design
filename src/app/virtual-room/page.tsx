"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Phone, Video, Mic, MicOff, VideoOff, ScreenShare } from "lucide-react";

export default function VirtualRoom() {
  return (
    <div className="mx-auto max-w-6xl space-y-6 p-4">
      {/* Encabezado de la sala */}
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-2xl font-bold">Sala Virtual</h1>
          <p className="text-gray-500 dark:text-gray-400">ID de la reunión: 123-456-789</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <Users className="h-4 w-4" />
            Invitar
          </Button>
          <Button variant="destructive" className="gap-2">
            <Phone className="h-4 w-4" />
            Finalizar llamada
          </Button>
        </div>
      </div>

      {/* Contenido principal: sala y participantes */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {/* Sala Principal */}
        <Card className="lg:col-span-2">
          <CardContent className="p-0">
            <div className="aspect-video bg-gray-900 relative">
              <div className="absolute top-4 right-4 bg-black/50 text-white px-2 py-1 rounded text-xs">
                Sala Principal
              </div>
              <div className="flex items-center justify-center h-full">
                <Video className="h-16 w-16 text-gray-500" />
              </div>
            </div>
          </CardContent>
        </Card>
        {/* Participantes */}
        <Card>
          <CardHeader>
            <CardTitle>Participantes (5)</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Participante 1 */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="relative">
                  <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-blue-600 font-medium">JD</span>
                  </div>
                  <div className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full bg-green-500 border-2 border-white" />
                </div>
                <div>
                  <p className="text-sm font-medium">John Doe (Tú)</p>
                  <p className="text-xs text-gray-500">Anfitrión</p>
                </div>
              </div>
              <div className="flex gap-1">
                <Button variant="ghost" size="icon" className="h-7 w-7">
                  <Mic className="h-3 w-3" />
                </Button>
                <Button variant="ghost" size="icon" className="h-7 w-7">
                  <Video className="h-3 w-3" />
                </Button>
              </div>
            </div>
            {/* Participante 2 */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="relative">
                  <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                    <span className="text-green-600 font-medium">JS</span>
                  </div>
                  <div className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full bg-green-500 border-2 border-white" />
                </div>
                <div>
                  <p className="text-sm font-medium">Jane Smith</p>
                  <p className="text-xs text-gray-500">Participante</p>
                </div>
              </div>
              <div className="flex gap-1">
                <Button variant="ghost" size="icon" className="h-7 w-7">
                  <Mic className="h-3 w-3" />
                </Button>
                <Button variant="ghost" size="icon" className="h-7 w-7">
                  <Video className="h-3 w-3" />
                </Button>
              </div>
            </div>
            {/* Participante 3 */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="relative">
                  <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
                    <span className="text-purple-600 font-medium">RJ</span>
                  </div>
                  <div className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full bg-green-500 border-2 border-white" />
                </div>
                <div>
                  <p className="text-sm font-medium">Robert Johnson</p>
                  <p className="text-xs text-gray-500">Participante</p>
                </div>
              </div>
              <div className="flex gap-1">
                <Button variant="ghost" size="icon" className="h-7 w-7">
                  <MicOff className="h-3 w-3" />
                </Button>
                <Button variant="ghost" size="icon" className="h-7 w-7">
                  <Video className="h-3 w-3" />
                </Button>
              </div>
            </div>
            {/* Participante 4 */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="relative">
                  <div className="h-10 w-10 rounded-full bg-yellow-100 flex items-center justify-center">
                    <span className="text-yellow-600 font-medium">EW</span>
                  </div>
                  <div className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full bg-green-500 border-2 border-white" />
                </div>
                <div>
                  <p className="text-sm font-medium">Emily Wilson</p>
                  <p className="text-xs text-gray-500">Participante</p>
                </div>
              </div>
              <div className="flex gap-1">
                <Button variant="ghost" size="icon" className="h-7 w-7">
                  <Mic className="h-3 w-3" />
                </Button>
                <Button variant="ghost" size="icon" className="h-7 w-7">
                  <VideoOff className="h-3 w-3" />
                </Button>
              </div>
            </div>
            {/* Participante 5 */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="relative">
                  <div className="h-10 w-10 rounded-full bg-red-100 flex items-center justify-center">
                    <span className="text-red-600 font-medium">MB</span>
                  </div>
                  <div className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full bg-green-500 border-2 border-white" />
                </div>
                <div>
                  <p className="text-sm font-medium">Michael Brown</p>
                  <p className="text-xs text-gray-500">Participante</p>
                </div>
              </div>
              <div className="flex gap-1">
                <Button variant="ghost" size="icon" className="h-7 w-7">
                  <Mic className="h-3 w-3" />
                </Button>
                <Button variant="ghost" size="icon" className="h-7 w-7">
                  <Video className="h-3 w-3" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Controles de la llamada */}
      <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 p-4 border-t flex justify-center md:relative md:bg-transparent md:border-0 md:p-0">
        <div className="flex items-center gap-4">
          <Button variant="outline" size="icon" className="rounded-full h-12 w-12">
            <Mic className="h-5 w-5" />
          </Button>
          <Button variant="outline" size="icon" className="rounded-full h-12 w-12">
            <Video className="h-5 w-5" />
          </Button>
          <Button variant="outline" size="icon" className="rounded-full h-12 w-12">
            <ScreenShare className="h-5 w-5" />
          </Button>
          <Button variant="destructive" size="icon" className="rounded-full h-12 w-12">
            <Phone className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
