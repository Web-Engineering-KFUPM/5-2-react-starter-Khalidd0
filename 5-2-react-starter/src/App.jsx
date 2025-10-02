import './App.css'
import StudentCard from './components/StudentCard'

function App() {
  return (
    <div className="app">
      <header className="dashboard-header">
        <h1>Student Information Dashboard</h1>
        <p>View and manage student details</p>
      </header>

      <main className="dashboard-main">
        <div className="cards-container">
          <StudentCard name="Khaled Mathbaq" id="202283100" dept="ICS" />
          <StudentCard name="Ali Ahmed" id="202234500" dept="EE" />

          
        </div>
      </main>
    </div>
  )
}

export default App
