import { useState } from 'react'

function App() {
  const [formData, setFormData] = useState({
    author: "",
    title: "",
    body: "",
    public: false,
  })
  function handleFormData(e) {
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value.trim()
    setFormData(() => ({
      ...formData,
      [e.target.name]: value,
    }))
    console.log(formData)
  }
  function handleSubmit(e) {
    e.preventDefault()

    fetch('https://67eab80334bcedd95f64634f.mockapi.io/api/posts2/post', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
      .then(res => res.json())
      .then(data => console.log("seuccess", data))
      .catch(err => console.log("error", err))
    console.log(formData)
  }

  return (
    <>

      <div className="container my-5" >
        <div className="card p-5" >
          <div className="card-head">
            <h3>Send your request</h3>
          </div>
          <div className="card-body">

            <form className=" g-3 needs-validation" onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="validationCustom01" className="form-label">Post's author</label>
                <input type="text" className="form-control" id="name" name="author" value={formData.author} onChange={handleFormData} required />
              </div>
              <div className="mb-3">
                <label htmlFor="validationCustom02" className="form-label">Post's title</label>
                <input type="text" className="form-control" id="title" name="title" value={formData.title} onChange={handleFormData} required />
              </div>
              <div className="mb-3">
                <label htmlFor="" className="form-label">Post's body</label>
                <textarea className="form-control" name="body" id="body" value={formData.content} onChange={handleFormData}></textarea>
              </div>
              <div className="mb-3">
                <input type="checkbox" name="public" id="public" checked={formData.public} onChange={handleFormData} />
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
