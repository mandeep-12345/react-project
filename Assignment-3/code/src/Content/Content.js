import ContactInfo from "./Contactinfo";
import RoleInfo from "./Roleinfo";
import StatusInfo from "./Statusinfo";

const Content = ({employee}) =>{
    return( 
    <div className="Content">
        <ContactInfo employee={employee} />
        <StatusInfo employee={employee} />
        <RoleInfo employee={employee} />

    </div>);

};
export default Content