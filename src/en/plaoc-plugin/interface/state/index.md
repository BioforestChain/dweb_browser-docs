---
title: State
category:
  - Plugin
tag:
---

The State interface is an Object; used to describe the state of the plug-in; different elements, State will have different attributes and values;
The following attributes contain complete attribute descriptions;


## Property
  - State.overlay
    
    Whether the system bar will cover the content of the app; the attribute value is a boolean;

  - State.visible

    Whether the system bar is visible; the attribute value is a boolean

  - State. style

    System bar style, the value is a string; valid values are as follows
      - `"DARK"` will set the foreground color of the system bar to a light color, which is used to adapt to the system bar with a dark background;
      - `"LIGHT"` will set the foreground color of the system bar to a dark color, which is used to match the system bar with a light background;
      - `"DEFAULT"` will automatically set the foreground color of the system bar according to the device;
                  If the device is in dark mode, the foreground color of the system bar will be set to a light color;
                  If the device is in light mode, the foreground color of the system bar will be set to dark;

  - State.color

    The foreground color of the system bar is just a string representation of a hexadecimal color;

  - State. insets

    Information describing where the body is inserted by other elements; is a [DOMInsets](../dom-insets/index.md) object


  - State. cutoutInsets

    The screen settings shown, describing the area where the cutout is inserted are only relevant for the hardware;
    For example, in Liu Haiping, the value of `State.cutoutInsets.top` is the height of Liu Hai;

  - State. outerInsets

    Describe the area information inserted by content other than App in the display content of the screen;
    For example: When the overlay of the system status bar is set to true, the value of `SafeAreaPlugin.state._currentState.outerInsets.top` is equal to the height of the system status bar;

## Method

  - none

## Event

  - none


## Platform Compatibility


| Property/Method/Event  | Android | IOS | Desktop-Dev | Desktop |
|:----------------------:|:-------:|:---:|:-----------:|:-------:|
| overlay                | ✅      | ✅  | ✅          | X       |
| visible                | ✅      | ✅  | ✅          | X       |
| style                  | ✅      | ✅  | ✅          | X       |
| color                  | ✅      | ✅  | ✅          | X       |
| insets                 | ✅      | ✅  | ✅          | X       |
| cutoutInsets           | ✅      | ✅  | ✅          | X       |
| outerInsets            | ✅      | ✅  | ✅          | X       |
 

## Related Links
[StateObserver](../state-observer/index.md)
  
   



