import Header from './components/Header'

function App() {
  return (
    <>
      <Header />
      <Header text="custom Header using params" bgColor="blue" textColor="Green" />
      <div className='container'>
        <h1>My App</h1>
      </div>
    </>
  )
}

export default App
