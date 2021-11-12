import React from 'react';
import ReactDOM from 'react-dom';
import PageWrapper from "./components/PageWrapper";
import './index.css';

interface State {
    breakpoint: string;
}

export const BREAKPOINT_XL = 'xl';
export const BREAKPOINT_L = 'l';
export const BREAKPOINT_M = 'm';
export const BREAKPOINT_S = 's';
export const BREAKPOINT_XS = 'xs';

class Site extends React.Component<any, State> {

    constructor(props:any) {
        super(props);
        this.state = {
            breakpoint: this.getScreenSize()
        }
    }

    private getScreenSize = () => {
        const { innerWidth } = window;
        let breakpoint = BREAKPOINT_XS;

        if (innerWidth >= 1440) {
            breakpoint = BREAKPOINT_XL;
        } else if (innerWidth >= 1024) {
            breakpoint = BREAKPOINT_L;
        } else if (innerWidth >= 768) {
            breakpoint = BREAKPOINT_M;
        } else if (innerWidth >= 400) {
            breakpoint = BREAKPOINT_S;
        }

        return breakpoint;
    };

    public render() {
        const {breakpoint} = this.state;
        return(<PageWrapper breakpoint={this.state.breakpoint} />);
    }
}


ReactDOM.render(
  <React.StrictMode>
    <Site />
  </React.StrictMode>,
  document.getElementById('root')
);
