import { useState } from 'react'
import Result from './results';

export default function SearchBar ({items, onItemSelected,}){

    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    function handleOnChange (e){
        const value = e.target.value;
        setQuery(value);
    }

    function handleResults(items){
        setResults(items);
    }

    return (
        <div>
            {results && <div className='results'>Results: {results.length }</div> }
            <input className='input' onChange={handleOnChange} type='text' value={query} />
            <Result 
            items={items}
            onItemSelected={onItemSelected}
            query={query}
            onResultsCalculated={handleResults}
            />
        </div>
    );
}   