import { useState } from 'react'

function App() {
  const [formData, setFormData] = useState({
    author: "",
    title: "",
    content: "",
  })
  function handleFormData(e) {
    e.preventDefault()
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value
    setFormData(() => ({
      ...formData,
      [e.target.name]: value,
    }))

  }
  console.log(formData)

  return (
    <>

      <div className="container my-5" >
        <div className="card p-5" >
          <div className="card-head">
            <h3>Send your request</h3>
          </div>
          <div className="card-body">

            <form className=" g-3 needs-validation" onSubmit={handleFormData}>
              <div className="mb-3">
                <label htmlFor="validationCustom01" className="form-label">Post's author</label>
                <input type="text" className="form-control" id="name" name="author" value={formData.author} onChange={handleFormData} required />
              </div>
              <div className="mb-3">
                <label htmlFor="validationCustom02" className="form-label">Post's title</label>
                <input type="text" className="form-control" id="title" name="title" value={formData.title} onChange={handleFormData} required />
              </div>
              <div className="mb-3">
                <label htmlFor="" className="form-label">Post's content</label>
                <textarea className="form-control" name="content" id="content" value={formData.content} onChange={handleFormData}></textarea>
              </div>
              <div className="mb-3">
                <input type="checkbox" name="public" id="public" onChange={handleFormData} required />
              </div>
              <div>
                <button className="btn btn-primary" type="submit">Submit form</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
