const nomesPersonalizados = {
  1: "Ana Souza",
  2: "Lucas Oliveira",
  3: "Mariana Costa",
  4: "Pedro Santos",
  5: "Julia Ferreira",
  6: "Gabriel Almeida",
  7: "Beatriz Lima",
  8: "Rafael Martins",
  9: "Camila Rocha",
  10: "Matheus Ribeiro",
};

const emailsPersonalizados = {
  1: "ana.souza@email.com",
  2: "lucas.oliveira@email.com",
  3: "mariana.costa@email.com",
  4: "pedro.santos@email.com",
  5: "julia.ferreira@email.com",
  6: "gabriel.almeida@email.com",
  7: "beatriz.lima@email.com",
  8: "rafael.martins@email.com",
  9: "camila.rocha@email.com",
  10: "matheus.ribeiro@email.com",
};

function UserCard({ user }) {
  return (
    <div className="user-card">
      <div className="user-avatar">
        {nomesPersonalizados[user.id].charAt(0).toUpperCase()}
      </div>

      <div className="user-info">
        <h2>{nomesPersonalizados[user.id]}</h2>

        <p>
          <strong>E-mail:</strong> {emailsPersonalizados[user.id]}
        </p>

        <p>
          <strong>Cidade:</strong> {user.address.city}
        </p>

        <p>
          <strong>Empresa:</strong> {user.company.name}
        </p>
      </div>
    </div>
  );
}

export default UserCard;