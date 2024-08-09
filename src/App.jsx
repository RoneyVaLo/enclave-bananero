import Economic from "./components/Economic"
import Environmental from "./components/Environmental"
import History from "./components/History"
import Introduction from "./components/Introduction"
import Navbar from "./components/Navbar"
import Social from "./components/Social"

function App() {

  return (
    <div>
      <Navbar />
      <Introduction />
      <History />
      <Economic />
      <Social />
      <Environmental />
    </div>
  )
}

export default App
