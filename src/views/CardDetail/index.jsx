import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { getUserDetail } from "../../utils/axios";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

import Stats from "../CardDetail/Stats";
import BasicInformation from "../CardDetail/BasicInformation";
import LayoutBase from "../../components/LayoutBase";

const CardDetail = () => {
  let params = useParams();
  let navigate = useNavigate();

  const [username] = useState(params.username);
  const {
    isLoading,
    isError,
    data: user,
  } = useQuery(["/users", username], () => getUserDetail(username), {
    keepPreviousData: true,
  });

  if (isLoading) return <p>Loading Users...</p>;

  if (isError) return navigate("/");
  const NOINFO = "No information";
  const {
    avatar_url,
    name,
    login,
    bio,
    location,
    email,
    public_repos,
    followers,
    following,
    twitter_username,
    blog,
    html_url,
  } = user;

  const INFO_STATS = [
    {
      title: "Repos",
      number: public_repos,
    },
    {
      title: "Followers",
      number: followers,
    },
    {
      title: "Following",
      number: following,
    },
  ];

  return (
    <LayoutBase>
      <div className="md:flex mt-4 md:mt-14 border-solid border-2 border-brand-grey-500 rounded-md p-8 md:pr-32">
        <div>
          <img
            className="rounded-full w-[70px] mr-7"
            src={avatar_url}
            alt={name}
          />
        </div>

        <BasicInformation
          name={name ? name : NOINFO}
          login={login ? login : NOINFO}
          bio={bio ? bio : NOINFO}
          location={location ? location : NOINFO}
          email={email ? email : NOINFO}
        />

        <div className="md:w-[50%] text-left mt-4">
          <NavLink to={html_url} target="_blank" rel="noopener noreferrer">
            <div className="flex items-center mb-6">
              <img
                className="mr-2 w-[25px] h-[25px]"
                src="https://img.icons8.com/material-rounded/24/null/github.png"
                alt="GitHub User"
              />
              <p className="text-brand-grey text-sm">
                {login ? `${login}sgithub` : NOINFO}
              </p>
            </div>
          </NavLink>
          <div className="h-[80px] bg-slate-200 rounded-lg flex justify-between p-5 mb-12">
            {INFO_STATS.map((el) => (
              <Stats title={el.title} number={el.number} />
            ))}
          </div>
          <div className="flex mt-8 mb-3">
            <img
              className="opacity-70 mr-3 w-[20px] h-[2p0sx]"
              src="https://img.icons8.com/color/48/null/twitter--v1.png"
              alt="Twitter"
            />
            <p className="text-brand-grey text-xs	flex items-center">
              {twitter_username ? twitter_username : NOINFO}
            </p>
          </div>
          <div className="flex mb-2">
            <img
              className="opacity-70 mr-3 w-5"
              src="https://img.icons8.com/material-outlined/24/null/link--v1.png"
              alt="Email"
            />
            <p className="text-brand-grey text-xs	flex items-center">
              {blog ? blog : NOINFO}
            </p>
          </div>
        </div>
      </div>
    </LayoutBase>
  );
};

export default CardDetail;
