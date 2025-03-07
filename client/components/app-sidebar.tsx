"use client"

import * as React from "react"
import {
  CheckSquare,
  ClipboardList,
  Layers,
  Users,
  Settings,
  CalendarCheck,
  FileText,
 
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// Donezo Sidebar Data
const data = {
  user: {
    name: "Manoj Sravan",
    email: "workwithmanojsravan@gmail.com",
    avatar: "/avatars/manoj.jpg",
  },
  teams: [
    {
      name: "Freelance Work",
      logo: ClipboardList,
      plan: "Solo",
    },
    {
      name: "Startup Projects",
      logo: Layers,
      plan: "Team",
    },
  ],
  navMain: [
    {
      title: "Tasks",
      url: "#",
      icon: CheckSquare,
      isActive: true,
      items: [
        { title: "All Tasks", url: "#" },
        { title: "In Progress", url: "#" },
        { title: "Completed", url: "#" },
      ],
    },
    {
      title: "Projects",
      url: "#",
      icon: Layers,
      items: [
        { title: "Client Work", url: "#" },
        { title: "Side Projects", url: "#" },
        { title: "Archived", url: "#" },
      ],
    },
    {
      title: "Calendar",
      url: "#",
      icon: CalendarCheck,
      items: [
        { title: "Upcoming Deadlines", url: "#" },
        { title: "Meetings", url: "#" },
      ],
    },
    {
      title: "Documents",
      url: "#",
      icon: FileText,
      items: [
        { title: "Contracts", url: "#" },
        { title: "Invoices", url: "#" },
        { title: "Notes", url: "#" },
      ],
    },
    {
      title: "Team & Clients",
      url: "#",
      icon: Users,
      items: [
        { title: "Clients", url: "#" },
        { title: "Collaborators", url: "#" },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings,
      items: [
        { title: "Profile", url: "#" },
        { title: "Preferences", url: "#" },
        { title: "Billing", url: "#" },
      ],
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={[]} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
