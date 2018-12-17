import ReactNative from "react-native";
import I18n from "react-native-i18n";

// Import all locales
import tr from "./tr.js";
import ar from "./ar.js";

// Should the app fallback to English if user locale doesn't exists
I18n.fallbacks = true;
// Define the supported translations
I18n.translations = {
  ar,
  tr,
  // other langs
};

// The method we'll use instead of a regular string
export default function lang(name, params = {}) {
  return I18n.t(name, params);
}

// export default I18n;
