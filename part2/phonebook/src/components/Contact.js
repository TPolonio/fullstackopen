const Contact = ({ name, number, delContact}) => {
    return (
        <li>
            {name} {number}
            <button onClick={delContact}>Delete</button>
        </li>
        
    );
}
 
export default Contact;