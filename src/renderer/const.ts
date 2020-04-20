import path from 'path';
import { remote } from 'electron';

export const SYSTEM_IS_MACOS = navigator.platform.toUpperCase().indexOf('MAC') >= 0;

export const FILES_DIR = remote.getGlobal('__filesDir');

// @ts-ignore
export const ICON_TEMPLATE_PATH = path.join(FILES_DIR, 'iconTemplate.png');

export const RULE_STORE_KEY = 'lightproxy-rule';

export const GITHUB_PROJECT_PAGE = 'https://github.com/alibaba/lightproxy';
export const NEW_ISSUE_PAGE = 'https://github.com/alibaba/lightproxy/issues/new';
export const DOCUMENT_URL = 'https://alibaba.github.io/lightproxy/quick-start.html';

// @ts-ignore
export const IS_BUILD_FOR_PR = __BUILD_FOR_TRAVIS_PR__ ? true : false;
// @ts-ignore
export const BUILD_FOR_TRAVIS_COMMIT = __BUILD_FOR_TRAVIS_COMMIT__;

// @ts-ignore
export const APP_VERSION = __PACKAGE_INFO_VERSION__;
