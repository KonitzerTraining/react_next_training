export default function TemplateSyntaxPage () {

    const info: string = 'Text';
    const valueNum = 234566.09834;
    const status = true;
    const customer = {
        labelColor : {
            backgroundColor: 'red'
        }     
    };

    const clickHandler = (value: number): any => {
        console.log(value)
    };

    return (
        <>
            {/* HTML-Kommentar mit JS-Docblock */}
            <h2>Template Syntax</h2>
            <h3>Kommentare</h3>
            <p>Als JS-Kommentare in geschweifte Klammern</p>

            <h3>Daten anzeigen lassen (Interpolation)</h3>
            <p>{info}</p>

            <h3>Daten für die Ausgabe (Pipe)</h3>
            <p>Textausgabe: {info.toUpperCase()}</p>

            <p>Zahl als Währung {
                valueNum.toLocaleString('de-DE', {
                    style: 'currency',
                    currency: 'EUR'
                })    
            }</p>

            <h3>Styles</h3>
            <p style={{color: 'red'}}>Das Syle-Attribute nimmt Variablen entgegen</p>
            <p style={customer.labelColor}>Label</p>

            <h3>Classes</h3>
            <p className="text-xl">Klassen werden über className angegeben</p>
            <p className={`${(status)? 'text-red-800': 'text-green-800'} bg-sky-300`}>Klassen werden über className angegeben</p>

            <h3>Events</h3>
            <div>
                <button className="bg-indigo-500" onClick={() => {
                    clickHandler(200);
                }}>Click</button>
            </div>
        </>
    )
}