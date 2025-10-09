import { Plus, ArrowUpRight, ArrowDownLeft, Repeat, CreditCard, Target } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "../Components/ui/card"
import { Button } from "../Components/ui/button"

const actions = [
  {
    icon: <Plus className="w-5 h-5" />,
    title: "Add Income",
    description: "Record new income",
    color: "from-success to-success-light",
    textColor: "text-success"
  },

  {
    icon: <ArrowUpRight className="w-5 h-5" />,
    title: "Add Expense",
    description: "Track spending",
    color: "from-warning to-warning-light", 
    textColor: "text-warning"
  },

  {
    icon: <Repeat className="w-5 h-5" />,
    title: "Transfer",
    description: "Between accounts",
    color: "from-primary to-secondary",
    textColor: "text-primary"
  },
  {
    icon: <CreditCard className="w-5 h-5" />,
    title: "Pay Bill",
    description: "Schedule payment",
    color: "from-secondary to-primary",
    textColor: "text-secondary"
  },
  {
    icon: <Target className="w-5 h-5" />,
    title: "Set Goal",
    description: "Create savings goal",
    color: "from-accent to-primary",
    textColor: "text-accent"
  }
]

export function QuickActions() {
  return (
    <Card className="financial-card">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">Quick Actions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {actions.map((action, index) => (
            <Button
              key={index}
              className="h-auto p-4 flex flex-col items-center space-y-2 border-border hover:bg-white/5 group transition-all duration-200 hover:scale-105"
            >
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${action.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                <div className="text-white">
                  {action.icon}
                </div>
              </div>
              <div className="text-center">
                <p className="text-sm font-medium text-foreground">{action.title}</p>
                <p className="text-xs text-muted-foreground">{action.description}</p>
              </div>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
export default QuickActions;