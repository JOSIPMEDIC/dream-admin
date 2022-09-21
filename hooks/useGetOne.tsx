import Error, { ErrorProps } from 'next/error';
import { useRouter } from 'next/router';
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

const useGetOne = (props: Props) => {
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>();
  const { isReady, query } = useRouter();

  useEffect(() => {
    setLoading(true);

    const getOne = async () => {
      const request = new Request(apiUrl + `${props.resource}/${query.id}`, {
        method: 'get',
        ...getRequestOptions(),
      });

      return await fetch(request)
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

    isReady && getOne();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isReady]);

  return { data, loading };
};

export default useGetOne;
