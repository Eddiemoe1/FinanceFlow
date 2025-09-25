import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Activity, TrendingUp, TrendingDown, DollarSign, Target } from "lucide-react"


const activities = [
  {
    id: 1,
    type: "transaction",
    title: "Salary Deposit",
    description: "Monthly salary from TechCorp Inc.",
    amount: "+$6,420.50",
    time: "2 hours ago",
    icon: DollarSign,
    status: "completed",
    color: "text-success"
  },
  {
    id: 2,
    type: "goal",
    title: "Emergency Fund Goal",
    description: "Reached 84% of your target",
    amount: "$8,400",
    time: "1 day ago",
    icon: Target,
    status: "progress",
    color: "text-primary"
  },
  {
    id: 3,
    type: "expense",
    title: "Grocery Shopping",
    description: "Whole Foods Market",
    amount: "-$127.84",
    time: "2 days ago",
    icon: TrendingDown,
    status: "completed",
    color: "text-warning"
  },
  {
    id: 4,
    type: "investment",
    title: "Portfolio Growth",
    description: "Monthly return +12.5%",
    amount: "+$1,240.00",
    time: "3 days ago",
    icon: TrendingUp,
    status: "completed",
    color: "text-success"
  },
  {
    id: 5,
    type: "bill",
    title: "Electricity Bill",
    description: "Auto-paid monthly utility",
    amount: "-$89.50",
    time: "5 days ago",
    icon: Activity,
    status: "completed",
    color: "text-warning"
  }
]

export function RecentActivity() {
  return (
    <Card className="financial-card">
      <CardHeader>
        <CardTitle className="text-xl font-semibold gradient-text flex items-center gap-2">
          <Activity className="w-5 h-5" />
          Recent Activity
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-center space-x-4 p-3 rounded-xl bg-card/50 hover:bg-card/80 transition-colors">
              <div className={`p-2 rounded-lg bg-gradient-to-br from-${activity.type === 'transaction' ? 'success' : activity.type === 'goal' ? 'primary' : activity.type === 'expense' ? 'warning' : activity.type === 'investment' ? 'secondary' : 'accent'}/10 to-${activity.type === 'transaction' ? 'success' : activity.type === 'goal' ? 'primary' : activity.type === 'expense' ? 'warning' : activity.type === 'investment' ? 'secondary' : 'accent'}/5`}>
                <activity.icon className={`w-4 h-4 ${activity.color}`} />
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-foreground truncate">
                    {activity.title}
                  </p>
                  <Badge 
                    variant={activity.status === 'completed' ? 'default' : 'secondary'}
                    className="ml-2 text-xs"
                  >
                    {activity.status}
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground truncate">
                  {activity.description}
                </p>
                <div className="flex items-center justify-between mt-1">
                  <span className={`text-sm font-semibold ${activity.color}`}>
                    {activity.amount}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {activity.time}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
export default RecentActivity;