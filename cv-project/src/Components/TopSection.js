function TopSection(props){

return (
    <div className= 'TopSection'>
        <h2> {props.Name + ' ' + props.SecondName} </h2>
        <p className = 'JobPosition'> {props.jobPosition} </p>
        <p className = 'personalLetter'> {props.personalStatement} </p>
    </div>
)
}

export default TopSection