import Link from "next/link" 
export default function Home() {
 
 
  return (
   <div className='container mx-auto py-5 my-5'>
      <h1 className='text-4xl  font-bold p-1 sm:px-10'>INDEX ALL TASK ETHANUS MERN</h1>
        <div className='p-2 sm:p-10'>
          <h2>Users Table</h2>

          <table>
            <thead>
              <tr className=''>
              <th>ID</th>
              <th>TASK</th>
               <th>LINK</th>
                </tr>
            </thead>
            <tbody>
            <tr key={"1"}>
                 <td>1</td>
                 <td>Task 1</td>
                 <td className="text-sky-500 hover:text-red-600"><Link href="/task-1">Link</Link></td>
                </tr>
             
                <tr key={"4"}>
                 <td>4</td>
                 <td>Task 4</td>
                 <td className="text-sky-500 hover:text-red-600"><Link href="/task-4">Link</Link></td>
                </tr>
                <tr key={"5"}>
                 <td>5</td>
                 <td>Task 5</td>
                 <td className="text-sky-500 hover:text-red-600"><Link href="/task-4">Link</Link></td>
                </tr>
                <tr key={"6"}>
                 <td>6</td>
                 <td>Task 6</td>
                 <td className="text-sky-500 hover:text-red-600"><a href="https://leaveitblank.co/">Link</a></td>
                </tr>
             
            </tbody>
          </table>
      </div>
   </div>
  )
}
