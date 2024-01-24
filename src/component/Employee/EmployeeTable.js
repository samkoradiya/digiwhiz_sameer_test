import React from 'react'
import Table from 'react-bootstrap/Table';

const data = [
    {
        code:26,
        name:"Unish kumar",
        designation:"Front End Developer",
        contactdetails:9099201233,
        workProfile:"Total responsibilty to handle Front End Work",
    },
    {
        code:36,
        name:"Hari Parmar",
        designation:".Net Developer",
        contactdetails:9898512345,
        workProfile:"Handle all .net development",
    },
    {
        code:78,
        name:"Jigar Gor",
        designation:"Web & Graphic Designer",
        contactdetails:9898123466,
        workProfile:"Create Website, Graphics etc.",
    },
    {
        code:28,
        name:"Vikash Shah",
        designation:".Net Developer",
        contactdetails:9898123478,
        workProfile:"Handle all .net development",
    },
    {
        code:55,
        name:"Charmi Shah",
        designation:"SEO Executive",
        contactdetails:9789552451,
        workProfile:"SEO Work ",
    },
    {
        code:70,
        name:"Peter Parker",
        designation:"SEO Executive",
        contactdetails:9789552451,
        workProfile:"SEO Work",
    }
]


const EmployeeTable = () => {
  return (
    <Table striped responsive className='employee-table'>
    <thead>
      <tr>
        <th>Code</th>
        <th>Name</th>
        <th>Designation</th>
        <th>Contact Details</th>
        <th>Work Profile</th>
      </tr>
    </thead>
    <tbody>
      
        {data.map((item) => (
          <tr key={item.code}>
             <td >{item.code} </td>
             <td>{item.name} </td>
             <td >{item.designation} </td>
             <td>{item.contactdetails} </td>
             <td>{item.workProfile} </td>
          </tr>
          
        ))}
   
    
    </tbody>
  </Table>
  )
}

export default EmployeeTable