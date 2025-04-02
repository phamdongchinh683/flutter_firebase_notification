# Push Notification in Flutter using Firebase Messaging

the repository containes the code to push notification to flutter using firebase messaging both in background and foreground.

## ⚠ Update :- 
I missed the part of handling the terminated state message payload in the video. I have fixed that issue and updated the code on github repository.

Just added this lines in main.dart file

```
 // for handling in terminated state
  final RemoteMessage? message =
      await FirebaseMessaging.instance.getInitialMessage();

  if (message != null) {
    print("Launched from terminated state");
    Future.delayed(Duration(seconds: 1), () {
      navigatorKey.currentState!.pushNamed("/message", arguments: message);
    });
  }
```


## 👨‍💻 Topics :-
- Push notification in background
- Push notification in foreground
- Add onTap and open new screen with payload

## 📺 [Video Link](https://youtu.be/3LvTFuQXIV8)
![PUSH NOTIFICATIONS](https://github.com/Snehasis4321/push_notifications_firebase_flutter/assets/96995340/41b513f9-b2a7-48c2-8b6c-8d1d739cef67)
[To watch full tutorial click here.](https://youtu.be/3LvTFuQXIV8)
# flutter_firebase_notification
