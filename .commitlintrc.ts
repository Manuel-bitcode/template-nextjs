
import { RuleConfigSeverity, type UserConfig } from "@commitlint/types";

const TYPES = ['feat', 'fix', 'docs', 'style', 'refactor', 'test', 'ci'];
const LAYER_SCOPES = ['domain', 'mock', 'service', 'useCase', 'view', 'messages', 'utils'];
const GENERIC_SCOPES = ['app', 'package'];

const config: UserConfig = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [RuleConfigSeverity.Error, 'always', TYPES],
    'scope-empty': [RuleConfigSeverity.Error, 'never'],
    'scope-enum': [
      RuleConfigSeverity.Error,
      'always',
      [...LAYER_SCOPES, ...GENERIC_SCOPES]
    ]
  }
};

export default config;
