export default function Experience () {
    const Experience = [
        {
        position:'Cook',
        company:'Dafarn Datws',
        startDateMMYYYY:'06/2021',
        finishDate:'06/2022',
        keyResponsibilities:[
            'Preparing food for bloody customer',
            'Telling people what to do',
            'handling complaints which we didn`t have',
            'Drinking coffee for most of the day ']
        },
        {
            position:'Data Administrator',
            company:'FluidPower',
            startDateMMYYYY:'06/2022',
            finishDate:'01/2023',
            keyResponsibilities:[
                'Website data maintanace',
                'Fixing data anomalies',
                'Providing data exports for people across the group',
                'Making sure data standards meet the highest industry standards']
            },{
                position:'Data Analyst',
                company:'Flowtech',
                startDateMMYYYY:'01/2023',
                finishDate:'08/2023',
                keyResponsibilities:[
                    'Conducting data analyses',
                    'Presenting results of the data',
                    'Supporting decision making process',
                    'Cleaning the data']
                }]

    
    return(
        <div className="component">
            <button className="baton">Edit</button>
            {Experience.map( (exp) => {
            return (
                <div>
                    <h3> {exp.position} ({exp.startDateMMYYYY} - {exp.finishDate})</h3>
                    <p> {exp.company}</p>
                    <ul>
                    {exp.keyResponsibilities.map( (resp) => {
                        return (<li>{resp}</li>)
                    }
                    )}
                    </ul>

                </div>
            )
            })}
        </div>
    )
}