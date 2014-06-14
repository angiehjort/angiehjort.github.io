This is a mock data for Risk of failure interactive prototype.

* MODIFYING DATA * 
One can modify .XLSX and then re-export the data to .tsv
The prototypre reads .tsv

* FORMATTING * 
please keep the column names, as they are hardcoded in the D3.js prototype. 
you can create alias for column names in model.js if you like

ROF history values should have columns of format "rofYYYYMMDD" where  YYYYMMDD is the timestamp of the historical measurement. the prototype allows any number of history points (>0), with any spacing, with any timestamps, with any order.

last (by timestamp) ROF value is considered to be the current (main) measurement and its timestamp — the time of "now" 

* AUTHOR *
Angie/ABB Sweden 
for questions contact me at 
konzeptmeister@gmail.com
