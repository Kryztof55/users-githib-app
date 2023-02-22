import React, { useState } from "react";
import Avatar from "../../components/Avatar";
import LayoutBase from "../../components/LayoutBase";
import Button from "../../components/Button";
import InputSearch from "../../components/InputSearch";
import { getUsersPage } from "../../utils/axios";
import { useQuery } from "react-query";
import { debounce } from "../../utils/debounce";
const Users = () => {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("A");
  const [per_page] = useState(12);
  const {
    isLoading,
    isError,
    error,
    data: users,
  } = useQuery(
    ["/users", query, page, per_page],
    () => getUsersPage(query, page, per_page),
    {
      keepPreviousData: true,
    }
  );

  const handleShowMore = () => {
    setPage(page + 1);
  };

  const handleQuery = (e) => {
    let query = e.target.value === "" ? "a" : e.target.value;
    debounceSearch(query, 500);
  };

  const search = (query) => {
    setQuery(query);
  };

  const debounceSearch = debounce(search, 500);

  if (isLoading) return <p>Loading Users...</p>;

  if (isError) return <p>Error: {error.message}</p>;

  return (
    <LayoutBase>
      <div className=" md:grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 mt-4 md:mt-14">
        <h4 className="title text-left">GitHub Users</h4>
        <InputSearch
          className="col-start-3"
          placeholder="Enter username o email"
          onChange={(e) => handleQuery(e)}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        {users.items.map((el, i) => (
          <Avatar
            key={el.login}
            img={el.avatar_url}
            name={el.login}
            showName={true}
            icon="https://img.icons8.com/ios-glyphs/30/null/github.png"
            to={el.html_url}
          />
        ))}
      </div>
      <div className="md:text-right">
        <Button showMore={handleShowMore} text="Load More" />
      </div>
    </LayoutBase>
  );
};

export default Users;
