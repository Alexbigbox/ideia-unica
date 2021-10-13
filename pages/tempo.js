function Tempo(props) {
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
  const staticDate = new Date();
  const staticDateString = staticDate.toGMTString();

  return {
    props: {
      staticDateString
    }
  }
}

export default Tempo;