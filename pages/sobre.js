import Link from 'next/link'

function Sobre() {
  return (
    <div>
      <Link a href="/">
        <a>Acessar a Home</a>
      </Link>
      
      <h1>Sobre</h1>
      <p>Esta é a página sobre</p>
    </div>
  )
}


export default Sobre;