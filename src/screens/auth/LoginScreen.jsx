import React, { useState } from "react";

function LoginScreen({ onContinue }) {
  const [phone, setPhone] = useState("");

  const handleContinue = () => {
    if (phone.length < 10) {
      alert("Телефон нөмірін дұрыс енгізіңіз!");
      return;
    }

    onContinue(phone);
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.icon}>🛒</div>

        <h1 style={styles.title}>Get your groceries</h1>
        <p style={styles.subtitle}>with nectar</p>

        <h2 style={styles.heading}>Login</h2>

        <p style={styles.text}>
          Enter your mobile number to continue
        </p>

        <label style={styles.label}>Phone Number</label>

        <div style={styles.phoneBox}>
          <span style={styles.code}>+7</span>

          <input
            type="tel"
            placeholder="Enter phone number"
            value={phone}
            onChange={(e) =>
              setPhone(e.target.value.replace(/\D/g, ""))
            }
            style={styles.input}
          />
        </div>

        <button onClick={handleContinue} style={styles.button}>
          Continue
        </button>

        <p style={styles.footer}>
          Don't have an account? <span>Sign Up</span>
        </p>
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
    textAlign: "center",
    boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
  },
  icon: {
    fontSize: "55px",
  },
  title: {
    fontSize: "27px",
    color: "#181725",
  },
  subtitle: {
    color: "#53B175",
    fontSize: "18px",
  },
  heading: {
    marginTop: "40px",
    textAlign: "left",
  },
  text: {
    color: "#7C7C7C",
    textAlign: "left",
    fontSize: "14px",
  },
  label: {
    display: "block",
    textAlign: "left",
    marginTop: "25px",
    fontWeight: "bold",
  },
  phoneBox: {
    display: "flex",
    alignItems: "center",
    borderBottom: "1px solid #ddd",
    marginTop: "10px",
  },
  code: {
    padding: "12px",
    fontWeight: "bold",
  },
  input: {
    border: "none",
    outline: "none",
    padding: "12px",
    flex: 1,
    fontSize: "15px",
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
  footer: {
    marginTop: "25px",
    fontSize: "13px",
  },
};

export default LoginScreen;