// Clay Config: see https://github.com/pebble/clay
module.exports = [
  {
    "type": "heading",
    "defaultValue": "Settings"
  },
  {
    "type": "section",
    "items": [
      {
        "type": "heading",
        "defaultValue": "Theme settings"
      },
  /*    {
        "type":"toggle",
        "messageKey":"Rotate",
        "label":"Rotate by 90°?",
        "defaultValue":false,
      },
       {
           "type": "toggle",
           "messageKey": "RightLeft",
          "label": "Rotation direction",
          "description": "On to rotate Right/clockwise, off to rotate Left/anti-clockwise.",
             "defaultValue": true,        
           },
      {
        "type": "color",
        "messageKey": "Back1Color",
        "defaultValue": "0x000000",
        "label": "Background"
      },*/
       {
        "type": "color",
        "messageKey": "FrameColor",
        "defaultValue": "0x000000",
        "label": "Hour Background Colour"
      },
       {
        "type": "color",
        "messageKey": "FrameColor2",
        "defaultValue": "0x000000",
        "label": "Minute Background Colour"
      },
    /*  {
        "type": "color",
        "messageKey": "FrameColor1",
        "defaultValue": "0x000000",
        "label": "Date Background Colour"
      },*/
      {
        "type": "color",
        "messageKey": "SideColor1",
        "defaultValue": "0x000000",
        "label": "Right Background Colour"
      },
       {
        "type": "color",
        "messageKey": "SideColor2",
        "defaultValue": "0x000000",
        "label": "Left Background Colour"
      },
      {
        "type": "color",
        "messageKey": "HourColor",
        "defaultValue": "0x00FFFF",
        "label": "Hour Text Colour"
      },
      {
        "type": "color",
        "messageKey": "MinColor",
        "defaultValue": "0xFFFFAA",
        "label": "Minute Text Colour"
      }, 
      {
        "type": "color",
        "messageKey": "Text1Color",
        "defaultValue": "0xFFFFFF",
        "label": "Weather Colour"
      },
       {
        "type": "color",
        "messageKey": "Text5Color",
        "defaultValue": "0xFFFFFF",
        "label": "Wind Colour"
      }, 
      {
        "type": "color",
        "messageKey": "Text3Color",
        "defaultValue": "0xFFFFFF",
        "label": "Day & Battery Colour"
      }, 
      {
        "type": "color",
        "messageKey": "Text6Color",
        "defaultValue": "0xFFFFFF",
        "label": "Date Colour"
      }, 
       {
        "type": "color",
        "messageKey": "Text2Color",
        "defaultValue": "0xFFFFFF",
        "label": "Sunset & Moon Colour"
      }, 
      /*{
        "type":"color",
        "messageKey":"Text4Color",
        "defaultValue":"0xFFFFFF",
        "label":"Location"
      },*/
      {"type": "section",
       "items": [
         {
           "type": "heading",
           "defaultValue": "Night Theme",
           "size":4
         } ,
         {
           "type": "toggle",
           "messageKey": "NightTheme",
           "label": "Activate Night Theme",
           "defaultValue": false,        
         },
         /*{
           "type": "color",
           "messageKey": "Back1ColorN",
           "defaultValue": "0xFFFFFF",
           "label": "Background"
         },*/
                  {
        "type": "color",
        "messageKey": "FrameColorN",
        "defaultValue": "0xFFFFFF",
        "label": "Hour Background Colour"
      },
       {
        "type": "color",
        "messageKey": "FrameColor2N",
        "defaultValue": "0xFFFFFF",
        "label": "Minute Background Colour"
      },
 /*     {
        "type": "color",
        "messageKey": "FrameColor1N",
        "defaultValue": "0xFFFFFF",
        "label": "Date Background Colour"
      },*/
             {
        "type": "color",
        "messageKey": "SideColor1N",
        "defaultValue": "0xFFFFFF",
        "label": "Right Background Colour"
      },
       {
        "type": "color",
        "messageKey": "SideColor2N",
        "defaultValue": "0xFFFFFF",
        "label": "Left Background Colour"
      },
         {
        "type": "color",
        "messageKey": "HourColorN",
        "defaultValue": "0x000000",
        "label": "Hour Text Colour"
      },
      {
        "type": "color",
        "messageKey": "MinColorN",
        "defaultValue": "0x000000",
        "label": "Minute Text Colour"
      }, 
         {
           "type": "color",
           "messageKey": "Text1ColorN",
           "defaultValue": "0x000000",
           "label": "Weather Colour"
         }, 
       {
           "type": "color",
           "messageKey": "Text5ColorN",
           "defaultValue": "0x000000",
           "label": "Wind Colour"
         }, 
         {
           "type": "color",
           "messageKey": "Text3ColorN",
           "defaultValue": "0x000000",
           "label": "Day & Battery Colour"
         },
         {
        "type": "color",
        "messageKey": "Text6ColorN",
        "defaultValue": "0x000000",
        "label": "Date Colour"
      }, 
          {
        "type": "color",
        "messageKey": "Text2ColorN",
        "defaultValue": "0x000000",
        "label": "Sunset & Moon Colour"
      }, 
         /*{
           "type":"color",
           "messageKey":"Text4ColorN",
           "defaultValue":"0x000000",
           "label":"Location"
         },*/
       ]
         }
       ]
      },
      {
        "type": "section",
        "items": [
          {
            "type": "heading",
            "defaultValue": "Weather settings"
          },     
          {
            "type": "toggle",
            "messageKey": "WeatherUnit",
            "label": "Temperature in Fahrenheit",
            "defaultValue": false,
          },
            {
            "type": "select",
            "messageKey": "WindUnit",
            "label": "Wind speed",
            "defaultValue": "knots",
               "options": [
              {
                "label": "knots",
                "value": "kts"
              },
              {
                "label": "miles per hour",
                "value": "mph"
              },
                 {
                "label": "metres per second",
                "value": "ms"
              },
              {
                "label": "kilometres per hour",
                "value": "kph"
              }
            ]
          },
           {
            "type": "select",
            "messageKey": "WeatherProv",
            "defaultValue": "owm",
            "label": "Weather Provider",
            "options": [
              {
                "label": "OpenWeatherMap",
                "value": "owm"
              },
              {
                "label": "WeatherUnderground",
                "value": "wu"
              },
              {
                "label": "DarkSky",
                "value": "ds"
              }
            ]
          },
         {
            "type": "input",
            "messageKey": "APIKEY_User",
            "defaultValue": "",
            "label": "API Key",
            "description": "If left blank, the watch will attempt to request an api from your pmkey.xyz.  If you don't have an api key, weather data will not be displayed. Note that DarkSky will show Latitude, Longitude (to 2 decimal places) instead of location name. Register for a free personal API key at <a href=https://darksky.net/dev/register/>DarkSky here</a>, or <a href =https://home.openweathermap.org/users/sign_up/>OpenWeatherMap here</a>",
            "attributes": {
              "placeholder": "Paste your API Key here"
            }
          },
         {
            "type": "input",
            "messageKey": "EmailPMKEY",
            "defaultValue": "",
            "label": "pmkey.xyz User",
            "description": "pmkey.xyz is a free service for Pebble users that allows you to safely store all your API keys in a single place. Check <a href=https://www.pmkey.xyz/>pmkey.xyz</a> ",
            "attributes": {
              "placeholder": "eg: jane.smith@pmkey.xyz",
              "type": "email"
            }
          },
          {
            "type": "input",
            "messageKey": "PINPMKEY",
            "defaultValue": "",
            "label": "pmkey.xyz PIN",
            "attributes": {
              "placeholder": "eg: 12345"
            }
          },
          {
            "type": "slider",
            "messageKey": "UpSlider",
            "defaultValue": 30,
            "label": "Update frequency (minutes)",
            "description": "More frequent requests will drain your phone battery faster",
            "min": 15,
            "max": 120,
            "step": 15},
        ]
          },
          {
          "type": "submit",
          "defaultValue":"SAVE"
          },
          {
          "type": "heading",
          "defaultValue": "version v1.2",
          "size":6
          },
          {
          "type": "heading",
          "defaultValue": "Made in UK",
          "size":6
          }
        ];