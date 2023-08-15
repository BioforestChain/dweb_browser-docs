---
title: ImageOptions
category:
  - Interface
tag:
  - ImageOptions
---

The option object of the picture, as the parameter interface object of the CameraPlugin.getPhoto() method;
 

## Property

  - quality

    Is an optional attribute; when the returned image is of JPEG type, it defines the quality of the returned image;
    The type of attribute value is an integer; the range is `0 ~ 100`;

  - allowEditing

    Is an optional attribute; whether to allow users to edit the picture, the attribute value is a boolean; it can only be used for specific platforms;
    Only CameraSource.Camera is supported on `IOS 14+`;

  - resultType

    is an optional attribute; set the returned data type attribute; the attribute value is a string;
    Valid values include `["uri", "base64", "dataUrl"]`

  - saveToGallery

    Is an optional attribute; whether to save the photo to the album; the attribute value is a boolean; the default value is false;
    If the picture is selected from the album, only the edited picture can be saved;

  - width

    It is an optional attribute; set the maximum width of the image when saving; the attribute value is a number; if the width of the image exceeds the set value, the image will be reduced and saved in the same proportion;

  - height

    It is an optional attribute; set the maximum height and size of the image when saving; the attribute value is a number; the height and size of the stock image exceeds the set value; it will be reduced and saved in the same proportion;


  - correctOrientation

    is an optional attribute; the attribute value is a boolean;
    When the device is in portrait mode, whether to correct the orientation of the picture by automatically rotating the picture;
    The default value is true;


  - source

    Is an optional attribute, set the source of the selected image;
    Legal values include:
  
    "PROMPT" === Let the user choose

    "CAMERA" === get picture from camera

    "PHOTOS" === select from photo album

    The default value is "PROMPT"

  - direction

    Is an optional attribute; if the source of the picture is a camera, define which camera to use;
    Only IOS and WEB support;
    Legal values include:

    "user" === front camera

    "environment" === rear camera

    The default value is "environment"

  - presentationStyle

    Is an optional attribute; if the source of the picture is a camera, it defines the style of the picture presentation;
    Only supported by IOS;
    Legal values include:

    "fullscreen" === full screen

    "popover" === in the form of a popup window

    The default value is "fullscreen"


  - webUseInput

    optional attributes;
    The attribute value is boolean;
    Only supports the web side
    Whether to use the PWA element or the Input element
    By default, if the program is already installed, the PWA element is used;
    Otherwise, the Input element will be used;

  - promptLabelHeader

    optional attributes;
    The attribute value is a string;
    Header tooltip text when PROMPT is shown
    The default value is: "Photo";

  - promptLabelCancel

    optional attributes;
    The attribute value is a string;
    The prompt text of the Cancel button when PROMPT is displayed;
    Only supported by IOS;
    The default value is: "Cancel"

  - promptLabelPhoto

    optional attributes;
    attribute value is a string
    When PROMPT is displayed, the text displayed on the button that selects the image source as the album;
    The default value is: "From Photos";


  - promptLabelPicture

    optional attributes;
    attribute value is a string
    When PROMPT is displayed, select the text displayed on the button of the camera as the source of the picture;
    The default value is: "Take Picture"
    
 
## Method

  - none

## Event

  - none

## Example
```js
import { cameraPlugin } from "@plaoc/plugin";
cameraPlugin.getPhoto({})
.then(res => {})
```

## Platform Compatibility

| Property/Method/Event        | Android | IOS | Desktop-Dev | Desktop |
|:----------------------------:|:-------:|:---:|:-----------:|:-------:|
| quality                      | ✅      | ✅   | ✅          | X       |
| allowEditing                 | X       | ✅   | X          | X       |
| resultType                   | ✅       | ✅  | ✅          | X       |
| saveToGallery                | ✅       | ✅  | ✅          | X       |
| width                        | ✅       | ✅  | ✅          | X       |
| height                       | ✅       | ✅  | ✅          | X       |
| correctOrientation           | ✅       | ✅  | ✅          | X       |
| direction                    | X        | ✅  | ✅          | X       |
| presentationStyle            | ✅       | ✅  | ✅          | X       |
| webUseInput                  | ✅       | ✅  | ✅          | X       |
| promptLabelHeader            | ✅       | ✅  | ✅          | X       |
| promptLabelCancel            |          | ✅  | X          | X       |
| promptLabelPhoto             | ✅       | ✅  | ✅          | X       |
| promptLabelPicture           | ✅       | ✅  | ✅          | X       |
           
## Related Links
[cameraPlugin](../../plugin/camera/index.md)


