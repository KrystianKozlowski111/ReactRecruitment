import React, { useState } from 'react';
import { gql, useQuery, useLazyQuery } from '@apollo/client';



const LIST_CONTINENTS = gql`
  {
    continents {
      name
      code
    }
  }
`;

function Continent() {

    const { data, loading, error } = useQuery(LIST_CONTINENTS);

    console.log('data ' + JSON.stringify(data))
    return (

        <>test</>
    );
}

export default Continent;
