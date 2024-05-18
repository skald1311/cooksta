from django.shortcuts import render
from .models import user_collection
from django.http import HttpResponse

# Create your views here.

def register(request):
    """
    Purpose: Register a new user using info from form
    """
    new_user = {
        "username": "john123",
        "password": "12345678",
        "follower_count": 0,
        "liked_accounts": [],
        "posts": []
    }
    user_collection.insert_one(new_user)
    return HttpResponse("New user created")

def login(request):
    """
    Purpose: Attempt to login user using info inputted
    """
    input_username = "john123"
    input_password = "12345678"
    result = user_collection.find({"username": input_username, "password": input_password }).next()
    return HttpResponse(result["username"])

def view_profile(request, username):
    """
    Purpose: Return info of given username
    """
    result = user_collection.find({"username": username}).next()
    out = f'username: {result["username"]}; follower_count: {result["follower_count"]}'
    return HttpResponse(out)
