import React from 'react';
import { useParams } from 'react-router-dom';

const DUMMY_SPONSOR_SUBMISSION = [
    {
    'id' : 's1',
    'userid' : 'u1',
    'sponsor_name': 'Sterling Archer',
    'sponsor_business' : 'Bobs Burger',
    'linked_in_url' : 'https://linkedin/SterlingArcher',
    'avatar' : 'https://pbs.twimg.com/profile_images/473693408649674753/Fjo74UD2.png',
    'title' : 'Explorations into Cyber Espionage',
    'target_job_titles' : ['CIO', 'CISO'],        
    'target_industry' : ['Financial Services', 'CyberSecurity'],
    'target_client_list' : 'test.csv',
    'target_employee_count': 50,
    'target_users': ['Malorie Archer', 'Lana Kane'],
    'date_start': 'Feb 1st 2021 11AM',
    'date_end' : 'Feb 1st 2021 3PM',
    't_topic' : 0,
    't_host' : 0,
    },
    {
    'id' : 's2',
    'userid' : 'u1',
    'sponsor_name': 'Sterling Archer',
    'sponsor_business' : 'Bobs Burger',
    'linked_in_url' : 'https://linkedin/SterlingArcher',
    'avatar' : 'https://pbs.twimg.com/profile_images/473693408649674753/Fjo74UD2.png',
    'title' : 'How to be the worlds greatest spy',
    'target_job_titles' : ['CIO', 'CISO'],        
    'target_industry' : ['Financial Services', 'CyberSecurity'],
    'target_client_list' : 'test.csv',
    'target_employee_count': 50,
    'target_users': ['Malorie Archer', 'Lana Kane'],
    'date_start': 'Feb 1st 2021 11AM',
    'date_end' : 'Feb 1st 2021 3PM',
    't_topic' : 0,
    't_host' : 0,
        }
];

const SponsorshipRequestDetails = props => {
    const sponsorRequestId = useParams().sid;
    const sponsorRequestDetails = DUMMY_SPONSOR_SUBMISSION.find(submission => submission.id === sponsorRequestId);    

    return <div>{sponsorRequestDetails.id}</div>
};

export default SponsorshipRequestDetails;


