import React, { useState, useEffect } from "react";
import "./filterControls.css";
import { getGenres } from "../../api/tmdb-api";

const FilterControls = props => {
  const [genres, setGenres] = useState([{ id: '0', name: "All" }])

  // useEffect(() => {
  //   fetch(
  //     "https://api.themoviedb.org/3/genre/movie/list?api_key=" +
  //       process.env.REACT_APP_TMDB_KEY
  //   )
  //     .then(res => res.json())
  //     .then(json => json.genres)
  //     .then(apiGenres => {
  //       setGenres([genres[0], ...apiGenres]);
  //     });
  // }, []);

  useEffect(() => {
    getGenres().then(allGenres => {
      setGenres([genres[0], ...allGenres]);
    });
  }, []);

  const handleChange = (e, type, value) => {
    e.preventDefault()
    props.onUserInput(type, value)   // NEW
  };
  const handleTextChange = e => {
    handleChange(e, "name", e.target.value)
  }
  const handleGenreChange = e => {
    handleChange(e, "genre", e.target.value)
  };

  return (
      <div className="row bg-warning">
        <div className="col-md-12">
          <h4>
            <span>List Filtering:</span>
            <input
              type="text"
              placeholder="Title Search"
              onChange={handleTextChange}
            />
          <select id="genre" onChange={handleGenreChange}>
              {genres.map(genre => {
                return (
                  <option key={genre.id} value={genre.id}>
                    {genre.name}
                  </option>
                );
              })}
          </select>
         </h4>
        </div>
      </div>
  );
}

export default FilterControls;









// import React from "react";
// import "./filterControls.css";

// const FilterControls = props => {
//   const genres = [
//     {id: 1, name: "Animation"},
//     {id: 2, name: "Comedy"},
//     {id: 3, name: "Thriller"}
//   ]

//   return (
//       <div className="row bg-warning">
//         <div className="col-md-12">
//           <h4>
//             <span>List Filtering:</span>
//             <input
//               type="text"
//               placeholder="Title Search"
//             />
//             <span>Genre:</span>
//             <select id="genre">
//               {genres.map(genre => {
//                 return (
//                   <option key={genre.id} value={genre.id}>
//                     {genre.name}
//                   </option>
//                 );
//               })}
//             </select>
//           </h4>
//         </div>
//       </div>
//   );
// };
// export default FilterControls;