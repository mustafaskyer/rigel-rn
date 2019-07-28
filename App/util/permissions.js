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
  async function request(name, title, message, type) {
    const res = await Permissions.request(name, {
      rationale: { title, message },
      type: type,
    //   type // incase location accept [always or whenInUse] 
    //   type // incase notification accept [alert, badge, sound] 
    });
    return res;
  }
  async function check(name, type) {
    const res = await Permissions.request(name, {
        type,
        //   type // incase location accept [always or whenInUse] 
        //   type // incase notification accept [alert, badge, sound] 
    });
    return res;
  }
  async function checkMultiple(names) {
    const res = await Permissions.checkMultiple(names);
    return res;
  }
  async function openSettings() {
    const res = await Permissions.openSettings;
    return res;
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
