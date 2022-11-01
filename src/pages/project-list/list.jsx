export const List = ({ list, users }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Leads</th>
        </tr>
      </thead>
      <tbody>
        {list.map((project) => (
          <tr key={project.id}>
            <td>{project.name}</td>
            <td>{users.find(user => user.id === project.personId)?.name || 'Unknown'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
