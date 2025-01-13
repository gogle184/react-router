//レンダリング確認用
//以下App.jsxへ
// import './App.css'
// import { useState, useCallback } from 'react';
// import { ChildArea } from './ChildArea';

// function App() {
//   const [text, setText] = useState('');
//   const [open, setOpen] = useState(false);

//   const onChangeText = (e: any) => {
//     setText(e.target.value);
//   }
//   const onClickOpen = () => {
//     setOpen(!open);
//   }
//   const onClickClose =
//     useCallback(() =>setOpen(false), [])
//   return (
//     <>
//       <h1>Hello World</h1>
//       <input value={text} onChange={onChangeText} />
//       <br />
//       <br />
//       <button onClick={onClickOpen}>表示</button>
//       <ChildArea open={open} onClickClose={onClickClose} />
//     </>
//   )
// }

// export default App

// 以下ChildArea.jsxへ
// import { memo } from 'react';

// const style = {
//   width: "100%",
//   height: "200px",
//   backgroundColor: "skyblue",
// };

// export const ChildArea = memo((props) => {
//   const { open, onClickClose } = props;
//   const data = [...Array(2000).keys()];
//   return (
//     <>
//       {open ? (
//         <div style={style}>
//           <p>子コンポーネント</p>
//           <button onClick={onClickClose}>閉じる</button>
//         </div>
//       ) : null}
//     </>

//   );
// });
