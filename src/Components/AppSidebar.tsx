import { 
  Home, 
  Wallet, 
  TrendingUp, 
  CreditCard, 
  PiggyBank, 
  FileText, 
  Settings,
  Target,
  BarChart3,
  Calendar
} from "lucide-react"
import { NavLink, useLocation } from "react-router-dom"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "../Components/ui/sidebar"


const mainItems = [
  { title: "Dashboard", url: "/", icon: Home },
  { title: "Accounts", url: "/accounts", icon: Wallet },
  { title: "Transactions", url: "/transactions", icon: CreditCard },
  { title: "Investments", url: "/investments", icon: TrendingUp },
  { title: "Budget", url: "/budget", icon: Target },
]

const analyticsItems = [
  { title: "Reports", url: "/reports", icon: BarChart3 },
  { title: "Goals", url: "/goals", icon: PiggyBank },
  { title: "Calendar", url: "/calendar", icon: Calendar },
]

const settingsItems = [
  { title: "Documents", url: "/documents", icon: FileText },
  { title: "Settings", url: "/settings", icon: Settings },
]

export function AppSidebar() {
  const { state } = useSidebar()
  const location = useLocation()
  const currentPath = location.pathname
  const isCollapsed = state === "collapsed"

  const isActive = (path: string) => currentPath === path
  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive 
      ? "bg-primary/20 text-primary border border-primary/30 font-medium" 
      : "hover:bg-sidebar-accent/50 text-sidebar-foreground"

  return (
    <Sidebar
      className={`${isCollapsed ? "w-14" : "w-64"} border-r border-sidebar-border backdrop-blur-xl bg-sidebar-background/80`}
      collapsible="icon"
    >
      <SidebarContent className="px-2 py-6">
        {/* Logo/Brand */}
        <div className="px-4 py-2 mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Wallet className="w-4 h-4 text-white" />
            </div>
            {!isCollapsed && (
              <div>
                <h1 className="text-lg font-bold gradient-text">FinanceFlow</h1>
                <p className="text-xs text-muted-foreground">Wealth Manager</p>
              </div>
            )}
          </div>
        </div>
        

        {/* Main Navigation */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs text-muted-foreground uppercase tracking-wider">
            {!isCollapsed ? "Main" : ""}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {mainItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="rounded-xl">
                    <NavLink to={item.url} end className={getNavCls}>
                      <item.icon className="w-5 h-5" />
                      {!isCollapsed && <span className="font-medium">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Analytics */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs text-muted-foreground uppercase tracking-wider">
            {!isCollapsed ? "Analytics" : ""}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {analyticsItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="rounded-xl">
                    <NavLink to={item.url} end className={getNavCls}>
                      <item.icon className="w-5 h-5" />
                      {!isCollapsed && <span className="font-medium">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Settings */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs text-muted-foreground uppercase tracking-wider">
            {!isCollapsed ? "Settings" : ""}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {settingsItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="rounded-xl">
                    <NavLink to={item.url} end className={getNavCls}>
                      <item.icon className="w-5 h-5" />
                      {!isCollapsed && <span className="font-medium">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
export default AppSidebar;