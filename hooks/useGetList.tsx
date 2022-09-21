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
  pageData: any;
}

const useGetList = (props: Props) => {
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>();

  useEffect(() => {
    setLoading(true);

    const getList = () => {
      const request = new Request(apiUrl + `${props.resource}`, {
        method: 'GET',
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
          setLoading(false);
        })
        .catch((error) => {
          console.log('Error:', error);
          setLoading(false);
        });
    };

    getList();
  }, [props.pageData]);

  return { data, loading };
};

export default useGetList;
