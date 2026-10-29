import React from "react";

export default function SignInScreen() {
  return (
    <div style={styles.container}>
      <div style={styles.statusBar}>
        <span>9:41</span>
        <span>▴ ◉ ▰</span>
      </div>

      <div style={styles.imageSection}>
        <img
          src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=800"
          alt="Fresh groceries"
          style={styles.image}
        />
      </div>

      <div style={styles.content}>
        <h1 style={styles.title}>
          Get your groceries
          <br />
          with nectar
        </h1>

        <div style={styles.phoneRow}>
          <span style={styles.flag}>🇧🇩</span>
          <span style={styles.code}>+880</span>

          <input
            type="tel"
            placeholder=""
            style={styles.phoneInput}
          />
        </div>

        <p style={styles.socialText}>
          Or connect with social media
        </p>

        <button
          style={styles.googleButton}
          onClick={() => alert("Continue with Google")}
        >
          <span style={styles.googleIcon}>G</span>
          Continue with Google
        </button>

        <button
          style={styles.facebookButton}
          onClick={() => alert("Continue with Facebook")}
        >
          <span style={styles.facebookIcon}>f</span>
          Continue with Facebook
        </button>
      </div>

      <div style={styles.homeIndicator}></div>
    </div>
  );
}

const styles = {
  container: {
    width: "100%",
    maxWidth: "390px",
    height: "844px",
    margin: "0 auto",
    backgroundColor: "#FFFFFF",
    fontFamily: "Arial, sans-serif",
    position: "relative",
    overflow: "hidden",
    color: "#181725",
  },

  statusBar: {
    display: "flex",
    justifyContent: "space-between",
    padding: "12px 22px",
    fontSize: "13px",
  },

  imageSection: {
    height: "310px",
    width: "100%",
    overflow: "hidden",
  },

  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center",
  },

  content: {
    padding: "15px 20px",
  },

  title: {
    fontSize: "24px",
    lineHeight: "1.35",
    margin: "0 0 22px",
    fontWeight: "bold",
  },

  phoneRow: {
    display: "flex",
    alignItems: "center",
    height: "42px",
    borderBottom: "1px solid #E2E2E2",
    gap: "10px",
  },

  flag: {
    fontSize: "20px",
  },

  code: {
    fontSize: "15px",
  },

  phoneInput: {
    flex: 1,
    minWidth: 0,
    height: "35px",
    border: "none",
    outline: "none",
    fontSize: "15px",
  },

  socialText: {
    textAlign: "center",
    color: "#828282",
    fontSize: "11px",
    marginTop: "24px",
    marginBottom: "25px",
  },

  googleButton: {
    width: "100%",
    height: "48px",
    backgroundColor: "#4285F4",
    border: "none",
    borderRadius: "12px",
    color: "white",
    fontSize: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "30px",
    cursor: "pointer",
    marginBottom: "12px",
  },

  googleIcon: {
    fontSize: "20px",
    fontWeight: "bold",
  },

  facebookButton: {
    width: "100%",
    height: "48px",
    backgroundColor: "#2D4A9C",
    border: "none",
    borderRadius: "12px",
    color: "white",
    fontSize: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "25px",
    cursor: "pointer",
  },

  facebookIcon: {
    fontSize: "22px",
    fontWeight: "bold",
  },

  homeIndicator: {
    position: "absolute",
    bottom: "8px",
    left: "35%",
    width: "30%",
    height: "4px",
    backgroundColor: "#D9D9D9",
    borderRadius: "10px",
  },
};