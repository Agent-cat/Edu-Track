import React from "react";
import { useState } from "react";
const User = () => {
  const [data, setData] = useState([]);

  const getdata = () => {
    const username = document.getElementById("username").value;
    const repo = document.getElementById("repo").value;
    fetch(`https://api.github.com/repos/${username}/${repo}/commits?sha=main`)
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      });
  };
  return (
    <div className="w-full h-screen  bg-black text-white overflow-y-scroll font-bold ">
      
      <div className="w-full flex flex-col items-center   gap-2">
      <input
        id="username"
        placeholder="Username"
        className="border-orange-500 text-center w-[90%] rounded-md mt-2 text-black h-10 border-2"
        type="text"
      />
      <input
        id="repo"
        placeholder="Repo-name"
        className="border-orange-500 text-center w-[90%] rounded-md h-10 text-black border-2"
        type="text"
      />
      <button className="px-6 py-3 bg-orange-500 rounded-lg" onClick={getdata}>
        Get Data
      </button>
      </div>
      <div>
        <h1 className="text-2xl  text-center mb-6" >{data.length} Contributions are made</h1>
        {data.map((info, index) => {
          return (
            <div className="border-2 border-black" key={index}>
              <h2>Made By : {info.commit.author.name}</h2>
              <img
                className="w-10 h-10"
                src={data[0].author.avatar_url}
                alt="vishnu"
              />
              <p> {info.commit.message}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default User;
