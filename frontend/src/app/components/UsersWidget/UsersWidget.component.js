import React, {Suspense, lazy} from "react";
import UsersFlexContainerComponent from "../UsersFlexContainer/UsersFlexContainer.component";

const UserComponent = lazy(() => import('../User/User.component'));

export default class UsersWidgetComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: <span>None</span>
        }
    }

    async fetchUsers() {
        return fetch('http://localhost:5000/user').then(res => res.json());
    }

    async renderUsers() {
        const usersObject = await this.fetchUsers();

        let userItems = [];

        usersObject.map(user => userItems.push(
            <Suspense fallback={<span>Loading...</span>}>
                <UserComponent username={user.username} password={user.password}/>
            </Suspense>
        ));

        return userItems;
    }

    componentDidMount() {
        this.renderUsers().then(users => this.setState({ users }));
    }

    render() {
        return(
            <span>
                <h2>Users: </h2>
                <UsersFlexContainerComponent>
                    {this.state.users}
                </UsersFlexContainerComponent>
            </span>
        );
    }
}