import React from 'react'

function AddComment({submitComment}) {
  return (
    <form onSubmit={submitComment}>
      <fieldset>
        <input type="text" name="commentTextContent"/>
      </fieldset>
     <button>ADD</button>
    </form>
  )
}

export default AddComment
