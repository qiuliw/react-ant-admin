
// 父组件传参类型,导出到父组件
export interface ChildComponentProps{
    changeForm : (value:number) => void
  }

export default function Forget(){

    return (
        <div>
            忘记密码
        </div>
    )
}