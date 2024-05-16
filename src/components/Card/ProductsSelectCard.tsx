import { Space, Select } from "antd";
import type { SearchProps } from 'antd/es/input/Search';

const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value);

export default function ProductsSelectCard() {
    return (
        <>
            <div className="products-select">
                <div className="products-select-item">
                    <Space.Compact>
                        <Select
                            defaultValue="全部"
                            style={{ width: 120 }}
                            options={[  
                                    { value: '全部', label: '全部' },  
                                    { value: '商品名称', label: '商品名称' },  
                                    { value: '商品SPU', label: '商品SPU' },  
                                    { value: '商品SKU', label: '商品SKU' },  
                                    { value: '商品厂商', label: '商品厂商' },  
                                    { value: '商品条码', label: '商品条码' },  
                                    { value: '规格名称', label: '规格名称' },  
                            ]}
                            />
                        <Select placeholder="input search text" onSearch={onSearch} style={{ width: 200 }} />
                    </Space.Compact>
                </div>
            </div>
            <div className="products-result-list">
                <div className="products-result-list-item">
                </div>
            </div>
        </>
    );
}