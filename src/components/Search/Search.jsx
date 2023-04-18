import React, { useCallback, useContext, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { IconButton, Input } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import { PostContext } from '../../context/PostContext';

const Search = () => {
  const { handlePostsSearch } = useContext(PostContext);

  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = useCallback((evt) => {
    setSearchValue(evt.target.value);
  }, []);

  const handleSearch = useCallback(() => {
    handlePostsSearch(searchValue);
  }, [searchValue, handlePostsSearch]);

  const handleSearchKeyDown = useCallback(
    (evt) => {
      if (evt.keyCode === 13) {
        handleSearch();
      }
    },
    [handleSearch]
  );

  return (
    <Routes>
      <Route
        path="/posts"
        element={
          <Input
            endAdornment={
              <IconButton onClick={handleSearch}>
                <SearchIcon />
              </IconButton>
            }
            placeholder="Search…"
            aria-label="search"
            onKeyDown={handleSearchKeyDown}
            value={searchValue}
            onChange={handleSearchChange}
          ></Input>
        }
      />
    </Routes>
  );
};

export default Search;
