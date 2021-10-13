function Tempo(props) {
  console.log('> Passando pelo FrontEnd();')
  const dynamicDate = new Date();
  const dinamicDateString = dynamicDate.toGMTString();

  return (
    <div>
      <div> {dinamicDateString} (dinâmico)</div>
      <div> {props.staticDateString} (estático) </div>
    </div>
  )
}

export function getStaticProps() {
  console.log('> Passando pela getStaticProps();')
  const staticDate = new Date();
  const staticDateString = staticDate.toGMTString();

  return {
    props: {
      staticDateString
    }
  }
}

export default Tempo;