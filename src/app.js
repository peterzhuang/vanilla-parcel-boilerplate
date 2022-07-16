import Header from './components/Header'
import User from './components/User'

async function App() {
  const template = document.createElement('template')
  template.innerHTML = `
    <div class="container">
      ${Header()}
      <div class="card-group">
      ${await User()}
      ${await User()}
      </div>
    </div>
  `
  // Return a new node from template
  return template.content.cloneNode(true)
}

export default App;