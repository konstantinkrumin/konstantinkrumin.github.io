import commonContent from './commonContent';
import addCommonParameters from '../helpers/addCommonParameters';

const englishText = {
  downloads: {
    resume:
      'https://github.com/konstantinkrumin/portfolio-page-template/blob/master/src/static/Resume_Konstantin_Krumin.pdf',
    cv: 'https://github.com/konstantinkrumin/portfolio-page-template/blob/master/src/static/CV_Konstantin_Krumin.pdf',
  },
  navigation: {
    home: 'Home',
    portfolio: 'Portfolio',
    resume: 'Resume',
  },
  home: {
    description:
      'Hi! My name is Konstantin Krumin and I am a Front-End Web Developer.',
  },
  portfolio: [
    { key: 'calculator', title: 'Calculator' },
    { key: 'pomodoroClock', title: 'Pomodoro Clock' },
    { key: 'drumMachine', title: 'Drum Machine' },
    { key: 'markdownPreviewer', title: 'Markdown Previewer' },
    { key: 'randomQuoteMachine', title: 'Random Quote Machine' },
    { key: 'speedTypingGame', title: 'Speed Typing Game' },
    { key: 'picSomeApp', title: 'Pic Some App' },
    { key: 'heatMap', title: 'Heat Map' },
    { key: 'choroplethMap', title: 'Choropleth Map' },
    { key: 'scatterplotDiagram', title: 'Scatterplot Diagram' },
    { key: 'barChart', title: 'Bar Chart' },
    { key: 'treemapDiagram', title: 'Treemap Diagram' },
    { key: 'productLandingPage', title: 'EnBali Landing Page' },
    { key: 'techDocPage', title: 'Flexbox Documentation' },
    { key: 'portfolioPageV1', title: 'Portfolio Page (v.1)' },
    { key: 'portfolioPageThisSite', title: 'Portfolio Page (This Site)' },
  ],
  portfolioButtons: {
    live: 'Live',
    code: 'Code',
  },
  resume: {
    education: {
      title: 'Education',
      degree: 'Bachelor of Arts, Business Administration',
      university: 'Brandon University (Brandon, MB)',
      gpa: 'Cumulative GPA : 3.71 / 4.30',
      years: '[ 2013 – 2017 ]',
    },
    workExperience: {
      title: 'Work',
      jobPosition: 'Application Specialist (CaseWare)',
      jobPlace: 'MNP (Calgary, AB)',
      years: '[ 2017 - 2019 ]',
    },
    stack: {
      title: 'Stack',
      stackList: [
        'JavaScript',
        'HTML5',
        'Web Design',
        'React',
        'CSS3',
        'BEM',
        'Redux',
        'D3.js',
        'Python',
        'Sass (SCSS)',
        'jQuery',
        'SQL',
        'Bootstrap',
        'Git',
        'Agile',
      ],
    },
    languages: {
      title: 'Languages',
      languagesList: [
        'English (Advanced / Fluent)',
        'Russian (Native)',
        'French (Basic)',
      ],
    },
    buttons: {
      resume: 'Resume',
      cv: 'CV',
    },
  },
};

export default addCommonParameters(commonContent, englishText);
