import React from 'react'
import "./index.scss"
import { Scrollbars } from 'react-custom-scrollbars';

export default function ListLesson() {
    return (
        <div className="list_lesson_wrapper" id='sidenav' >
                <div className="list_menu_right">
                <Scrollbars style={{ width: '200px', height: '550px' }}>
                    <div className="list_menu">
                        <h2 className="title_list_course">
                            <span className="name_title_list_course">HTML</span>
                        </h2>
                        <a target={'_top'} href="#" style={{ width: '170px' }} className='active'>HTML Home</a>
                        <a target={'_top'} href="#" style={{ width: '170px' }} >HTML Elements</a>
                        <a target={'_top'} href="#" style={{ width: '170px' }}>Thuộc tính HTML </a>
                        <a target={'_top'} href="#" style={{ width: '170px' }}>HTML Styles </a>
                        <a target={'_top'} href="#" style={{ width: '170px' }}>HTML Colors </a>
                        <a target={'_top'} href="#" style={{ width: '170px' }}>HTML CSS </a>
                        <a target={'_top'} href="#" style={{ width: '170px' }}>HTML Link </a>
                        <a target={'_top'} href="#" style={{ width: '170px' }}>HTML Image </a>
                        <a target={'_top'} href="#" style={{ width: '170px' }}>HTML List </a>
                        <a target={'_top'} href="#" style={{ width: '170px' }}>HTML Table </a>
                        <a target={'_top'} href="#" style={{ width: '170px' }}>HTML Classes </a>
                        <a target={'_top'} href="#" style={{ width: '170px' }}>HTML Id </a>
                        <a target={'_top'} href="#" style={{ width: '170px' }}>HTML Ifarme</a>
                        <a target={'_top'} href="#" style={{ width: '170px' }}>HTML Layout </a>
                        <a target={'_top'} href="#" style={{ width: '170px' }}>HTML JavaScript </a>

                        <h2 className="title_list_course">
                            <span className="name_title_list_course">HTML Form</span>
                        </h2>
                        <a target={'_top'} href="#" style={{ width: '170px' }}>HTML Form </a>
                        <a target={'_top'} href="#" style={{ width: '170px' }}>Thuộc tính HTML Form  </a>
                        <a target={'_top'} href="#" style={{ width: '170px' }}>HTML Form Elements</a>
                        <a target={'_top'} href="#" style={{ width: '170px' }}>HTML Form Elements</a>
                        <a target={'_top'} href="#" style={{ width: '170px' }}>HTML Form Elements</a>
                        <h2 className="title_list_course">
                            <span className="name_title_list_course"> Bài tập HTML</span>
                        </h2>
                        <a target={'_top'} href="#" style={{ width: '170px' }}>Trắc nghiệm nhanh</a>

                        <h2 className="title_list_course" style={{ paddingBottom: '50px' }}>
                            <span className="name_title_list_course"> Tài liệu HTML</span>
                        </h2>
                    </div>

        </Scrollbars>
                </div>

            </div>

    )
}
