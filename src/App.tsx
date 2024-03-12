import reactLogo from './assets/react.svg'
import viteLogo from '/electron-vite.animate.svg'
import './App.css'

function App() {

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    console.log('Submit!')
  }

  return (
    <>
      <div>
        <a href="https://electron-vite.github.io" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Crear cuenta</h1>
      <form className="card" onSubmit={handleSubmit}>
        <label className="card-label">
          <span>Nombre de la companía</span>
          <input placeholder='Rocio LLC' />
        </label>

        <label className="card-label">
          <span>Nombre de usuario</span>
          <input placeholder='rociotoftum' />
        </label>

        <label className="card-label">
          <span>Primer nombre</span>
          <input placeholder='Rocio' />
        </label>

        <label className="card-label">
          <span>Apellido</span>
          <input placeholder='Toftum' />
        </label>

        <button className="card-button">
          Registrarse
        </button>
      </form>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
