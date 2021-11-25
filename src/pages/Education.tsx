import React from 'react';
import WorkingExperienceItem from "../components/collapsible-element/WorkingExperienceItem";



export default function Education() {
    return (
        <div>
            <div className={'header'}>
                <div className={'empty-space'}/>
                <h2 className={'list-title'}>Education</h2>
            </div>
            <div>
                <WorkingExperienceItem
                    isOpen={true}
                    title={'Superior degree on informatics engineering'}
                    company={'Universitat Politècnica de Catalunya'}
                    companyLink={'https://www.upc.edu/ca'}
                    location={'Barcelona'}
                    gmapsLink={'https://goo.gl/maps/fRkpPMzgBmi4ffDn8'}
                    fromDate={''}
                    endDate={'2012'}
                    eventKey="1"
                >
                    <p>I always hated the fact that informatics doesn't translate properly to English. Computer science
                    doesn't seem to match 100% to the same.</p>
                    <p>Also, I did it long time ago and the plan was quite different than nowadays degrees where
                    they last 3 years and then you are supposed to do a master.</p>
                    <p>This degree was 5 years, and it kind of included a master in it, which one? well, I was about to
                    change plan and then I saw that I had all the available 5 masters that the Faculty was offering
                    already completed at 80%, I just needed to do a final thesis for each of them (and on some
                        I was also missing some non-mandatory credits) and I'd have 5 masters!</p>
                </WorkingExperienceItem>
            </div>
            <div>
                <WorkingExperienceItem
                    isOpen={true}
                    title={'Erasmus Programme'}
                    company={'Zinio'}
                    companyLink={'https://www.tue.nl/en/'}
                    location={'The Netherlands'}
                    gmapsLink={'https://goo.gl/maps/LTueMbDDbF8tW9H66'}
                    fromDate={'2009'}
                    endDate={'2010'}
                    eventKey="2"
                >
                    <p>An Erasmus stay on the countryside of the Netherlands. Eindhoven is nicknamed as the -yet another-
                    city of lights for the placement of the Phillips company and also those technical universities.</p>
                    <p>What can I say about an Erasmus stay. Good times.</p>
                </WorkingExperienceItem>
            </div>
        </div>
    );
}