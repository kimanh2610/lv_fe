import CourseManager from './pages/Admin/CourseManager'
import BlogManager from './pages/Admin/BlogManager'
import UserManager from './pages/Admin/UserManager'
import Home from './pages/Home'
import Login from './pages/Login'

import NotFound from './pages/_404'
import CertificateManager from './pages/Admin/CertificateManager'
import Course from './pages/Home/Course'


const route = [
    { path: '/', exact: true, name: 'Home', component: <Home /> },
    { path: '/login', exact: true, name: 'Login', component: <Login /> },
    { path: '/khoahoc', exact: true, name: 'Course', component: <Course /> },


    { path: '/quanly/nguoidung', exact: true, name: 'UserManager', component: <UserManager /> },
    { path: '/quanly/khoahoc', exact: true, name: 'CourseManager', component: <CourseManager /> },
    { path: '/quanly/blog', exact: true, name: 'BlogManager', component: <BlogManager /> },
    { path: '/quanly/chungnhanhoc', exact: true, name: 'CertificateManager', component: <CertificateManager /> },



    { path: '/*', exact: true, name: 'Custom404', component: <NotFound/>},
]

export default route