import React, { useState } from "react";

function VerificationScreen({ phone = "+7 777 123 4567", onVerify }) {
  const [code, setCode] = useState("");

  const handleVerify = () => {
    if (code.length !== 4) {
      alert("4 таңбалы кодты енгізіңіз!");
      return;
    }

    if (onVerify) {
      onVerify(code);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <button
          style={styles.backButton}
          onClick={() => window.history.back()}
        >
          ←
        </button>

        <h1 style={styles.title}>
          Enter your 4-digit code
        </h1>

        <p style={styles.description}>
          Code was sent to {phone}
        </p>

        <div style={styles.codeContainer}>
          {[0, 1, 2, 3].map((index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              value={code[index] || ""}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, "");
                const newCode = code.split("");
                newCode[index] = value;
                setCode(newCode.join("").slice(0, 4));
              }}
              style={styles.codeInput}
            />
          ))}
        </div>

        <p style={styles.resend}>
          Didn't receive the code? <span>Resend</span>
        </p>

        <button onClick={handleVerify} style={styles.button}>
          Verify
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    backgroundColor: "#f5f5f5",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Arial, sans-serif",
  },
  card: {
    width: "350px",
    backgroundColor: "white",
    padding: "30px",
    borderRadius: "20px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
  },
  backButton: {
    border: "none",
    background: "none",
    fontSize: "25px",
    cursor: "pointer",
  },
  title: {
    fontSize: "25px",
    marginTop: "35px",
    color: "#181725",
  },
  description: {
    color: "#7C7C7C",
    fontSize: "14px",
    marginTop: "15px",
  },
  codeContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "35px",
    gap: "12px",
  },
  codeInput: {
    width: "55px",
    height: "55px",
    border: "none",
    borderBottom: "2px solid #53B175",
    textAlign: "center",
    fontSize: "24px",
    outline: "none",
  },
  resend: {
    marginTop: "30px",
    color: "#7C7C7C",
    fontSize: "14px",
  },
  button: {
    width: "100%",
    padding: "16px",
    marginTop: "35px",
    backgroundColor: "#53B175",
    color: "white",
    border: "none",
    borderRadius: "15px",
    fontSize: "16px",
    cursor: "pointer",
  },
};

export default VerificationScreen;