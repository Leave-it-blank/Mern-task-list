import { useState, useEffect } from "react";
import NavBar from "../layouts/NavBar"
function Task5(){
    const [text, setText] = useState({
            year: "",
            month: "",
            day: ""
    })
    const [age, setAge] = useState<number>(-1)
    const [showAge, setShowAge] = useState<boolean>(false);
    useEffect( () => {
        let today   = new Date();
        let currentYear = today.getFullYear();
        let currentMonth = today.getMonth() + 1;
        let month = currentMonth.toString();
        let currentDay = today.getDate();
       // console.log(month)
        if(currentMonth < 10){
            month = "0" + currentMonth.toString();
        } 
         setText({
            year: currentYear.toString(),
            month: month,
            day: currentDay.toString()
         })
        // console.log(text);

    }, [])
    useEffect( () => {
        if(text.year === "" || text.month === "" || text.day === ""){
        return ;
        }
        let today = new Date();
        let birthDate = new Date(`${text.year}-${text.month}-${text.day}`);
        let age = today.getFullYear() - birthDate.getFullYear();
        let m = today.getMonth() - birthDate.getMonth();
        console.log(age);
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate()))
        {
            age--;
        }
       // console.log(age);
        if(age){
            setAge(-1);
        }
        setAge(age);
    }, [text])


    const handleSubmit = (e: { preventDefault: () => void; }) => {
        //setText(e.target.value);
        e.preventDefault();
        const date = document.getElementById('date') as HTMLInputElement;
        const dateValue = date.value;
        const dateArray = dateValue.split('-');
        if(dataValidation(dateArray)){
         setText({
            year: dateArray[0],
            month: dateArray[1],
            day: dateArray[2]
         })
         setShowAge(true); 
        }else {
            setShowAge(false);
            alert('Please enter a valid date');
        }
    }
    const dataValidation = (dateArray: string[]) => {
        if(dateArray.length !== 3){
            return false;
        }
        if(dateArray[0].length !== 4){
            return false;
        }
        if(dateArray[1].length !== 2){
            return false;
        }
        if(dateArray[2].length !== 2){
            return false;
        }
        const now = new Date();
        //console.log(dateArray)
        const date = new Date( dateArray[0] + "-"+ dateArray[1] + "-"+ dateArray[2]);
        //console.log(date.toString());
       // console.log(now)
        if(date.toString() === 'Invalid Date'){
            return false;
        }
       
        console.log(date > now);
        if(date > now){
            return false;
        }

        return true;
    }
    //console.log(`${text.year}-${text.month}-${text.day}`);
    return (<>
     <div className='container mx-auto py-5 my-5'>
      <h1 className='text-4xl  font-bold p-1 md:px-10'>Task 5</h1>
        <div className='p-2 md:p-10 mt-10 h-screen max-w-lg mx-auto'>

            <div className=" border border-gray-200 shadow-md   w-full   flex justify-center items-center flex-col gap-5 p-4 py-10">
                <h1 className="text-xl sm:text-2xl md:text-4xl p-3 font-bold text-center px-5 "> Age Calculator</h1>
                <form className="w-full flex justify-center flex-col gap-5" onSubmit={handleSubmit}>
                    <input type="date"  defaultValue={`${text.year}-${text.month}-${text.day}`} className="border border-gray-700 w-full rounded-md text-black p-3" name="date" id="date"  />
                    <button className="px-4 py-2 bg-sky-500 text-white rounded-md w-1/2 mx-auto">Calculate</button>
                 </form>
                {
                   showAge && age >-1 && <div className="self-center text-gray-900 capitalize font-bold text-xl">You are {age} years old.</div>
                }
              
            </div>
            <NavBar /> 
        </div>

    </div>
    </>)
}

export default Task5;