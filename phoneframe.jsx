// PhoneFrame.jsx
function PhoneFrame({ children, dark = false }) {
  return (
    <div style={{
      width: 375, height: 812, position: "relative", overflow: "hidden",
      background: dark ? "#000" : "#fff",
      boxShadow: "0 30px 80px rgba(0,0,0,0.25), 0 0 0 8px #1c1c1c, 0 0 0 9px #2a2a2a",
      borderRadius: 44,
      margin: "0 auto",
      display: "flex", flexDirection: "column",
    }}>
      {children}
    </div>
  );
}
window.PhoneFrame = PhoneFrame;
