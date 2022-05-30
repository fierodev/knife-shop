import React from 'react'

function NewTool() {
  return (
      <div  className="w-25 p-3 m-auto">
        <div className="w-25 p-3 m-auto">NewTool</div>
        <div className="input-group mb-3">
            <span className="input-group-text">name</span>
            <input type="text" className="form-control" placeholder="tool`s name" aria-label="Username" aria-describedby="basic-addon1"/>
        </div>
        <div className="input-group mb-3">
            <span className="input-group-text">image</span>
            <input type="text" className="form-control" placeholder="url" aria-label="Username" aria-describedby="basic-addon1"/>
        </div>
        <div className="input-group mb-3">
            <span className="input-group-text">description</span>
            <input type="text" className="form-control" placeholder="description" aria-label="Username" aria-describedby="basic-addon1"/>
        </div>
         <div className="input-group mb-3">
            <span className="input-group-text">category</span>
            <input type="text" className="form-control" placeholder="category" aria-label="Username" aria-describedby="basic-addon1"/>
        </div>
      </div>
    
  )
}

export default NewTool