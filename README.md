# simple-GA4-cookie-consent-banner
This is for whom needs to transition from universal analytics (which is supposed to stop workin by july 2023) to google analytics 4.

Based on https://github.com/Alex-D/Cookies-EU-banner and https://github.com/do-your-own-seo/gtag-cookie-consent, with some cool CSS.

We will need gtag-init.js file available above, with the proper GA4 tag.

Also place the following code in the head file.
```
  <`script defer src="https://www.googletagmanager.com/gtag/js?id=G-YOUR_ID"></script>
  <script defer src=".../path/to/gtag-init.js"></script>
 ```
 
 
