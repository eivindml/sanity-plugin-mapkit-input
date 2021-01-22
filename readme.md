# Mapkit Input for Sanity

Alternative geoinput plugin for Sanity, powered by Apple MapKit JS. Has better privacy than the alternatives. It's good enough that DuckDuckGo switched from OpenStreetMap/Bing/Google to only use Apple Maps.

![Screenshot](/.github/screenshot.png?raw=true "Screenshot")

## Usage

Add `mapkit-input.json` to your `config/` folder and add the following config:

```json
{
  "token": "MUST-BE-SPECIFIED",
  "color": "#ACF2BF",
  "glyphText": "🥕",
  "defaultCoordinate": {
    "lat": 59.91273,
    "lng": 10.74609
  }
}
```

### Generate Token

It's a bit complicated to generate the token. Please watch this WWDC presentation to see how to generate it: [Getting and Using a MapKit JS Key](https://developer.apple.com/videos/play/wwdc2018/508). Maybe I'll make this easier in the future.
