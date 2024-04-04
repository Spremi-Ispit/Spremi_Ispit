import "./App.css";

const VITE_API_URL = import.meta.env.VITE_API_URL;

function App() {
  const handlePingClick = async () => {
    const res = await fetch(`${VITE_API_URL}/ping`);
    const text = await res.text();
    console.log(text);
  };

  const handleCreateDatabaseClick = async () => {
    const res = await fetch(`${VITE_API_URL}/createDatabase`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    });

    const text = await res.text();
    console.log(text);
  };

  const handleDropDatabaseClick = async () => {
    const res = await fetch(`${VITE_API_URL}/dropDatabase`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    });

    const text = await res.text();
    console.log(text);
  };

  return (
    <>
      <button onClick={handlePingClick}>ping</button>
      <button onClick={handleCreateDatabaseClick}>createDatabase</button>
      <button onClick={handleDropDatabaseClick}>dropDatabase</button>
    </>
  );
}

export default App;
