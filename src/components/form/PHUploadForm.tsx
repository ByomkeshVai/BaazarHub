/* eslint-disable  */

import { useEffect, useState } from "react";
import type { GetProp, UploadProps } from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";
import { imageUpload } from "../../utils/imageUpload";

type CWUploadProps = {
  setImageUrl: (url: string) => void;
  imageUrl: string;
  isSuccess?: boolean;
};

type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0];

const beforeUpload = (file: FileType) => {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
};

const PHUploadForm = ({ imageUrl, setImageUrl, isSuccess }: CWUploadProps) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isSuccess) {
      setImageUrl("");
    }
  }, [isSuccess, setImageUrl]);

  const handleChange: UploadProps["onChange"] = async (info) => {
    const image = info.file.originFileObj;
    const uploaded = await imageUpload(image);
    setLoading(false);
    setImageUrl(uploaded.data.display_url);
  };

  const uploadButton = (
    <button style={{ border: 0, background: "none" }} type="button">
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </button>
  );

  return (
    <>
      <>
        <label className="font-semibold text-md">Image Upload</label>
        <Upload
          name="avatar"
          listType="picture-card"
          className="mb-5 text-center avatar-uploader"
          showUploadList={false}
          //   action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
          beforeUpload={beforeUpload}
          onChange={handleChange}
        >
          {imageUrl ? (
            <img src={imageUrl} alt="avatar" style={{ width: "100%" }} />
          ) : (
            uploadButton
          )}
        </Upload>
      </>
    </>
  );
};

export default PHUploadForm;
