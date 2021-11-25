import React, {useState} from 'react';

import './workingExperienceItem.scss';
import {Collapse} from "react-bootstrap";


interface AccordionItemProps {
    isOpen: boolean;
    title: string;
    company:string;
    companyLink: string;
    location: string;
    fromDate: string;
    endDate: string;
    gmapsLink: string;
    children: React.ReactNode;
    eventKey: string;
}

export default function WorkingExperienceItem(props: AccordionItemProps){
    const [open, setOpen] = useState(props.isOpen);

    let class_string = 'time-labels';
    let showFromDate = true;
    if(open || props.fromDate ==='') {
        class_string = 'time-labels open';
        showFromDate = false;
    }

    return (
        <div className={'working-experience ' + props.eventKey}>
            <div className={'working-experience-lite'}>
                <div className={class_string}>
                    {props.endDate}{showFromDate ? <div className={'from-date-collapsible'}>{props.fromDate}</div>: ''}
                </div>
                    <div  className={'point-in-time'}
                          onClick={() => setOpen(!open)}
                          aria-controls="example-collapse-text"
                          aria-expanded={open}
                    >⚫
                </div>
                    <div className={'heading-middle-part'}>
                        <span className={'title-span'}>{props.title}</span><br/>
                        <a href={props.companyLink} target="_blank" rel="noreferrer">
                            <span>at {props.company}</span>
                        </a>
                    </div>
                    <div className={'location'}>
                        <a href={props.gmapsLink} target="_blank" rel="noreferrer">📍{props.location}</a>

                    </div>
            </div>
            <Collapse in={open}>
                <div className={'for-smooth-transition-animation-no-padding-no-margin'}>
                    <div className={'working-experience-description'} >
                        <div className={open ? 'time-labels open' : 'time-labels'}>
                            <div className={'from-date'}>
                                {props.fromDate}
                            </div>
                        </div>
                        <div className={'time-line-pre'} />
                        <div  className={open ? 'time-line open' : 'time-line'}/>
                        <div className={'main-content'}>
                            {props.children}
                        </div>
                    </div>
                </div>
            </Collapse>
        </div>
    );
}