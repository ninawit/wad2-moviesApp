// import React from "react";

// const FavoriteMoviesPage = () => {
//     return <h2>Favorite Movies</h2>
// }

// export default FavoriteMoviesPage

import React from "react";
import StubAPI from "../api/stubAPI";
import PageTemplate from "../components/templateMovieListPage";

const FavoriteMoviesPage = props => {
  const toDo = () => true;

  return (
    <PageTemplate
      movies={StubAPI.getAll()}
      title={"Favorite Movies"}
      buttonHandler={toDo}
    />
  );
};

export default FavoriteMoviesPage;