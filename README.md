# simple-GA4-cookie-consent-banner
See an example at my website https://www.my-inhaler.com.
This is for whom needs to transition from universal analytics (which is supposed to stop working by july 2023) to google analytics 4, and to use also google adsense (so we have an example of an analytics cookie and a marketing cookie, and you can add how many you need).

Forked from https://github.com/orestbida/cookieconsent, thank you for this wonderful tool. Just changed text-align:left into text-align:justify in the preferences window because my intro text is a bit bigger, nothing else.

So let's see how I managed to have it working without google tag manager (Yes, this banner is that cool!!!).

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
- with the trigger - Consent Initialization - All pages

THIRD - VARIABLE
- Click Variables in the left navigation.
- Create variable of type "first-party cookie" with the name "cookie - hasConsent" for the variable and "hasConsent" for the name of the cookie.
(main variable for identifying and keeping track of cookie settings)


- Click the Consent Overview icon.

 
 JS code references for gtag management:
 https://developers.google.com/tag-platform/devguides/consent
 
 
