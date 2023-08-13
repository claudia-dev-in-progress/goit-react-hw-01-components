import { Profile } from "./components/profile/Profile";
import { Statistics } from "./components/statistics/Statistics";
import user from "./components/profile/user.json";
import data from "./components/statistics/data.json";
import transactions from "./components/transactionhistory/transactions.json";
import friends from "./components/friendlist/friends.json";
import { FriendList } from "./components/friendlist/FriendList";
import { TransactionHistory } from "./components/transactionhistory/TransactionHistory";
import "./App.css";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </React.Fragment>
  );
}

export default App;
