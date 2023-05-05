//AFTER REFACTORING
const url = {
  base: "baseUrl",
  header: () => `${url.base}/header`,
  verification: (code) => `${url.base}/${code}.jpg`,
  changeEmail: (code) => `${url.base}/${code}.jpg`,
};

export const content = (content, country) => {
  return url[content](country ? "-" + country : "");
};

function emailVerification(appRegisteredCountry) {
  return `${content("header", appRegisteredCountry)}${
    constanta.VERIFY_EMAIL_URL
  }${content("verification", appRegisteredCountry)}
`;
}

function emailChange(appRegisteredCountry) {
  return `${content("header", appRegisteredCountry)}
    ${constanta.VERIFY_EMAIL_URL}
    ${content("changeEmail", appRegisteredCountry)}
  `;
}
