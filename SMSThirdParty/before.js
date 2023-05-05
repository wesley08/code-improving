class SMSThirdPartyServiceUtil {
  // example purpose only
  client = "";
  clientHK = "";
  constructor() {
    const accountSid = process.env.THIRDPARTY_ACCOUNT_SID;
    const authToken = process.env.THIRDPARTY_AUTH_TOKEN;
    this.client = require("thirdParty")(accountSid, authToken); // doing all these for all country
  }

  getClient(country) {
    switch (country) {
      case "GLOBAL":
        return this.client;
      case "HONGKONG":
        return this.clientHK;
      default:
        return this.client;
    }
  } // same to get phonenumber and get service
}
