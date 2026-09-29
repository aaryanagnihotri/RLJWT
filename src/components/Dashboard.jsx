function Dashboard({ user, message, onLogout }) {
  // Make the first letter capital: "admin" -> "Admin"
  const roleText = user.role.charAt(0).toUpperCase() + user.role.slice(1);

  return (
    <div className="card">
      {message && <p className="success">{message}</p>}
      <p className="role">Role: {roleText}</p>

      <h2>Dashboard</h2>
      <p>Welcome to the protected Dashboard!</p>

      <div className="info">
        <p><strong>User ID:</strong> {user.userId}</p>
        <p><strong>User Role:</strong> {user.role}</p>
      </div>

      <button className="logout" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
}

export default Dashboard;
