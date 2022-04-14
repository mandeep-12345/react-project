const RoleInfo = ({ employee }) => {
    return (
        <div className="RoleInfo">
            <div className="RoleInfoBoxWrapper">
                <input type="checkbox" className='RoleInfoBox' />


            </div>

            <div className="EmployeeImage">
                <img src={employee.image} alt="employee" />
            </div>
            <div className="RoleDetail">
                <div className="EmployeeRole">{employee.role}</div>
                <div className="EmployeeSummary">{employee.summary}</div>

            </div>



        </div>);
};
export default RoleInfo