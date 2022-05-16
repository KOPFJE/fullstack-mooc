const Search = (props) => {
    return(
        <p>Find countries <input onChange={props.handleChange} /></p>
    );
}
export default Search;