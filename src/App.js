import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Client from "./layout/client";
import Admin from "./layout/admin";


function App() {

	const navigate = useNavigate()

	// useEffect(()=> {
	// 	navigate('/client')
	// })

  return (
    <div className="App">
		<button onClick={()=>{navigate('/admin')}} style={{position: 'relative', zIndex: 100000}}>Admin</button>
		<button onClick={()=>{navigate('/client')}} style={{position: 'relative', zIndex: 100000}}>Client</button>
		<Routes>
			<Route path="/client" element={<Client></Client>}></Route>
			<Route path="/admin" element={<Admin></Admin>}></Route>
		</Routes>


    </div>
  );
}

export default App;
