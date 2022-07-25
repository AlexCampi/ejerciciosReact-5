import { useState } from 'react'

function Erase(props) {
  let [erase, setErase] = useState("")

  function delNombre(nombre) {
    props.setCompositores(props.compositores.filter((compositor) => { return compositor.nombre !== nombre }))
    setErase('')
  }

  return (
    <>
      <input type='text' onChange={(e) => { setErase(e.target.value) }} value={erase} />
      <button onClick={() => { delNombre(erase) }}>Eliminar</button>
    </>
  )
}

export default Erase