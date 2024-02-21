import ClockHeading from './components/clockHeading'
import ClockSlogan from './components/clockSlogan'
import CurrentTime from './components/currentTime'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <center>
    <ClockHeading/>
    <ClockSlogan/>
    <CurrentTime/>
    </center>
  )
}

export default App
