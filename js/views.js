const services = [
    {
        name: 'investigations',
        title: 'Investigations',
        subTitle: 'A worldwide network of experienced investigators',
        image: 'images/investigations.jpg',
        body: `<p>A global network of dedicated and skilful investigators with extensive international experience. Team Tree International provides professionalism, independence and integrity to successfully tackle a wide range of criminal, civil and business misconduct allegations.</p>`
    },
    {
        name: 'crisis-management',
        title: 'Crisis Management',
        subTitle: 'Global crisis management and training',
        image: 'images/crisis-management.jpg',
        body: `<p>Our experienced team will partner with your business to:</p>
        <ul>
            <li>Draft crisis management plans and business continuity plans;</li>
            <li>Design and deliver bespoke, business relevant, crisis management training exercises;</li>
            <li>Using a range of tests from table-top exercises through simulation to full interruption exercises.</li>
        </ul>`
    },
    {
        name: 'security-consultancy',
        title: 'Security Consultancy',
        subTitle: 'Comprehensive security consulting services',
        image: 'images/security.jpg',
        body: `<ul>
        <li>Travel Security</li>
        <li>Supply Chain Security</li>
        <li>Event Management</li>
        <li>Site Security Assurance Programme</li>
        <li>Technical Surveillance Counter Measures</li>
        <li>Counter Terrorism</li>
        </ul>`
    },
    {
        name: 'security-training',
        title: 'Security Training',
        subTitle: 'Bespoke security training by security professionals',
        image: 'images/training.jpg',
        body: `<ul>
        <li>Crisis Management & Business Continuity</li>
        <li>Investigation Skills</li>
        <li>Interview Techniques</li>
        <li>Safety & Security Situational Awareness</li>
        <li>Security Incident Response</li>
        </ul>`
    }
];

const text = {
    home: {
        heroTitle: 'A global network of security professionals',
        heroBody: 'Enabling smart security risk decisions<br/>Independent investigations with integrity',
        intoTitle: 'Investigations and Secuirty Solutions',
        introBody: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper.'
    }
}

const values = [
    {
        name: 'business-focused',
        title: 'Business focused',
        body: `<p>Business first: we will focus on maximising value to the business.</p>`
    },
    {
        name: 'value-for-money',
        title: 'Value for money',
        body: `<p>We will ensure efficient, effective and economical delivery of investigations and security solution.</p>`
    },
    {
        name: 'keep-it-simple',
        title: 'Keep it simple',
        body: `<p>Transparency and openness are vital. Costs will be set out clearly and we will provide straight-forward reports in plain language.</p>`
    },
    {
        name: 'tell-the-truth',
        title: 'Tell the truth',
        body: `<p>Honesty and integrity are the foundations of leadership. At Team Tree International we do the right thing because that is the right thing to do; there are no exceptions.</p>`
    }
];

module.exports = {
    home: {
        services,
        text,
        values
    },
    services: {
        services
    },
    values: {
        values
    }
};