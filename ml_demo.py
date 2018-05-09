import pymongo
import pprint
import numpy as np
from pymongo import MongoClient

client=MongoClient()
client = MongoClient('localhost', 27017)
db = client['btp']
collection = db['collegedemos']
students=db.studentdemos
a=students.count()
#students.delete_many({"diaplay": "1"})
person=students.find_one({"inserteddoc": "1"})

squant=person["quant"]
sundergrad=person["undergrad"]
sverb=person["verbal"]
sawa=person["awa"]
scol=person["college"]
scpi=person["CPI"]
stofel=person["TOFEL"]
sbranch=person["spl"]
smaxcpi=person["maxcpi"]



#pprint.pprint(students.update_one({"inserteddoc": "1"}, {"$set" : {"inserteddoc": "0"}}))
#students.delete_one({"inserteddoc": "1"})
colleges=db.collegedemos

#colleges.update_one({"Branch":"Computer Science","undergrad":"IIT BHU","constant":"-6.6986","TOFEL":"105.4099","quant":"-191.8623","verbal":"253.4097","awa":"-204.1384","college":"Texas","CPI":" 2497.0398","maxcpi":"-127.9907"})

#for student in students.find():
#	pprint.pprint(student)

#colleges.delete_one({"_id": "5ae8aef0ec098d386627467b"})

clg=colleges.find_one({"Branch":sbranch,"college":scol,"undergrad":sundergrad})
cconst=clg["constant"]
ctofel=clg["TOFEL"]
cquant=clg["quant"]
cverb=clg["verbal"]
cawa=clg["awa"]
ccpi=clg["CPI"]
cmaxcpi=clg["maxcpi"]

tofel=(float(stofel)*float(ctofel))
quant=(float(cquant)*float(squant))
#print(quant)
verb=(float(cverb)*float(sverb))
awa=(float(cawa)*float(sawa))
cpi=(float(ccpi)*float(scpi))
maxcpi=(float(cmaxcpi)*float(smaxcpi))



cfinal=float(cconst)+float(tofel)+float(quant)+float(verb)+float(awa)+float(cpi)+float(maxcpi)
cfin=np.sign(cfinal)

if(cfin==1):
	students.update_one({"result": "1","inserteddoc": "1"}, {"$set" : {"result": "can be selected"}})
else:
	students.update_one({"result": "1","inserteddoc": "1"}, {"$set" : {"result": "cannot be selected"}})


students.update_one({"inserteddoc": "1"}, {"$set" : {"inserteddoc": "0"}})




