  

export function Characters (props){
    return (
        <div>
            <h1>Characters Page</h1>
            <h1 id="name">{props.name}</h1>
                <section id="generalInfo">
                <p>Height: {props.height}<span id="height"></span> cm</p>
                <p>Mass: {props.mass}<span id="mass"></span> kg</p>
                <p>Born: {props.birth_year}<span id="birth_year"></span></p>
                </section>
                <section id="planets">
                <h2>Homeworld</h2>
                <p>{props.homeworld}<span id="homeworld"></span></p>
                </section>
                <section id="films">
            <h2>Films appeared in</h2>
            <ul></ul>
            </section>
           </div>
    )
}