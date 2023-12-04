import { HexColorPicker } from "react-colorful";

function ColorStudio() {
    const [color, setColor] = useState("#aabbcc");

    return (
        <div>
            <HexColorPicker color={color} onChange={setColor} />
        </div>
    )
}

export default ColorStudio;