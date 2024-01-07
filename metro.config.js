// Learn more https://docs.expo.io/guides/customizing-metro
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { getDefaultConfig } = require("expo/metro-config")

/** @type {import('expo/metro-config').MetroConfig} */
const defaultConfig = getDefaultConfig(__dirname)

/**
 * This is required for storybook to work with expo
 */
defaultConfig.resolver.resolverMainFields.unshift("sbmodern")

module.exports = defaultConfig
