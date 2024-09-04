import './App.css'
import { useEffect, useState } from 'react'

const App = () => {
  const [users, setUsers] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [entriesPerPage] = useState(10)
  const [sortColumn, setSortColumn] = useState('id')
  const [sortDirection, setSortDirection] = useState('asc')
  const [searchQuery, setSearchQuery] = useState('')

  const fetchData = () => {
    fetch('https://dummyjson.com/users')
      .then((response) => response.json())
      .then((data) => setUsers(data.users))
      .catch((error) => console.error('Error fetching data:', error));
  }

  useEffect(() => {
    fetchData();
  }, []);

  const sortData = (data) => {
    return data.sort((a, b) => {
      const aValue = a[sortColumn];
      const bValue = b[sortColumn];
      if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1;
      if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1;
      return 0;
    });
  };

  const filterData = (data) => {
    return data.filter((user) => {
      const query = searchQuery.toLowerCase();
      return (
        user.firstName.toLowerCase().includes(query) ||
        user.lastName.toLowerCase().includes(query) ||
        user.email.toLowerCase().includes(query) ||
        user.id.toString().includes(query)
      );
    });
  };

  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  const filteredUsers = filterData(users);
  const sortedUsers = sortData(filteredUsers);
  const currentEntries = sortedUsers.slice(indexOfFirstEntry, indexOfLastEntry);

  const totalPages = Math.ceil(filteredUsers.length / entriesPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  }

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  }

  const handleSort = (column) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  }

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1); 
  }

  return (
    <div className='main'>
      <div className='header'>
        <h1>Automateazy</h1>
      </div>
      <div className='user-list'>
        <div className='search'>
          <input
            type='text'
            placeholder='Search by First Name, Last Name, Email, or ID'
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
        {users.length > 0 ? (
          <>
            <table>
              <thead>
                <tr>
                  <th onClick={() => handleSort('id')}>ID {sortColumn === 'id' && (sortDirection === 'asc' ? '↑' : '↓')}</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th onClick={() => handleSort('age')}>Age {sortColumn === 'age' && (sortDirection === 'asc' ? '↑' : '↓')}</th>
                </tr>
              </thead>
              <tbody>
                {currentEntries.map((val) => (
                  <tr key={val.id}>
                    <td>{val.id}</td>
                    <td>{val.firstName}</td>
                    <td>{val.lastName}</td>
                    <td>{val.email}</td>
                    <td>{val.age}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className='pagination'>
              <button onClick={handlePreviousPage} disabled={currentPage === 1}>Previous</button>
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index + 1}
                  onClick={() => handlePageChange(index + 1)}
                  className={currentPage === index + 1 ? 'active' : ''}
                >
                  {index + 1}
                </button>
              ))}
              <button onClick={handleNextPage} disabled={currentPage === totalPages}>Next</button>
            </div>
          </>
        ) : (
          <p>Loading users...</p>
        )}
      </div>
    </div>
  )
}

export default App