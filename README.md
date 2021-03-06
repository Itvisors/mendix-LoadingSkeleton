## LoadingSkeleton
Show a skeleton while a part of the page is loading, such that this won't result in waiting for the page to open

![skeleton](https://user-images.githubusercontent.com/10990959/155714524-708020f3-d4a4-4d2b-aeb8-e0b30510cde0.gif)

## Features
- Show a 'loading skeleton' while data is being loaded (e.g. when you use a big datasource or data is retrieved from an api).
- Show rectangles or circles.
- Show one or many skeletons.

## Usage
Place the widget on the page and place the content (including the data flow) inside the widget. The widget needs to know when content is rendered. For this e.g. a boolean can be used, which is set to true at the end of the flow. You can configure which shapes to show while data is being loaded. However, sometimes it might be easier to use multiple skeleton widgets to render the skeleton needed, e.g. if you want some more control over the styling of the different shapes. By giving the different widgets the same expression, the data is shown simultaneously.

The widget does not know when it starts showing. Therefore, if the other content on your page also takes some time to load, the skeleton is triggered too late and will not be shown. A small delay (like 100 ms) can be set to make sure the other content is loaded. Another option can be to put the other content also in a skeleton widget.

### Multiple datasources
If you want to load multiple datasources on your page, you have two options:
- Show part of page when ready.
If you want to show one part of the page when that part is ready and still show a skeleton for the other part, you can insert a skeleton widget for every part of the page that loads their own part with their own boolean to indicate when data is loaded.
- Wait till everything is ready.
If you want to wait with showing something till everything is ready, you can use one or multiple skeletons. However you must make sure that you only show the data when everything is loaded. This can e.g. be done by adding a boolean per datasource and add all booleans to the expression. 

## Limitations
- Only react widgets can be rendered within the skeleton.
