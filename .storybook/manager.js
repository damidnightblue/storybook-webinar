import addons from '@storybook/addons';
import { themes } from '@storybook/theming';
import projectTheme from './project-theme';

addons.setConfig({
  sidebar: {
    showRoots: true
  },
  theme: projectTheme,
  selectedPanel: 'component-button--basic', // 실행시 처음 선택되는 스토리 선택
  isFullscreen: false,
  showNav: true,
  showPanel: true,
  panelPosition: 'bottom',
  sidebarAnimations: true,
  enableShortcuts: true,
  isToolshown: true,
  initialActive: 'sidebar'
});
