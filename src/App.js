import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { Fragment } from 'react';
import DefaultLayout from './DefaultLayout/DefaultLayout';
import { publicRoutes } from './routes';
import GlobalStyles from './GlobalStyles/GlobalStyles';

function App() {
    return (
        <GlobalStyles>
            <Router>
                <div className="App">
                    <Routes>
                        {publicRoutes.map((route, index) => {
                            const Page = route.component;

                            let Layout = DefaultLayout;

                            if (route.layout) {
                                Layout = route.layout;
                            } else if (route.layout === null) {
                                Layout = Fragment;
                            }

                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={
                                        <Layout>
                                            <Page />
                                        </Layout>
                                    }
                                />
                            );
                        })}
                    </Routes>
                </div>
            </Router>
        </GlobalStyles>
    );
}

export default App;
