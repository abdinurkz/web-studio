import React from 'react'
import Header from './Header'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function Opportunities() {
    return <p>Discover our numerous opportunities</p>;
}

function Solutions() {
    return <p>Solutions that help you.</p>;
}

function Contact() {
    return <p>Feel free to reach us.</p>;
}

function Home() {
    return (
        <div className='container'>
            <div className='wrapper'>

            </div>
            <h5>
                The <b>STUDIO</b>, is a creative, engineer driven, global agency
                working on advancing the software, advertising and design communities
                to new heights.
            </h5>
        </div>
    );
}

const App: React.FC = () => {
    return (
        <Router>
            <div className='App'>
                <Header />
                <div className='container'>
                    <div className='wrapper'>
                        <div className='home'>
                            <Switch>
                                <Route exact path='/' component={Home} />
                                <Route exact path='/opportunities' component={Opportunities} />
                                <Route exact path='/solutions' component={Solutions} />
                                <Route exact path='/contact-us' component={Contact} />
                            </Switch>
                        </div>
                    </div>
                </div>
            </div>
        </Router>
    )
}

export default App
