import ColorPicker from '../components/ColorPicker';
import NavBar from "../layouts/NavBar"
function Task3() {

    return (<>
        <div className='container mx-auto py-5 my-5'>
        <NavBar /> 
            <h1 className='text-4xl  font-bold p-1 md:px-10'>Task 3 </h1>
            
            <div className='p-2 md:p-10 mt-10 h-screen max-w-lg mx-auto'>
                <div>
                    <ColorPicker color={"#7b1fa2"}/>
                </div>
            
            </div>
        </div>
    </>)
}

export default Task3;