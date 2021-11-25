import React from 'react';
import WorkingExperienceItem from "../components/collapsible-element/WorkingExperienceItem";

import './listPage.scss'

export default function WorkingExperience() {
    return (
        <div>
            <div className={'header'}>
                <div className={'empty-space'}/>
                <h2 className={'list-title'}>Working Experience</h2>
            </div>
            <div
            >
                <WorkingExperienceItem
                    isOpen={true}
                    title={'Senior Backend Developer'}
                    company={'Zinio'}
                    companyLink={'https://www.zinio.com/es'}
                    location={'Barcelona'}
                    gmapsLink={'https://goo.gl/maps/cNwe71B9HbKzr5rg7'}
                    fromDate={'January 2021'}
                    endDate={'Present day'}
                    eventKey="1"
                >
                    <p>Developing new feature and dealing with a lot of technical debt.</p>
                    <p>Trying to point out the weaknesses that this company has, but also learning from great
                        professional here.</p>
                </WorkingExperienceItem>
                <WorkingExperienceItem
                    isOpen={true}
                    title={'Technical Leader'}
                    company={'Xceed s.r.l.'}
                    companyLink={'https://xceed.me'}
                    location={'Barcelona'}
                    gmapsLink={'https://goo.gl/maps/XYC4EkfHEYXPSb9s6'}
                    fromDate={'February 2018'}
                    endDate={'January 2021'}
                    eventKey="2">
                    <p>During this period I was setting the technical direction of the company on general terms.</p>
                    <p>On concrete terms this was mainly moving from a legacy monolith to a microservices architecture
                        applying DDD principles.</p>
                    <p>Truth be told, the name of technical leader was mainly for the accountability I holded. The
                        technical team I was "leading" was extremely good. Decisions were always consensed and reasoned and the feeling
                        was that of a flat hierarchy.</p>
                    <p>I helped creating a great atmosphere were failures and experimentation were not an issue and
                        yet productivity thrilled. Thanks to everybody's effort.</p>
                    <p>There were some months at the beginning of this period that I had to act as the final responsible
                        of all the technical decisions, during which I focused on hiring the one that would replace me and
                        that could deal a proper communication between departments so we could finally achieve
                        that vibrant atmosphere.</p>
                    <p>At the end, pandemic struck and the nightlife business couldn't support the IT team anymore, it shrank
                        until I finally also moved on.</p>
                </WorkingExperienceItem>
                <WorkingExperienceItem
                    isOpen={true}
                    title={'Backend developer'}
                    company={'Xceed s.r.l.'}
                    companyLink={'https://xceed.me'}
                    location={'Barcelona'}
                    gmapsLink={'https://goo.gl/maps/XYC4EkfHEYXPSb9s6'}
                    fromDate={'December 2016'}
                    endDate={'February 2018'}
                    eventKey="3">
                    <p>I moved back to Barcelona to start working at Xceed.</p>
                    <p>Responsibilities were none other especial than to develop on a monolith and making plans
                        to move away from that legacy code and start applying DDD approaches and hexagonal
                        architecture.</p>
                </WorkingExperienceItem>
                <WorkingExperienceItem
                    isOpen={true}
                    title={'Web developer'}
                    company={'ANNAI Inc'}
                    companyLink={'https://annai.co.jp/en'}
                    location={'Osaka'}
                    gmapsLink={'https://goo.gl/maps/X1uG8YDdg6bkQrS48'}
                    fromDate={'November 2015'}
                    endDate={'December 2016'}
                    eventKey="4">
                    <p>(They moved the headquarters from Osaka to Tokyo).</p>
                    <p>I was the international bridge between the company and the outside world especially in
                        terms of Drupal community. I worked in several projects (like the huge site proface.com
                        where I basically worked as a DevOps) and participated to many open source projects
                        especially inside the Drupal community.</p>
                </WorkingExperienceItem>
                <WorkingExperienceItem
                    isOpen={true}
                    title={'Web developer'}
                    company={'Okinawa Institute of Science and Tehnology (OIST)'}
                    companyLink={'https://www.oist.jp/'}
                    location={'Okinawa'}
                    gmapsLink={'https://g.page/oistgu?share'}
                    fromDate={'April 2012'}
                    endDate={'November 2015'}
                    eventKey="5">
                    <p>OIST is a graduate university located in the heart of Okinawa and it is supported
                        by the central Japanese government. This university promotes cross field research
                        and it is backed up by several Nobel laureates prize winners.</p>
                    <p>I was in charge of all the web pages also outsourced and the creator of the main account
                        system that the university used to assign its resourced to its employees.</p>
                </WorkingExperienceItem>
                <WorkingExperienceItem
                    isOpen={true}
                    title={'Intern'}
                    company={'Omitsis consulting'}
                    companyLink={'https://www.omitsis.com/'}
                    location={'Barcelona'}
                    gmapsLink={'https://goo.gl/maps/jW7cdv9PgcUGtxG2A'}
                    fromDate={'April 2012'}
                    endDate={'April 2010'}
                    eventKey="6">
                    <p>The beginnings. I learned mainly about Drupal. I also did my final degree "thesis" there
                        in Symfony 1.4!</p>
                    <p>Thanks to the experience I got there about Drupal and the things that they taught me I could
                        find my first non internship real job in Japan.</p>
                </WorkingExperienceItem>
            </div>
        </div>
    );
}