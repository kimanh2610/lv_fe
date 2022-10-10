import React from 'react'
import Layout from '../../../layout/client'
import SidebarLeft from '../SidebarLeft'
import './index.scss'

export default function Course() {
  return (
    <Layout>
      <div className="wrapper_course">
        <SidebarLeft />
        <div className="nav">
          <div className="title">
            <h1 className="title_course"> Khóa học</h1>
            <div className="content">
              <p>
                Các khóa học được thiết kế phù hợp cho cả người mới, nhiều khóa học hấp dẫn, chất lượng, nội dung dễ hiểu.
              </p>
            </div>
          </div>
          <div className="container_course">
            <div className="course_basic">
              <div className="course_basic_title">
                <h2 className="course_basic_title_content">
                  Khóa học cơ bản
                </h2>
              </div>
              <div className="course_body">
                <div className="modal_row">
                  <div className="modal_col">
                    <div className="course_body_items">
                      <a href="#" className="course_item_img" style={{ backgroundImage: `url("/images/course/html.jpg")` }}>
                      </a>
                      <h3 className='title_items'>
                        <a href="#">HTML từ Zero đến Hero</a>
                      </h3>
                    </div>
                  </div>

                  <div className="modal_col">
                    <div className="course_body_items">
                      <a href="#" className="course_item_img" style={{ backgroundImage: `url("/images/course/css.jpg")` }}>
                      </a>
                      <h3 className='title_items'>
                        <a href="#">CSS từ Zero đến Hero</a>
                      </h3>
                    </div>
                  </div>

                  <div className="modal_col">
                    <div className="course_body_items">
                      <a href="#" className="course_item_img" style={{ backgroundImage: `url("/images/course/jscr_basic.jpg")` }}>
                      </a>
                      <h3 className='title_items'>
                        <a href="#">Lập trình JavaScript cơ bản</a>
                      </h3>
                    </div>
                  </div>

                  <div className="modal_col">
                    <div className="course_body_items">
                      <a href="#" className="course_item_img" style={{ backgroundImage: `url("/images/course/php.jpg")` }}>
                      </a>
                      <h3 className='title_items'>
                        <a href="#">PHP cơ bản</a>
                      </h3>
                    </div>
                  </div>
                 
                </div>
              </div>
            </div>

            <div className="course_basic">
              <div className="course_basic_title">
                <h2 className="course_basic_title_content">
                  Khóa học nâng cao
                </h2>
              </div>
              <div className="course_body">
                <div className="modal_row">
                  <div className="modal_col">
                    <div className="course_body_items">
                      <a href="#" className="course_item_img" style={{ backgroundImage: `url("/images/course/jscr_nc.jpg")` }}>
                      </a>
                      <h3 className='title_items'>
                        <a href="#">Lập trình JavaScript nâng cao</a>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
