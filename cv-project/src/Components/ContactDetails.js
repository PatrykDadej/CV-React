function ContactDetails (props) {
return (
    <div className="contactDetails">
        <p>{'tel. ' + props.tel}</p>
        <p> {'email: ' + props.email}</p>
    </div>
        
)
}

export default ContactDetails