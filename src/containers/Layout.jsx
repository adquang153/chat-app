import React from "react";
import Header from './../components/Header';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row } from 'reactstrap';
import { Route, Switch } from 'react-router-dom';

import routes from "../routes";

function App() {
    return (
        <React.Fragment>
            <Header />
            <Container className="mt-5">
                <Row>
                    <Switch>
                        {
                            routes.map((r, i) => {
                                return r.Components ? (
                                    <Route
                                        key={i}
                                        path={r.path}
                                        exact={r.exact}
                                        render={p => <r.Components {...p} />}
                                    />
                                ) : null;
                            })
                        }
                    </Switch>
                </Row>
            </Container>
        </React.Fragment>
    );
}

export default App;
