import { TrendingUp, TrendingDown, Eye, EyeOff } from "lucide-react"
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface BalanceCardProps {
  title: string
  balance: number
  change: number
  changeType: "increase" | "decrease"
  currency?: string
  gradient?: string
}

export function BalanceCard({ 
  title, 
  balance, 
  change, 
  changeType,
  currency = "$",
  gradient = "from-primary to-secondary"
}: BalanceCardProps) {
  const [isVisible, setIsVisible] = useState(true)

  const formatBalance = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
    }).format(amount)
  }

  const changePercentage = Math.abs(change)

  return (
    <Card className="financial-card relative overflow-hidden">
      {/* Background Gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-5`} />
      
      <CardContent className="p-6 relative z-10">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
            {title}
          </h3>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsVisible(!isVisible)}
            className="w-8 h-8 p-0 hover:bg-white/10"
          >
            {isVisible ? (
              <Eye className="w-4 h-4" />
            ) : (
              <EyeOff className="w-4 h-4" />
            )}
          </Button>
        </div>

        <div className="space-y-2">
          <div className="text-3xl font-bold text-foreground">
            {isVisible ? formatBalance(balance) : "••••••"}
          </div>

          <div className="flex items-center space-x-2">
            {changeType === "increase" ? (
              <TrendingUp className="w-4 h-4 text-success" />
            ) : (
              <TrendingDown className="w-4 h-4 text-warning" />
            )}
            <span className={`text-sm font-medium ${
              changeType === "increase" ? "text-success" : "text-warning"
            }`}>
              {changeType === "increase" ? "+" : "-"}{changePercentage}%
            </span>
            <span className="text-sm text-muted-foreground">
              vs last month
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
export default BalanceCard;