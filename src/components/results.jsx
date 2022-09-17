import { useState, useMemo, useEffect } from 'react'
import MarkedItem from './markedItem';

export default function Result({items, onItemSelected, query, onResultsCalculated,}) {
    
    const [results, setResults] = useState([]);

    const filteredItems = useMemo(() => findMatch(items,query), [items, query]);

    useEffect(() => {
      
        onResultsCalculated(results);
      
    }, [results])
    

    function findMatch(items, query){
        const res = items.filter((i) => {
            return (
                i.title.toLowerCase().indexOf(query) >= 0 && query.length > 0 && query !== ""
            );
        });
        setResults(res)
        return res;
    }

    function handleResults(items) {
        setResults(items);
      }

    return(
        <div>
            {query !== '' ? filteredItems.map((item) => (<MarkedItem 
                item={item}
                query={query}
                onClick={onItemSelected}
                onResultsCalculated={handleResults}
            
            />)): ""}
        </div>
    );
}