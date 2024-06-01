from django.shortcuts import render
from .models import post_collection
from django.http import JsonResponse
from datetime import datetime
from bson import ObjectId
from django.views.decorators.csrf import csrf_exempt
import json
import random

# Create your views here.

@csrf_exempt
def create_post(request):
    """
    Purpose: Add a new post to the database
    """
    data = json.loads(request.body.decode('utf-8'))
    username = data.get('user')
    image_base64 = data.get('imageBase64')
    caption = data.get('caption')
    location = data.get('location')
    item_name = data.get('itemName')

    new_post = {
        "image": image_base64,
        "author": username,
        "upload_date": datetime.today().strftime("%Y %m %d"),
        "like_count": 0,
        "caption": caption,
        "location": location,
        "item_name": item_name
    }

    insert_result = post_collection.insert_one(new_post)
    # Grab the id of new post to add to the user's post array
    added_post_id = str(insert_result.inserted_id)

    return JsonResponse({"message": "New post is created.", "status": 200, "postID": added_post_id}, status=200)

@csrf_exempt
def get_post_info(request, postID):
    """ 
    Purpose: Return post image given postID
    """
    # Convert string post ID into ObjectId class for mongodb search
    o = ObjectId(postID)
    # Search with ObjectId of post
    result = post_collection.find({"_id": o}).next()
    return JsonResponse({"image": result["image"], "author": result["author"], "upload_date": result["upload_date"], "like_count": result["like_count"], "caption": result["caption"], "location": result["location"], "item_name": result["item_name"]}, status=200)
    
@csrf_exempt
def like_post(request, postID):
    """
    Purpose: Like a post
    """
    # Convert string post ID into ObjectId class for mongodb search
    o = ObjectId(postID)
    # Search and increment like count by 1
    post_collection.update_one({"_id": o}, {"$inc": {"like_count": 1}})
    return JsonResponse({"message": f'Post {postID} is liked.'})

@csrf_exempt
def unlike_post(request, postID):
    """
    Purpose: Unlike a post
    """
    # Convert string post ID into ObjectId class for mongodb search
    o = ObjectId(postID)
    # Search and increment like count by 1
    post_collection.update_one({"_id": o}, {"$inc": {"like_count": -1}})
    return JsonResponse({"message": f'Post {postID} is unliked.'})

@csrf_exempt
def get_posts(request):
    """
    Purpose: Return all posts shuffled
    """
    cursor = post_collection.find({}, {"_id"})
    result = []
    for document in cursor:
        result.append(str(document["_id"]))
    random.shuffle(result)
    return JsonResponse(result, status=200, safe=False)
