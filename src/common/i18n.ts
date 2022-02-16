// import i18n from "i18next";
// import { initReactI18next } from "react-i18next";
// import resources from "../../../config/translations.json";
// import * as Localization from "expo-localization";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { Alert } from "react-native";

// // language detector from device language
// const languageDetector = {
//   type: "languageDetector",
//   async: true,
//   detect: (callback) => {
//     AsyncStorage.getItem("AppLang")
//       .then((lang) => {
//         if (!lang) {
//           AsyncStorage.setItem("AppLang", Localization.locale.split("-")[0]);
//           callback(Localization.locale.split("-")[0]);
//           return;
//         }
//         callback(lang);
//         return;
//       })
//       .catch((e) => {
//         callback(Localization.locale.split("-")[0]);
//         Alert.alert("Error");
//       });
//   },
//   init: () => {},
//   cacheUserLanguage: () => {},
// };

// i18n
//   .use(initReactI18next)
//   .use(languageDetector)
//   .init({
//     resources: {
//       in: {
//         translation: resources.en,
//       },
//       en: {
//         translation: resources.ar,
//       },
//     },
//     fallbackLng: "en",
//     interpolation: {
//       escapeValue: false,
//     },
//   });

// export default i18n;
