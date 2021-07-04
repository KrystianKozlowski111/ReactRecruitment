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
    continent(code:"AF") {
        name
        countries{
          name
        }       
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
     
            
        </>
    );
}

export default Continent;
