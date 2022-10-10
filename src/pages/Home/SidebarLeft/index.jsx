import React from 'react'
import './index.scss';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import HomeIcon from '@mui/icons-material/Home';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import QuizIcon from '@mui/icons-material/Quiz';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import RateReviewIcon from '@mui/icons-material/RateReview';

export default function SidebarLeft() {
    return (
        <div className="sidebar_left">
            <div className="sidebar_left_wrapper">
                <div >
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
    )
}
