import React from 'react';
import {BOOKS} from "../../index";

interface bookMenuProps {
    notesActive: boolean
}


export default function BookDualMenu(props:bookMenuProps) {
    return (
        <div>
           <ul className={'book-dual-menu'}>
               <li>
                   <a className={props.notesActive ? '' : 'active'}
                      href={'/' + BOOKS}
                   >Book List</a>
               </li>
               <li>
                   <a className={props.notesActive ? 'active' : ''}
                      href={'/' + BOOKS+'?notes=true'}
                   >Personal Notes</a>
               </li>
           </ul>
        </div>
    );


}
