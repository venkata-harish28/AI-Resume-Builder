import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import TemplatesPage from './pages/TemplatesPage'
import BuilderPage from './pages/Builder'
import LoginPage from './pages/login'
import RegisterPage from './pages/Register'
import ForgotPasswordPage from './pages/ForgotPassword'
import TemplateEditor from './pages/TemplateEditor'
import NotFound from './pages/NotFound'
import About from './pages/About'
import TermsAndConditions from './pages/Terms'
import AIResumeChecker from './pages/ResumeChecker'
import JobTracker from './pages/JobTracker'
import PrivacyPolicy from './pages/Privacypolicy'
import HelpCenter from './pages/HelpCenter'


function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/templates" element={<TemplatesPage />} />
          <Route path="/templates/:id" element={<TemplateEditor />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/terms" element={<TermsAndConditions />}/>
          <Route path='/resume-checker' element={<AIResumeChecker />}/>
          <Route path='/job-tracker' element={<JobTracker />}/>
          <Route path="/privacy-policy" element={<PrivacyPolicy />}/>
          <Route path="/help" element={<HelpCenter />}/>
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/builder" element={<BuilderPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App