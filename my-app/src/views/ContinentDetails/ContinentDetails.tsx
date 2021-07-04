import React, { useState } from 'react';
import { gql, useQuery, useLazyQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
interface RouteParams {
    code: string
}

interface ContinentsList {
  code: string;
  name: string;
  emoji:string;

}

interface ContinentsData {
  continents: ContinentsList[];
}
interface ContinentsListVars {
    code: string;
  }


const LIST_CONTINENTS = gql`
query continent($code: ID!) {
    continent(code: $code) {
        countries{
        name
        emoji
        languages{
            name
        }
    }
    }
  }
`;
type Props = {
    code: string;
}


function ContinentDetails() {
    const params = useParams<RouteParams>();

  const { loading, data } = useQuery<ContinentsData, ContinentsListVars>(
    LIST_CONTINENTS,
    { variables: { code: params.code } }

  );  
    
    console.log('data '+JSON.stringify(data)+'  code   '+params.code)
    return (

        <>
     
            
        </>
    );
}

export default ContinentDetails;
