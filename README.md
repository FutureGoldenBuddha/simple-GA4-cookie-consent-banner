# simple-GA4-cookie-consent-banner
See an example at my website https://www.my-inhaler.com.
This is for whom needs to transition from universal analytics (which is supposed to stop working by july 2023) to google analytics 4, and to use also google adsense (so we have an example of an analytics cookie and a marketing cookie, and you can add how many you need).

Forked from https://github.com/orestbida/cookieconsent, the credit goes all for Orest Bida and his contributors, thank you all for this wonderful tool. Just changed text-align:left into text-align:justify in the preferences window because my intro text is a bit bigger, nothing else.

So let's see how I managed to have it working without google tag manager (Yes, this banner is that cool!!!).

First things first: include Adsense and Analytics tags in the head section of your website index file (and other landing pages too). IMPORTANT
NOTE: don't forget to include the respective cookiecategory in the script tags in order for the banner to keep track on the cookie settings after each update from the user.
```
<head>
	<!-- adsense -->
	<script type="text/plain" data-cookiecategory="targeting" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-YOUR-CODE"  crossorigin="anonymous"></script>
	<!-- Google tag (gtag.js) -->
	<script type="text/plain" data-cookiecategory="analytics" async src="https://www.googletagmanager.com/gtag/js?id=G-YOUR_ID"></script>
	<script type="text/plain" data-cookiecategory="analytics">
	  window.dataLayer = window.dataLayer || [];
	  function gtag(){dataLayer.push(arguments);}
	  gtag('js', new Date());
	  gtag('config', 'G-YOUR-ID');
	</script>
...
</head>
```
 
Next let's setup the cookie banner copying the source files (cookieconsent.css + cookieconsent.js) and also the init file to a folder of your preference and create the appropriate links to them in your site index file's head section:
```
<head>
	...
	<link rel="stylesheet" href="path-to/cookies-banner/cookieconsent.css" media="print" onload="this.media='all'">
</head>
```
and right at the end of the body tag
```
<body>
	...

	<script defer src="path-to/cookies-banner/cookieconsent.js"></script>
	<script defer src="path-to/cookies-banner/cookieconsent-init.js"></script>
</body>
```
Now go ahead and explore the cookies that your site shows and change the init file accordingly. Don't forget to change the domain name to the domain of your site, and you can see an example of a cookie policy and privacy policy at my website https://www.my-inhaler.com.
