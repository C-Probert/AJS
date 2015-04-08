###Instructions###

**CREATE A WEB PAGE THAT UTILIZES ANGULARJS TO SOLVE THE FOLLOWING:**

The page should have a table that has 7 columns. The cells in columns 1-6 should have a text input field. 
The values that go into the fields should be totaled by column, and by row, and the totals should be 
displayed in the 7th column, and an additional row along the bottom. Begin the table with only 1 row of 
inputs, one row for totals, and you may have a table header row to identify the columns if you wish.

When performing calculations, values found in the first column should be multiplied by 1, values in the 
second should be multiplied by 2, values in the third by 3, etc. For example, if the third column contained 
2 rows, with the values 3 and 5, the total for that column would be 24 (3*3) + (5*3).

All values in the totals row and totals column should be displayed as currency ($).

As soon as a field is edited in the bottom-most row, create a new row below the final row that also 
contains input fields. The totals column and row should reflect any values added to this new row.  
This functionality should repeat for as long as the user continues to edit fields in the bottom-most row.

Focus on good design patterns, and writing clean, well-documented code.
