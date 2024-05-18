import React from 'react'
import './Main.css'
import PageTitle from './PageTitle'
import Dashboard from './Dashboard'
export default function Main() {
  return (
    <main className="main" id="main">
       
        <PageTitle page={"Dashboard"}/>
        <Dashboard />
    </main>
  )
}
