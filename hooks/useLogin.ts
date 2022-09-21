import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

interface Props {
    route: string;
}

const useLogin = (props: Props) => {
    const url: any = process.env.NEXT_API_URL_CONNECT
    const router = useRouter()

    
    const config = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    }
    
    const login: (data: any) => void = (data:any) => {
        const oAuthParams: any = {
            grant_type: 'password',
            username: data?.email,
            password: data?.password,
            client_id: 'spa',
            scope: 'api offline_access openid',
          };
      
          const body = Object.keys(oAuthParams)
        .map((key) => {
          return encodeURIComponent(key) + '=' + encodeURIComponent(oAuthParams[key]);
        })
        .join('&');
        axios.post(url + '/connect/token' , body, config).then(response => {
            if(response.status === 200){
                localStorage.setItem("token", response.data.access_token)
                router.push("/connect")
            }
        }).catch(err=> console.log(err))
    };

    return login
}

export default useLogin;