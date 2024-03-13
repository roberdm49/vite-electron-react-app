export const App = () => {

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    console.log('handleSubmit')
  }

  console.log('123')

  return (
    <>
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
      <p>
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
