import Layout from "./components/Layout"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import { Home } from "./pages/Home"
import { Dashboard } from "./pages/Dashboard"
import { Activity } from "./pages/Activity"
import { Profile } from "./pages/Profile"
import { Login } from "./pages/Login"

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/activity" element={<Activity />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
