import { useState, useEffect } from "react"
import { useNavigate, useParams, Link } from "react-router-dom"

export const Edit = () => {
    const urlBase = import.meta.env.VITE_APP_ENDPOINT
    const navigate = useNavigate();
    const { key } = useParams();

    const [name, setName] = useState('')
    const [available, setAvailable] = useState(0)

    const fetchProduct  = async () => {
        try {
          const response = await fetch(`${urlBase}api/products/${key}`)
          const data = await response.json()
          setName(data.name)
          setAvailable(data.available)
        } catch (error) {
          console.error('Ha ocurrido un error: ', error)
        }
    }

    useEffect( () => {
        fetchProduct ()
    }, []);

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
        await fetch(`${urlBase}api/products/${key}`, {
            method: 'PUT',
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
        <h1>Editar producto</h1>
        <div className='alert alert-warning' style={{ display: error ? '' : 'none' }} role="alert">
          Los datos enviados no son validos
        </div>
        <form onSubmit={handleSubmit}>
        <div class="mb-3">
            <label for="name" class="form-label">Nombre producto</label>
            <input type="text" className="form-control" id="name" value={name} onChange={handleName}/>
        </div>
        <div class="mb-3">
            <label for="available" class="form-label">Unidades disponibles</label>
            <input type="number" className="form-control" id="available" value={available} onChange={handleAvailable}/>
        </div>
        <Link to="/" className="btn btn-secondary">Cancelar</Link>
        &nbsp;
        <button type="submit" className="btn btn-primary">Editar</button>
        </form>
    </div>
  )
}