import React from "react";

export default function SplashScreen() {
  return (
    <div style={styles.container}>
      <div style={styles.statusBar}>
        <span>9:41</span>
        <span>▴ ◉ ▰</span>
      </div>

      <div style={styles.logoContainer}>
        <div style={styles.logo}>
          <span style={styles.carrot}>🥕</span>
          <span>nectar</span>
        </div>

        <p style={styles.subtitle}>O N L I N E  G R O C E R I E S</p>
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
    backgroundColor: "#2DA653",
    display: "flex",
    flexDirection: "column",
    fontFamily: "Arial, sans-serif",
    color: "white",
  },

  statusBar: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px 25px",
    fontSize: "14px",
  },

  logoContainer: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  logo: {
    display: "flex",
    alignItems: "center",
    gap: "5px",
    fontSize: "48px",
    fontWeight: "bold",
    letterSpacing: "-2px",
  },

  carrot: {
    fontSize: "36px",
  },

  subtitle: {
    fontSize: "9px",
    marginTop: "-5px",
    marginLeft: "40px",
  },
};