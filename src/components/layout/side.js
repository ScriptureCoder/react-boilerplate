import React from 'react';

class Side extends React.Component {
    render() {
        return (
            <nav id="sidebar">
                <div className="sidebar-header">
                    <img src="./images/logo-01-copy.png" alt="" width="250"/>
                </div>
                <ul className="list-unstyled components">
                    <li>
                        <a href="dashboard.html">
                            Dashboard
                        </a>
                    </li>
                    <li>
                        <a href="Addproperty.html">
                            Add Property
                        </a>
                    </li>
                    <li>
                        <a href="viewproperty.html">
                            View Property
                        </a>
                    </li>
                    <li>
                        <a href="AddAgent.html">
                            Add Agents
                        </a>
                    </li>
                    <li>
                        <a href="manageAgent.html">
                            Manage Agents
                        </a>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Side;
