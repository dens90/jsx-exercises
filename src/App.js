export function getName(name){
  return <h1>Hello, {name}</h1>
}

function App() {

  return (
    <div className="App">
      {getName('World')}
    </div>
  );
}

export default App;
