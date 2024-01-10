import React from "react";

const SearchResult=(props)=>{
    const { data: result } = props;
 console.log(result);

 if (!result || result.length === 0) {
    return <p>No result found</p>;
}

    return (
        <div>
            <h1>Search Results</h1>
            {result?.length > 0 ? (
          <ul>
            {result.map((data) =>(
                <li key={data.id}>{data.title}</li>
            ))}
          </ul>
            ):(
            <p>No result found</p>
             )}
        </div>
    )
}
export default SearchResult;
