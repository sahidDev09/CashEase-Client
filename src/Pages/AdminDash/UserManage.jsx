import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Helmet } from "react-helmet";
import { FaSearch } from "react-icons/fa";
import { MdBlockFlipped } from "react-icons/md";
import { VscLayersActive } from "react-icons/vsc";

const UserManage = () => {
  const [search, setSearch] = useState("");

  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:8000/users");
      return res.data;
    },
  });

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-slate-50 p-4 rounded-md mt-14 md:mt-0">
      <Helmet>CashEase | Users</Helmet>
      <div className="flex justify-between container mx-auto">
        <h1 className="text-2xl">Total users: {filteredUsers.length}</h1>
        <div className="flex gap-2">
          <input
            type="text"
            className="input bg-slate-200 focus:outline-none"
            placeholder="Search user name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="btn bg-blue-500">
            <FaSearch className="text-white" />
          </button>
        </div>
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>User Profile</th>
                <th>Status</th>
                <th>Role</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user, index) => (
                <tr key={user._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={user.image} alt={`${user.name}'s avatar`} />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{user.name}</div>
                        <div className="text-sm opacity-50">{user.email}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span
                      className={`${
                        user.status === "blocked"
                          ? "bg-red-100"
                          : "bg-green-100"
                      } p-2 rounded-full`}>
                      {user.status}
                    </span>
                  </td>
                  <td>
                    <span className="p-2 bg-slate-200 rounded-full px-4">
                      {user.role}
                    </span>
                  </td>
                  <th className="flex gap-2">
                    {user.status === "blocked" ? (
                      <button
                        disabled
                        className="btn bg-red-100 hover:bg-red-400"
                        data-tooltip-id="user-tooltip"
                        data-tooltip-content="Blocked">
                        <MdBlockFlipped /> Blocked
                      </button>
                    ) : (
                      <button
                        className="btn bg-red-100 hover:bg-red-400"
                        data-tooltip-id="user-tooltip"
                        data-tooltip-content="Block">
                        <MdBlockFlipped /> Block
                      </button>
                    )}
                    <button
                      className="btn bg-blue-100 hover:bg-blue-400"
                      data-tooltip-id="user-tooltip"
                      data-tooltip-content="Download">
                      <VscLayersActive /> Approve
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserManage;
