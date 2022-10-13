import React from 'react'
import SidebarLeft from '../SidebarLeft'
import ListLesson from './ListLesson'
import './index.scss'
import Header from '../../../components/Header/header.component'
import Footer from '../../../components/Footer/footer.component'
import ContentLesson from './ContentLesson'

export default function Lesson() {
    return (
        <>
            <Header />
            <div className="wrapper_lesson">
                <SidebarLeft />
                <ListLesson />
                <ContentLesson />
                <div>
                </div>

            </div>
            <div style={{ width: '85%' }}>
                <Footer />
            </div>
        </>

    )
}
