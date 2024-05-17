from django.shortcuts import render
from .models import post_collection
from django.http import HttpResponse
from datetime import datetime
from bson import ObjectId

# Create your views here.

def create_post(request):
    """
    Purpose: Add a new post to the database
    """
    new_post = {
        "image": "some file/path?",
        "author": "some username",
        "upload_date": datetime.today().strftime("%Y %m %d"),
        "like_count": 0,
        "caption": "taken from form",
        "location": "some restaurant"
    }
    post_collection.insert_one(new_post)
    return HttpResponse("New post is created.")

def view_post(request, postID):
    """ 
    Purpose: Show post info given postID
    """

    # Convert string post ID into ObjectId class for mongodb search
    o = ObjectId(postID)
    # Search with ObjectId of post
    result = post_collection.find({"_id": o}).next()
    out = f'ID: {result["_id"]}, author: {result["author"]}, upload date: {result["upload_date"]}, like count: {result["like_count"]}'
    return HttpResponse(out)

def like_post(request, postID):
    """
    Purpose: Like a post
    """
    # Convert string post ID into ObjectId class for mongodb search
    o = ObjectId(postID)
    # Search and increment like count by 1
    post_collection.update_one({"_id": o}, {"$inc": {"like_count": 1}})
    return HttpResponse(f'Post {postID} is liked.')