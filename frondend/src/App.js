import Footer from './components/Footer'
import Header from './components/Header'
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen'

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route index path='/' element={<HomeScreen />} />
            <Route index path='/login' element={<LoginScreen />} />
            <Route index path='/register' element={<RegisterScreen />} />
            <Route index path='/profile' element={<ProfileScreen />} />
            <Route path='/product/:id' element={<ProductScreen />} />
            <Route path='/cart/:id' element={<CartScreen en />} />
            <Route path='/cart' element={<CartScreen en />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;     
