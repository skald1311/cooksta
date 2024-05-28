from django.urls import path
from . import views

urlpatterns = [
    path('', views.create_post),
    path('<postID>/image', views.get_post_image),
    path('<postID>/like', views.like_post)
]