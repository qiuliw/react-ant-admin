import {useState,useCallback} from 'react';

export default function useModel(){
    // setCounter 修改状态是异步的
    const [counter,setCounter] = useState(0);
    const increment = useCallback(()=>setCounter((c)=>c+1),[])
    const decrement = useCallback(()=>setCounter((c)=>c-1),[])

}