import React from 'react'
import EmployeeTable from './EmployeeTable'

const EmployeeLayout = () => {
  return (
    <div className='employee-section'>
        <div className='container'>
            <h2>Employee details</h2>
            <EmployeeTable />
        </div>
    </div>
  )
}

export default EmployeeLayout