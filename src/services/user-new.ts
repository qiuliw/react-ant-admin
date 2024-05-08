import { request, useRequest } from 'umi'


// 引入axios  
// get 
const { data } = useRequest(() =>request('http://example/api/roleInfo/getRoleInfo')) || [];
// get 
const { data } =
    useRequest(() =>
      request('http://example/api/roleInfo/getRoleInfo', {
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
          token: '',
        },
      }),
    ) || [];
// post
const { data } =
    useRequest(() =>
      request('http://example/api/roleInfo/getRoleInfo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          token: '',
        },
        data: {
          data: { code: '100' },
        },
      }),
    ) || [];