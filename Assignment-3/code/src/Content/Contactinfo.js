import { timeStampFormatter } from "../Utilities/FormatDate";

const ContactInfo = ({ employee }) => {
    const ContactDetail = ({ detailName, detail }) => {
        return (
            <div className="ContactDetailWrapper">
                <span className="ContactDetailName">{detailName} </span>
                <span className="ContactDetail">{detail} </span>
            </div>
        );
    };
    return <div className="ContactInfo ">
        <ContactDetail detailName={"Appointment"} detail={timeStampFormatter(employee.appointmentOn)} />
        <ContactDetail detailName={"Email"} detail={employee.email} />
        <ContactDetail detailName={"Phone"} detail={employee.phone} />

    </div>;
};
export default ContactInfo 