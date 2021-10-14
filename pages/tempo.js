function Tempo(props) {
  console.log('> Passando pelo FrontEnd();');
  const dynamicDate = new Date();
  const dinamicDateString = dynamicDate.toGMTString();

  return (
    <div>
      <div> {dinamicDateString} (dinâmico)</div>
      <div> {props.staticDateString} (estático - com delay) </div>
    </div>
  )
}

export async function getStaticProps() {
  console.log('> Passando pela getStaticProps;')
  console.log('> Adicionado delay de 5 segundos;')

  await delay(5000);
  const staticDate = new Date();
  const staticDateString = staticDate.toGMTString();

  return {
    props: {
      staticDateString
    }
  }
}

const delay = ms => Promise(resolve => setTimeout(resolve, ms))

export default Tempo;