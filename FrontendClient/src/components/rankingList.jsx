import { useEffect, useState } from "react";
import { getRanking } from "../api/ranking.api";
import { UserCard } from "./UserCard";

export function RankingList() {

    const [user, setUser] = useState([]);

    useEffect(() => {

        async function loadUsers() {
            const res = await getRanking();
            setUser(res.data)
        }
        loadUsers();
    }, []);

    return <div>
        {user.map(user => (
            <UserCard key={user.id} user = {user} />
        ))}
    </div>;
}