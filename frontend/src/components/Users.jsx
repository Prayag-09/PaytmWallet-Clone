import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button } from "./Button";

export const Users = () => {
    const [users, setUsers] = useState([]);
    const [filter, setFilter] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:3000/api/v1/user/bulk?filter=" + filter)
            .then(response => {
                setUsers(response.data.user);
            });
    }, [filter]);

    return (
        <>
            <div className="font-bold mt-6 text-lg">
                Users
            </div>
            <div className="my-2">
                <input
                    onChange={(e) => setFilter(e.target.value)}
                    type="text"
                    placeholder="Search users..."
                    className="w-full px-2 py-1 border rounded border-gray-300"
                />
            </div>
            <div>
                {users.map(user => (
                    <div key={user._id} className="flex justify-between items-center border-b border-gray-200 py-3">
                        <div className="flex items-center">
                            <div className="rounded-full h-12 w-12 bg-gray-300 flex justify-center items-center text-white text-xl">
                                {user.firstName[0]}
                            </div>
                            <div className="ml-3">
                                <div className="font-semibold">{user.firstName} {user.lastName}</div>
                                <div className="text-gray-500">{user.username}</div>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <Button
                                onClick={() => navigate(`/send?id=${user._id}&name=${user.firstName}`)}
                                label="Send Money"
                                className="bg-gray-800 text-white hover:bg-gray-700"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};
