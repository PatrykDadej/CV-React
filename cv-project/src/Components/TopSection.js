function TopSection(props){

return (
    <div className= 'TopSection component'>
        <button>Edit</button>
        <h2> {props.Name + ' ' + props.SecondName} </h2>
        <p className = 'JobPosition'> {props.jobPosition} </p>
        <p className = 'personalLetter'> {props.personalStatement} </p>
    </div>
)
}

export default TopSection