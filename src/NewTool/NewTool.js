import React from 'react';



function NewTool() {
  return (
    <div>
        <div>
            <a className="btn btn-secondary action-button"  role="button" href="/">To Main Page</a>
        </div>
        <div  className="w-25 p-3 m-auto">
        <div className="w-25 p-3 m-auto">NewTool</div>
        <div className="input-group mb-3">
            <span className="input-group-text w-25">name</span>
            <input type="text" className="form-control" placeholder="tool`s name" aria-label="Username" aria-describedby="basic-addon1"/>
        </div>
        <div className="input-group mb-3">
            <span className="input-group-text  w-25">image</span>
            <input type="text" className="form-control" placeholder="url" aria-label="Username" aria-describedby="basic-addon1"/>
        </div>
        <div className="input-group mb-3">
            <span className="input-group-text  w-25 p-1 ">description</span>
            <input type="text" className="form-control" placeholder="description" aria-label="Username" aria-describedby="basic-addon1"/>
        </div>
         <div className="input-group mb-3">
            <span className="input-group-text  w-25">category</span>
            <input type="text" className="form-control" placeholder="category" aria-label="Username" aria-describedby="basic-addon1"/>
        </div>
        <div className=" w-50 p-3 m-auto d-flex justify-content-around">
            <a className="btn btn-secondary action-button"  role="button">Save</a>
            <a className="btn btn-secondary action-button ml-3"  role="button">Clean all</a>
        </div>
        
      </div>
    </div>
      
    
  )
}

export default NewTool