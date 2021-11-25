import React from 'react';

import {slide as ReactMenu} from 'react-burger-menu';
import SideBar from "./SideBar";
import './burgerMenu.scss'


interface menuProps {

}



export default function Menu (props: menuProps) {
    const [dimensions, setDimensions] = React.useState({
        height: window.innerHeight,
        width: window.innerWidth
    })

    React.useEffect(() => {
        function handleResize() {
            setDimensions({
                height: window.innerHeight,
                width: window.innerWidth
            })
        }
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }}
    )


    return (
            <ReactMenu
                width={284}
                noOverlay={true}
                disableCloseOnEsc={window.innerWidth > 1440}
                isOpen={window.innerWidth > 1440}
            >
                <SideBar />
            </ReactMenu>


    );

}
