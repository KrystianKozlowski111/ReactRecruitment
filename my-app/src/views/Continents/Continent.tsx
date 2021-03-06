import React, { useState } from 'react';
import { gql, useQuery, useLazyQuery } from '@apollo/client';


interface ContinentsList {
  code: string;
  name: string;

}

interface ContinentsData {
  continents: ContinentsList[];
}



const LIST_CONTINENTS = gql`
  {
    continents {
      code
      name
    }
  }
`;

function Continent() {

  const { loading, data } = useQuery<ContinentsData>(
    LIST_CONTINENTS
  );

    
    
    console.log('data ' + JSON.stringify(data))
    return (

        <>
        
        {data && data.continents.map(inventory => (
          
              <a href={'/continents/'+inventory.code}>
                {inventory.code} {inventory.name}
              </a>
            ))}
            
        </>
    );
}

export default Continent;
