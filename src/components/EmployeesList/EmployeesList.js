import React, { Component } from 'react';
import { Table } from 'antd';
import 'antd/dist/antd.css';


const columns = [
    {
      title: 'id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'employee_name',
      dataIndex: 'employee_name',
      key: 'employee_name',
    },
    {
      title: 'employee_salary',
      dataIndex: 'employee_salary',
      key: 'employee_salary',
    },
    {
        title: 'employee_age',
        dataIndex: 'employee_age',
        key: 'employee_age',
      },
      {
        title: 'profile_image',
        dataIndex: 'profile_image',
        key: 'profile_image',
      },
  ];

class EmployeesList extends Component{
    state = {
        listEmployees: [],
        loading: false
    };

    componentDidMount = () => {
        
        this.setState({loading:true});

        this.getEmployees().then(employeesList => {
            if(employeesList)
                this.setState({listEmployees: employeesList});
            
            this.setState({loading: false});
        });
        
    }

    getEmployees = () => {
        return fetch('http://dummy.restapiexample.com/api/v1/employees',{method:'GET'})
                .then(result => result.json());
    }

    render = () => {
        return(
            <Table columns={columns} dataSource={this.state.listEmployees} loading={this.state.loading}/>
        );
    }
}

export default EmployeesList;