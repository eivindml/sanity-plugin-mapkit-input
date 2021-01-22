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
