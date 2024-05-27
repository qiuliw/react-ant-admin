import { Card, Flex, Form, Input, Modal, Select } from "antd";
import React, { useState } from 'react';
import { InboxOutlined, LoadingOutlined, PlusOutlined, SearchOutlined, ShopOutlined } from '@ant-design/icons';
import type { GetProp, UploadProps } from 'antd';
import { message, Upload } from 'antd';
import styled from 'styled-components';
import { values } from "lodash";
import { rule } from '@/services/ant-design-pro/api';

const { Dragger } = Upload;


// outer upload
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

// 图片上传
type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

const getBase64 = (img: FileType, callback: (url: string) => void) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result as string));
  reader.readAsDataURL(img);
};

const beforeUpload = (file: FileType) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
};


export default function ProductImgCard() {

  // youtubeUrl
  const onFinish = (values: any) => {
    console.log('Received values of form:', values);
  };

  const [addUrlModalOpen, setAddUrlModalOpen] = useState(false)
  const [addImgModalOpen, setAddImgModalOpen] = useState(false)
  const [form] = Form.useForm();

  // img上传

  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>();


  const handleChange: UploadProps['onChange'] = (info) => {
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }
    if (info.file.status === 'error'){
      message.error("文件上传失败，请重试");
      setLoading(false);
    }

    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj as FileType, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
    console.log(info)

  };

  const uploadButton = (
    <button style={{ border: 0, background: 'none' }} type="button">
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </button>
  );



  return (
    <Scoped>
      <Card title="商品图片/视频" className="product-img-card"
        extra={<>
          <a onClick={() => {
            setAddUrlModalOpen(true);
          }}>添加URL</a>
          <a style={{
            marginLeft: 20
          }}
            onClick={() => {
              setAddImgModalOpen(true);
            }}
          >添加多媒体图片</a>
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

          open={addUrlModalOpen}
          onOk={() => setAddUrlModalOpen(false)}
          onCancel={() => setAddUrlModalOpen(false)}
          styles={{
            body: {
              height: "120px",
            }
          }}
          style={{
            maxWidth: "860px"
          }}
        >
          <Form layout="vertical"
            form={form}
            onFinish={onFinish}
          >
            <Form.Item
              label={<div style={{ fontWeight: 500, fontSize: "14px" }}>复制 YouTube 视频URL到下面输入框</div>}
              name='youTubeUrl'
              rules={[{
                validator: (rule, value) => {
                  // 校验逻辑保持不变  
                  const regexYouTube = /^https?:\/\/(?:www\.)?youtu(be\.com\/watch\?v=|\.be\/)([a-zA-Z0-9_-]{11})(?:&|#|\?)*$/;
                  if (!regexYouTube.test(value)) {
                    return Promise.reject(new Error('请输入正确的YouTube视频链接！'));
                  }
                  return Promise.resolve();
                }
              }]}
            >
              <Input />
            </Form.Item>
            <div style={{
              color: "rgb(122, 132, 153)"
            }}>目前只支持YouTube视频</div>
          </Form>

        </Modal>

        {/* 添加多媒体图片 Modal */}
        <Modal
          width="90vw"
          style={{
            maxWidth: "860px"
          }}
          styles={{
            body: {
              height: "700px",
              padding: 0
            }
          }}
          centered
          title='从文件库中选择'
          open={addImgModalOpen}
          onOk={() => setAddImgModalOpen(false)}
          onCancel={() => setAddImgModalOpen(false)}
        >
          <div className="img-modal-header" style={{
            display: "flex",
            alignContent: "center",
            marginTop: '20px',
            marginBottom: '8px'
          }}>
            <Input
              placeholder="搜索文件名/文件格式"
              prefix={<SearchOutlined style={{ color: "rgba(0,0,0,0.25" }} />}
              style={{
                height: "36px",
                width: "300px",
                marginRight: "20px"
              }}

            />
            <Select
              placeholder="文件类型"
              style={{ width: 120, height: 36 }}
              // onChange={}
              options={[
                { value: 'jack', label: 'Jack' },
                { value: 'lucy', label: 'Lucy' },
                { value: 'Yiminghe', label: 'yiminghe' },
                { value: 'disabled', label: 'Disabled', disabled: true },
              ]}
            />
          </div>
          <div className="content">
            <Upload
              name="avatar"
              listType="picture-card"
              className="avatar-uploader"
              showUploadList
              action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
              beforeUpload={beforeUpload}
              onChange={handleChange}
              multiple
            >
              {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
            </Upload>

          </div>
        </Modal>




      </Card>
    </Scoped>

  )
}


const UploadTipDesc = styled.div`
  margin-top: 12px;
  margin-bottom: 0;
  color: #7a8499;
`

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
