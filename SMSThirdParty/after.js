class SMSThirdPartyServiceUtil {
  thirdParty = {};

  constructor() {
    const { env } = process;
    Object.values(ENUMCOUNTRY).forEach((countryCode) => {
      this.thirdParty[countryCode] = {
        client: require("thirdPartyServiceUtil")(
          env[`THIRDPARTY_ACCOUNT_SID_${countryCode}`],
          env[`THIRDPARTY_AUTH_TOKEN_${countryCode}`]
        ),
        verifyID: env[`THIRDPARTY_VERIFY_SERVICE_ID_${countryCode}`],
        phoneNumber: env[`THIRDPARTY_PHONE_NUMBER_${countryCode}`],
      };
    });
  }

  getClient(country) {
    return (
      this.thirdParty[country]?.client || this.thirdParty["GLOBAL"]["client"]
    );
  } // same for get service and get phone number
}
