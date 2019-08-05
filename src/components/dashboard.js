import React from 'react';
import Layout from "./layout";

class Dashboard extends React.Component {
    render() {
        return (
            <Layout title="Status">
                <div className="container mt-4">
                    <div className="row dashbox">
                        <div className="col ">
                            <div className="box text-center">
                                <div className="inner border rounded  text-center"> 400</div>
                                <div className="mt-4"><h3>Properties</h3></div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="box text-center">
                                <div className="inner border rounded  text-center">100</div>
                                <div className="mt-4 font-weight-lighter"><h3>Agents</h3></div>
                            </div>
                        </div>

                    </div>


                </div>
            </Layout>

        );
    }
}

export default Dashboard;
