import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

// Import your pages (you'll need to create these)
import Dashboard from './Components/AppSidebar'
import Transactions from './Components/TransactionList'
import Analytics from './Components/RecentActivity'
import Settings from './Components/QuickAction'
import BalanceCard from './Components/BalanceCard'
import RecentActivity from './Components/RecentActivity'
import QuickActions from './Components/QuickAction' 


// Import your components
import AppSidebar from './Components/AppSidebar'

function App() {
  return (
    <Router>
      <div className="app-container">
        <AppSidebar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/settings" element={<Settings />} />
            <Route
              path="/balance"
              element={
                <BalanceCard
                  title="Account Balance"
                  balance={1000}
                  change={50}
                  changeType="increase"
                />
              }
            />
            <Route path="/quick-actions" element={<QuickActions />} />
            <Route path="/recent-activity" element={<RecentActivity />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App