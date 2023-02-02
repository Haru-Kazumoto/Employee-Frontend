import axios from 'axios';
import React from 'react'
import { DataGrid } from '@mui/x-data-grid';

const Table = () => {

    const columns = [
        {field:"id", headerName: "ID", width: 50},
        {field:"name", headerName: "Name", width: 250},
        {field:"gender",headerName: "Gender", width: 150},
        {field:"email", headerName: "Email", width: 280},
        {field:"jobRole", headerName: "Job Role",width: 170},
        {field:"date_join", headerName: "Date Join", width: 174 }
    ]

    const[data, setData] = React.useState(null);
        
    React.useEffect(() => {
        axios.get("http://localhost:8890/employee-data/get-all-employees")
        .then((response) => {
            setData(response.data);
            console.log(response.data)
        });
    },[])

    return (
    <div style={{height: 474, width: '70%', position: 'absolute',left:'50%', top:'50%', transform: 'translate(-50%, -50%)'}}>
        <DataGrid 
            rows={data}
            columns={columns}
            pageSize={7}
            rowsPerPageOptions={[5]}
        />
    </div>
  )
}

export default Table
