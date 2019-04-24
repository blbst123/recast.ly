var Search = (props) => {
  var updateSearch = function (event) {
    console.log(event.target.value);
    if (event.key === 'Enter') {
      props.callYouTube();
    } else {
      props.updateSearchTerm(event.target.value);
    }
  };

  return (
    <div className="search-bar form-inline">
      <input className="form-control" type="text" placeholder="Search..." onKeyUp={updateSearch} />
      <button className="btn hidden-sm-down" onClick={props.callYouTube}>
        <span className="glyphicon glyphicon-search"></span>
      </button>
    </div>
  );
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;
