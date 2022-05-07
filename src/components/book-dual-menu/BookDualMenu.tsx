import React from 'react';
import {BOOKS} from "../../index";
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

interface bookMenuProps {
    notesActive: boolean
}

// This could be greatly simplified with selectors etc, check emotion documentation:
// https://emotion.sh/docs/object-styles
const ul_css = css`
    padding: 1em;
    overflow:hidden;
`

const li_css = css`
  display: flex;
  padding: 0em 1em;
  width: 50%;
  border-bottom:1px solid #000;
`

const li_css_active = css`
 border: 1px solid #000;
  border-bottom:none;
`

const li_css_left = css`
    float:left;
`

const li_css_right = css `
    float:right;
`

const menu_item_css = css`
    text-decoration: none;
    width: 100%;
`;


export default function BookDualMenu(props:bookMenuProps) {
    return (
        <div>
           <ul css={ul_css} className={'book-dual-menu'}>
               <li css={props.notesActive ? [li_css, li_css_left] : [li_css, li_css_left, li_css_active]}>
                   <a css={menu_item_css} className={props.notesActive ? '' : 'active'}
                      href={'/' + BOOKS}
                   >Book List</a>
               </li>
               <li css={props.notesActive ? [li_css, li_css_right, li_css_active] : [li_css, li_css_right]}>
                   <a  css={menu_item_css}  className={props.notesActive ? 'active' : ''}
                      href={'/' + BOOKS+'?notes=true'}
                   >My highlights and Notes</a>
               </li>
           </ul>
        </div>
    );


}
