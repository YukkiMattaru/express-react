import React from 'react';
import s from './App.css';

class App extends React.Component {

    state = {
        users: []
    }

    componentDidMount() {
        fetch('/users')
            .then(res => res.json())
            .then(users => this.setState({users}))
    }

    render() {
        return (
            <div className={s.App}>
                <h1>Users</h1>
                {this.state.users.map(user =>
                    <div key={user.id}>{user.username}</div>
                )}
            </div>
        );
    }
}

export default App;
