import Country from './Country';

const Countries = (props) => {
    const filteredList = props.countryList.filter(country => 
        country.name.common.toLowerCase().includes(props.filter.toLowerCase())
    );
        

    if(filteredList.length > 10) {
        return(
            <p>Too many options. Use a more specific search.</p>
        );
    } if(filteredList.length === 1) {
        let country = filteredList[0];
        return(
            <Country country={country} />
        );
    } else {
        return (
            <ul>
                { 
                    filteredList.map( country => 
                        <li key={country.cca2}>{country.name.common}</li>
                    )
                }
            </ul>
        );
    }
    
}
export default Countries;