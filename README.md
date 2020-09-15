# Day-Planner

<img src="./Assets/New plan" alt="New plan day planner">
<img src="./Assets/Saved plan" alt="Saved plan day planner">

1. When user enters page, they are met with a table of blank time slots. There is the date and time at the top, in the description, that counts down in real time.

2. When user enters his/her day plan into the hourly text box, it displays as one would expect. If not saved to localStorage by hitting the "Save" button to the right, the text willl disappear when the page is reloaded.

3. As the day progresses, the "current hour" shows that it is updating by displaying in red.

4. If the user wants to save a plan for a certain hour, hitting "save" will save the user's input into localStorage. This allows the user to exit the page, reload, etc and not lose their current day plans.

5. Goes by moment.js current time, so the day's hours will properly reset for the following day for further plans.


