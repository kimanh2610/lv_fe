import CourseManager from './pages/Admin/CourseManager'
import UserManager from './pages/Admin/UserManager'
import Home from './pages/Home'
import Login from './pages/Login'

import NotFound from './pages/_404'


const route = [
    { path: '/', exact: true, name: 'Home', component: <Home /> },
    { path: '/login', exact: true, name: 'Login', component: <Login /> },


    { path: '/quanly/nguoidung', exact: true, name: 'UserManager', component: <UserManager /> },
    { path: '/quanly/khoahoc', exact: true, name: 'CourseManager', component: <CourseManager /> },
    { path: '/*', exact: true, name: 'Custom404', component: <NotFound/>},
]

export default route