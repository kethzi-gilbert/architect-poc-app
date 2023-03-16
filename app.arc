@app
architect-poc-app

@http
get /markets
get /stories
get /data
@aws
runtime typescript
# profile default
region eu-west-1
architecture arm64

@plugins
architect/plugin-typescript

