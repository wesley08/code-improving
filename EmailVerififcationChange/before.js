//NOTE: 6 countries and multiple two because had emailChange and emailVerification, the code below just for example. BEFORE REFACTORING
const VERIFY_EMAIL_URL = constanta.VERIFY_EMAIL_URL;
const email_image = "urlEmailImage";
const email_image_content = "urlEmailImageContent";

const ID_header = "urlEmailImageHeader-ID";
const ID_imageContent = "urlEmailImageContentVerification-ID";
const SG_header = "urlEmailImageHeader-SG";
const SG_imageContent = "urlEmailImageContentVerification-SG";

const templateVerification = (
  EMAIL_IMAGE_HEADER = email_image,
  EMAIL_IMAGE_CONTENT = email_image_content
) => `${EMAIL_IMAGE_HEADER}${VERIFY_EMAIL_URL}${EMAIL_IMAGE_CONTENT}`;

async function emailVerification(appRegisteredCountry) {
  switch (appRegisteredCountry) {
    case ID:
      return templateVerification(ID_header, ID_imageContent);
    case SG:
      return templateVerification(SG_header, SG_imageContent);
    default:
      template();
  }
} // same for email change
