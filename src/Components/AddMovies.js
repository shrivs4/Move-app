import React from 'react'

const AddMovies = ({UpdateName,updateDescription,updateCast,UpdateGenre,UpdateLanguage,addMovie}) => {
  return (
    <main className='AddMovie'>
      <h2>Add Movie</h2>
      <form onSubmit={addMovie}>
        <label htmlFor="moviename">Name</label>
        <input 
        required 
        type="text" 
        onChange={(e)=>UpdateName(e.target.value)}
        />
        <label htmlFor="moviename">Description</label>
        <textarea
        required
        onChange={(e)=>updateDescription(e.target.value)}
        />
        <label htmlFor="cast">Cast</label>
        <input 
        required
        type="text" 
        onChange={(e)=>updateCast(e.target.value)}
        />
        <label htmlFor="cast">Genre</label>
        <input 
        required 
        type="text" 
        onChange={(e)=>UpdateGenre(e.target.value)}
        />
        <label htmlFor="cast">Language</label>
        <select name="Language" onChange={(e)=>UpdateLanguage(e.target.value)}>
          <option value="" selected></option>
          <option value="English">English</option>
          <option value="Hindi">Hindi</option>
          <option value="Tamil">Tamil</option>
        </select>
        <button>Add</button>
      </form>
    </main>
  )
}

export default AddMovies