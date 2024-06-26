from django.shortcuts import render
from .models import user_collection
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
# from django.contrib.sessions.models import Session
import json
# from helper import image_to_base64

DEFAULT_PIC_BASE64 = "/9j/4AAQSkZJRgABAQAASABIAAD/4QD8RXhpZgAATU0AKgAAAAgABwESAAMAAAABAAEAAAEaAAUAAAABAAAAYgEbAAUAAAABAAAAagEoAAMAAAABAAIAAAExAAIAAAAkAAAAcgEyAAIAAAAUAAAAlodpAAQAAAABAAAAqgAAAAAAAABIAAAAAQAAAEgAAAABQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkAMjAxODoxMToyMCAxNjo0NDoyMwAABJAEAAIAAAAUAAAA4KABAAMAAAABAAEAAKACAAQAAAABAAAAZKADAAQAAAABAAAAZAAAAAAyMDE4OjExOjE5IDEwOjIxOjM3AP/hEExodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDYuMC4wIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiBkYzpmb3JtYXQ9ImltYWdlL2pwZWciIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDphMjVhYWY1MC1jNzVjLTQ0YzAtYmIwMC0xNzAyYWIzYTIxMjIiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDpmOWQ4N2IzNS0yZDIwLTExN2MtYjdlZC1iNmYzMjNjODdhMzUiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzhmOTg1YmMtOTk4NS00M2M1LWE5MmYtNTQ4ZGIyOGVmYjMzIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE1IChNYWNpbnRvc2gpIiB4bXA6TW9kaWZ5RGF0ZT0iMjAxOC0xMS0yMFQxNjo0NDoyMy0wODowMCIgeG1wOkNyZWF0ZURhdGU9IjIwMTgtMTEtMTlUMTA6MjE6MzctMDg6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMTgtMTEtMjBUMTY6NDQ6MjMtMDg6MDAiIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHN0RXZ0OndoZW49IjIwMTgtMTEtMTlUMTA6MjE6MzctMDg6MDAiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6YTI1YWFmNTAtYzc1Yy00NGMwLWJiMDAtMTcwMmFiM2EyMTIyIiBzdEV2dDphY3Rpb249ImNyZWF0ZWQiLz4gPHJkZjpsaSBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNSAoTWFjaW50b3NoKSIgc3RFdnQ6Y2hhbmdlZD0iLyIgc3RFdnQ6d2hlbj0iMjAxOC0xMS0yMFQxNjo0NDoyMy0wODowMCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpiNTBjMmI5ZC0yMGNlLTQwN2QtOTE3MS1jNTk3OWQ1NjJiNTAiIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNvbnZlcnRlZCIgc3RFdnQ6cGFyYW1ldGVycz0iZnJvbSBpbWFnZS9wbmcgdG8gaW1hZ2UvanBlZyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iZGVyaXZlZCIgc3RFdnQ6cGFyYW1ldGVycz0iY29udmVydGVkIGZyb20gaW1hZ2UvcG5nIHRvIGltYWdlL2pwZWciLz4gPHJkZjpsaSBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNSAoTWFjaW50b3NoKSIgc3RFdnQ6Y2hhbmdlZD0iLyIgc3RFdnQ6d2hlbj0iMjAxOC0xMS0yMFQxNjo0NDoyMy0wODowMCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo3OGY5ODViYy05OTg1LTQzYzUtYTkyZi01NDhkYjI4ZWZiMzMiIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjpvcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6YTI1YWFmNTAtYzc1Yy00NGMwLWJiMDAtMTcwMmFiM2EyMTIyIiBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmI1MGMyYjlkLTIwY2UtNDA3ZC05MTcxLWM1OTc5ZDU2MmI1MCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDphMjVhYWY1MC1jNzVjLTQ0YzAtYmIwMC0xNzAyYWIzYTIxMjIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD94cGFja2V0IGVuZD0idyI/PgD/7QBkUGhvdG9zaG9wIDMuMAA4QklNBAQAAAAAACwcAVoAAxslRxwCAAACAAIcAj4ACDIw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"
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
        "profile_pic": DEFAULT_PIC_BASE64,
        "description": "this is a description",
        "follower_count": 0,
        "liked_accounts": [],
        "posts": [],
        "rank": "bronze"
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

