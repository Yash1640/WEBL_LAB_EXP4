import { useState } from "react";
function Item({ item }) {
  const [expanded, setExpanded] = useState(false);
  const [liked, setLiked] = useState(false);
  return (
    <div style={styles.card}>
      <h3 style={styles.title}>#{item.id}. {item.title}</h3>
      {expanded && <p style={styles.body}>{item.body}</p>}
      <div style={styles.actions}>
        <button
          style={{ ...styles.btn, ...(liked ? styles.btnLiked : {}) }}
          onClick={() => setLiked(!liked)}
        >
          {liked ? "❤️ Liked" : "🤍 Like"}
        </button>
        <button style={styles.btn} onClick={() => setExpanded(!expanded)}>
          {expanded ? "▲ Hide" : "▼ Read More"}
        </button>
      </div>
    </div>
  );
}
const styles = {
  card: {
    border: "2px solid #000000",
    borderRadius: "12px",
    padding: "20px 24px",
    marginBottom: "14px",
  },
  badge: {
    display: "inline-block",
    fontSize: "11px",
    fontWeight: "600",
    color: "#718096",
    background: "#eef2f7",
    borderRadius: "4px",
    padding: "2px 8px",
    marginBottom: "10px",
  },
  title: {
    fontSize: "15px",
    fontWeight: "600",
    color: "#1a202c",
    textTransform: "capitalize",
  },
  body: {
    color: "#4a5568",
    lineHeight: "1.7",
    borderTop: "1px solid #e2e8f0",
    paddingTop: "12px",
    marginTop: "14px",
  },
  actions: {
    display: "flex",
    gap: "8px",
    marginTop: "16px",
  },
  btn: {
    padding: "5px 14px",
    borderRadius: "6px",
    border: "1px solid #e2e8f0",
    background: "#f7fafc",
    cursor: "pointer",
    fontSize: "12px",
    color: "#4a5568",
  },
  btnLiked: {
    background: "#fff5f5",
    borderColor: "#f77777",
    color: "#c53030",
  },
};
export default Item;