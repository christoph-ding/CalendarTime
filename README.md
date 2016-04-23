## Description
Given a set of events defined in json format (in the provided events.json file), render the events on a single day calendar (similar to Outlook, Calendar.app, and Google Calendar). There are several properties of the layout:

1. No events may visually overlap.
- If two events overlap in time, they must have the same width.
- An event should utilize the maximum width available, but constraint 2) takes precedence over this constraint.
- Extra events, besides the events provided, should be able to be added without any issue.

Please use HTML5. No images are allowed; All visual elements must be created with css. Other than that, you may structure your code however you like.

Figure it out as best you can. No questions are allowed.

A screenshot of the expected output is included.


## FAQ
- **Are frameworks/libraries such as jQuery, React, mustache.js, etc. allowed?**  Yes, but please include the file with your source code.
- **Which browsers need to be supported?** Your solution should work on all modern standards-compliant browsers, within the constraints of same origin policy.
- **Does my solution need to match the image pixel for pixel?** No, we will not be testing for pixel matching, but it should look the same to the naked eye.
