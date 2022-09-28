import React from 'react'
import Sidebar from '../../../components/Sidebar'
import { DataGrid } from '@mui/x-data-grid';


import './index.scss';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'fullname', headerName: 'Họ và tên', width: 250 },

  {
    field: 'email',
    headerName: 'Email',
    type: 'email',
    width: 250,
  },
  {
    field: 'Action',
    headerName: 'Hành động',
    type: 'text',
    width: 200,
  },

];

const rows = [
  { id: 1, fullname: 'Snow', email: 'huynhanh2215@gmail.com' },


];

export default function UserManager() {
  return (
    <Sidebar title="Quản lý người dùng">
      <div className='title_user'>
        <span className='content_tittle_user'>NGƯỜI DÙNG</span>
        
      </div>
      <div className='nav_user'>
        <div className='add_user' >
          <button className='btn_add_user'>
            <i className="far fa-plus add_user_icon" ></i>
            <span style={{paddingLeft: '10px' }}> Thêm người dùng</span>
          </button>
        </div>
        <div className='search'>
          <i className='fas fa-search search_icon' ></i>
          <input type="search" placeholder="Tìm kiếm..." className="search_input"></input>
        </div>
      </div>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div>
    </Sidebar>
  )
}
