# Open/close toggle for facebook feed plugin 

Facebook allows users to embed their facebook page feed right in your website by adding
a script that calls the facebook api and retrieves your page info. 

This plugin is simple and is meant to be somewhere staticaly placed. I needed the feed to appear at the bottom 
left corner of the website and also have the option to hide/re-open it when clicking a button. That need became this directory.


# How it currenly looks

<div style='display: flex; width:100%; text-align:center; justify-content: space-between ;'>
  <div style='width:35%;'>
    <img height='250em' src='https://drive.google.com/uc?export=view&id=1RzpCDezA8DvY5LfgPTGaNcbZr_Ens0QU'/>
    <p> facebook feed open @bottom-left </p>
  </div>
  <div style='width: 35%;'>
    <img height='250em' src='https://drive.google.com/uc?export=view&id=15vYEms5mL4svbOSU2eUzJ16vIP2fWFGz'/>
    <p> facebook feed closed-hover @left</p>
  </div>
</div>


# Files in directory

The files in this directory are fb-feed-styles.css, fb-feed-toggle.html, & fb-feed-header-scipt.html.

## fb-feed-header-scipt.html

This file contains the script that calls the facebook api.

## fb-feed-toggle.html

This file contains the html snippet you can plug wherever you want in your website. 

## fb-feed-styles.css

This file contains the stylesheet for the facebook feed and toggle button.

## fb-feed-script.js

This file contains the javascript snippet that handles the open/close effect of the fb feed.


# How to plug snippet

1. Add fb-feed-header-scipt.html to the MAIN header of your website ;

2. Add the snippet in fb-feed-toggle.html to your project ;

3. Add a couple of script tags under the toggle snippet add paste the snippet in fb-feed-script.js between them ;

Hopefully you have a working open/close mechanism for your feed. 


# References

Visit the [official facebook feed plugin page](https://developers.facebook.com/docs/plugins/page-plugin/) for more.
