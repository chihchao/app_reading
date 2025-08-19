import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("username", username);
      formData.append("password", password);
      const res = await fetch("/app/login", {
        method: "POST",
        body: formData,
      });
      if (!res.ok) {
        throw new Error("伺服器錯誤");
      }
      const data = await res.json();
      if (data.success) {
        setIsLogin(true);
      } else {
        setError(data.msg || "登入失敗");
      }
    } catch (err) {
      setError(err.message || "網路錯誤");
    } finally {
      setLoading(false);
    }
  };


  if (!isLogin) {
    return (
      <div className="card">
        <h2>請登入</h2>
        <form onSubmit={handleLogin}>
          <div>
            <input
              type="text"
              placeholder="帳號"
              value={username}
              onChange={e => setUsername(e.target.value)}
              required
              disabled={loading}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="密碼"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              disabled={loading}
            />
          </div>
          <button type="submit" disabled={loading}>{loading ? "登入中..." : "登入"}</button>
        </form>
        {error && <p style={{color:'red'}}>{error}</p>}
      </div>
    );
  }

  // 登入後顯示原本內容
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
