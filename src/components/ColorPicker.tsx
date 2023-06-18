import  { useState, useEffect } from 'react';
import { SwatchesPicker } from 'react-color'
 
const ColorPicker = (props: any) => {
    const [color, setColor] = useState('#ffffff');
    useEffect(() =>{
      if(props.color){
        setColor(props.color);
      }
    }, [props.color]);
    const [showPicker, setShowPicker] = useState(false);
    const handleChangeComplete = (color: { hex: string; }) => {
        setColor(color.hex);
        setShowPicker(false);
    };
    const handlePicker = () => {
        setShowPicker(!showPicker);
    }
    console.log(color);
  return (
    <div className='flex flex-col justify-center items-center'>
          <button onClick={handlePicker} className={`  px-4 py-2 border border-violet-500 rounded-md my-3 `} style={{
            backgroundColor: color,
            color: color === '#ffffff' ? 'black' : 'white'
          }}>
            Pick a color
          </button>
          {
            showPicker && <SwatchesPicker color={color}  onChange={handleChangeComplete} />
          }
    
          
    </div>
     
  );
};

export default ColorPicker;
