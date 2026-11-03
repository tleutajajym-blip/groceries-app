import React from "react";

export default function OnboardingScreen() {
  return (
    <div style={styles.container}>
      <div style={styles.statusBar}>
        <span>9:41</span>
        <span>▴ ◉ ▰</span>
      </div>

      <div style={styles.content}>
        <div style={styles.logo}>🥕</div>

        <h1 style={styles.title}>
          Welcome
          <br />
          to our store
        </h1>

        <p style={styles.description}>
          Get your groceries in as fast as one hour
        </p>

        <button
          style={styles.button}
          onClick={() => alert("Welcome to Nectar!")}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    width: "100%",
    maxWidth: "390px",
    height: "844px",
    margin: "0 auto",
    position: "relative",
    overflow: "hidden",
    fontFamily: "Arial, sans-serif",
    color: "white",
    backgroundImage:
      "linear-gradient(to bottom, rgba(0,0,0,0.05), rgba(0,0,0,0.75)), url('https://images.unsplash.com/photo-1542838132-92c53300491e?w=800')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },

  statusBar: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px 25px",
    fontSize: "14px",
  },

  content: {
    position: "absolute",
    bottom: "55px",
    left: "20px",
    right: "20px",
    textAlign: "center",
  },

  logo: {
    fontSize: "38px",
    marginBottom: "10px",
  },

  title: {
    fontSize: "34px",
    lineHeight: "1.2",
    fontWeight: "bold",
    margin: "0",
  },

  description: {
    fontSize: "14px",
    color: "#E0E0E0",
    marginTop: "12px",
    marginBottom: "28px",
  },

  button: {
    width: "100%",
    padding: "17px",
    backgroundColor: "#53B175",
    color: "white",
    border: "none",
    borderRadius: "15px",
    fontSize: "16px",
    cursor: "pointer",
  },
};