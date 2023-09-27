---
title: $JmmAppInstallManifest
category: 
  - Interface
tag: 
  - jmm
---

This interface declares all the configuration information of the app.

## Interface

```ts
export interface $JmmAppInstallManifest {

  id: $MMID;

  /** Version information */
  version: string;

  /** dweb deeplinks */
  dweb_deeplinks?: $DWEB_DEEPLINK[];

  /** Categories */
  categories: MICRO_MODULE_CATEGORY[];

  /** Icon for display when installing */
  logo: string;

  /** App name */
  name: string;

  /** App short name, recommended 6 characters or less, will be displayed on home page */
  short_name: string;

  /** Detailed introduction of app */
  description: string;

  /** Screenshots for display when installing */
  images: string[];

  /** Packaged file path */
  bundle_url: string;

  /** Hash of packaged file */
  bundle_hash: string;

  /** Size of packaged file */ 
  bundle_size: number;

  /** Primary language */
  lang: string;

  /** Languages supported by app */
  languages: string[];

  // http://www.lingoes.net/zh/translator/langcode.htm

  /** Format is `hex:{signature}` */
  bundle_signature: string;

  /** 
   * This link must use a website link with the same domain name as the app-id.
   * The request returns a "{algorithm}+{publicKey}" format,
   * such as `rsa-sha256:hex;2...1` 
   */
  public_key_url: string;

  /** Update log, put url directly */
  change_log: string;

  /** Author information displayed during installation */
  author: string[];

  /** Homepage link displayed during installation */
  home: string;

  /** Release date displayed during installation */
  release_date: string;

  /** Main background color */
  background_color: string;

}
```

## Detailed explanation

### dweb_deeplinks

### categories

### bundle_signature 

### public_key_url

### change_log 

### home

