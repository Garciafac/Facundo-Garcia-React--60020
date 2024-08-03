export default function ButtonComponent({nombre, color}) {
    const misEstilos={
        backgroundColor: color
        
    }
  return ( 
    <>
    <button style={misEstilos}>{nombre}</button>
    </>
  )
}