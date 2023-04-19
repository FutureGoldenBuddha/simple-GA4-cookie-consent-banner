# simple-GA4-cookie-consent-banner
This is for whom needs to transition from universal analytics (which is supposed to stop workin by july 2023) to google analytics 4.

Based on https://github.com/Alex-D/Cookies-EU-banner and https://github.com/do-your-own-seo/gtag-cookie-consent, with some cool CSS.

We will need gtag-init.js file available above, with the proper GA4 tag (G-YOUR_ID).

Also place the following code in the head file, also with the proper GA4 tag (G-YOUR_ID).
```
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-YOUR_ID"></script>
  <script async src=".../path/to/gtag-init.js"></script>
 ```
 
Next lets setup the consent initialization trigger (as specified in https://support.google.com/tagmanager/answer/10718549?sjid=18022728896868407510-EU):
 - Go to https://tagmanager.google.com

FIRST - ACCOUNT
 - first you have to create an account within google tag manager (:-/)... follow the steps on including the code snippets on your site... ok
 - go to admin tab, click Container Settings, and leave the Enable Consent Overview checkbox selected.

SECOND - TAG
- create a new tag of custom HTML that has the configuration for the banner plus the code reference for the css and the js:
- like this {...}

THIRD - VARIABLE
- Click Variables in the left navigation.
- Create variable of type "first-party cookie" with the name "cookie - hasConsent" for the variable and "hasConsent" for the name of the cookie.
(main variable for identifying and keeping track of cookie settings)


- Click the Consent Overview icon.

 
 JS code references for gtag management:
 https://developers.google.com/tag-platform/devguides/consent
 
 
