import React, { useRef } from 'react';  
import { Editor } from '@tinymce/tinymce-react';  
 
  
// 假设这是TinyMCE实例的正确类型，您可能需要从@tinymce/tinymce-react包中导入它  
// 如果包没有直接导出类型，您可能需要自己定义或使用any作为临时解决方案  
type EditorInstance = any; // 替换为实际的类型  
  
export default function App() {  
  const editorRef = useRef<EditorInstance>(null);  
  
  const log = () => {  
    if (editorRef.current) {  
      console.log(editorRef.current.getContent());  
    }  
  };  
  
  return (  
    <>  
      <Editor  
        tinymceScriptSrc='/tinymce/tinymce.min.js'  
        licenseKey='gpl'
        onInit={(_evt, editor) => (editorRef.current = editor)}  
        initialValue='<p>This is the initial content of the editor.</p>'  
        init={{
          language_url: '/langs/zh_CN.js',
          language: 'zh_CN',
          height: 650,
          min_height: 400, //没内容时的高度
          menubar: true,  // 显示菜单栏
          plugins: 'print preview searchreplace autolink directionality visualblocks visualchars fullscreen image link media template code codesample table charmap hr pagebreak nonbreaking anchor insertdatetime advlist lists wordcount imagetools textpattern help emoticons autosave bdmap indent2em autoresize formatpainter axupimgs',
          toolbar: 'code undo redo restoredraft | cut copy paste pastetext | forecolor backcolor bold italic underline strikethrough link anchor | alignleft aligncenter alignright alignjustify outdent indent | \
          styleselect formatselect fontselect fontsizeselect | bullist numlist | blockquote subscript superscript removeformat | \
          table image media charmap emoticons hr pagebreak insertdatetime print preview | fullscreen | bdmap indent2em lineheight formatpainter axupimgs', 
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
          // toolbar_sticky: true,
          promotion:false //去除upgrade按钮

        }}  
      />  
      {/* <button onClick={log}>Log editor content</button>   */}
    </>  
  );  
}