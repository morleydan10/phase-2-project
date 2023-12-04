import { HexColorPicker } from "react-colorful";

function ColorStudio( {onAddPallet} ) {
    const [color, setColor] = useState("#aabbcc");


    function handleSubmit(e) {
        e.preventDefault();
        
        
        const newPallet = [{
            primary: {},
            secondary: {},
            tertiary: {},
            quarternary: {}
        }
    ]

    fetch("http://localhost:3000/pallets")
    .then((res) => res.json())
    .then((data) => {
        onAddPallet(data)
    }), [] 
};


    return (
        <div>
            <HexColorPicker color={color} onChange={setColor} />
            <form>
                onSubmit={handleSubmit}
                {/* onChange and  */}
                <input></input>
                <input></input>
                <input></input>
                <input></input>
            </form>
        </div>
    )
}

export default ColorStudio;