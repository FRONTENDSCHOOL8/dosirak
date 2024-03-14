import { Link } from 'react-router-dom';

const LoginAddon = () => {
  return (
    <table className="noto mt-6 text-paragraph-base">
      <tbody>
        <tr>
          <td className="border-r px-4">
            <Link className="">아이디 찾기</Link>
          </td>
          <td className="border-r px-4">
            <Link className="">비밀번호 찾기</Link>
          </td>
          <td className="px-4">
            <Link to="/register">회원가입 하기</Link>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default LoginAddon;
