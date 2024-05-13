import { useIntl } from "@umijs/max";
import { message } from "antd";

const intl = useIntl();
function intlf(id:string){
    if(typeof id !== 'string'){
        message.error('id is not string');
    }else{
        intl.formatMessage({id});
    }
}

export default intlf;