import { useState, useEffect } from "react";
import Item from "./Item";
function App() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch data from API");
        return res.json();
      })
      .then((data) => { setItems(data); setLoading(false); })
      .catch((err) => { setError(err.message); setLoading(false); });
  }, []);
  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <h1 style={styles.heading}>Posts from API</h1>
        <p style={styles.subheading}>
          Data fetched live from{" "}
          <a href="https://jsonplaceholder.typicode.com/posts" target="_blank" 
          style={styles.link}> JSONPlaceholder</a>
        </p>
      </header>
      <main style={styles.main}>
        {loading && <p style={styles.status}>Loading...</p>}
        {error   && <p style={styles.error}>Error: {error}</p>}
        {!loading && !error && (
          <>
            {items.map((item) => (
              <Item key={item.id} item={item} />
            ))}
          </>
        )}
      </main>
    </div>
  );
}
const styles = {
  page: {
    background: "#eef2f7",
    fontFamily: "'Segoe UI', sans-serif",
  },
  header: {
    background: "#1e2a4a",
    padding: "36px 24px 28px",
    textAlign: "center",
  },
  heading: {
    margin: 0,
    fontSize: "26px",
    fontWeight: "700",
    color: "#ffffff",
  },
  subheading: {
    margin: "8px 0 0",
    fontSize: "13px",
    color: "#a0aec0",
  },
  link: {
    color: "#90cdf4",
    textDecoration: "none",
  },
  main: {
    maxWidth: "680px",
    margin: "0 auto",
    padding: "32px 16px 60px",
  },
  count: {
    fontSize: "12px",
    fontWeight: "600",
    textTransform: "uppercase",
    color: "#718096",
    marginBottom: "20px",
  },
  status: {
    textAlign: "center",
    color: "#718096",
    marginTop: "48px",
  },
};
export default App;