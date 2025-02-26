"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BarChart,
  Bell,
  Calendar,
  CreditCard,
  Download,
  Layers,
  LayoutDashboard,
  PieChart,
  Plus,
  Settings,
  User,
  Users,
  Video,
  Mic,
  MicOff,
  VideoOff,
  ScreenShare,
  Phone,
} from "lucide-react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const data = [
  { name: "Jan", value: 400 },
  { name: "Feb", value: 300 },
  { name: "Mar", value: 500 },
  { name: "Apr", value: 200 },
  { name: "May", value: 350 },
  { name: "Jun", value: 600 },
  { name: "Jul", value: 450 },
  { name: "Aug", value: 500 },
  { name: "Sep", value: 550 },
  { name: "Oct", value: 400 },
  { name: "Nov", value: 300 },
  { name: "Dec", value: 450 },
]

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("overview")
  const [activeView, setActiveView] = useState("dashboard")

  return (
    <div className="flex min-h-screen w-full bg-gray-100 dark:bg-gray-900">
      {/* Sidebar */}
      <div className="hidden w-64 flex-col bg-white dark:bg-gray-800 md:flex">
        <div className="flex h-14 items-center border-b px-4">
          <div className="flex items-center gap-2">
            <Layers className="h-6 w-6 text-blue-600" />
            <span className="text-lg font-semibold">Dashboard</span>
          </div>
        </div>
        <nav className="flex-1 overflow-auto py-4">
          <div className="px-4 py-2">
            <h2 className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
              Main
            </h2>
            <div className="space-y-1">
              <Button
                variant="ghost"
                className={`w-full justify-start gap-2 ${activeView === "dashboard" ? "bg-gray-100 dark:bg-gray-700" : ""}`}
                onClick={() => setActiveView("dashboard")}
              >
                <LayoutDashboard className="h-4 w-4" />
                Dashboard
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-2">
                <BarChart className="h-4 w-4" />
                Analytics
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-2">
                <CreditCard className="h-4 w-4" />
                Transactions
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-2">
                <Users className="h-4 w-4" />
                Customers
              </Button>
            </div>
          </div>
          <div className="px-4 py-2">
            <h2 className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
              Meetings
            </h2>
            <div className="space-y-1">
              <Button
                variant="ghost"
                className="w-full justify-start gap-2"
                onClick={() => setActiveView("virtualRoom")}
              >
                <Video className="h-4 w-4" />
                Virtual Room
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-2">
                <Calendar className="h-4 w-4" />
                Schedule Meeting
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-2">
                <Users className="h-4 w-4" />
                Participants
              </Button>
            </div>
          </div>
          <div className="px-4 py-2">
            <h2 className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
              General
            </h2>
            <div className="space-y-1">
              <Button variant="ghost" className="w-full justify-start gap-2">
                <Settings className="h-4 w-4" />
                Settings
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-2">
                <User className="h-4 w-4" />
                Profile
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-2">
                <Bell className="h-4 w-4" />
                Notifications
              </Button>
            </div>
          </div>
        </nav>
        <div className="border-t p-4">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-gray-200">
              <img
                src="/placeholder.svg?height=36&width=36"
                alt="User avatar"
                className="h-full w-full rounded-full object-cover"
              />
            </div>
            <div>
              <p className="text-sm font-medium">John Doe</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">john@example.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-1 flex-col">
        {/* Header */}
        <header className="flex h-14 items-center justify-between border-b bg-white px-4 dark:bg-gray-800">
          <Button variant="ghost" size="icon" className="md:hidden">
            <Layers className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
          <div className="flex items-center gap-2 md:hidden">
            <Layers className="h-6 w-6 text-blue-600" />
            <span className="text-lg font-semibold">Dashboard</span>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
              <span className="sr-only">Notifications</span>
            </Button>
            <div className="h-8 w-8 rounded-full bg-gray-200 md:hidden">
              <img
                src="/placeholder.svg?height=32&width=32"
                alt="User avatar"
                className="h-full w-full rounded-full object-cover"
              />
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-auto p-4">
          {activeView === "dashboard" ? (
            <div className="mx-auto max-w-6xl space-y-6">
              <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
                <div>
                  <h1 className="text-2xl font-bold">Dashboard</h1>
                  <p className="text-gray-500 dark:text-gray-400">Welcome back, John!</p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" className="gap-2">
                    <Download className="h-4 w-4" />
                    Download Report
                  </Button>
                  <Button className="gap-2">
                    <Plus className="h-4 w-4" />
                    New Transaction
                  </Button>
                </div>
              </div>

              <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
                <TabsList>
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="analytics">Analytics</TabsTrigger>
                  <TabsTrigger value="reports">Reports</TabsTrigger>
                  <TabsTrigger value="notifications">Notifications</TabsTrigger>
                </TabsList>
                <TabsContent value="overview" className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                        <CreditCard className="h-4 w-4 text-gray-500" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">$45,231.89</div>
                        <p className="text-xs text-green-500">+20.1% from last month</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium">Subscriptions</CardTitle>
                        <Users className="h-4 w-4 text-gray-500" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">+2350</div>
                        <p className="text-xs text-green-500">+180.1% from last month</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium">Sales</CardTitle>
                        <BarChart className="h-4 w-4 text-gray-500" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">+12,234</div>
                        <p className="text-xs text-red-500">-19.5% from last month</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium">Active Users</CardTitle>
                        <User className="h-4 w-4 text-gray-500" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">+573</div>
                        <p className="text-xs text-green-500">+201 since last hour</p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                    <Card className="lg:col-span-5">
                      <CardHeader>
                        <CardTitle>Revenue Over Time</CardTitle>
                      </CardHeader>
                      <CardContent className="h-80">
                        <ResponsiveContainer width="100%" height="100%">
                          <LineChart
                            data={data}
                            margin={{
                              top: 5,
                              right: 10,
                              left: 10,
                              bottom: 0,
                            }}
                          >
                            <CartesianGrid strokeDasharray="3 3" vertical={false} />
                            <XAxis dataKey="name" tickLine={false} axisLine={false} padding={{ left: 10, right: 10 }} />
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
                    <Card className="lg:col-span-2">
                      <CardHeader>
                        <CardTitle>Recent Activity</CardTitle>
                        <CardDescription>You have 3 new notifications</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex items-start gap-4">
                            <div className="rounded-full bg-blue-100 p-2 dark:bg-blue-900">
                              <CreditCard className="h-4 w-4 text-blue-600" />
                            </div>
                            <div className="space-y-1">
                              <p className="text-sm font-medium">New transaction</p>
                              <p className="text-xs text-gray-500 dark:text-gray-400">
                                You received $250 from John Doe
                              </p>
                              <p className="text-xs text-gray-500 dark:text-gray-400">2 hours ago</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-4">
                            <div className="rounded-full bg-green-100 p-2 dark:bg-green-900">
                              <Users className="h-4 w-4 text-green-600" />
                            </div>
                            <div className="space-y-1">
                              <p className="text-sm font-medium">New subscriber</p>
                              <p className="text-xs text-gray-500 dark:text-gray-400">
                                Jane Smith subscribed to your premium plan
                              </p>
                              <p className="text-xs text-gray-500 dark:text-gray-400">5 hours ago</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-4">
                            <div className="rounded-full bg-yellow-100 p-2 dark:bg-yellow-900">
                              <Calendar className="h-4 w-4 text-yellow-600" />
                            </div>
                            <div className="space-y-1">
                              <p className="text-sm font-medium">Meeting scheduled</p>
                              <p className="text-xs text-gray-500 dark:text-gray-400">Team meeting at 3:00 PM today</p>
                              <p className="text-xs text-gray-500 dark:text-gray-400">1 day ago</p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    <Card>
                      <CardHeader>
                        <CardTitle>Top Products</CardTitle>
                        <CardDescription>Your best performing products this month</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <div className="h-8 w-8 rounded bg-gray-100 dark:bg-gray-800"></div>
                              <div>
                                <p className="text-sm font-medium">Product A</p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">Category: Electronics</p>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className="text-sm font-medium">$12,500</p>
                              <p className="text-xs text-green-500">+25%</p>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <div className="h-8 w-8 rounded bg-gray-100 dark:bg-gray-800"></div>
                              <div>
                                <p className="text-sm font-medium">Product B</p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">Category: Clothing</p>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className="text-sm font-medium">$8,750</p>
                              <p className="text-xs text-green-500">+18%</p>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <div className="h-8 w-8 rounded bg-gray-100 dark:bg-gray-800"></div>
                              <div>
                                <p className="text-sm font-medium">Product C</p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">Category: Home</p>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className="text-sm font-medium">$6,320</p>
                              <p className="text-xs text-red-500">-5%</p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle>Sales by Region</CardTitle>
                        <CardDescription>Distribution of sales across regions</CardDescription>
                      </CardHeader>
                      <CardContent className="flex justify-center">
                        <div className="h-40 w-40">
                          <PieChart className="h-full w-full text-blue-500" />
                          <span className="sr-only">Pie chart showing sales by region</span>
                        </div>
                      </CardContent>
                      <div className="px-6 pb-6">
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                              <span className="text-sm">North America</span>
                            </div>
                            <span className="text-sm font-medium">45%</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <div className="h-3 w-3 rounded-full bg-green-500"></div>
                              <span className="text-sm">Europe</span>
                            </div>
                            <span className="text-sm font-medium">30%</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                              <span className="text-sm">Asia</span>
                            </div>
                            <span className="text-sm font-medium">15%</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <div className="h-3 w-3 rounded-full bg-purple-500"></div>
                              <span className="text-sm">Other</span>
                            </div>
                            <span className="text-sm font-medium">10%</span>
                          </div>
                        </div>
                      </div>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle>Upcoming Tasks</CardTitle>
                        <CardDescription>Your scheduled tasks for today</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex items-start gap-2">
                            <div className="mt-1 h-5 w-5 rounded border border-gray-300 dark:border-gray-600"></div>
                            <div>
                              <p className="text-sm font-medium">Review quarterly report</p>
                              <p className="text-xs text-gray-500 dark:text-gray-400">Today, 11:00 AM</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-2">
                            <div className="mt-1 h-5 w-5 rounded border border-gray-300 dark:border-gray-600"></div>
                            <div>
                              <p className="text-sm font-medium">Team meeting</p>
                              <p className="text-xs text-gray-500 dark:text-gray-400">Today, 3:00 PM</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-2">
                            <div className="mt-1 h-5 w-5 rounded border border-gray-300 dark:border-gray-600"></div>
                            <div>
                              <p className="text-sm font-medium">Call with clients</p>
                              <p className="text-xs text-gray-500 dark:text-gray-400">Today, 4:30 PM</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-2">
                            <div className="mt-1 h-5 w-5 rounded border border-gray-300 dark:border-gray-600"></div>
                            <div>
                              <p className="text-sm font-medium">Update documentation</p>
                              <p className="text-xs text-gray-500 dark:text-gray-400">Tomorrow, 10:00 AM</p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
                <TabsContent value="analytics" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Analytics Content</CardTitle>
                      <CardDescription>Detailed analytics will be displayed here</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex h-40 items-center justify-center rounded-md border border-dashed">
                        <p className="text-sm text-gray-500 dark:text-gray-400">Analytics content will appear here</p>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="reports" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Reports Content</CardTitle>
                      <CardDescription>Your reports will be displayed here</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex h-40 items-center justify-center rounded-md border border-dashed">
                        <p className="text-sm text-gray-500 dark:text-gray-400">Reports content will appear here</p>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="notifications" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Notifications Content</CardTitle>
                      <CardDescription>Your notifications will be displayed here</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex h-40 items-center justify-center rounded-md border border-dashed">
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Notifications content will appear here
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          ) : (
            <div className="mx-auto max-w-6xl space-y-6">
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
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="relative">
                          <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                            <span className="text-blue-600 font-medium">JD</span>
                          </div>
                          <div className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full bg-green-500 border-2 border-white"></div>
                        </div>
                        <div>
                          <p className="text-sm font-medium">John Doe (You)</p>
                          <p className="text-xs text-gray-500">Host</p>
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
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="relative">
                          <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                            <span className="text-green-600 font-medium">JS</span>
                          </div>
                          <div className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full bg-green-500 border-2 border-white"></div>
                        </div>
                        <div>
                          <p className="text-sm font-medium">Jane Smith</p>
                          <p className="text-xs text-gray-500">Participant</p>
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
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="relative">
                          <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
                            <span className="text-purple-600 font-medium">RJ</span>
                          </div>
                          <div className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full bg-green-500 border-2 border-white"></div>
                        </div>
                        <div>
                          <p className="text-sm font-medium">Robert Johnson</p>
                          <p className="text-xs text-gray-500">Participant</p>
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
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="relative">
                          <div className="h-10 w-10 rounded-full bg-yellow-100 flex items-center justify-center">
                            <span className="text-yellow-600 font-medium">EW</span>
                          </div>
                          <div className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full bg-green-500 border-2 border-white"></div>
                        </div>
                        <div>
                          <p className="text-sm font-medium">Emily Wilson</p>
                          <p className="text-xs text-gray-500">Participant</p>
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
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="relative">
                          <div className="h-10 w-10 rounded-full bg-red-100 flex items-center justify-center">
                            <span className="text-red-600 font-medium">MB</span>
                          </div>
                          <div className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full bg-green-500 border-2 border-white"></div>
                        </div>
                        <div>
                          <p className="text-sm font-medium">Michael Brown</p>
                          <p className="text-xs text-gray-500">Participant</p>
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
          )}
        </main>
      </div>
    </div>
  )
}

