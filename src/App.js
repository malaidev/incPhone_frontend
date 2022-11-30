import Layout from "./components/Layout"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import { Home } from "./pages/Home/Home"
import { Dashboard } from "./pages/Dashboard/Dashboard"
import { Activity } from "./pages/Activity/Activity"
import { Contact } from "./pages/Contact/Contact"
import { Profile } from "./pages/Profile/Profile"
import { Setting } from "./pages/Setting/Setting"
import { Login } from "./pages/Login/Login"

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/activity" element={<Activity />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
