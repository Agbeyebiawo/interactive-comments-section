import { useState } from "react"
import Comments from "./component/Comments/Comments"
import { getUser } from "./app/userSlice"
import { useSelector } from "react-redux"
// import DeletePopUp from "./component/Popup/DeletePopUp"

function App() {
  const currentUser = useSelector(getUser)
  // const [content,setContent] = useState(
  //   'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, accusantium? Quidem tempore eos, quis ea dignissimos magnam. Repellat, perspiciatis molestiae.'
  // )
  // const [updateContent,setUpdateContent] = useState(content)
  // const [edit,setEdit] = useState(false)

  // const showForm = ()=>{
  //   edit === false ? setEdit(true) : setEdit(false)
  // }

  // const handleSubmit = (e)=>{
  //   e.preventDefault()
  //   setContent(updateContent)
  //   showForm()
  // }
  return (
    <>
      {/* <div className="max-w-3xl mx-auto bg-white p-4 rounded-xl">
        <button onClick={()=>showForm()} className="px-4 py-2 mb-3 bg-blue-700 text-white font-semibold rounded-lg">Edit</button>
          {edit === false ? (
            <p className="p-4">
            {content}
            </p>
            ): (
            <form onSubmit={handleSubmit} className="flex flex-col justify-end items-end gap-4">
              <textarea name="content" id="conten" className="w-full border border-slate-200 p-4 rounded-lg" 
              value={updateContent} onChange={e=>setUpdateContent(e.target.value)}>

              </textarea>
              <button className="text-white bg-blue-700 px-4 py-2 rounded-lg uppercase">Update</button>
            </form>
          )}
      </div> */}
      {/* < DeletePopUp /> */}
      <Comments />
    </>
  )
}

export default App
