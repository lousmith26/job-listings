import photosnapImage from './images/photosnap.svg'
import manageImage from './images/manage.svg'
import accountImage from './images/account.svg'
import myhomeImage from './images/myhome.svg'
import loopImage from './images/loop-studios.svg'
import faceImage from './images/faceit.svg'
import shortlyImage from './images/shortly.svg'
import insureImage from './images/insure.svg'
import eyecamImage from './images/eyecam-co.svg'
import airImage from './images/the-air-filter-company.svg'

const jobs = {
    one: {
      name: 'Senior Frontend Developer',
      company: 'Photosnap',
      posted: '1d ago',
      time: 'Full Time',
      location: 'USA only',
      image: photosnapImage,
      tags: [
        'Frontend',
        'Senior',
        'HTML',
        'CSS',
        'Javascript'
      ],
      new: true,
      featured: true,
    },
    two: {
      name: 'Fullstack Developer',
      company: 'Manage',
      posted: '1d ago',
      time: 'Part Time',
      location: 'Remote',
      image: manageImage,
      tags: [
        'Fullstack',
        'Midweight',
        'Python',
        'React'
      ],
      new: true,
      featured: true,
    },
    three: {
        name: 'Junior Frontend Developer',
        company: 'Account',
        posted: '2d ago',
        time: 'Part Time',
        location: 'USA Only',
        image: accountImage,
        tags: [
            'Frontend',
            'Junior',
            'React',
            'Sass',
            'Javascript',
        ],
        new: true,
        featured: false,
    },
    four: {
        name: 'Junior Frontend Developer',
        company: 'MyHome',
        posted: '5d ago',
        time: 'Contract',
        location: 'USA Only',
        image: myhomeImage,
        tags: [
            'Frontend',
            'Junior',
            'CSS',
            'Javascript'
        ]
    },
    five: {
        name: 'Software Engineer',
        company: 'Loop Studios',
        posted: '1w ago',
        time: 'Full Time',
        location: 'Worldwide',
        image: loopImage,
        tags: [
            'Fullstack',
            'Midweight',
            'Javascript',
            'Sass',
            'Ruby'
        ]
    },
    six: {
        name: 'Junior Backend Developer',
        company: 'FaceIt',
        posted: '2w ago',
        time: 'Full Time',
        location: 'UK Only',
        image: faceImage,
        tags: [
            'Backend',
            'Junior',
            'Ruby',
            'RoR'
        ]
    },
    seven: {
        name: 'Junior Developer',
        company: 'Shortly',
        posted: '2w ago',
        time: 'Full Time',
        location: 'Worldwide',
        image: shortlyImage,
        tags: [
            'Frontend',
            'Junior',
            'HTML',
            'Sass',
            'Javascript'
        ]
    },
    eight: {
        name: 'Junior FrontEnd Developer',
        company: 'Insure',
        posted: '2w ago',
        time: 'Full Time',
        location: 'USA Only',
        image: insureImage,
        tags: [
            'Frontend',
            'Junior',
            'Vue',
            'Javascript',
            'Sass'
        ]
    },
    nine: {
        name: 'Fullstack Engineer',
        company: 'Eyecam Co.', 
        posted: '3w ago',
        time: 'Full Time',
        location: 'Worldwide',
        image: eyecamImage,
        tags: [
            'Fullstack',
            'Midweight',
            'Python',
            'Django',
            'Javascript',
        ]
    },
    ten: {
        name: 'Front-end Dev',
        company: 'The Air Filter Company',
        posted: '1mo ago',
        time: 'Part Time',
        location: 'Worldwide',
        image: airImage,
        tags: [
            'Frontend',
            'Junior',
            'React',
            'Sass',
            'Javascript'
        ]
    }
  }

export default jobs;