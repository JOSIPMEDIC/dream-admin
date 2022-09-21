import Error, { ErrorProps } from 'next/error';
import React, { useEffect, useState } from 'react';

const getRequestOptions = () => {
  return {
    headers: new Headers({
      //Authorization: 'Bearer ' + localStorage.getItem('token'),
      'Content-Type': 'application/json',
    }),
  };
};

const apiUrl = process.env.NEXT_API_URL;

interface Props {
  resource: string;

}

const useUpdate = (props: Props) => {
  const [data, setData] = useState<any>([]);

  const callUpdate = (newData: any, id: string) => {
    const request = new Request(apiUrl + `${props.resource}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(newData),
      ...getRequestOptions(),
    });

    return fetch(request)
      .then((response: any) => {
        if (!response.ok) {
          return new Error(response);
          //************************************ */ NEKI NOTIFY TREBA SLOŽIT*****************************************//
        }
        return response;
      })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((response) => {
        setData(response);
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  };

  return { data, callUpdate };
};

export default useUpdate;
