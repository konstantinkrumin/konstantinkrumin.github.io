import commonContent from './commonContent';
import addCommonParameters from '../helpers/addCommonParameters';

let russianText = {
  downloads: {
    resume:
      'https://github.com/konstantinkrumin/portfolio-page-template/blob/master/src/static/Резюме_Константин_Крумин.pdf',
    cv: 'https://github.com/konstantinkrumin/portfolio-page-template/blob/master/src/static/CV_Konstantin_Krumin_2.pdf',
  },
  navigation: {
    home: 'Про меня',
    portfolio: 'Портфолио',
    resume: 'Резюме',
  },
  home: {
    description:
      'Привет! Меня зовут Константин Крумин и я Front-End Разработчик.',
  },
  portfolio: [
    { key: 'calculator', title: 'Калькулятор' },
    { key: 'pomodoroClock', title: 'Таймер-помидор' },
    { key: 'drumMachine', title: 'Драм-машина' },
    { key: 'markdownPreviewer', title: 'Просмотр markdown' },
    { key: 'randomQuoteMachine', title: 'Генератор цитат' },
    { key: 'speedTypingGame', title: 'Тест скорости печати' },
    { key: 'picSomeApp', title: 'Pic Some App' },
    { key: 'heatMap', title: 'Тепловая карта' },
    { key: 'choroplethMap', title: 'Фоновая картограмма' },
    { key: 'scatterplotDiagram', title: 'Диаграмма рассеяния' },
    { key: 'barChart', title: 'Столбчатая диаграмма' },
    { key: 'treemapDiagram', title: 'Диаграмма treemap' },
    { key: 'productLandingPage', title: 'Лендинг EnBali' },
    { key: 'techDocPage', title: 'Документация Flexbox' },
    { key: 'portfolioPageV1', title: 'Портфолио (v.1)' },
    { key: 'portfolioPageThisSite', title: 'Портфолио (этот сайт)' },
  ],
  portfolioButtons: {
    live: 'Открыть',
    code: 'Код',
  },
  resume: {
    education: {
      title: 'Образование',
      degree: 'Бакалавр, Деловое администрирование',
      university: 'Brandon University (Канада)',
      gpa: 'GPA: 3.71 / 4.30',
      years: '[ 2013 – 2017 ]',
    },
    workExperience: {
      title: 'Работа',
      jobPosition: 'Application Specialist (CaseWare)',
      jobPlace: 'MNP (Калгари, Канада)',
      years: '[ 2017 - 2019 ]',
    },
    stack: {
      title: 'Стек',
      stackList: [
        'JavaScript',
        'HTML5',
        'Веб-дизайн',
        'React',
        'CSS3',
        'БЭМ',
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
      title: 'Языки',
      languagesList: [
        'Английский (Продвинутый / C2)',
        'Русский (Родной Язык)',
        'Французский (Базовый / A2)',
      ],
    },
    buttons: {
      resume: 'Резюме',
      cv: 'CV',
    },
  },
};

export default addCommonParameters(commonContent, russianText);
