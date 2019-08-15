const services = [
    {
        name: 'investigations',
        title: 'Investigations',
        subTitle: 'Lorem ipsum dolor sit amet',
        image: 'images/investigations.jpg',
        body: `<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero, ipsum in. Magni earum consectetur, fugit, tempore vel tenetur a perferendis quis, molestiae deleniti delectus ducimus explicabo error! Blanditiis, tempora sunt!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, accusantium quo ut saepe.</p>`
    },
    {
        name: 'crisis-management',
        title: 'Crisis Management',
        subTitle: 'Lorem ipsum dolor sit amet',
        image: 'images/crisis-management.jpg',
        body: `<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero, ipsum in. Magni earum consectetur, fugit, tempore vel tenetur a perferendis quis, molestiae deleniti delectus ducimus explicabo error! Blanditiis, tempora sunt!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, accusantium quo ut saepe.</p>`
    },
    {
        name: 'security-consultancy',
        title: 'Security Consultancy',
        subTitle: 'Lorem ipsum dolor sit amet',
        image: 'images/security.jpg',
        body: `<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero, ipsum in. Magni earum consectetur, fugit, tempore vel tenetur a perferendis quis, molestiae deleniti delectus ducimus explicabo error! Blanditiis, tempora sunt!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, accusantium quo ut saepe.</p>`
    },
    {
        name: 'security-training',
        title: 'Security Training',
        subTitle: 'Lorem ipsum dolor sit amet',
        image: 'images/training.jpg',
        body: `<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero, ipsum in. Magni earum consectetur, fugit, tempore vel tenetur a perferendis quis, molestiae deleniti delectus ducimus explicabo error! Blanditiis, tempora sunt!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, accusantium quo ut saepe.</p>`
    }
];

const text = {
    home: {
        heroTitle: 'A global network of security proffesionals',
        heroBody: 'Enabling smart security risk decisions. Promoting business resiliance',
        intoTitle: 'Investigations and Secuirty Solutions',
        introBody: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper.'
    }
}

const values = [
    {
        name: 'business-focused',
        title: 'Business Focused'
    },
    {
        name: 'value-for-money',
        title: 'Value For Money'
    },
    {
        name: 'keep-it-simple',
        title: 'Keep it simple'
    },
    {
        name: 'tell-the-truth',
        title: 'Tell the truth'
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