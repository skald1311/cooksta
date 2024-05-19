from django.shortcuts import render
from .models import user_collection
from django.http import HttpResponse
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
# from django.contrib.sessions.models import Session
import json

# Create your views here.

@csrf_exempt
def register(request):
    """
    Purpose: Register a new user using info from form
    """
    data = json.loads(request.body.decode('utf-8'))
    username = data.get('username')
    password = data.get('password')
    # Check if the username already exists
    count = user_collection.count_documents({"username": username})
    if (count != 0):
        return JsonResponse({'message': 'Sign up failed: Username has already been taken', 'status': 400}, status=400)
    # Create new user object
    new_user = {
        "username": username,
        "password": password,
        "profile_pic": "default pic",
        "follower_count": 0,
        "liked_accounts": [],
        "posts": []
    }
    user_collection.insert_one(new_user)
    return JsonResponse({'message': 'Sign up successful', 'status': 200}, status=200)

@csrf_exempt
def login(request):
    """
    Purpose: Attempt to login user using info inputted
    """
    data = json.loads(request.body.decode('utf-8'))
    username = data.get('username')
    password = data.get('password')
    result = user_collection.count_documents({"username": username, "password": password })
    if (result == 0):
        return JsonResponse({'message': 'Invalid username or password', 'status': 400}, status=400)
    else:
        # request.session['user_id'] = username
        return JsonResponse({'message': 'Login successful', 'status': 200}, status=200)

def view_profile(request, username):
    """
    Purpose: Return info of given username
    """
    result = user_collection.find({"username": username}).next()
    out = f'username: {result["username"]}; follower_count: {result["follower_count"]}'
    return HttpResponse(out)
