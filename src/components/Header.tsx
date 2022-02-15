import React, { useEffect, useState } from 'react';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';
import Hamburger from './Hamburger';

export interface StateProps {
  initial: any;
  clicked: any;
  menuName: string;
}

const Header: React.FC<RouteComponentProps> = ({ history }) => {
  const [state, setState] = useState<StateProps>({
    initial: false,
    clicked: null,
    menuName: 'Menu',
  });
  const [disabled, setDisabled] = useState(false);
  useEffect(() => {
    history.listen(() => {
      setState({ ...state, clicked: false, menuName: 'Menu' });
    });
  }, [history]);
  const handleMenu = () => {
    disableMenu();
    if (state.initial === false) {
      setState({
        initial: null,
        clicked: true,
        menuName: 'Close',
      });
    } else if (state.clicked === true) {
      setState({
        ...state,
        clicked: !state.clicked,
        menuName: 'Menu',
      });
    } else if (state.clicked === false) {
      setState({
        ...state,
        clicked: !state.clicked,
        menuName: 'Close',
      });
    }
  };
  const disableMenu = () => {
    setDisabled(!disabled);
    setTimeout(() => {
      setDisabled(false);
    }, 1200);
  };

  // @ts-ignore
  return (
    <header>
      <div className="container">
        <div className="wrapper">
          <div className="inner-header">
            <div className="logo">
              <Link
                to="/"
                style={{ color: !state.clicked ? '#191919' : '#fff' }}
              >
                STUDIO. 🚀
              </Link>
            </div>
            <div className="menu">
              <button
                disabled={disabled}
                onClick={handleMenu}
                style={{ color: !state.clicked ? '#191919' : '#fff' }}
              >
                {state.menuName}
              </button>
            </div>
          </div>
        </div>
      </div>
      <Hamburger state={state} />
    </header>
  );
};

export default withRouter(Header);
