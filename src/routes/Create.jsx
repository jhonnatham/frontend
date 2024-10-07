import { useState } from "react"
import { useNavigate } from "react-router-dom";

export const Create = () => {
    const urlBase = import.meta.env.VITE_APP_ENDPOINT
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [available, setAvailable] = useState(0)
    const [error, setError] = useState(0)

    const handleName= (e) => {
      setError(0)
      setName(e.target.value)
    }

    const handleAvailable= (e) => {
      setError(0)
      setAvailable(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (name.trim() == '' || available.trim == '') {
          setError(1)
          return false;
        }
        await fetch(`${urlBase}api/products/create`, {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              name: name,
              available: available,
            })
        })
        navigate("/");
    }

  return (

    <div className="container">
        <h1>Crear nuevo producto</h1>
        <div className='alert alert-warning' style={{ display: error ? '' : 'none' }} role="alert">
          Los datos enviados no son validos
        </div>
        <form onSubmit={handleSubmit}>
        <div className="mb-3">
            <label htmlFor="name" className="form-label">Nombre producto</label>
            <input type="text" className="form-control" id="name" onChange={handleName}/>
        </div>
        <div className="mb-3">
            <label htmlFor="available" className="form-label">Unidades disponibles</label>
            <input type="number" className="form-control" id="available" vaklue={available} onChange={handleAvailable}/>
        </div>
        <button type="submit" className="btn btn-primary">Crear</button>
        </form>
    </div>
  )
}