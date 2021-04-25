import React from 'react';
import { addParameters } from '@storybook/react';
import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';
import { create } from '@storybook/theming/create';
import projectTheme from './project-theme';

addParameters({
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind
        ? 0
        : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
    showPanel: true,
    panelPosition: 'bottom'
  },
  docs: { page: null }
});

const customViewports = {
  iPhone11Pro: {
    name: 'iPhoneX',
    styles: {
      width: '375px',
      height: '812px'
    }
  },
  galaxyS21: {
    name: 'Galaxy S21',
    styles: {
      width: '384px',
      height: '854px'
    }
  },
  kindleFireHD: {
    name: 'iPad',
    styles: {
      width: '768px',
      height: '1024px'
    }
  }
};

export const parameters = {
  a11y: {
    element: '#root',
    config: {},
    options: {},
    manual: true
  },
  controls: {
    expanded: true
  },
  viewport: { viewports: customViewports },
  backgrounds: {
    default: 'light theme',
    values: [
      {
        name: 'light theme',
        value: '#fff'
      },
      {
        name: 'dark theme',
        value: '#000'
      },
      {
        name: 'blue theme',
        value: 'cornflowerblue'
      },
      {
        name: 'gray theme',
        value: 'dimgray'
      }
    ]
  },
  actions: {
    argTypesRegex: '^on.*'
  }
};

export const globalTypes = {
  locale: {
    name: 'Locale',
    description: 'locale',
    defaultValue: 'kr',
    toolbar: {
      icon: 'globe',
      items: [
        { value: 'kr', right: '🇰🇷', title: '한국어' },
        { value: 'en', right: '🇺🇸', title: '영어' },
        { value: 'fr', right: '🇫🇷', title: '프랑스어' },
        { value: 'zh', right: '🇨🇳', title: '중국어' },
        { value: 'es', right: '🇪🇸', title: '스페인어' }
      ]
    }
  }
};
