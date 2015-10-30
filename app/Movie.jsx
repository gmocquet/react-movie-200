var React = require('react');

function Movie (props) {
  var film = props.film;

  return (
    <li className="col-md-12">
      <img src={film.afficheUrl} className="col-md-2" />
      <div className="caption">
        <h3>{film.titre}</h3>
        <p><b>Acteurs : </b>{film.acteurs}</p>
        <p><b>Synopsis : </b>{film.synopsis}</p>
      </div>
    </li>
  );
}

module.exports = Movie;
