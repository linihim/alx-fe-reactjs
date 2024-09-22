import React, { useState } from 'react';
import { fetchUserData, fetchAdvancedUserData } from '../services/githubService';

const Search = () => {
  const [searchParams, setSearchParams] = useState({
    username: '',
    location: '',
    minRepos: ''
  });
  const [userData, setUserData] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isAdvancedSearch, setIsAdvancedSearch] = useState(false);

  const handleInputChange = (e) => {
    setSearchParams({ ...searchParams, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setUserData(null);
    setSearchResults([]);

    try {
      if (isAdvancedSearch) {
        const data = await fetchAdvancedUserData(searchParams);
        setSearchResults(data.items);
      } else {
        const data = await fetchUserData(searchParams.username);
        setUserData(data);
      }
    } catch (err) {
      setError('Looks like we cant find the user');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          name="username"
          value={searchParams.username}
          onChange={handleInputChange}
          placeholder="Username"
          className="w-full p-2 mb-2 border rounded"
        />
        {isAdvancedSearch && (
          <>
            <input
              type="text"
              name="location"
              value={searchParams.location}
              onChange={handleInputChange}
              placeholder="Location"
              className="w-full p-2 mb-2 border rounded"
            />
            <input
              type="number"
              name="minRepos"
              value={searchParams.minRepos}
              onChange={handleInputChange}
              placeholder="Minimum Repositories"
              className="w-full p-2 mb-2 border rounded"
            />
          </>
        )}
        <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">
          Search
        </button>
      </form>
      
      <button 
        onClick={() => setIsAdvancedSearch(!isAdvancedSearch)} 
        className="mb-4 p-2 bg-gray-300 rounded"
      >
        {isAdvancedSearch ? 'Simple Search' : 'Advanced Search'}
      </button>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      
      {userData && !isAdvancedSearch && (
        <div className="mb-4 p-4 border rounded">
          <img src={userData.avatar_url} alt={`${userData.login}'s avatar`} className="w-16 h-16 rounded-full" />
          <h2 className="text-xl font-bold">{userData.name}</h2>
          <p>Location: {userData.location || 'Not specified'}</p>
          <p>Repositories: {userData.public_repos}</p>
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
            View GitHub Profile
          </a>
        </div>
      )}

      {searchResults.length > 0 && isAdvancedSearch && (
        <div>
          {searchResults.map(user => (
            <div key={user.id} className="mb-4 p-4 border rounded">
              <img src={user.avatar_url} alt={`${user.login}'s avatar`} className="w-16 h-16 rounded-full" />
              <h2 className="text-xl font-bold">{user.login}</h2>
              <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                View GitHub Profile
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;