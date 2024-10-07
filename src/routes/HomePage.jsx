import { useState, useEffect } from "react"
import { Link } from 'react-router-dom';

export const HomePage = () => {

  const urlBase = import.meta.env.VITE_APP_ENDPOINT

  const [products, setProducts] = useState([])

  const fetchProducts  = async () => {
    try {
      const response = await fetch(`${urlBase}api/products/`)
      const data = await response.json()
      setProducts(data)
    } catch (error) {
      console.error('Ha ocurrido un error: ', error)
    }
  }

  useEffect( () => {
    fetchProducts ()
  }, []);

  const handleDelete = async (id) => {
    fetch(`${urlBase}api/products/${id}`, { method: 'DELETE' })
        .then(() => {
          console.log({ status: 'Delete successful' })
          fetchProducts()
        })
  }

  return (
    <>
      <div className='content'>
        <h1>Lista de productos </h1>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <Link to="/create" className="btn btn-primary me-md-2" type="button">Crear</Link>
        </div>

        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nombre</th>
              <th scope="col">Cant. disponibles</th>
              <th scope="col">Opciones</th>
            </tr>
          </thead>
          <tbody>
            {
              products.map((product) => (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  <td>{product.available}</td>
                  <td>
                    <Link to={`/edit/${product.id}`}><i className="m-3 btn btn-outline-primary btn-sm bi-pencil-square"></i></Link>
                    <a onClick={() => handleDelete(product.id)}><i className="btn btn-outline-danger btn-sm bi-trash"></i></a>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </>
  )
}