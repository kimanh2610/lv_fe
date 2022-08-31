import React from 'react';
import './index.style.scss';

import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import HomeIcon from '@mui/icons-material/Home';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import QuizIcon from '@mui/icons-material/Quiz';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import RateReviewIcon from '@mui/icons-material/RateReview';
import { brown } from '@mui/material/colors';


const Home = () => {
	return (
		<div className="home_wrapper">
			<div className="sidebar_left">
				<div className="sidebar_left_wrapper">
					<div  >
						<Box sx={{ '& > :not(style)': { m: 1 } }}>
							<Fab className="btn_add" color="primary" aria-label="add">
								<AddIcon />
							</Fab>
						</Box>
					</div>
					<ul className="sidebar_list">
						<li>
							<a className="sidebar_items sidebar_items_active">
								<HomeIcon />
								<span>Home</span>
							</a>
						</li>
						<li>
							<a className="sidebar_items">
								<LibraryBooksIcon />
								<span>Khóa Học</span>
							</a>
						</li>
						<li>
							<a className="sidebar_items">
								<DocumentScannerIcon />
								<span>Tài Liệu</span>
							</a>
						</li>
						<li>
							<a className="sidebar_items">
								<QuizIcon />
								<span>Trắc Nghiệm Nhanh</span>
							</a>
						</li>
						<li>
							<a className="sidebar_items">
								<RateReviewIcon />
								<span>Blog</span>
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div className="sidebar_content">
				<div className="sidebar_content_introduc introduc_bg">
					<h1 className="sidebar_title"><span >Learn</span>Code</h1>
					<h3 className="sidebar_h3">Củng cố kiến thức cơ bản nhất về ngôn ngữ lập trình</h3>
					<h4 className="introduc_question">
						<a href="">
							Bạn không biết bắt đầu từ đâu?
						</a>
					</h4>
				</div>
				<svg className="design_shape" viewBox="0 0 100 100" preserveAspectRatio="none">
					<path className="design_shape_cl" id="wavepath" d="M0,0  L110,0C35,150 35,0 0,100z" fill="#282A35"></path>
				</svg>
				<div className="sidebar_content_html html_bg" style={{ marginTop: "-10px" }} >
					<div className="html_content"  >
						<div className="html_content_l  html_l_col" style={{ padding: "3%" }}>
							<h1 className="html_title">HTML</h1>
							<p style={{ fontSize: "16px" }}>Ngôn ngữ xây dựng các trang web</p>
							<a className="cl_learn_html btn_html" href="/" style={{ marginBottom: "2px" }}>Học HTML</a>
							<br></br>
							<a className="btn_html cl_reference" href="/" style={{ marginBottom: "2px" }}>Tài liệu HTML</a>

						</div>
						<div className="html_content_r r16" style={{ padding: "3%", bgcolor: '#D9EEE1 !important' }}>
							<div className="html_wd" style={{ padding: "16px" }} >
								<h3>Ví dụ HTML:</h3>
								<div className="ct_html_ex" style={{ height: "300px" }}>
									<div className="wrapper-content_html" style={{ display: 'inline-block' }}>
										&lt; !DOCTYPE <span style={{ color: 'red' }}>html</span> &gt;
									</div>
									<span style={{ color: 'brown' }}>

										{/* <span className="tagcolor" style={{ color: 'midnightblue' }}>&lt; 

                    </span>
                    !DOCTYPE
                    <span className="tagcolor" style={{ color: 'red' }}>html</span>
                    <span className="tagcolor" style={{ color: 'midnightblue' }}>&gt;</span> */}
									</span>

									&lt;html&gt;<br></br>
								</div>

								<br></br>
								{/* &lt;title&gt;HTML Tutorial&lt;/title&gt;<br></br>
                  &lt;body&gt;<br></br>
                  &lt;h1&gt;This is a heading&lt;/h1&gt;<br></br>
                  &lt;p&gt;This is a paragraph.&lt;/p&gt;<br></br>
                  &lt;/body&gt;<br></br>
                  &lt;/html&gt; */}




							</div>
						</div>

					</div>
				</div>
			</div>
		</div>
	)
}

export default Home