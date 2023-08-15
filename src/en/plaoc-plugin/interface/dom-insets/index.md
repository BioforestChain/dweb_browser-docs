---
title: DOMInsets
category:
  - Plugin
tag:
---

The DOMInsets interface is used to describe the position information occupied by an element in the screen device;
For example: In Liu Haiping in the figure below, the system status bar occupies part of the top area of the screen; so the value of `StatusPlugin.state.currentState.insets.top` is equal to the height of the system status bar;
Depending on the plugin it will vary

![Alt text](./dom-insets.jpg)

## Property

- DOMInsets.top
  
  value is a number;
  It is used to describe t`he position information occupied by an element at the top of the screen device;
  For example: The system status bar status-bar will occupy part of the top area of the screen device, if the height of the status-bar is 48px; then DOMInsets.top === 48;`


- DOMInsets.right
  
  value is a number;
  It is used to describe the position information occupied by an element on the right side of the screen device;
  The principle is the same as DOMInsets.top except that the positions occupied by elements are different;


- DOMInsets.bottom
  
  value is a number;
  It is used to describe the position information occupied by an element at the bottom of the screen device;
  The principle is the same as DOMInsets.top except that the positions occupied by elements are different;

  

- DOMInsets.left
  
  value is a number;
  It is used to describe the position information occupied by an element on the left side of the screen device;
  The principle is the same as DOMInsets.top except that the positions occupied by elements are different;


## Method
  
  - none

## Event
  
  - none

## Platform Compatibility


| Property/Method/Event  | Android | IOS | Desktop-Dev | Desktop |
|:----------------------:|:-------:|:---:|:-----------:|:-------:|
| top                    | ✅      | ✅  | ✅          | X       |
| right                  | ✅      | ✅  | ✅          | X       |
| bottom                 | ✅      | ✅  | ✅          | X       |
| left                   | ✅      | ✅  | ✅          | X       |

## Related Links

[State]("../state/index.md)

[StateObserver](../state-observer/index.md)
