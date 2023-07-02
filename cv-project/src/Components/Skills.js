export default function Skills (){
    const skillsData = ['Python','Power BI', 'Excel', 'React' ]
    return(
    <div className="component">  
        <button>Edit</button>
        <h2>Skills</h2>
        <ul className=" skillList">
            {skillsData.map((skill, index) => { 
                    return (
                    <li key = {index} >
                        {skill}
                    </li>
                )
            })}
        </ul>
    </div>
    )
}

