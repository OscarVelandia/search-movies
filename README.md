# Movies search app

## How to run the project
1. Use the 14.15.0 lts version of node  
2. run ```yarn``` to install the npm packages and ```yarn start``` to start the dev server

## Things to improve
1. Add Husky as git hook
2. In case this list of movies increase a lot, can be useful use ```useCallback``` 

## Extra work done
1. I use [this custom fetch wrapper](https://kentcdodds.com/blog/replace-axios-with-a-simple-custom-fetch-wrapper), in this case isn't so necessary since there is only one endpoint to consume, but as the only thing I had to do was type it, I just implemented it. 