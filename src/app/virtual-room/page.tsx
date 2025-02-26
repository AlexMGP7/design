"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Phone, Video, Mic, ScreenShare } from "lucide-react";

export default function VirtualRoom() {
  return (
    <div className="mx-auto max-w-6xl space-y-6 p-4">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-2xl font-bold">Virtual Room</h1>
          <p className="text-gray-500 dark:text-gray-400">Meeting ID: 123-456-789</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <Users className="h-4 w-4" />
            Invite
          </Button>
          <Button variant="destructive" className="gap-2">
            <Phone className="h-4 w-4" />
            End Call
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardContent className="p-0">
            <div className="aspect-video bg-gray-900 relative">
              <div className="absolute top-4 right-4 bg-black/50 text-white px-2 py-1 rounded text-xs">
                Main Room
              </div>
              <div className="flex items-center justify-center h-full">
                <Video className="h-16 w-16 text-gray-500" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Participants (5)</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Aquí se listan los participantes */}
          </CardContent>
        </Card>
      </div>

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
