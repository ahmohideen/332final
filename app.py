from flask import Flask, render_template, request, redirect, jsonify
import json
import pandas as pd
import numpy as np



app = Flask(__name__)


#Reading data
#data_df = pd.read_csv("static/data/Churn_data.csv")
#churn_df = data_df[(data_df['Churn']=="Yes").notnull()] 

performance_ds = pd.read_csv("static/data/doeperformance.csv")
school_ds = pd.read_csv("static/data/doedirectory.csv")

#  extracts only necessary columns off data sets
schoolStat = performance_ds[["college enroll 2011-12", "graduation 2010-11"]]
schoolInfoSub = school_ds[["DBN", "Printed_Name", "Primary_Address_Line_1",\
                            "City", "State_Code", "neighborhood", "Boro"]]


#  merging the two subsets into one, adding new columns for coords and renaming
fullProfiles = pd.concat([schoolInfoSub, schoolStat], axis=1, sort=False)
fullProfiles["Latitude"] = ""
fullProfiles["Longitude"] = ""
fullProfiles["hasStat"] = "True"
fullProfiles.rename(columns = {"college enroll 2011-12": "collegeStat"}, inplace = True)
fullProfiles.rename(columns = {"graduation 2010-11": "gradStat"}, inplace = True)
#pd.set_option('max_rows', 8)

unavailableStats = {"bx": 0, "bk": 0, "manh": 0, "queens": 0, "si": 0}

for idx, row in fullProfiles.iterrows():
    if type(row["collegeStat"]) == float:
        if row["Boro"] == "M":
            unavailableStats["manh"] += 1
        elif row["Boro"] == "X":
            unavailableStats["bx"] += 1
        elif row["Boro"] == "K":
            unavailableStats["bk"] += 1
        elif row["Boro"] == "Q":
            unavailableStats["queens"] += 1
        elif row["Boro"] == "R":
            unavailableStats["si"] += 1

        fullProfiles.loc[idx, "hasStat"] = "False"



totalUnvailable = 0

for borough in unavailableStats.values():
    totalUnvailable += borough

#  new data set with schools that had no stat removed (108 removed out of 422, down to 314)
fullProfilesv2 = fullProfiles[fullProfiles.hasStat != "False"]

boroughs = {"Bronx": 0, "Brooklyn": 0, "Manhattan": 0, "Queens": 0, "Staten Island": 0}

for idx, row in fullProfilesv2.iterrows():
	if row["Boro"] == "M":
		boroughs["Manhattan"] += 1
	elif row["Boro"] == "X":
		boroughs["Bronx"] += 1
	elif row["Boro"] == "K":
		boroughs["Brooklyn"] += 1
	elif row["Boro"] == "Q":
		boroughs["Queens"] += 1
	elif row["Boro"] == "R":
		boroughs["Staten Island"] += 1

print(fullProfilesv2['gradStat'], flush=True)

scatterPlot = {}


@app.route("/")
def index():
    return render_template("index.html")


@app.route('/get_piechart_data')
def get_piechart_data():
    return jsonify(boroughs)

@app.route('/get_scatterplot_data')
def get_scatterplot_data():
	#okay so let's get our scatterplot data in order
	#we want school name, collegeStat, and gradStat
	#maybe like --> {schoolName: [collegeStat, gradState]}
	return jsonify(boroughs)#jsonify(fullProfilesv2)#let's do this for now

#visualizations - pie chart, bar chart, scatter plot?? AND geo-map (we need 4!)
#PIE CHART DONE
#NOW WE DO UHH SCATTER PLOT W BRUSH AND LINK
#GEO MAP!!!

#okay so we have the pie chart - maybe when we click on a specific borough the scatter plot updates (it's showing data by borough? maybe populations of schools!)





if __name__ == "__main__":
    app.run(debug=True)



