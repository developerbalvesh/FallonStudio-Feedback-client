import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/public/Home'
import Feedback from './pages/public/Feedback'
import NotFound from './pages/NotFound'
import FeedbackList from './pages/admin/FeedbackList'

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Feedback />} />
      <Route path='/admin/feedback-list' element={<FeedbackList />} />

      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}
