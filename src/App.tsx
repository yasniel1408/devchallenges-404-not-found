import Layout from './components/Layout'
import scarecrow from './assets/Scarecrow.png'

function App() {

  return (
    <Layout>
      <>
        <div>
          <img src={scarecrow} alt="404 Not Found" />
        </div>
        <div>
          <h1>I have bad news for you</h1>
          <p>The page you are looking for might be removed or is temporarily unavailable</p>
          <button>BACK TO HOMEPAGE</button>
        </div>
      </>
    </Layout>
  )
}

export default App
