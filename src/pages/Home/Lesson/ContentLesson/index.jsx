import React from 'react';
import './index.scss';

export default function ContentLesson() {
  return (
    <div className="content_lesson_wrapper">
      <div className="ct_less_nav">
        <div className="ct_less_nav_content">
          <div className="leaderboard"></div>
          <h1>Hướng dẫn HTML</h1>
          <div className='btn_nextprev'>
            <a className='btn_prev lc_btn' href="/">&larr; Trang chủ</a>
            <a className='btn_next lc_btn' href="#">Kế tiếp &rarr;</a>
          </div>
        </div>

      </div>
    </div>
  )
}