@csrf_exempt
def get_profile_pic(request, username):
    """
    Purpose: Return profile pic base64 of given username
    """
    result = user_collection.find({"username": username}).next()
    return JsonResponse(result['profile_pic'], safe=False)

@csrf_exempt
def get_profile_desc(request, username):
    """
    Purpose: Return profile pic base64 of given username
    """
    result = user_collection.find({"username": username}).next()
    return JsonResponse(result['description'], safe=False)

@csrf_exempt
def get_profile_rank(request, username):
    """
    Purpose: Return rank of given username
    """
    result = user_collection.find({"username": username}).next()
    return JsonResponse(result['rank'], safe=False)

@csrf_exempt
def get_profile_like_count(request, username):
    """
    Purpose: Return like count of given username
    """
    result = user_collection.find({"username": username}).next()
    return JsonResponse(result['follower_count'], safe=False)

@csrf_exempt
def get_profile_posts(request, username):
    """
    Purpose: Return profile post IDs of given username
    """
    result = user_collection.find({"username": username}).next()
    return JsonResponse({"postArray" : result['posts']}, safe=False)

@csrf_exempt
def add_post_to_account(request, username):
    """
    Purpose: After posting a post, add the postID to the account's post array
    """
    data = json.loads(request.body.decode('utf-8'))
    new_post_id = data.get('created_postID') 
    update_result = user_collection.update_one({"username": username}, {"$push": {
        "posts": new_post_id
    }})
    message = ""
    if update_result.modified_count > 0:
        message = "Document updated successfully"
    else:
        message = "No document was updated"
    return JsonResponse({"message": message, "status": 200})

@csrf_exempt
def increment_follower(request, username):
    """
    Purpose: Called after an user like one of <username>'s post to increment the account's like count
    """
    user_collection.update_one({"username": username}, {"$inc": {"follower_count": 1}})
    return JsonResponse({"message": f"Follower count for {username} has been increased."}, status=200)

@csrf_exempt
def decrement_follower(request, username):
    """
    Purpose: Called after an user like one of <username>'s post to increment the account's like count
    """
    user_collection.update_one({"username": username}, {"$inc": {"follower_count": -1}})
    return JsonResponse({"message": f"Follower count for {username} has been increased."}, status=200)

@csrf_exempt
def change_password(request, username):
    """
    Purpose: Change the password of <username> to new password
    """
    data = json.loads(request.body.decode('utf-8'))
    new_password = data.get("newPassword")
    user_collection.update_one({"username": username}, {"$set": {"password": new_password}})
    return JsonResponse({"message": "Successfully updated password", "status": 200}, status=200)

@csrf_exempt
def get_password(request, username):
    """
    Purpose: Get password of <username>
    """
    result = user_collection.find({"username": username}).next()
    return JsonResponse({"password" : result['password']}, safe=False)

@csrf_exempt
def change_pfp(request, username):
    """
    Purpose: Change profile picture of <username>
    """
    data = json.loads(request.body.decode('utf-8'))
    new_pfp = data.get("newPic")
    user_collection.update_one({"username": username}, {"$set": {"profile_pic": new_pfp}})
    return JsonResponse({"message": "Successfully updated profile picture", "status": 200}, status=200)

@csrf_exempt
def change_desc(request, username):
    """
    Purpose: Change description of <username>
    """
    data = json.loads(request.body.decode('utf-8'))
    new_desc = data.get("newDescription")
    user_collection.update_one({"username": username}, {"$set": {"description": new_desc}})
    return JsonResponse({"message": "Successfully updated profile description", "status": 200}, status=200)