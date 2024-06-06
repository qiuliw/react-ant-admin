import { Button, Popover } from "antd"
import axios from "axios"
import { useEffect, useState } from "react"


const content = (<div>
        
</div>)


const getDomainList = () => {
    return axios.post('/api/ApiAppstore/domain_select')
  }



export default function AdmainSelect(){
    const [domainList, setDomainList] = useState<any>([])
    const [defaultDomain, setDefaultDomain] = useState('')
    useEffect(() => {
      getDomainList().then((res) => {
        let list: any = [];
        res?.data?.data.forEach((item: any, index: any) => {
          list.push({
            value: item.id,
            label: item.domain_name,
          })
        })
        setDomainList(list);
        setDefaultDomain(res.data.data[0]?.id);
      })
    })


    return (<>
            <Popover content={content} title="Title" trigger="click">
      <Button>Click me</Button>
    </Popover>


    </>)
}