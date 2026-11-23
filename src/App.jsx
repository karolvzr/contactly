import { useState, useEffect } from "react";
import api from "./services/api";
import UserCard from "./components/UserCard";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await api.get("/users");
        setUsers(response.data);
      } catch {
        setError("Não foi possível carregar os usuários.");
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
  }, []);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">
      <header className="header">
        <h1>Contactly</h1>
        <p>Conheça e encontre pessoas facilmente.</p>
      </header>

      <main className="container">
        <div className="search-area">
          <input
            type="text"
            placeholder="Pesquisar usuário pelo nome..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>

        {loading && (
          <p className="message">Carregando usuários...</p>
        )}

        {error && (
          <p className="error-message">{error}</p>
        )}

        {!loading && !error && filteredUsers.length === 0 && (
          <p className="message">Nenhum usuário encontrado.</p>
        )}

        {!loading && !error && (
          <div className="user-list">
            {filteredUsers.map((user) => (
              <UserCard key={user.id} user={user} />
            ))}
          </div>
        )}
      </main>

      <footer className="footer">
        <p>Contactly © 2026 - Desenvolvido com React</p>
      </footer>
    </div>
  );
}

export default App;