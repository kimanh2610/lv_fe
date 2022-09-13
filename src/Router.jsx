import Admin from './pages/Admin'
import Home from './pages/Home'
import Login from './pages/Login'
import NotFound from './pages/_404'

const route = [
    { path: '/', exact: true, name: 'Home', component: <Home /> },
    { path: '/login', exact: true, name: 'Login', component: <Login /> },
    { path: '/admin', exact: true, name: 'Admin', component: <Admin /> },


    { path: '/*', exact: true, name: 'Product detail', component: <NotFound/>},
]

export default route