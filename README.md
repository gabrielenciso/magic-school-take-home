# Magic School Take Home

## Create a function to clean data to be usable by the Magic School Platform

### Document Steps and Reasoning Here:

First I laid out the requirements that was needed for the function in the cleanData function.
I knew I had to filter out any users that did not have a @school domain then assign the valid
domain users a role or keep it.

I wanted to validate my work so I used AI to give me some sample data where this function
could be usefull for

I wrote out an initial function with filter and map methods but saw that I could probably shorten
and make it more optimized using reduce since it will be handling ~200 entries at one point
