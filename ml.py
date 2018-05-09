import pymongo
import pprint
import numpy as np
from pymongo import MongoClient

client=MongoClient()
client = MongoClient('localhost', 27017)
db = client['btp']
collection = db['colleges']
students=db.students
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
sres=person["research"]
sintern=person["internship"]
spro=person["projects"]


#pprint.pprint(students.update_one({"inserteddoc": "1"}, {"$set" : {"inserteddoc": "0"}}))
#students.delete_one({"inserteddoc": "1"})
colleges=db.colleges

#colleges.insert_one({"Branch":"Computer Science","undergrad":"IIIT Gwalior ","constant":"-50.781","TOFEL":"-290.299","quant":"-1103.547","verbal":"-365.009","awa":"-692.329","college":"Caltech","CPI":" 3127.243","project":"1088.287","internship":"3227.243","research":"3227.243"})

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
cpro=clg["project"]
cres=clg["research"]
cintern=clg["internship"]

tofel=(float(stofel)*float(ctofel))
quant=(float(cquant)*float(squant))
#print(quant)
verb=(float(cverb)*float(sverb))
awa=(float(cawa)*float(sawa))
cpi=(float(ccpi)*float(scpi))
pro=(float(cpro)*float(spro))
res=(float(cres)*float(sres))
inter=(float(cintern)*float(sintern))

cfinal=float(cconst)+float(tofel)+float(quant)+float(verb)+float(awa)+float(cpi)+float(pro)+float(res)+float(inter)
cfin=np.sign(cfinal)

if(cfin==1):
	students.update_one({"result": "1","inserteddoc": "1"}, {"$set" : {"result": "can be selected"}})
else:
	students.update_one({"result": "1","inserteddoc": "1"}, {"$set" : {"result": "cannot be selected"}})


students.update_one({"inserteddoc": "1"}, {"$set" : {"inserteddoc": "0"}})




