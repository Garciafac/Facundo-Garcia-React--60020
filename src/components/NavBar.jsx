import ButtonComponent from "./ButtonComponent";
import CartWidget from "./CartWidget";

export default function NavBar() {
    return ( 
      <>
      <nav> 
        <img style={{width:98}} src= "https://img.freepik.com/vector-gratis/diseno-logo-tienda-ropa-dibujado-mano_23-2149499592.jpg?w=740&t=st=1722650889~exp=1722651489~hmac=2135f311a920ab1470e9c0bcaf666d592c7400bcac5e9e2b7a0c745b3d13f05a" alt= "logo"/>
        <ButtonComponent nombre="Calzado" color="blue"></ButtonComponent>
        <ButtonComponent nombre="Campera" color="red"></ButtonComponent>
        <ButtonComponent nombre="Indumentaria" color="green"></ButtonComponent>
        <CartWidget/>
      </nav>
      </>
    )
  }