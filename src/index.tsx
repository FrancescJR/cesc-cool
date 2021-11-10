import React from 'react';
import ReactDOM from 'react-dom';
import PageWrapper from "./components/PageWrapper";
import './index.css';

interface State {
    breakpoint: string;
}

class Site extends React.Component<any, State> {

    constructor(props:any) {
        super(props);
        this.state = {
            breakpoint: this.getScreenSize()
        }
    }

    private getScreenSize = () => {
        const { innerWidth } = window;
        let breakpoint = 'xs';

        if (innerWidth >= 1024) {
            breakpoint = 'lg';
        } else if (innerWidth >= 768) {
            breakpoint = 'md';
        } else if (innerWidth >= 400) {
            breakpoint = 'sm';
        }

        return breakpoint;
    };

    public render() {
        const {breakpoint} = this.state;
        return(<PageWrapper />);
    }
}


ReactDOM.render(
  <React.StrictMode>
    <Site />
  </React.StrictMode>,
  document.getElementById('root')
);
