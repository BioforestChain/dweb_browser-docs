---
title: BFSMetaData
category:
  - Interface
tag:
  - BFSMetaData
---

App metadata interface;
This is an internal interface, cannot be accessed directly;
Only the Promise returned by [UpdateController.download()](../../plugin/update-controller/download.md) resolves to this interface;

 
## Properties

  Here are the updates to mark required fields in [manifest.json](../../../app/index.md):

  - id ❗️

    Identifier; 
    
    The property value is a string; format is `${name}.${host}.dweb`;
    
    For example: "game.dweb.waterbang.top.dweb"
    
    Each app has a unique id, and each domain can mount multiple apps.

  - server

    The app's entry service file address;
    The property value is a [MainServer](../main-server/index.md) object; 

  - name ❗️

    The app name
    The property value is a string;


  - short_name ❗️

    The app subtitle
    The property value is a string;
    Will be displayed on the browser homepage

  - icon ❗️

    The app icon
    The property value is a string;
    App icon, vector graphics are recommended, here the multiple icon sizes in PWA manifests are simplified;


  - downloadUrl

    The app download address
    The property value is a string;


  - images ❗️

    List of app screenshots;
    The property value is an Array, index values are strings;

  - description ❗️

    The app description
    The property value is a string;
    Will be displayed on the download page and details page for users;

  - author ❗️

    The app author;
    Developers, passed as an array, the first developer is the app copyright owner.

  - version ❗️

    The app version;
    The property value is a string;

  - categories

    [APP Categories](https://github.com/w3c/manifest/wiki/Categories).
    The property value is an array, index values are strings;

  - home ❗️

    App main domain, must be the same as the domain mounted by id

  - size

    The app size
    The property value is a string;

  - fileHash

    The file Hash value
    The property value is a string;

  - permissions

    The app license type;
    The property value is an Array, index values are strings;

  - plugins

    List of plugins used by the app;
    The property value is an Array, index values are strings;

  - release_date

    Last update time;
    The property is just a string;

  - bundle_signature

    Signature generated when packing the app;
    The property value type is a string;

  - public_key_url

    Used to verify the identity of the app owner;
    The property value is a string;

  - new_feature ❗️

    New features for each version, can be updated along with the version number on each update


## Methods

  - None

## Events

  - None 

## Platform Compatibility

| Properties/Methods/Events | Android | iOS | Desktop-Dev | Desktop |  
|:-----------------------:|:-------:|:---:|:----------:|:-------:|
| id                      | ✅       | ✅   | ✅          | X       |
| server                  | ✅       | ✅   | ✅          | X       |
| name                    | ✅       | ✅   | ✅          | X       |
| short_name              | ✅       | ✅   | ✅          | X       |
| icon                    | ✅       | ✅   | ✅          | X       |
| downloadUrl             | ✅       | ✅   | ✅          | X       |
| images                  | ✅       | ✅   | ✅          | X       |
| description             | ✅       | ✅   | ✅          | X       |
| author                  | ✅       | ✅   | ✅          | X       |  
| version                 | ✅       | ✅   | ✅          | X       |
| categories              | ✅       | ✅   | ✅          | X       |
| home                    | ✅       | ✅   | ✅          | X       |
| size                    | ✅       | ✅   | ✅          | X       |
| fileHash                | ✅       | ✅   | ✅          | X       |
| permissions             | ✅       | ✅   | ✅          | X       |
| plugins                 | ✅       | ✅   | ✅          | X       |
| release_date            | ✅       | ✅   | ✅          | X       |

## Related Links

[UpdateControllerPlugin](../../plugin/update-controller/index.md)