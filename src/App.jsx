import { useState } from 'react'

function App() {

  return (
    <>

      <div className="container my-5" >
        <div className="card p-5" >
          <div className="card-head">
            <h3>Send your request</h3>
          </div>
          <div className="card-body">

            <form className=" g-3 needs-validation" novalidate>
              <div>
                <label for="validationCustom01" className="form-label">Post's author</label>
                <input type="text" className="form-control" id="author-name" name="author-name" required />
              </div>
              <div >
                <label for="validationCustom02" className="form-label">Post's title</label>
                <input type="text" className="form-control" id="post-title" name="post-title" required />
              </div>

              <div className="mb-3">
                <label for="" className="form-label">Post's content</label>
                <textarea className="form-control" name="post-content" id="post-content" rows="3"></textarea>
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
