Pestagram - it's Pinterest for Instagram
========================================

###What are you building: 
The thing people find most disconcerting is when information given in one context shows up in another. The recent Girls Around Me controversy illustrates this well. Rather than creating an abstract data visualization, I am taking information from one site - the intimate, emotional, mobile Instagram and presenting with the context of Pinterest - the public, aspirational, image packrat site.

###Who is it for: 
I built this as part of the Wall Street Journal Data Transparency weekend. http://datatransparency.wsj.com/
My target audience is the general public who use both Pinterest and Instagram in their separate contexts. Given that thye are the two fastest growing websites, this shoudl eb a alrge enough group.

###Your goal for this weekend: 
http://pestagram.com lets you explore tags, popular photos and locations through the Instagram API

###Your starting point:
 I'm starting from scratch - this is my first Heroku and node.js project, but I have written a bit of Javascript before.

###Anything else we should know: 
Instagram's 'find photos by location' APIs seem to have mysteriously stopped working recently (possiby after Girls Around Me, possibly after FB bought them.

###Sustainability model:
I need to add OAuth login for personalization, but the node instagram library 
needs work. I  can fund light use myself on Heroku, and I do know the owners... 

###Licence:
Apache Licence (included projects my have other licences). ToS of Instagram may be used against me. I copied chunks of the CSS from Pinterest without asking.


I've modified nodestagram a bit for this. It needs more tidying up...

TODO: Add OAuth support so you cna see your own and friends photos in this view. 
