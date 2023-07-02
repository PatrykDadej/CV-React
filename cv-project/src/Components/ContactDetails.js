function ContactDetails (props) {
return (
    <div className="contactDetails component">
        <button>Edit</button>
        <p>{'tel. ' + props.tel}</p>
        <p> {'email: ' + props.email}</p>
    </div>
        
)
}

export default ContactDetails