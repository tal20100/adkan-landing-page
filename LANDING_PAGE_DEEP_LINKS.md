# Landing Page Deep-Link Integration Guide

## What Changed

The landing page (`/join` and `/friend` routes) now detects the user's platform (Android vs iOS/other) and handles deep-link invites differently:

- **iOS**: Unchanged — shows "Open in AdKan" button + App Store link
- **Android**: Attempts to open the app via custom-scheme URL; if app not installed, shows fallback message with Instagram contact info

## URLs & Custom Schemes

The landing page generates two types of URLs:

### Incoming URLs (from app)
```
https://adkan-landing-page-tal.vercel.app/join?group={groupId}
https://adkan-landing-page-tal.vercel.app/friend?user={userId}
```
These are the links your app generates and sends to users. They work on both iOS (via Universal Links) and Android (now via the custom-scheme attempt + fallback).

### Custom-Scheme URLs (app must handle)
```
adkan://join?group={groupId}
adkan://friend?user={userId}
```
The landing page **attempts** these URLs on Android users' devices. Your app must register handlers for these custom-scheme URLs so it can intercept them and process the invite.

**Important**: Query param values are **URL-encoded** (via `encodeURIComponent`), so your app must decode them when reading `group` or `user` from the URL.

## What Your App Code Needs to Do

### Android

1. **Register intent filter** for the custom scheme in `AndroidManifest.xml`:
   ```xml
   <intent-filter>
     <action android:name="android.intent.action.VIEW" />
     <category android:name="android.intent.category.DEFAULT" />
     <category android:name="android.intent.category.BROWSABLE" />
     <data android:scheme="adkan" android:host="join" />
     <data android:scheme="adkan" android:host="friend" />
   </intent-filter>
   ```

2. **Parse and handle the incoming intent** in your launch Activity:
   ```java
   Intent intent = getIntent();
   Uri data = intent.getData();
   if (data != null && data.getScheme().equals("adkan")) {
     String path = data.getPath(); // "/join" or "/friend"
     String groupId = data.getQueryParameter("group"); // decode if needed
     String userId = data.getQueryParameter("user");   // decode if needed
     // Navigate to appropriate invite flow
   }
   ```

3. **Deep-link processing**: Route the user to the correct screen based on the path:
   - `adkan://join?group=ABC` → Show "join group ABC" screen
   - `adkan://friend?user=XYZ` → Show "add friend XYZ" screen

### iOS

1. **No code changes needed** — your existing Universal Links setup handles `https://adkan-landing-page-tal.vercel.app/join*` and `/friend*` automatically (via `apple-app-site-association`).

2. **Verify** that your app's Associated Domains entitlement includes `applinks:adkan-landing-page-tal.vercel.app`.

## End-to-End Flow

### Android tester with app installed:
1. Receives invite link: `https://adkan-landing-page-tal.vercel.app/friend?user=123`
2. Opens link in browser/chat
3. Landing page detects Android, attempts `adkan://friend?user=123`
4. Android OS intercepts this → routes to your app
5. Your app's intent handler receives the `adkan://` URL
6. App parses `user=123`, navigates to "add friend" flow
7. ✅ Invite works

### Android tester without app:
1. Same steps 1–3
2. Custom-scheme attempt fails (app not installed)
3. Landing page shows fallback after 1.5s: "Contact us on Instagram (@adkanapp) to get the APK"
4. User contacts for APK
5. ✅ Clear path to install

### iPhone user:
1. Receives invite link: `https://adkan-landing-page-tal.vercel.app/join?group=ABC`
2. Opens link in browser/Messages/etc
3. iOS Universal Links intercept → app opens directly (if installed)
4. Your app's URL scheme handler processes `group=ABC`
5. If not installed, Safari shows the web page with App Store link
6. ✅ Same behavior as before

## Testing Checklist

- [ ] **Android**: Have sideloaded APK installed, test invite link with `adkan://` custom scheme
  - Tap invite link → app should open with correct invite payload
  - Verify `group` / `user` query params are correctly decoded
  
- [ ] **Android without app**: Clear the app, open invite link
  - After 1.5s, should see Instagram fallback message
  - App Store link still visible below
  
- [ ] **iOS**: Test with app installed
  - Invite link should open app directly (Universal Links)
  - If not installed, Safari shows landing page + App Store button
  
- [ ] **Query param encoding**: Test with special characters (spaces, `&`, `#`, etc.)
  - Example: `group=test%20space` should decode to `group=test space` in your app

## Future Work (Not Implemented Yet)

1. **Android Digital Asset Links** (`/.well-known/assetlinks.json`)
   - Once your release signing key is finalized, we'll add this file so Android can verify the domain (like iOS's Universal Links)
   - This will make the custom-scheme fallback unnecessary (OS will open app directly)
   
2. **Google Play listing**
   - Once the app is published, the landing page's fallback message can redirect Android users to Play Store instead of asking them to contact on Instagram

## Questions?

If the app-side intent handling isn't working, check:
- Is the intent filter registered correctly in `AndroidManifest.xml`?
- Is the custom scheme `adkan://` without any typos?
- Is your Activity actually processing `getIntent().getData()` for incoming URIs?
- Are you URL-decoding the query parameters before using them?
