

import Admin from './pages/Admin'
import NotFound from './pages/_404'


const route = [
    { path: '/', exact: true, name: 'Admin', component: <Admin /> },
    { path: '/*', exact: true, name: 'Custom404', component: <NotFound/>},
]

export default route