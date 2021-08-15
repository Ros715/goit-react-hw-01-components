//import logo from "./logo.svg";
import "./App.css";
import Profile from "./social-profile/Profile.js";
import user from "./social-profile/user.json";
import FriendList from "./friends/FriendList.js";
import friends from "./friends/friends.json";
import Statistics from "./statistics/Statistics.js";
import statisticalData from "./statistics/statistical-data.json";
import TransactionHistory from "./transactions/TransactionHistory.js";
import transactions from "./transactions/transactions.json";

function App() {
  return (
    <div className="app">
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <FriendList friends={friends} />
      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />
      <TransactionHistory items={transactions} />
    </div>
  );
}

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/

export default App;
