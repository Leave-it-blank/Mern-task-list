import { useState, useEffect } from "react";
import NavBar from "../layouts/NavBar"
function Task1(){
    const [text, setText] = useState<string>("");
    const [wordCount, setWordCount] = useState<number>(0);
    useEffect( () => {
     
        if(text.length === 0){
            setWordCount(0);
        }else{
            let data = text.replace(/(^\s*)|(\s*$)/gi,"");
            data = data.replace(/[ ]{2,}/gi," ");
            data = data.replace(/\n /,"\n");
            setWordCount(data.split(' ').length);
        }
       

    }, [text])
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.target.value);
    }
    return <>
    <div className='container mx-auto py-5 my-5'>
      <h1 className='text-4xl  font-bold p-1 md:px-10'>Task 1</h1>
        <div className='p-2 md:p-10 mt-10 h-screen max-w-lg mx-auto'>

            <div className=" border border-gray-200 shadow-md   w-full   flex justify-center items-center flex-col gap-5 p-4 py-10">
                <h1 className="text-xl sm:text-2xl md:text-4xl p-3 font-bold text-center px-5 "> Responsive Paragraph word Counter</h1>
                <form className="w-full">
                    <textarea onChange={handleChange}  value={text} className="border border-gray-700 w-full rounded-md text-black p-3" name="text" id="text" cols={30} rows={10}></textarea>
                </form>

                <div className="self-start text-gray-400 capitalize">Word count: {wordCount}</div>
            </div>

            <NavBar></NavBar>
        </div>

    </div>
    
    </>
}

export default Task1;