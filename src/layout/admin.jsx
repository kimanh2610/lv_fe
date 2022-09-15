import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from '../components/Footer/footer.component'
import Header from '../components/Header/header.component'
import route from '../RouterAdmin'

export default function Admin() {
    let menu = route.map((item, idx) => {
		return <Route key={idx} path={item.path} element={item.component} />
	})

  return (
    <div>
        {/* <Header/> */}
			<Routes>
				{menu}
			</Routes>
		{/* <Footer/> */}
    </div>
  )
}
