'''
from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def home():
   return render_template('index.html')
if __name__ == '__main__':
   app.run()
'''
   
from openpyxl import load_workbook
import os

#state
state_abbrev = {
    'AK': 'Alaska',
    'AL': 'Alabama',
    'AR': 'Arkansas',
    'AZ': 'Arizona',
    'CA': 'California',
    'CO': 'Colorado',
    'CT': 'Connecticut',
    'DC': 'District of Columbia',
    'DE': 'Delaware',
    'FL': 'Florida',
    'GA': 'Georgia',
    'HI': 'Hawaii',
    'IA': 'Iowa',
    'ID': 'Idaho',
    'IL': 'Illinois',
    'IN': 'Indiana',
    'KS': 'Kansas',
    'KY': 'Kentucky',
    'LA': 'Louisiana',
    'MA': 'Massachusetts',
    'MD': 'Maryland',
    'ME': 'Maine',
    'MI': 'Michigan',
    'MN': 'Minnesota',
    'MO': 'Missouri',
    'MS': 'Mississippi',
    'MT': 'Montana',
    'NC': 'North Carolina',
    'ND': 'North Dakota',
    'NE': 'Nebraska',
    'NH': 'New Hampshire',
    'NJ': 'New Jersey',
    'NM': 'New Mexico',
    'NV': 'Nevada',
    'NY': 'New York',
    'OH': 'Ohio',
    'OK': 'Oklahoma',
    'OR': 'Oregon',
    'PA': 'Pennsylvania',
    'RI': 'Rhode Island',
    'SC': 'South Carolina',
    'SD': 'South Dakota',
    'TN': 'Tennessee',
    'TX': 'Texas',
    'UT': 'Utah',
    'VA': 'Virginia',
    'VT': 'Vermont',
    'WA': 'Washington',
    'WI': 'Wisconsin',
    'WV': 'West Virginia',
    'WY': 'Wyoming'
}
state_unabbrev = {
    "Alabama": "AL",
    "Alaska": "AK",
    "Arizona": "AZ",
    "Arkansas": "AR",
    "California": "CA",
    "Colorado": "CO",
    "Connecticut": "CT",
    "Delaware": "DE",
    "Florida": "FL",
    "Georgia": "GA",
    "Hawaii": "HI",
    "Idaho": "ID",
    "Illinois": "IL",
    "Indiana": "IN",
    "Iowa": "IA",
    "Kansas": "KS",
    "Kentucky": "KY",
    "Louisiana": "LA",
    "Maine": "ME",
    "Maryland": "MD",
    "Massachusetts": "MA",
    "Michigan": "MI",
    "Minnesota": "MN",
    "Mississippi": "MS",
    "Missouri": "MO",
    "Montana": "MT",
    "Nebraska": "NE",
    "Nevada": "NV",
    "New Hampshire": "NH",
    "New Jersey": "NJ",
    "New Mexico": "NM",
    "New York": "NY",
    "North Carolina": "NC",
    "North Dakota": "ND",
    "Ohio": "OH",
    "Oklahoma": "OK",
    "Oregon": "OR",
    "Pennsylvania": "PA",
    "Rhode Island": "RI",
    "South Carolina": "SC",
    "South Dakota": "SD",
    "Tennessee": "TN",
    "Texas": "TX",
    "Utah": "UT",
    "Vermont": "VT",
    "Virginia": "VA",
    "Washington": "WA",
    "Hawaiʻi": "HI",
    "West Virginia": "WV",
    "Wisconsin": "WI",
    "Wyoming": "WY",
    "District of Columbia": "DC"}


#rent prices
median_rent_prices_of_counties_spreadsheet = load_workbook(os.path.abspath("FY2023_FMR_50_county.xlsx")).active #find spreadsheet with county, OH
county_dictionary = {}
for i in range(2, 4766):
   if ("County" in median_rent_prices_of_counties_spreadsheet.cell(row=i, column=4).value):
      if not median_rent_prices_of_counties_spreadsheet.cell(row=i, column=4).value + median_rent_prices_of_counties_spreadsheet.cell(row=i, column=6).value[(median_rent_prices_of_counties_spreadsheet.cell(row=i, column=6).value).find(","):(median_rent_prices_of_counties_spreadsheet.cell(row=i, column=6).value).find(",")+4] in county_dictionary.keys():
         county_dictionary[median_rent_prices_of_counties_spreadsheet.cell(row=i, column=4).value + median_rent_prices_of_counties_spreadsheet.cell(row=i, column=6).value[(median_rent_prices_of_counties_spreadsheet.cell(row=i, column=6).value).find(","):(median_rent_prices_of_counties_spreadsheet.cell(row=i, column=6).value).find(",")+4]] = {}
      county_dictionary[median_rent_prices_of_counties_spreadsheet.cell(row=i, column=4).value + median_rent_prices_of_counties_spreadsheet.cell(row=i, column=6).value[(median_rent_prices_of_counties_spreadsheet.cell(row=i, column=6).value).find(","):(median_rent_prices_of_counties_spreadsheet.cell(row=i, column=6).value).find(",")+4]]["Median Rent Price"] = median_rent_prices_of_counties_spreadsheet.cell(row=i, column = 8).value

#house prices
#median_house_prices_of_counties_spreadsheet = load_workbook(os.path.abspath("server/2022-q3-county-median-prices-and-monthly-mortgage-payment-by-price-12-20-2022.xlsx"))
#for i in range(2, 4000):
   
#crime rate


#population


#education report




#county
counties_in_states = {}
counties_spreadsheet = load_workbook(os.path.abspath("list-counties-us-436j.xlsx")).active
for i in range(2, 3145):
   if "City" not in counties_spreadsheet.cell(row=i, column=2).value:
      if not state_unabbrev[counties_spreadsheet.cell(row=i, column=3).value] in counties_in_states.keys(): 
         counties_in_states[state_unabbrev[counties_spreadsheet.cell(row=i, column=3).value]] = []
      counties_in_states[state_unabbrev[counties_spreadsheet.cell(row=i, column=3).value]].append(counties_spreadsheet.cell(row=i, column=2).value)
print(counties_in_states)

#city
cities_in_states = {}
cities_spreadsheet = load_workbook(os.path.abspath("uscities.xlsx")).active
for i in range(2, 30411):
   if not cities_spreadsheet.cell(row=i, column=3).value in cities_in_states.keys(): 
      cities_in_states[cities_spreadsheet.cell(row=i, column=3).value] = []
   cities_in_states[cities_spreadsheet.cell(row=i, column=3).value].append(cities_spreadsheet.cell(row=i, column=1).value)


#cities in counties
cities_in_counties = {}
for i in range(2, 30411):
   if not cities_spreadsheet.cell(row=i, column=6).value in cities_in_counties.keys(): 
      cities_in_counties[cities_spreadsheet.cell(row=i, column=6).value] = []
   cities_in_counties[cities_spreadsheet.cell(row=i, column=6).value].append(cities_spreadsheet.cell(row=i, column=1).value)