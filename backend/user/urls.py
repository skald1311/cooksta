from django.urls import path
from . import views

urlpatterns = [
    path('register/', views.register),
    path('login/', views.login),
    path('<username>/ppf', views.get_profile_pic),
    path('<username>/description', views.get_profile_desc),
    path('<username>/rank', views.get_profile_rank),
    path('<username>/like_count', views.get_profile_like_count),
    path('<username>/getProfilePosts', views.get_profile_posts),
    path('<username>/addPost', views.add_post_to_account)
]