# Team MOZArella -- Mohtasim Howlader and Zane Wang
# SoftDev2 pd8
# K#07 -- Import/Export Bank
# 2019-03-05

from pymongo import MongoClient
SERVER_ADDR='104.248.53.196'
client = MongoClient(SERVER_ADDR, 27017)

db = client.MOZArella
collection = db.movies

'''
The dataset that we used was the wikipedia collection of movies. It is called 
American movies scraped from Wikipedia, and consists of a json array of 
dictionaries for each movie. Each movie has the elements title, year, cast and 
genre. We imported the json file by first saving it as a .json file, then 
moving it to our hw workshop repo. After that, we ssh into the droplet,
and cloned the github hw workshop repo. We pulled the json file from the repo
and then deleted the repo. The json file was then used to import via the command
mongoimport --db MOZArella --collection movies --drop --file ./foistmongo/movies.json
The hyperlink to the raw data is here:
https://raw.githubusercontent.com/prust/wikipedia-movie-data/master/movies.json
'''
def find_year(num):
    movies = []
    for doc in collection.find({"year" : num}):
        ret.append(doc)
    return movies

def find_genre(genre):
    movies = []
    for doc in collection.find({"genres" : "genres"["genres".find(genre)]}):
        ret.append(doc)
    return movie

def find_movie(title, year):
    movies = []
    for doc in collection.find({"$and": [{"title" : title}, {"year" : year}]}):
        ret.append(doc)
    return movies

def find_cast(person):
    movies = []
    for doc in collection.find({"cast" : "cast"["cast".find(person)]}):
        ret.append(doc)
    return movies

print(find_year(1900))
print(find_movie("After Dark in Central Park", 1900))
print(find_cast("Dwayne Johnson"))
print(find_genre("action"))
