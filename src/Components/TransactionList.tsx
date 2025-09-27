import { MoreHorizontal, ArrowUpRight, ArrowDownLeft, ShoppingCart, Car, Home } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "../Components/ui/card"
import { Button } from "../Components/ui/button"
import { Avatar, AvatarFallback } from "../Components/ui/avatar"

interface Transaction {
  id: string
  title: string
  description: string
  amount: number
  type: "income" | "expense"
  category: string
  date: string
  icon: React.ReactNode
}

const mockTransactions: Transaction[] = [
  {
    id: "1",
    title: "Salary Deposit",
    description: "Monthly salary payment",
    amount: 5420.50,
    type: "income",
    category: "Salary",
    date: "Today",
    icon: <ArrowDownLeft className="w-4 h-4 text-success" />
  },
  {
    id: "2", 
    title: "Grocery Shopping",
    description: "Whole Foods Market",
    amount: -127.43,
    type: "expense",
    category: "Food",
    date: "Yesterday",
    icon: <ShoppingCart className="w-4 h-4 text-warning" />
  },
  {
    id: "3",
    title: "Gas Station",
    description: "Shell Station",
    amount: -45.20,
    type: "expense", 
    category: "Transportation",
    date: "2 days ago",
    icon: <Car className="w-4 h-4 text-warning" />
  },
  {
    id: "4",
    title: "Rent Payment", 
    description: "Monthly rent",
    amount: -1500.00,
    type: "expense",
    category: "Housing",
    date: "3 days ago",
    icon: <Home className="w-4 h-4 text-warning" />
  },
  {
    id: "5",
    title: "Freelance Income",
    description: "Web development project",
    amount: 850.00,
    type: "income",
    category: "Freelance",
    date: "4 days ago",
    icon: <ArrowDownLeft className="w-4 h-4 text-success" />
  }
]

export function TransactionList() {
  const formatAmount = (amount: number) => {
    const formatted = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
    }).format(Math.abs(amount))
    
    return amount >= 0 ? `+${formatted}` : `-${formatted}`
  }

  return (
    <Card className="financial-card">
      <CardHeader className="flex flex-row items-center justify-between pb-4">
        <CardTitle className="text-xl font-semibold">Recent Transactions</CardTitle>
        <Button className="hover:bg-white/10">
          <MoreHorizontal className="w-4 h-4" />
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        {mockTransactions.map((transaction) => (
          <div
            key={transaction.id}
            className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 transition-colors cursor-pointer"
          >
            <div className="flex items-center space-x-4">
              <Avatar className="w-10 h-10 bg-gradient-to-br from-primary/20 to-secondary/20 border border-white/10">
                <AvatarFallback className="bg-transparent">
                  {transaction.icon}
                </AvatarFallback>
              </Avatar>
              
              <div>
                <p className="font-medium text-foreground">{transaction.title}</p>
                <p className="text-sm text-muted-foreground">{transaction.description}</p>
              </div>
            </div>

            <div className="text-right">
              <p className={`font-semibold ${
                transaction.type === "income" 
                  ? "text-success" 
                  : "text-warning"
              }`}>
                {formatAmount(transaction.amount)}
              </p>
              <p className="text-sm text-muted-foreground">{transaction.date}</p>
            </div>
          </div>
        ))}
        
        <Button 
          className="w-full mt-4 border-border hover:bg-white/5"
        >
          View All Transactions
        </Button>
      </CardContent>
    </Card>
  )
}
export default TransactionList;