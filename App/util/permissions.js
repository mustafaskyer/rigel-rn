import Permissions from "react-native-permissions";
/**
 * Supported permissions types
                    Type                            IOS     Android
    Camera	        camera  	                    ✔️	    ✔
    Contacts	    contacts	                    ✔️	    ✔
    Events	        event	                        ✔️	    ✔
    Location	    location	                    ✔️	    ✔
    Microphone	    microphone	                    ✔️	    ✔
    Photos	        photo	                        ✔️	    ✔
    Background      Refresh	backgroundRefresh	    ✔️	    ❌
    Bluetooth	    bluetooth	                    ✔️	    ❌
    Media           Library	mediaLibrary	        ✔️	    ❌
    Motion          Activity	motion	            ✔️	    ❌
    Push            Notifications,notification	    ✔️	    ❌
    Reminders	    reminder	                    ✔️	    ❌
    Speech          Recognition	speechRecognition	✔️	    ❌
    Coarse          location	coarseLocation	    ❌	    ✔
    Phone           Call	callPhone	            ❌️	    ✔
    Read            SMS	readSms	                    ❌️	    ✔
    Receive         SMS	receiveSms	                ❌️	    ✔
    Send            SMS	sendSms	                    ❌️	    ✔
    Storage	        storage	                        ❌️	    ✔
 */
const permissionsModule = (function() {
  async function request(type) {
    const res = await Permissions.request(type);
    return res
  }
  async function check(type) {
    const res = await Permissions.request(type);
    return res;
  }
  async function checkMultiple(types) {
    const res = await Permissions.checkMultiple(types);
    return res;
  }
  async function openSettings() {
    const res = await Permissions.openSettings;
    return res
  }
  async function getTypes() {
    const res = await Permissions.getTypes();
    return res;
  }
  async function canOpenSettings() {
    const res = await Permissions.canOpenSettings();
    return res;
  }

  return {
    request,
    check,
    checkMultiple,
    openSettings,
    getTypes,
    canOpenSettings
  };
})();

module.exports = permissionsModule;
