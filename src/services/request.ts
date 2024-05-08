import {request} from "@umijs/max";

['GET','HEAD','DELETE','OPRIONS'].forEach((name)=>{
    request[name.toLocaleUpperCase()] = function(url,options){
        if(!options) options = {}
        options.method = name;
        return request(url,options)
    }
});
['POST','PUT','PATCH'].forEach(name=>{
    request[name.toLocaleUpperCase()] = function(url,data,options){
        if(!options) options = {}
        options.method = name;
        options.data = data;
        return request(url,options)
    }
});

export default request
