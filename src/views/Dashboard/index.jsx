import React from 'react';

import NavBar from '../../components/NavBar';

import './style.scss';

const withDashboard = (WrappedComponent) => 
    class extends React.Component {
        render() {
            return (
                <div className="dashboard">
                    <NavBar />
                
                    <main>
                        <WrappedComponent />
                    </main>
                </div> 
            )
        }
    }
 
export default withDashboard;