from django.urls import path
from . import views

urlpatterns = [
    path('', views.create_post),
    path('<postID>/info', views.get_post_info),
    path('<postID>/like', views.like_post),
    path('<postID>/unlike', views.unlike_post),
    path('get_posts', views.get_posts)
]