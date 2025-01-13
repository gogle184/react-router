import { Link, useNavigate } from 'react-router-dom';

export const Page1 = () => {
  const arr = ['hoge', 'fuga', 'piyo'];
  const navigate = useNavigate();
  const onClickDetailA = () => {
    navigate(
      "/page1/detailA"
    );
  };
  return (
    <div>
      <h1>Page1</h1>
      <Link
        to="detailA"
        state={{ arr }}
      >
        DetailA
      </Link>
      <br />
      <Link to="detailB">DetailB</Link>
      <br />
      <button onClick={onClickDetailA}>DetailA</button>
    </div>
  );
};
