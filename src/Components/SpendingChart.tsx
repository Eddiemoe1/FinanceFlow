import { Card, CardContent, CardHeader, CardTitle } from "../Components/ui/card"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer, PieChart, Pie, Cell } from "recharts"

const monthlyData = [
  { name: "Jan", income: 6500, expenses: 3200 },
  { name: "Feb", income: 7200, expenses: 3800 },
  { name: "Mar", income: 6800, expenses: 3500 },
  { name: "Apr", income: 7500, expenses: 4100 },
  { name: "May", income: 8200, expenses: 3900 },
  { name: "Jun", income: 7800, expenses: 4300 },
]

const categoryData = [
  { name: "Housing", value: 1200, color: "hsl(var(--primary))" },
  { name: "Food", value: 800, color: "hsl(var(--success))" },
  { name: "Transport", value: 450, color: "hsl(var(--warning))" },
  { name: "Entertainment", value: 350, color: "hsl(var(--secondary))" },
  { name: "Healthcare", value: 280, color: "hsl(var(--accent))" },
  { name: "Others", value: 420, color: "hsl(var(--muted))" },
]

export function SpendingChart() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Monthly Trends */}
      <Card className="financial-card">
        <CardHeader>
          <CardTitle className="text-xl font-semibold gradient-text">
            Monthly Trends
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={250}>
            <AreaChart data={monthlyData}>
              <defs>
                <linearGradient id="incomeGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--success))" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="hsl(var(--success))" stopOpacity={0.1}/>
                </linearGradient>
                <linearGradient id="expenseGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--warning))" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="hsl(var(--warning))" stopOpacity={0.1}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis 
                dataKey="name" 
                stroke="hsl(var(--muted-foreground))"
                //fontSize={12}
              />
              <YAxis 
                stroke="hsl(var(--muted-foreground))"
                //fontSize={12}
              />
              <Area
                type="monotone"
                dataKey="income"
                stroke="hsl(var(--success))"
                fillOpacity={1}
                fill="url(#incomeGradient)"
                strokeWidth={2}
              />
              <Area
                type="monotone"
                dataKey="expenses"
                stroke="hsl(var(--warning))"
                fillOpacity={1}
                fill="url(#expenseGradient)"
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Category Breakdown */}
      <Card className="financial-card">
        <CardHeader>
          <CardTitle className="text-xl font-semibold gradient-text">
            Spending by Category
            and type that fits well in the card
            end the page and looks good 
            with the overaall design

          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <ResponsiveContainer width="60%" height={200}>
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="space-y-2 mt-4 lg:mt-0">
              {categoryData.map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-sm text-muted-foreground">{item.name}</span>
                  <span className="text-sm font-medium">${item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}