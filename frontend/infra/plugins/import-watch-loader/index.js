const defaultRuleOwner = 'wangfocheng';
const rules = [
  {
    regexp: /@tailwind utilities/,
    message: '引入了多餘的 @tailwind utilities,請刪除',
    owner: defaultRuleOwner,
  },
  {
    regexp: /@ies\/starling_intl/,
    message: '請使用@coze-arch/i18n代替直接引入@ies/starling_intl',
    owner: defaultRuleOwner,
  },
  {
    regexp: /\@coze-arch\/bot-env(?:['"]|(?:\/(?!runtime).*)?$)/,
    message:
      '請勿在web中引入@coze-arch/bot-env。GLOBAL_ENV已注入到頁面中,直接使用變量即可(例: GLOBAL_ENVS.IS_BOE❌ IS_BOE✅)',
  },
];

module.exports = function (code, map) {
  try {
    rules.forEach(rule => {
      if (rule.regexp.test(code)) {
        throw Error(
          `${this.resourcePath}:${rule.message}。如有疑問請找${
            rule.owner || defaultRuleOwner
          }`,
        );
      }
    });
    this.callback(null, code, map);
  } catch (err) {
    this.callback(err, code, map);
    throw Error(err);
  }
};
