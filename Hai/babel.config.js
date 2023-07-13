module.exports = function (api) {
    api.cache(true);
    return {
        presets: ['metro-react-native-babel-preset'],
        presets: ["babel-preset-expo"],
        plugins: ["nativewind/babel"],
        plugins: ["react-native-reanimated/plugin"],
        
    };
};

