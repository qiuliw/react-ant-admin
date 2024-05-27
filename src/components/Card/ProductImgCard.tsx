import { Card, Form, Input, Modal } from "antd";
import React, { useState } from 'react';
import { InboxOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';
import { message, Upload } from 'antd';
import styled from 'styled-components';

const { Dragger } = Upload;

const UploadTipDesc = styled.div`
  margin-top: 12px;
  margin-bottom: 0;
  color: #7a8499;
`

const props: UploadProps = {
  name: 'file',
  multiple: true,
  action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
  onChange(info) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log('Dropped files', e.dataTransfer.files);
  },
};



export default function ProductImgCard() {

  const [modalOpen,setModalOpen] = useState(false)


  return (
    <Scoped>
      <Card title="商品图片/视频" className="product-img-card"
        extra={<>
          <a onClick={()=>{
            setModalOpen(true);
          }}>添加URL</a>
          <a style={{
            marginLeft: 20
          }}>添加多媒体图片</a>
        </>}
      >
        <Dragger {...props}>
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">Click or drag file to this area to upload</p>
          <p className="ant-upload-hint">
            Support for a single or bulk upload. Strictly prohibited from uploading company data or other
            banned files.
          </p>
        </Dragger>
        <UploadTipDesc>
          支持上传jpg、png、webp、SVG格式图片，最大限制为10M（4M为最佳店铺浏览体验）；支持上传GIF格式动图，最大限制8M
        </UploadTipDesc>



        {/* 添加url Modal */}
        <Modal
          title="YouTube视频"
          centered
          width="90vw"
          
          open={modalOpen}
          onOk={() => setModalOpen(false)}
          onCancel={() => setModalOpen(false)}
          styles={{
            body:{
              height:"120px",
            }
          }}
          style={{
            maxWidth: "860px"
          }}
        >
          <Form layout="vertical">
          <Form.Item label={<div style={{ fontWeight: 500,fontSize: "14px"}}>复制 YouTube 视频URL到下面输入框</div>}>
            <Input/>
          </Form.Item>
          </Form>

        </Modal>

        {/* 添加多媒体图片 Modal */}


        

      </Card>
    </Scoped>

  )
}



const Scoped = styled.div`
.product-img-card{
  .ant-card-head-title{
      font-weight: 400;
  }
}

.content{
  height:40px;
}
.footer{

}



`