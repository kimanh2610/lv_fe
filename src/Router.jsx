import Home from './pages/Home'
import Login from './pages/Login'

import NotFound from './pages/_404'


const route = [
    { path: '/', exact: true, name: 'Home', component: <Home /> },
    { path: '/login', exact: true, name: 'Login', component: <Login /> },



    { path: '/*', exact: true, name: 'Custom404', component: <NotFound/>},
]

export default route