export default function Eduction() {
    const educationData = [
                            {University:'Aberystwyth University',
                            title:'Bachelors',
                            degree:'Business And Management',
                            startYear:2017,
                            finishYear:2020,
                            comment:'Kurcze no studiowalem sobie b&m spoko bylo zaglebialem sie w dziedzinach marketingu, magaementu, finansow, hr i tego typpu, pisalem rozprawke nt. Bitcoina',
                            }, 
                            {University:'Aberystwyth University',
                            title:'Masters',
                            degree:'International Business Management',
                            startYear:2020,
                            finishYear:2021,
                            comment:'Wiesz o co chodzi robilem praktycznie to samo co na bachelorze tylko bardziej szczegolowo, rowniez napisalem magisterke na temat Bitcoina ktory byl obiektem mojego zainteresowania',
                            }
                        ]
    return (
        <div className="component">
            <button>Edit</button>
            <h2>Education</h2>
                {educationData.map( (edu) => {
                    return(
                        <div>
                            <h3>{edu.degree} ({edu.title})</h3>
                            <p>{edu.University} ({edu.startYear} - {edu.finishYear})</p>
                            <p>{edu.comment}</p>
                        </div>
                    )
                } )}
            </div>
        
    )
}