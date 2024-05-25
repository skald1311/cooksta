from django.shortcuts import render
from .models import post_collection
from django.http import JsonResponse
from datetime import datetime
from bson import ObjectId
from django.views.decorators.csrf import csrf_exempt
import json

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

    post_collection.insert_one(new_post)
    return JsonResponse({"message": "New post is created.", "status": 200}, status=200)

def view_post(request, postID):
    """ 
    Purpose: Show post info given postID
    """

    # Convert string post ID into ObjectId class for mongodb search
    o = ObjectId(postID)
    # Search with ObjectId of post
    result = post_collection.find({"_id": o}).next()
    out = f'ID: {result["_id"]}, author: {result["author"]}, upload date: {result["upload_date"]}, like count: {result["like_count"]}'
    return JsonResponse({"message": out})

def like_post(request, postID):
    """
    Purpose: Like a post
    """
    # Convert string post ID into ObjectId class for mongodb search
    o = ObjectId(postID)
    # Search and increment like count by 1
    post_collection.update_one({"_id": o}, {"$inc": {"like_count": 1}})
    return JsonResponse({"message": f'Post {postID} is liked.'})