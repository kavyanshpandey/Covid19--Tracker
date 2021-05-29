from elasticsearch import Elasticsearch
import requests

import json
from json import loads
from json import dumps

es = Elasticsearch(Host="http://localhost", PORT=9200)
es = Elasticsearch()



req = requests.get("https://api.covid19api.com/summary")

Data = req.json()
es.indices.create(index="ct")

for i,j in Data.items():
    if i == "Countries":
        for k in j:
            if type(k)==dict:
                es.index(index="ct", doc_type="json", body=k)
                
    

#For fetching data from ElasticSearch
#Following function will fetch all data and Give the Total confirmed cases.
#By follow the same mthod, We can get all realtime stats using ElasticSearch.

reqs = requests.get("http://localhost:9200/_search?index=ct&size=200")
Elastic_data = req.json()

User_Value = input()

def TotalConfirmed(User_Value):
    for i, j in Elastic_data.items():
        if i == "hits":
            for key, value in j.items():
                if key =="hits":
                    for _ in value:
                        for keyy, valuee in _.items():
                            if keyy =="_source":
                                if valuee["Country"]== User_Value:
                                    print("Total Confirmed Cases : " +str(valuee["TotalConfirmed"]))
                                    break;

                                else:
                                    pass
                        


