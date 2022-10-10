import React from "react";
import Sidebar from '../../../components/Sidebar'
// import { DataGrid } from '@mui/x-data-grid';
import './index.scss';
import Button from '@mui/material/Button';
import FormAddUsers from "./formAddUsers";
import TableAddUsers from "./table";




export default function UserManager() {
  
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Sidebar title="Quản lý người dùng">
      <div className='nav_user'>
        <div >
          <Button onClick={handleOpen} className="btn_add_user">
            <i className="fas fa-user-plus add_user_icon "></i>
            Thêm người dùng
          </Button>
        </div>

        <div className='search'>
          <i className='fas fa-search search_icon' ></i>

          <input type="search" placeholder="Tìm kiếm..." className="search_input"></input>
        </div>
      </div>

      <TableAddUsers/>


      <FormAddUsers
        isOpen={open}
        onClose={handleClose}
      />
    </Sidebar>

  )
}
