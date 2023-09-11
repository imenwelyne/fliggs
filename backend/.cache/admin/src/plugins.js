
import contentTypeBuilder from '../../../node_modules/@strapi/plugin-content-type-builder/strapi-admin.js';
import email from '../../../node_modules/@strapi/plugin-email/strapi-admin.js';
import upload from '../../../node_modules/@strapi/plugin-upload/strapi-admin.js';
import seo from '../../../node_modules/@strapi/plugin-seo/strapi-admin.js';
import colorPicker from '../../../node_modules/@strapi/plugin-color-picker/strapi-admin.js';
import i18N from '../../../node_modules/@strapi/plugin-i18n/strapi-admin.js';
import usersPermissions from '../../../node_modules/@strapi/plugin-users-permissions/strapi-admin.js';
import cookieManager from '../../../node_modules/strapi-plugin-cookie-manager/strapi-admin.js';


const plugins = {
  'content-type-builder': contentTypeBuilder,
  'email': email,
  'upload': upload,
  'seo': seo,
  'color-picker': colorPicker,
  'i18n': i18N,
  'users-permissions': usersPermissions,
  'cookie-manager': cookieManager,
};

export default plugins;
