export const sum = (a,b) =>{
  return <h2>{a + b}</h2>
}

function App() {
  return (
    <div className="App">
      {sum(2,5)}
    </div>
  );
}

export default App;
