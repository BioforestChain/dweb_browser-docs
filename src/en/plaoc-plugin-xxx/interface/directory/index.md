---
title: Directory
category:
  - Interface
tag:
  - Directory
---

The interface of the directory object, used for [FileSystemPlugin](../../plugin/file-system/index.md) related content;
The Directory type is a string; legal value ranges are as follows:

 - "DOCUMENTS"

  IOS

    This directory is the application's documentation directory; use this directory to store user-generated content

  Ancroid
  
    This is the Public Documents folder, accessible from other applications;
    Legacy external storage is inaccessible on Android 10 unless the app enables it;
    Add `android:requestLegacyExternalStorage="true"` in `application` in `AndroidManifest.xml` file
    It is not accessible on Android 11 or newer;

  Desktop-dev

    It is the documents folder
  

- "DATA"

  IOS

    will use the documents directory

  android

    is the directory where the application is saved

  Desktop-dev

    It is the data folder

- "LIBRARY"

  IOS

    will use the library directory

  android

    is the directory where the application is saved

  Desktop-dev

    Use the library directory;

- "CACHE"

  Cache; used to write specific file content; can be deleted in the case of memory subsidies;

- "EXTERNAL"

  IOS

    will use the documents directory

  android

    is the shared/external directory;

  Desktop-dev

    It is the external folder


- "EXTERNAL_STORAGE"

  IOS

    will use the documents directory

  android

    is the shared/external directory;
    Legacy external storage is inaccessible on Android 10 unless the app enables it;
    Add `android:requestLegacyExternalStorage="true"` in `application` in `AndroidManifest.xml` file
    It is not accessible on Android 11 or newer;

  Desktop-dev

    will use the external_storage directory



## Platform Compatibility

| Property/Method/Event  | Android | IOS | Desktop-Dev | Desktop |
|:----------------------:|:-------:|:---:|:-----------:|:-------:|
| Directory              | ✅      | ✅  | ✅          | X       |

## Related Links

[FileSystemPlugin](../../plugin/file-system/index.md)



